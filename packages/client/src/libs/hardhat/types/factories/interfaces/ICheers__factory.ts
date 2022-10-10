/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICheers, ICheersInterface } from "../../interfaces/ICheers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_projectOwnerAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_belongDaoAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_projectName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_projectContents",
        type: "string",
      },
      {
        internalType: "string",
        name: "_projectReword",
        type: "string",
      },
    ],
    name: "addProjects",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllDaoList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "daoAddres",
            type: "address",
          },
          {
            internalType: "string",
            name: "daoName",
            type: "string",
          },
          {
            internalType: "string",
            name: "daoProfile",
            type: "string",
          },
          {
            internalType: "string",
            name: "daoIcon",
            type: "string",
          },
        ],
        internalType: "struct SharedStruct.Dao[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllUserList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "userAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "userName",
            type: "string",
          },
          {
            internalType: "string",
            name: "userProfile",
            type: "string",
          },
          {
            internalType: "string",
            name: "userIcon",
            type: "string",
          },
        ],
        internalType: "struct SharedStruct.User[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_projectOwnerAdress",
        type: "address",
      },
    ],
    name: "getEachProjectList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "belongDaoAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "projectName",
            type: "string",
          },
          {
            internalType: "string",
            name: "projectContents",
            type: "string",
          },
          {
            internalType: "string",
            name: "projectReword",
            type: "string",
          },
        ],
        internalType: "struct SharedStruct.Project[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ownerAddress",
        type: "address",
      },
    ],
    name: "getMyPoolAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ICheers__factory {
  static readonly abi = _abi;
  static createInterface(): ICheersInterface {
    return new utils.Interface(_abi) as ICheersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICheers {
    return new Contract(address, _abi, signerOrProvider) as ICheers;
  }
}
