/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  UsersData,
  UsersDataInterface,
} from "../../../contracts/data/UsersData";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
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
    name: "addUsers",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "users",
    outputs: [
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
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610e89806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632ce058f614610046578063365b98b2146100625780635849606d14610095575b600080fd5b610060600480360381019061005b91906107c1565b6100b3565b005b61007c600480360381019061007791906108b2565b6101a6565b60405161008c949392919061096d565b60405180910390f35b61009d61039e565b6040516100aa9190610b53565b60405180910390f35b600060405180608001604052808673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200183815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190816101719190610d81565b5060408201518160020190816101879190610d81565b50606082015181600301908161019d9190610d81565b50505050505050565b600081815481106101b657600080fd5b90600052602060002090600402016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010180546101ff90610ba4565b80601f016020809104026020016040519081016040528092919081815260200182805461022b90610ba4565b80156102785780601f1061024d57610100808354040283529160200191610278565b820191906000526020600020905b81548152906001019060200180831161025b57829003601f168201915b50505050509080600201805461028d90610ba4565b80601f01602080910402602001604051908101604052809291908181526020018280546102b990610ba4565b80156103065780601f106102db57610100808354040283529160200191610306565b820191906000526020600020905b8154815290600101906020018083116102e957829003601f168201915b50505050509080600301805461031b90610ba4565b80601f016020809104026020016040519081016040528092919081815260200182805461034790610ba4565b80156103945780601f1061036957610100808354040283529160200191610394565b820191906000526020600020905b81548152906001019060200180831161037757829003601f168201915b5050505050905084565b60606000805480602002602001604051908101604052809291908181526020016000905b8282101561060057838290600052602060002090600402016040518060800160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461044b90610ba4565b80601f016020809104026020016040519081016040528092919081815260200182805461047790610ba4565b80156104c45780601f10610499576101008083540402835291602001916104c4565b820191906000526020600020905b8154815290600101906020018083116104a757829003601f168201915b505050505081526020016002820180546104dd90610ba4565b80601f016020809104026020016040519081016040528092919081815260200182805461050990610ba4565b80156105565780601f1061052b57610100808354040283529160200191610556565b820191906000526020600020905b81548152906001019060200180831161053957829003601f168201915b5050505050815260200160038201805461056f90610ba4565b80601f016020809104026020016040519081016040528092919081815260200182805461059b90610ba4565b80156105e85780601f106105bd576101008083540402835291602001916105e8565b820191906000526020600020905b8154815290600101906020018083116105cb57829003601f168201915b505050505081525050815260200190600101906103c2565b50505050905090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106488261061d565b9050919050565b6106588161063d565b811461066357600080fd5b50565b6000813590506106758161064f565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6106ce82610685565b810181811067ffffffffffffffff821117156106ed576106ec610696565b5b80604052505050565b6000610700610609565b905061070c82826106c5565b919050565b600067ffffffffffffffff82111561072c5761072b610696565b5b61073582610685565b9050602081019050919050565b82818337600083830152505050565b600061076461075f84610711565b6106f6565b9050828152602081018484840111156107805761077f610680565b5b61078b848285610742565b509392505050565b600082601f8301126107a8576107a761067b565b5b81356107b8848260208601610751565b91505092915050565b600080600080608085870312156107db576107da610613565b5b60006107e987828801610666565b945050602085013567ffffffffffffffff81111561080a57610809610618565b5b61081687828801610793565b935050604085013567ffffffffffffffff81111561083757610836610618565b5b61084387828801610793565b925050606085013567ffffffffffffffff81111561086457610863610618565b5b61087087828801610793565b91505092959194509250565b6000819050919050565b61088f8161087c565b811461089a57600080fd5b50565b6000813590506108ac81610886565b92915050565b6000602082840312156108c8576108c7610613565b5b60006108d68482850161089d565b91505092915050565b6108e88161063d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561092857808201518184015260208101905061090d565b60008484015250505050565b600061093f826108ee565b61094981856108f9565b935061095981856020860161090a565b61096281610685565b840191505092915050565b600060808201905061098260008301876108df565b81810360208301526109948186610934565b905081810360408301526109a88185610934565b905081810360608301526109bc8184610934565b905095945050505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6109fc8161063d565b82525050565b600082825260208201905092915050565b6000610a1e826108ee565b610a288185610a02565b9350610a3881856020860161090a565b610a4181610685565b840191505092915050565b6000608083016000830151610a6460008601826109f3565b5060208301518482036020860152610a7c8282610a13565b91505060408301518482036040860152610a968282610a13565b91505060608301518482036060860152610ab08282610a13565b9150508091505092915050565b6000610ac98383610a4c565b905092915050565b6000602082019050919050565b6000610ae9826109c7565b610af381856109d2565b935083602082028501610b05856109e3565b8060005b85811015610b415784840389528151610b228582610abd565b9450610b2d83610ad1565b925060208a01995050600181019050610b09565b50829750879550505050505092915050565b60006020820190508181036000830152610b6d8184610ade565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610bbc57607f821691505b602082108103610bcf57610bce610b75565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610c377fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610bfa565b610c418683610bfa565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610c7e610c79610c748461087c565b610c59565b61087c565b9050919050565b6000819050919050565b610c9883610c63565b610cac610ca482610c85565b848454610c07565b825550505050565b600090565b610cc1610cb4565b610ccc818484610c8f565b505050565b5b81811015610cf057610ce5600082610cb9565b600181019050610cd2565b5050565b601f821115610d3557610d0681610bd5565b610d0f84610bea565b81016020851015610d1e578190505b610d32610d2a85610bea565b830182610cd1565b50505b505050565b600082821c905092915050565b6000610d5860001984600802610d3a565b1980831691505092915050565b6000610d718383610d47565b9150826002028217905092915050565b610d8a826108ee565b67ffffffffffffffff811115610da357610da2610696565b5b610dad8254610ba4565b610db8828285610cf4565b600060209050601f831160018114610deb5760008415610dd9578287015190505b610de38582610d65565b865550610e4b565b601f198416610df986610bd5565b60005b82811015610e2157848901518255600182019150602085019450602081019050610dfc565b86831015610e3e5784890151610e3a601f891682610d47565b8355505b6001600288020188555050505b50505050505056fea26469706673582212207f857553ef00067922743de0a8a5ea10c39ccd5527724d60da5ba99eb9867c5464736f6c63430008110033";

type UsersDataConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UsersDataConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UsersData__factory extends ContractFactory {
  constructor(...args: UsersDataConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UsersData> {
    return super.deploy(overrides || {}) as Promise<UsersData>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UsersData {
    return super.attach(address) as UsersData;
  }
  override connect(signer: Signer): UsersData__factory {
    return super.connect(signer) as UsersData__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UsersDataInterface {
    return new utils.Interface(_abi) as UsersDataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UsersData {
    return new Contract(address, _abi, signerOrProvider) as UsersData;
  }
}
