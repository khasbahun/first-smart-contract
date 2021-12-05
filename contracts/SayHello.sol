//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SayHello {
    uint256 totalHello;
    constructor() {
        console.log("Hello, I am a smart contract");
    }
    function sayHello() public {
        totalHello += 1;
        console.log("%s said Hello!", msg.sender);
    }

    function getTotalHellos() public view returns (uint256) {
        console.log("We have %d total Hellos!", totalHello);
        return totalHello;
    }
}
