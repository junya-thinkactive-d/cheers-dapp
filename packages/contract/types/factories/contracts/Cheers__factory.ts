/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Cheers, CheersInterface } from "../../contracts/Cheers";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "daoPoolFactory",
    outputs: [
      {
        internalType: "contract IDaoPoolFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_daoName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_daoProfile",
        type: "string",
      },
      {
        internalType: "string",
        name: "_daoIcon",
        type: "string",
      },
    ],
    name: "newDaoPoolFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_userName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_userProfile",
        type: "string",
      },
      {
        internalType: "string",
        name: "_userIcon",
        type: "string",
      },
    ],
    name: "newUserPoolFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "daoPoolFactoryAddress",
        type: "address",
      },
    ],
    name: "setDaoPoolFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userPoolFactoryAddress",
        type: "address",
      },
    ],
    name: "setUserPoolFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "userPoolFactory",
    outputs: [
      {
        internalType: "contract IUserPoolFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600054600180546001600160a01b03199081166001600160a01b0393841617909155600254600380549092169216919091179055610439806100546000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806321991798146100675780636de25e221461007c578063ba280f26146100b6578063c0dbf8e3146100c9578063c8edbf8d14610103578063f73ee1ef14610132575b600080fd5b61007a610075366004610299565b610145565b005b61007a61008a366004610339565b600080546001600160a01b039092166001600160a01b0319928316811790915560018054909216179055565b61007a6100c4366004610299565b6101c2565b61007a6100d7366004610339565b600280546001600160a01b039092166001600160a01b0319928316811790915560038054909216179055565b600154610116906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b600354610116906001600160a01b031681565b60035460405163043322f360e31b81526001600160a01b0390911690632199179890610179908690869086906004016103a3565b6020604051808303816000875af1158015610198573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101bc91906103e6565b50505050565b600154604051635d14079360e11b81526001600160a01b039091169063ba280f2690610179908690869086906004016103a3565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261021d57600080fd5b813567ffffffffffffffff80821115610238576102386101f6565b604051601f8301601f19908116603f01168101908282118183101715610260576102606101f6565b8160405283815286602085880101111561027957600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000606084860312156102ae57600080fd5b833567ffffffffffffffff808211156102c657600080fd5b6102d28783880161020c565b945060208601359150808211156102e857600080fd5b6102f48783880161020c565b9350604086013591508082111561030a57600080fd5b506103178682870161020c565b9150509250925092565b6001600160a01b038116811461033657600080fd5b50565b60006020828403121561034b57600080fd5b813561035681610321565b9392505050565b6000815180845260005b8181101561038357602081850181015186830182015201610367565b506000602082860101526020601f19601f83011685010191505092915050565b6060815260006103b6606083018661035d565b82810360208401526103c8818661035d565b905082810360408401526103dc818561035d565b9695505050505050565b6000602082840312156103f857600080fd5b81516103568161032156fea26469706673582212203120f0c51d3aa475aaa8791e0c16f5bfcf0a00526b590cc4b0ff326b481b43db64736f6c63430008110033";

type CheersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CheersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Cheers__factory extends ContractFactory {
  constructor(...args: CheersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Cheers> {
    return super.deploy(overrides || {}) as Promise<Cheers>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Cheers {
    return super.attach(address) as Cheers;
  }
  override connect(signer: Signer): Cheers__factory {
    return super.connect(signer) as Cheers__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CheersInterface {
    return new utils.Interface(_abi) as CheersInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Cheers {
    return new Contract(address, _abi, signerOrProvider) as Cheers;
  }
}
