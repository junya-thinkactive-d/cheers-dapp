/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CheerListData,
  CheerListDataInterface,
} from "../../../contracts/data/CheerListData";

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
        name: "_projectPoolAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_cheerPoolAddres",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_creationTime",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_cher",
        type: "uint256",
      },
    ],
    name: "addCheerDataList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_cheerPoolAddress",
        type: "address",
      },
    ],
    name: "getMyPoolCheerDataList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "projectAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "cheerPoolAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "creationTime",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "cher",
            type: "uint256",
          },
        ],
        internalType: "struct SharedStruct.Cheer[]",
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
        name: "_projectPoolAddress",
        type: "address",
      },
    ],
    name: "getMyProjectCheerDataList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "projectAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "cheerPoolAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "creationTime",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "cher",
            type: "uint256",
          },
        ],
        internalType: "struct SharedStruct.Cheer[]",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "myPoolCheerDataList",
    outputs: [
      {
        internalType: "address",
        name: "projectAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "cheerPoolAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "creationTime",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "cher",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "myProjectCheerDataList",
    outputs: [
      {
        internalType: "address",
        name: "projectAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "cheerPoolAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "creationTime",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "cher",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061132c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806308df15a31461005c57806312d9ac69146100785780631a19f2cf146100a8578063b122cf2b146100d8578063e0a2f3271461010c575b600080fd5b61007660048036038101906100719190610c5b565b610140565b005b610092600480360381019061008d9190610cf2565b610161565b60405161009f9190610ef4565b60405180910390f35b6100c260048036038101906100bd9190610cf2565b610351565b6040516100cf9190610ef4565b60405180910390f35b6100f260048036038101906100ed9190610f16565b610540565b604051610103959493929190610fbe565b60405180910390f35b61012660048036038101906101219190610f16565b61065b565b604051610137959493929190610fbe565b60405180910390f35b61014d8585858585610776565b61015a85858585856108f1565b5050505050565b6060600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561034657838290600052602060002090600502016040518060a00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546102ab90611047565b80601f01602080910402602001604051908101604052809291908181526020018280546102d790611047565b80156103245780601f106102f957610100808354040283529160200191610324565b820191906000526020600020905b81548152906001019060200180831161030757829003601f168201915b50505050508152602001600482015481525050815260200190600101906101c2565b505050509050919050565b60606000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561053557838290600052602060002090600502016040518060a00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201805461049a90611047565b80601f01602080910402602001604051908101604052809291908181526020018280546104c690611047565b80156105135780601f106104e857610100808354040283529160200191610513565b820191906000526020600020905b8154815290600101906020018083116104f657829003601f168201915b50505050508152602001600482015481525050815260200190600101906103b1565b505050509050919050565b6001602052816000526040600020818154811061055c57600080fd5b9060005260206000209060050201600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030180546105d290611047565b80601f01602080910402602001604051908101604052809291908181526020018280546105fe90611047565b801561064b5780601f106106205761010080835404028352916020019161064b565b820191906000526020600020905b81548152906001019060200180831161062e57829003601f168201915b5050505050908060040154905085565b6000602052816000526040600020818154811061067757600080fd5b9060005260206000209060050201600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030180546106ed90611047565b80601f016020809104026020016040519081016040528092919081815260200182805461071990611047565b80156107665780601f1061073b57610100808354040283529160200191610766565b820191906000526020600020905b81548152906001019060200180831161074957829003601f168201915b5050505050908060040154905085565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a001604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200183815250908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030190816108dd9190611224565b506080820151816004015550505050505050565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a001604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200183815250908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003019081610a599190611224565b506080820151816004015550505050505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610aac82610a81565b9050919050565b610abc81610aa1565b8114610ac757600080fd5b50565b600081359050610ad981610ab3565b92915050565b6000819050919050565b610af281610adf565b8114610afd57600080fd5b50565b600081359050610b0f81610ae9565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610b6882610b1f565b810181811067ffffffffffffffff82111715610b8757610b86610b30565b5b80604052505050565b6000610b9a610a6d565b9050610ba68282610b5f565b919050565b600067ffffffffffffffff821115610bc657610bc5610b30565b5b610bcf82610b1f565b9050602081019050919050565b82818337600083830152505050565b6000610bfe610bf984610bab565b610b90565b905082815260208101848484011115610c1a57610c19610b1a565b5b610c25848285610bdc565b509392505050565b600082601f830112610c4257610c41610b15565b5b8135610c52848260208601610beb565b91505092915050565b600080600080600060a08688031215610c7757610c76610a77565b5b6000610c8588828901610aca565b9550506020610c9688828901610aca565b9450506040610ca788828901610b00565b935050606086013567ffffffffffffffff811115610cc857610cc7610a7c565b5b610cd488828901610c2d565b9250506080610ce588828901610b00565b9150509295509295909350565b600060208284031215610d0857610d07610a77565b5b6000610d1684828501610aca565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610d5481610aa1565b82525050565b610d6381610adf565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610da3578082015181840152602081019050610d88565b60008484015250505050565b6000610dba82610d69565b610dc48185610d74565b9350610dd4818560208601610d85565b610ddd81610b1f565b840191505092915050565b600060a083016000830151610e006000860182610d4b565b506020830151610e136020860182610d4b565b506040830151610e266040860182610d5a565b5060608301518482036060860152610e3e8282610daf565b9150506080830151610e536080860182610d5a565b508091505092915050565b6000610e6a8383610de8565b905092915050565b6000602082019050919050565b6000610e8a82610d1f565b610e948185610d2a565b935083602082028501610ea685610d3b565b8060005b85811015610ee25784840389528151610ec38582610e5e565b9450610ece83610e72565b925060208a01995050600181019050610eaa565b50829750879550505050505092915050565b60006020820190508181036000830152610f0e8184610e7f565b905092915050565b60008060408385031215610f2d57610f2c610a77565b5b6000610f3b85828601610aca565b9250506020610f4c85828601610b00565b9150509250929050565b610f5f81610aa1565b82525050565b610f6e81610adf565b82525050565b600082825260208201905092915050565b6000610f9082610d69565b610f9a8185610f74565b9350610faa818560208601610d85565b610fb381610b1f565b840191505092915050565b600060a082019050610fd36000830188610f56565b610fe06020830187610f56565b610fed6040830186610f65565b8181036060830152610fff8185610f85565b905061100e6080830184610f65565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061105f57607f821691505b60208210810361107257611071611018565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026110da7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261109d565b6110e4868361109d565b95508019841693508086168417925050509392505050565b6000819050919050565b600061112161111c61111784610adf565b6110fc565b610adf565b9050919050565b6000819050919050565b61113b83611106565b61114f61114782611128565b8484546110aa565b825550505050565b600090565b611164611157565b61116f818484611132565b505050565b5b818110156111935761118860008261115c565b600181019050611175565b5050565b601f8211156111d8576111a981611078565b6111b28461108d565b810160208510156111c1578190505b6111d56111cd8561108d565b830182611174565b50505b505050565b600082821c905092915050565b60006111fb600019846008026111dd565b1980831691505092915050565b600061121483836111ea565b9150826002028217905092915050565b61122d82610d69565b67ffffffffffffffff81111561124657611245610b30565b5b6112508254611047565b61125b828285611197565b600060209050601f83116001811461128e576000841561127c578287015190505b6112868582611208565b8655506112ee565b601f19841661129c86611078565b60005b828110156112c45784890151825560018201915060208501945060208101905061129f565b868310156112e157848901516112dd601f8916826111ea565b8355505b6001600288020188555050505b50505050505056fea26469706673582212208373555b41694d0762776cce37d9832e4b6f480d75ac6474312df074f13ca49164736f6c63430008110033";

type CheerListDataConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CheerListDataConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CheerListData__factory extends ContractFactory {
  constructor(...args: CheerListDataConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CheerListData> {
    return super.deploy(overrides || {}) as Promise<CheerListData>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CheerListData {
    return super.attach(address) as CheerListData;
  }
  override connect(signer: Signer): CheerListData__factory {
    return super.connect(signer) as CheerListData__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CheerListDataInterface {
    return new utils.Interface(_abi) as CheerListDataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CheerListData {
    return new Contract(address, _abi, signerOrProvider) as CheerListData;
  }
}
