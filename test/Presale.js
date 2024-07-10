const { expect } = require("chai");

describe("GEPSPresale", function () {
  let GEPS, geps, USDT, usdt, Presale, presale, owner, addr1, addr2, treasury;
  const STAGE_DURATION = 120;
  const CLAIM_DELAY = 300;

  beforeEach(async function () {
    [owner, addr1, addr2, treasury] = await ethers.getSigners();

    GEPS = await ethers.getContractFactory("ERC20Mock");
    geps = await GEPS.deploy(
      "GEPS Token",
      "GEPS",
      ethers.parseEther("20000000")
    );

    USDT = await ethers.getContractFactory("ERC20Mock");
    usdt = await USDT.deploy("Tether", "USDT", ethers.parseEther("1000000"));

    const Aggregator = await ethers.getContractFactory("MockV3Aggregator");
    this.mockAggregator = await Aggregator.deploy(
      8,
      ethers.parseUnits("0.99938", 8)
    );
    Presale = await ethers.getContractFactory("GEPSPresale");
    presale = await Presale.deploy(geps.target, usdt.target, treasury.address);

    await presale.initialiseTokens(["USDT"], [this.mockAggregator.target]);

    await geps.transfer(presale.target, ethers.parseEther("20000000"));
  });

  describe("Initialization", function () {
    it("Should initialize stages correctly", async function () {
      for (let i = 0; i < 9; i++) {
        const stage = await presale.stages(i);
        expect(stage.price).to.be.gt(0);
        expect(stage.GEPSsAvailable).to.be.gt(0);
      }
    });

    it("Should start presale", async function () {
      await expect(presale.connect(owner).startPresale()).to.emit(
        presale,
        "PresaleStarted"
      );
      const startTime = await presale.presaleStartTime();
      expect(startTime).to.be.gt(0);
      const currentStage = await presale.currentStage();
      expect(currentStage).to.equal(0);
    });

    it("Should revert if non-owner tries to start presale", async function () {
      await expect(presale.connect(addr1).startPresale()).to.be.reverted;
    });

    it("Should revert if presale already started", async function () {
      await presale.connect(owner).startPresale();
      await expect(presale.connect(owner).startPresale()).to.be.revertedWith(
        "Presale already started"
      );
    });
  });

  describe("Purchasing GEPS", function () {
    beforeEach(async function () {
      await presale.connect(owner).startPresale();
      await usdt
        .connect(owner)
        .transfer(addr1.address, ethers.parseEther("25236"));
      await usdt
        .connect(addr1)
        .approve(presale.target, ethers.parseEther("25236"));
    });

    it("Should allow purchasing with USDT", async function () {
      await expect(
        presale.connect(addr1).buyGEPS(ethers.parseEther("100"), "USDT")
      )
        .to.emit(presale, "GEPSsPurchased")
        .withArgs(addr1.address, ethers.parseEther("100"), "USDT");

      const purchasedGEPS = await presale.purchasedGEPSs(addr1.address);
      expect(purchasedGEPS).to.equal(ethers.parseEther("100"));
    });

    it("Should advance stage if current stage is over", async function () {
      await network.provider.send("evm_increaseTime", [STAGE_DURATION + 1]);
      await network.provider.send("evm_mine");

      await presale.connect(addr1).buyGEPS(ethers.parseEther("100"), "USDT");

      const currentStage = await presale.currentStage();
      expect(currentStage).to.equal(1);
    });

    it("Should advance stage if current stage token is over", async function () {
      const stage = await presale.stages(0);
      const tokenAmount = stage[1];
      await presale.connect(addr1).buyGEPS(tokenAmount.toString(), "USDT");

      const currentStage = await presale.currentStage();
      expect(currentStage).to.equal(1);
    });

    it("Should revert if token available are less", async function () {
      const stage = await presale.stages(0);
      const tokenAmount = stage[1] - BigInt(100);
      await presale.connect(addr1).buyGEPS(tokenAmount.toString(), "USDT");
      await expect(
        presale.connect(addr1).buyGEPS("1000", "USDT")
      ).to.be.revertedWith("Not enough GEPSs available");
    });

    it("Should revert if amount is 0", async function () {
      await expect(
        presale.connect(addr1).buyGEPS(ethers.parseEther("0"), "USDT")
      ).to.be.revertedWith("Amount must be greater than zero");
    });

    it("Should revert if currency is unspported", async function () {
      await expect(
        presale.connect(addr1).buyGEPS(ethers.parseEther("1"), "DAI")
      ).to.be.reverted;
    });

    it("Should end presale after the last stage", async function () {
      for (let i = 0; i < 9; i++) {
        await network.provider.send("evm_increaseTime", [STAGE_DURATION + 100]);
        presale.connect(addr1).buyGEPS(ethers.parseEther("1"), "USDT");
        const currentStage = await presale.currentStage();
        if (i == 8) {
          await expect(
            presale.connect(addr1).buyGEPS(ethers.parseEther("1"), "USDT")
          ).to.emit(presale, "PresaleEnded");
        }
      }
    });
  });

  describe("Claiming GEPS", function () {
    beforeEach(async function () {
      await presale.connect(owner).startPresale();
      await usdt
        .connect(owner)
        .transfer(addr1.address, ethers.parseEther("1000"));
      await usdt
        .connect(addr1)
        .approve(presale.target, ethers.parseEther("1000"));
      await presale.connect(addr1).buyGEPS(ethers.parseEther("100"), "USDT");
      await network.provider.send("evm_increaseTime", [
        STAGE_DURATION * 9 + CLAIM_DELAY + 1,
      ]);
      await network.provider.send("evm_mine");
    });

    it("Should allow claiming GEPS after presale ends", async function () {
      await expect(presale.connect(addr1).claimGEPSs())
        .to.emit(presale, "GEPSsClaimed")
        .withArgs(addr1.address, ethers.parseEther("100"));
      const hasClaimed = await presale.hasClaimed(addr1.address);
      expect(hasClaimed).to.be.true;
    });

    it("Should revert if user tries to claim twice", async function () {
      await presale.connect(addr1).claimGEPSs();
      await expect(presale.connect(addr1).claimGEPSs()).to.be.revertedWith(
        "GEPSs already claimed"
      );
    });

    it("Should revert if user tries to claim before claim period starts", async function () {
      for (let i = 0; i < 8; i++) {
        await presale.connect(addr1).buyGEPS(ethers.parseEther("100"), "USDT");
        await network.provider.send("evm_increaseTime", [STAGE_DURATION + 1]);
      }
      await expect(presale.connect(addr1).claimGEPSs()).to.be.revertedWith(
        "Claim period not started"
      );
    });
  });

  describe("Treasury Management", function () {
    beforeEach(async function () {
      await presale.connect(owner).startPresale();
      await usdt
        .connect(owner)
        .transfer(addr1.address, ethers.parseEther("1000"));
      await usdt
        .connect(addr1)
        .approve(presale.target, ethers.parseEther("1000"));
      for (let i = 0; i < 8; i++) {
        await presale.connect(addr1).buyGEPS(ethers.parseEther("100"), "USDT");
        await network.provider.send("evm_increaseTime", [STAGE_DURATION + 1]);
      }
      await network.provider.send("evm_mine");
    });

    it("Should transfer unsold GEPS to treasury after presale ends", async function () {
      await presale.connect(addr1).buyGEPS(ethers.parseEther("100"), "USDT");
      await network.provider.send("evm_increaseTime", [STAGE_DURATION + 1]);

      await presale.transferUnsoldGEPSsToTreasury();
      const unsoldGEPSs = await presale.getUnsoldGEPSs();
      const treasuryBalance = await geps.balanceOf(treasury.address);

      expect(unsoldGEPSs).to.equal(0);
      expect(treasuryBalance).to.be.gt(0);
    });

    it("Should revert if presale is not ended ", async function () {
      await expect(presale.transferUnsoldGEPSsToTreasury()).to.be.revertedWith(
        "Presale Not Ended"
      );
    });

    it("Should revert if non-owner tries to transfer ", async function () {
      await expect(presale.connect(addr1).transferUnsoldGEPSsToTreasury()).to.be
        .reverted;
    });

    it("Should update treasury address", async function () {
      await presale.connect(owner).updateTreasuryAddress(addr2.address);
      const newTreasury = await presale.treasury();
      expect(newTreasury).to.equal(addr2.address);
    });

    it("Should revert if non-owner tries to update treasury address", async function () {
      await expect(presale.connect(addr1).updateTreasuryAddress(addr2.address))
        .to.be.reverted;
    });

    it("Should revert if treasury address is 0", async function () {
      await expect(
        presale
          .connect(owner)
          .updateTreasuryAddress("0x0000000000000000000000000000000000000000")
      ).to.be.revertedWith("Invalid address");
    });
  });
});
