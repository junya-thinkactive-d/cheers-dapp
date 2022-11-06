/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IProjectsData,
  IProjectsDataInterface,
} from "../../../contracts/interfaces/IProjectsData";

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
        name: "_projectPoolAddress",
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
    inputs: [
      {
        internalType: "address",
        name: "_projectOwnerAddress",
        type: "address",
      },
    ],
    name: "getEachProjectList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "projectOwnerAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "projectAddress",
            type: "address",
          },
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
          {
            internalType: "uint256",
            name: "creationTime",
            type: "uint256",
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
];

export class IProjectsData__factory {
  static readonly abi = _abi;
  static createInterface(): IProjectsDataInterface {
    return new utils.Interface(_abi) as IProjectsDataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IProjectsData {
    return new Contract(address, _abi, signerOrProvider) as IProjectsData;
  }
}
