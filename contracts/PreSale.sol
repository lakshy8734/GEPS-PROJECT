// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

interface AggregatorV3Interface {
    function decimals() external view returns (uint8);

    function description() external view returns (string memory);

    function version() external view returns (uint256);

    function getRoundData(
        uint80 _roundId
    )
        external
        view
        returns (
            uint80 roundId,
            int256 answer,
            uint256 startedAt,
            uint256 updatedAt,
            uint80 answeredInRound
        );

    function latestRoundData()
        external
        view
        returns (
            uint80 roundId,
            int256 answer,
            uint256 startedAt,
            uint256 updatedAt,
            uint80 answeredInRound
        );
}

contract GEPSPresale is Ownable {
    using SafeMath for uint256;

    IERC20 public GEPS;
    IERC20 public busd;
    address public treasury;
    address payable presaleWallet;
    uint256 public constant MAX_STAGE = 9;
    uint256 public constant STAGE_DURATION = 120;
    uint256 public constant CLAIM_DELAY = 300;

    struct Stage {
        uint256 price; // price in USD cents
        uint256 GEPSsAvailable;
        uint startTime;
        uint endTime;
    }

    Stage[MAX_STAGE] public stages;
    uint256 public currentStage;
    uint256 public presaleStartTime;
    uint256 public presaleEndTime;
    mapping(address => uint256) public purchasedGEPSs;
    mapping(address => bool) public hasClaimed;
    mapping(string => address) public tokenOracles;

    event GEPSsPurchased(
        address indexed buyer,
        uint256 amount,
        string currency
    );
    event GEPSsClaimed(address indexed user, uint256 amount);
    event PresaleStarted();
    event PresaleEnded();

    constructor(
        address _busd,
        address _treasury,
        address payable _presaleWallet
    ) Ownable(msg.sender) {
        busd = IERC20(_busd);
        treasury = _treasury;
        presaleWallet = _presaleWallet;
        initializeStages();
    }

    modifier onlyAfterPresale() {
        require(block.timestamp > presaleEndTime, "Presale is still active");
        _;
    }

    function setGEPSToken(address _geps) external onlyOwner {
        GEPS = IERC20(_geps);
    }

    function initializeStages() internal {
        stages[0] = Stage({
            price: 1,
            GEPSsAvailable: 2222224 * 10 ** 18,
            startTime: 0,
            endTime: 0
        });
        stages[1] = Stage({
            price: 5,
            GEPSsAvailable: 2222222 * 10 ** 18,
            startTime: 0,
            endTime: 0
        });
        stages[2] = Stage({
            price: 10,
            GEPSsAvailable: 2222222 * 10 ** 18,
            startTime: 0,
            endTime: 0
        });
        stages[3] = Stage({
            price: 15,
            GEPSsAvailable: 2222222 * 10 ** 18,
            startTime: 0,
            endTime: 0
        });
        stages[4] = Stage({
            price: 20,
            GEPSsAvailable: 2222222 * 10 ** 18,
            startTime: 0,
            endTime: 0
        });
        stages[5] = Stage({
            price: 25,
            GEPSsAvailable: 2222222 * 10 ** 18,
            startTime: 0,
            endTime: 0
        });
        stages[6] = Stage({
            price: 30,
            GEPSsAvailable: 2222222 * 10 ** 18,
            startTime: 0,
            endTime: 0
        });
        stages[7] = Stage({
            price: 35,
            GEPSsAvailable: 2222222 * 10 ** 18,
            startTime: 0,
            endTime: 0
        });
        stages[8] = Stage({
            price: 40,
            GEPSsAvailable: 2222222 * 10 ** 18,
            startTime: 0,
            endTime: 0
        });
    }

    function startPresale() external onlyOwner {
        require(presaleStartTime == 0, "Presale already started");
        presaleStartTime = block.timestamp;
        currentStage = 0;
        stages[currentStage].startTime = block.timestamp;
        stages[currentStage].endTime = block.timestamp + STAGE_DURATION;
        emit PresaleStarted();
    }

    function buyGEPS(uint256 amount, string memory currency) external payable {
        require(presaleStartTime != 0, "Presale Not started");
        require(amount > 0, "Amount must be greater than zero");
        if (stages[currentStage].endTime <= block.timestamp) {
            if (currentStage == 8) {
                stages[currentStage].endTime = block.timestamp;
                emit PresaleEnded();
            } else {
                advanceStage();
            }
        }
        uint256 cost = uint(calculateCost(amount, currency));
        if (keccak256(bytes(currency)) == keccak256(bytes("BNB"))) {
            require(msg.value >= cost, "Insufficient BNB sent");
            presaleWallet.transfer(cost);
        } else if (keccak256(bytes(currency)) == keccak256(bytes("BUSD"))) {
            require(
                busd.transferFrom(msg.sender, presaleWallet, cost),
                "BUSD transfer failed"
            );
        } else {
            revert("Unsupported currency");
        }

        allocateGEPSs(msg.sender, amount);
        emit GEPSsPurchased(msg.sender, amount, currency);

        if (stages[currentStage].GEPSsAvailable == 0) {
            if (currentStage == 8) {
                stages[currentStage].endTime = block.timestamp;
                emit PresaleEnded();
            } else {
                advanceStage();
            }
        }
    }

    function allocateGEPSs(address buyer, uint256 amount) internal {
        require(
            stages[currentStage].GEPSsAvailable >= amount,
            "Not enough GEPSs available"
        );
        stages[currentStage].GEPSsAvailable = stages[currentStage]
            .GEPSsAvailable
            .sub(amount);
        purchasedGEPSs[buyer] = purchasedGEPSs[buyer].add(amount);
    }

    function initialiseTokens(
        string[] calldata _tokenName,
        address[] calldata _oracleAddress
    ) external onlyOwner {
        require(_tokenName.length == _oracleAddress.length, "PFCR:01");
        for (uint256 i = 0; i < _tokenName.length; i++) {
            tokenOracles[_tokenName[i]] = _oracleAddress[i];
        }
    }

    function calculateCost(
        uint256 amount,
        string memory _paymentToken
    ) public view returns (int256) {
        uint256 totalPriceinUSD = amount.mul(stages[currentStage].price) / 100;
        address _tokenOracle = tokenOracles[_paymentToken];
        AggregatorV3Interface dataFeed = AggregatorV3Interface(_tokenOracle);
        (, int answer, , , ) = dataFeed.latestRoundData();
        int pricePaymentToken = int(totalPriceinUSD * 10 ** 18) /
            (answer * (10 ** 10));
        return pricePaymentToken;
    }

    function advanceStage() internal {
        if (currentStage < MAX_STAGE - 1) {
            currentStage++;
            stages[currentStage].startTime = block.timestamp;
            stages[currentStage].endTime = block.timestamp + STAGE_DURATION;
        }
    }

    function claimGEPSs() external onlyAfterPresale {
        require(
            block.timestamp > stages[8].endTime + CLAIM_DELAY,
            "Claim period not started"
        );
        require(!hasClaimed[msg.sender], "GEPSs already claimed");
        uint256 amount = purchasedGEPSs[msg.sender];
        require(amount > 0, "No GEPSs to claim");

        hasClaimed[msg.sender] = true;
        GEPS.transfer(msg.sender, amount);
        emit GEPSsClaimed(msg.sender, amount);
    }

    function transferUnsoldGEPSsToTreasury()
        internal
        onlyOwner
        onlyAfterPresale
    {
        uint256 unsoldGEPSs = getUnsoldGEPSs();
        if (unsoldGEPSs > 0) {
            GEPS.transfer(treasury, unsoldGEPSs);
        }
    }

    function getUnsoldGEPSs() public view returns (uint256) {
        uint256 unsoldGEPSs = 0;
        for (uint256 i = 0; i < MAX_STAGE; i++) {
            unsoldGEPSs = unsoldGEPSs.add(stages[i].GEPSsAvailable);
        }
        return unsoldGEPSs;
    }

    function updateTreasuryAddress(address newAddress) external onlyOwner {
        require(newAddress != address(0), "Invalid address");
        treasury = newAddress;
    }

    function updatePresaleWallet(
        address payable _presaleWallet
    ) external onlyOwner {
        require(_presaleWallet != address(0), "Invalid address");
        presaleWallet = _presaleWallet;
    }

    function getCurrentStage() external view returns (uint256) {
        return currentStage;
    }
}
