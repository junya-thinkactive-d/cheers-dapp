import 'dotenv/config'
import { HardhatUserConfig } from 'hardhat/config';
import '@typechain/hardhat';
import 'hardhat-contract-sizer';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';

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
  networks: {
    mumbai: {
      url: `${process.env.API_URL}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
  },
};

export default config;