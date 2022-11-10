import 'dotenv/config'
import { HardhatUserConfig } from 'hardhat/config';
import "@nomicfoundation/hardhat-toolbox";
import '@typechain/hardhat';
import 'hardhat-contract-sizer';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-etherscan';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.17',
    // settings:{
    //   optimizer: {
    //     enabled: true,
    //     runs: 200,
    //   },
    // },
  },
  etherscan: {
    apiKey: `${process.env.ETHERSCAN_API}`,
  },
  typechain: {
    outDir: '../client/src/libs/hardhat/types' && './types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: false,
    externalArtifacts: ['externalArtifacts/*.json'],
    dontOverrideCompile: false,
  },
  paths: {
    artifacts: '../client/src/libs/hardhat/artifacts',
  },
  // networks: {
  //   mumbai: {
  //     url: `${process.env.API_URL}`,
  //     accounts: [`${process.env.PRIVATE_KEY}`],
  //   },
  // },
  // gasReporter: {
  //   enabled: process.env.REPORT_GAS ? true : false,
  //   currency: "JPY",
  //   gasPriceApi:
  //     "https://api.etherscan.io/api?module=proxy&action=eth_gasPrice",
  //   coinmarketcap: COINMARKETCAP_API_KEY,
  // },
};

export default config;