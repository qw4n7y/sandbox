pragma solidity ^0.4.0;

contract SamarContract {
    uint myVar;
    address owner;
    
    // Decorator
    modifier onlyowner() {
        if (msg.sender == owner) {
            _;
        } else {
            throw;
        }
    }
    
    function SamarContract() payable {
        myVar = 5;
        owner = msg.sender;
    }
    
    function setMyVar(uint newMyVar) onlyowner {
        myVar = newMyVar;
    }
    
    function getMyVar() constant returns(uint) {
        return myVar;
    }
    
    function getBalance() constant returns(uint) {
        return this.balance;
    }
    
    // (fallback)
    function () payable {
    }
    
    function kill() onlyowner {
        suicide(owner);
    }
}
