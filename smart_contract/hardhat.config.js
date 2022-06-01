require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.4",
  networks:{
    rinkeby:{
      url:'https://eth-rinkeby.alchemyapi.io/v2/ioA_pDy3jFsyw9eiJm5EZiBijgQ9T0uP',
      accounts:['795a36b6a7ccce53f1629e87e0e17f2037a5b090921c1a7112f2469904892680']
      
    }
  }
};
