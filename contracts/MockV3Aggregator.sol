// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MockV3Aggregator {
    int256 public latestAnswer;
    uint8 public decimals;
    string public description;
    uint256 public version;
    uint80 public latestRound;
    uint256 public latestUpdatedAt;

    mapping(uint80 => int256) public roundAnswers;
    mapping(uint80 => uint256) public roundUpdatedAt;

    constructor(uint8 _decimals, int256 _initialAnswer) {
        decimals = _decimals;
        latestAnswer = _initialAnswer;
        description = "MockV3Aggregator";
        version = 1;
        latestRound = 1;
        latestUpdatedAt = block.timestamp;
        roundAnswers[latestRound] = latestAnswer;
        roundUpdatedAt[latestRound] = latestUpdatedAt;
    }

    function updateAnswer(int256 _answer) public {
        latestRound++;
        latestAnswer = _answer;
        latestUpdatedAt = block.timestamp;
        roundAnswers[latestRound] = latestAnswer;
        roundUpdatedAt[latestRound] = latestUpdatedAt;
    }

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
        )
    {
        require(_roundId <= latestRound && _roundId > 0, "Round ID is invalid");
        roundId = _roundId;
        answer = roundAnswers[_roundId];
        updatedAt = roundUpdatedAt[_roundId];
        answeredInRound = _roundId;
        startedAt = 0; // Not used in this mock
    }

    function latestRoundData()
        external
        view
        returns (
            uint80 roundId,
            int256 answer,
            uint256 startedAt,
            uint256 updatedAt,
            uint80 answeredInRound
        )
    {
        roundId = latestRound;
        answer = latestAnswer;
        updatedAt = latestUpdatedAt;
        answeredInRound = latestRound;
        startedAt = 0; // Not used in this mock
    }
}
