const HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config();

module.exports = {
 compilers: {
    solc: {
      optimizer: {
          enabled: true,
          runs: 200
      },
      version: "0.6.12", // A version or constraint - Ex. "^0.5.0"
      parser: "solcjs"  // Leverages solc-js purely for speedy parsing
    }
  },
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(
        `${process.env.MNEMONIC}`,
        `https://localhost:8545`,0
        )
       },
     	network_id: '5777',
    },
     bsctestnet: {
      provider: function() {
        return new HDWalletProvider(
        `${process.env.MNEMONIC}`,
        `https://data-seed-prebsc-1-s2.binance.org:8545`,0
        )
       },
     	network_id: '*',
    },
    bsc: {
      provider: function() {
        return new HDWalletProvider(
        `${process.env.MNEMONIC}`,
        `https://bsc-dataseed.binance.org`,0
        )
       },
     	network_id: '56',
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
            `${process.env.MNEMONIC}`, 
            `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`,0
        )
      },
     	network_id: '4',
     	gas: 6000000,
     	gasPrice: 10000000000
 	},
    develop: {
      port: 9545,
      network_id: 20,
      accounts: 5,
      defaultEtherBalance: 500,
      blockTime: 3
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  }
};
