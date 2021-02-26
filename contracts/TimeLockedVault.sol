import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

pragma solidity ^0.6.12;


contract TimeLockedVault is Ownable{

    using SafeMath for uint;
    using SafeERC20 for IERC20;

    uint public unlockDate;
    uint public createdAt;

    event Received(address _from, uint _amount);
    event Withdrew(address _to, uint _amount);
    event WithdrewTokens(address _tokenContract, address _to, uint _amount);
        

    constructor(
                    uint _unlockDate
                ) public {
                    unlockDate = now + _unlockDate;
                    createdAt = now;
        }


    receive() payable external {}

    function withdrawBNB() public payable onlyOwner {
       require(now >= unlockDate);
       msg.sender.transfer(address(this).balance);
    }

    function withdrawBEP20(address _tokenAddress) public payable onlyOwner {
        require(now >= unlockDate);
        uint256 tokenBal = IERC20(_tokenAddress).balanceOf(address(this));
        IERC20(_tokenAddress).safeIncreaseAllowance(msg.sender, tokenBal);
        IERC20(_tokenAddress).transfer(msg.sender, tokenBal);
    }


}
