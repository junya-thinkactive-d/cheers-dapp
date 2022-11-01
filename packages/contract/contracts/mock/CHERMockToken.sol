// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CHERToken is ERC20, Ownable {
    uint256 private _totalSupply;

    constructor(uint256 initialSupply) ERC20("CHERToken", "CHER") {
        _mint(msg.sender, initialSupply);
    }
}
