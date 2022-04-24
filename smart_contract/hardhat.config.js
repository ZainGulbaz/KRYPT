// https://eth-rinkeby.alchemyapi.io/v2/BFX4VlbbcmQy1f87FjzN6SV_RkcmlHKp

require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity:"0.8.0",
  networks:{
    rinkeby:{
      url:"https://eth-rinkeby.alchemyapi.io/v2/BFX4VlbbcmQy1f87FjzN6SV_RkcmlHKp",
      accounts:["a376f4160ee4cceff641e68eeddcdef868fa718ffd53ab938fcf65ca82332249"]
    }
  }
}