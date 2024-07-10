const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GEPSToken", function () {
  let GEPSToken,
    gepsToken,
    owner,
    addr1,
    addr2,
    presaleAddress,
    rndAddress,
    marketingAddress,
    treasuryAddress,
    teamAddress,
    partnershipAddress,
    liquidityAddress,
    charityAddress,
    reserveAddress;

  beforeEach(async function () {
    [
      owner,
      addr1,
      addr2,
      presaleAddress,
      rndAddress,
      marketingAddress,
      treasuryAddress,
      teamAddress,
      partnershipAddress,
      liquidityAddress,
      charityAddress,
      reserveAddress,
    ] = await ethers.getSigners();

    GEPSToken = await ethers.getContractFactory("GEPSToken");
    gepsToken = await GEPSToken.deploy(
      presaleAddress.address,
      rndAddress.address,
      marketingAddress.address,
      treasuryAddress.address,
      teamAddress.address,
      partnershipAddress.address,
      liquidityAddress.address,
      charityAddress.address,
      reserveAddress.address
    );
  });

  function parseEther(value) {
    return ethers.parseUnits(value, "ether");
  }

  describe("Initialization", function () {
    it("Should have correct initial addresses", async function () {
      expect(await gepsToken.presaleAddress()).to.equal(presaleAddress.address);
      expect(await gepsToken.rndAddress()).to.equal(rndAddress.address);
      expect(await gepsToken.marketingAddress()).to.equal(
        marketingAddress.address
      );
      expect(await gepsToken.treasuryAddress()).to.equal(
        treasuryAddress.address
      );
      expect(await gepsToken.teamAddress()).to.equal(teamAddress.address);
      expect(await gepsToken.partnershipAddress()).to.equal(
        partnershipAddress.address
      );
      expect(await gepsToken.liquidityAddress()).to.equal(
        liquidityAddress.address
      );
      expect(await gepsToken.charityAddress()).to.equal(charityAddress.address);
      expect(await gepsToken.reserveAddress()).to.equal(reserveAddress.address);
    });
  });

  describe("Minting", function () {
    it("Should mint correct amounts to addresses", async function () {
      await gepsToken.connect(owner).mint();

      expect(await gepsToken.balanceOf(presaleAddress.address)).to.equal(
        parseEther("20000000")
      );
      expect(await gepsToken.balanceOf(rndAddress.address)).to.equal(
        parseEther("2500000")
      );
      expect(await gepsToken.balanceOf(marketingAddress.address)).to.equal(
        parseEther("2500000")
      );
      expect(await gepsToken.balanceOf(treasuryAddress.address)).to.equal(
        parseEther("5000000")
      );
      expect(await gepsToken.balanceOf(teamAddress.address)).to.equal(
        parseEther("5000000")
      );
      expect(await gepsToken.balanceOf(partnershipAddress.address)).to.equal(
        parseEther("2500000")
      );
      expect(await gepsToken.balanceOf(liquidityAddress.address)).to.equal(
        parseEther("5000000")
      );
      expect(await gepsToken.balanceOf(charityAddress.address)).to.equal(
        parseEther("2500000")
      );
      expect(await gepsToken.balanceOf(reserveAddress.address)).to.equal(
        parseEther("5000000")
      );
    });

    it("Should revert if mint is called more than once", async function () {
      await gepsToken.connect(owner).mint(); // First minting
      await expect(gepsToken.connect(owner).mint()).to.be.revertedWith(
        "Tokens have already been minted"
      );
    });
  });

  describe("Transfers with Tax", function () {
    beforeEach(async function () {
      await gepsToken.connect(owner).mint();
    });

    it("Should transfer with tax correctly", async function () {
      const transferAmount = parseEther("100");
      const taxAmount = (transferAmount * BigInt(2)) / BigInt(100);
      const transferAmountAfterTax = transferAmount - taxAmount;

      await gepsToken
        .connect(presaleAddress)
        .transfer(addr1.address, transferAmount);

      expect(await gepsToken.balanceOf(addr1.address)).to.equal(
        transferAmountAfterTax
      );
      expect(await gepsToken.balanceOf(treasuryAddress.address)).to.equal(
        taxAmount / BigInt(2)
      );
      expect(await gepsToken.balanceOf(charityAddress.address)).to.equal(
        taxAmount / BigInt(2)
      );
    });

    it("Should emit Transfer events correctly", async function () {
      const transferAmount = parseEther("100");
      const taxAmount = (transferAmount * BigInt(2)) / BigInt(100);
      const transferAmountAfterTax = transferAmount - taxAmount;

      await expect(
        gepsToken
          .connect(presaleAddress)
          .transfer(addr1.address, transferAmount)
      )
        .to.emit(gepsToken, "Transfer")
        .withArgs(presaleAddress.address, addr1.address, transferAmountAfterTax)
        .and.to.emit(gepsToken, "Transfer")
        .withArgs(
          presaleAddress.address,
          treasuryAddress.address,
          taxAmount / BigInt(2)
        )
        .and.to.emit(gepsToken, "Transfer")
        .withArgs(
          presaleAddress.address,
          charityAddress.address,
          taxAmount / BigInt(2)
        );
    });
  });

  describe("ERC20 Standard Functions", function () {
    it("Should approve and transferFrom correctly", async function () {
      await gepsToken.connect(owner).mint();
      const approveAmount = parseEther("100");

      await gepsToken
        .connect(presaleAddress)
        .approve(addr1.address, approveAmount);
      expect(
        await gepsToken.allowance(presaleAddress.address, addr1.address)
      ).to.equal(approveAmount);

      const transferAmount = parseEther("50");
      await gepsToken
        .connect(addr1)
        .transferFrom(presaleAddress.address, addr2.address, transferAmount);

      expect(await gepsToken.balanceOf(addr2.address)).to.equal(transferAmount);
      expect(await gepsToken.balanceOf(presaleAddress.address)).to.equal(
        parseEther("20000000").sub(transferAmount)
      );
    });

    it("Should return total supply correctly", async function () {
      await gepsToken.connect(owner).mint();
      expect(await gepsToken.totalSupply()).to.equal(parseEther("50000000"));
    });

    it("Should return balance correctly", async function () {
      await gepsToken.connect(owner).mint();
      expect(await gepsToken.balanceOf(presaleAddress.address)).to.equal(
        parseEther("20000000")
      );
    });

    it("Should return allowance correctly", async function () {
      await gepsToken.connect(owner).mint();
      await gepsToken
        .connect(presaleAddress)
        .approve(addr1.address, parseEther("100"));
      expect(
        await gepsToken.allowance(presaleAddress.address, addr1.address)
      ).to.equal(parseEther("100"));
    });
  });
});
