/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../common';
import type { CheerListData, CheerListDataInterface } from '../../../contracts/data/CheerListData';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_projectPoolAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_cheerPoolAddres',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_creationTime',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_message',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_cher',
        type: 'uint256',
      },
    ],
    name: 'addCheerDataList',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_cheerPoolAddress',
        type: 'address',
      },
    ],
    name: 'getMyPoolCheerDataList',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'projectAddress',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'cheerPoolAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'creationTime',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'message',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'cher',
            type: 'uint256',
          },
        ],
        internalType: 'struct SharedStruct.Cheer[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_projectPoolAddress',
        type: 'address',
      },
    ],
    name: 'getMyProjectCheerDataList',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'projectAddress',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'cheerPoolAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'creationTime',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'message',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'cher',
            type: 'uint256',
          },
        ],
        internalType: 'struct SharedStruct.Cheer[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'myPoolCheerDataList',
    outputs: [
      {
        internalType: 'address',
        name: 'projectAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'cheerPoolAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'creationTime',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'cher',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'myProjectCheerDataList',
    outputs: [
      {
        internalType: 'address',
        name: 'projectAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'cheerPoolAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'creationTime',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'cher',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5061132b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806308df15a31461005c57806312d9ac69146100785780631a19f2cf146100a8578063b122cf2b146100d8578063e0a2f3271461010c575b600080fd5b61007660048036038101906100719190610c5a565b610140565b005b610092600480360381019061008d9190610cf1565b610161565b60405161009f9190610ef3565b60405180910390f35b6100c260048036038101906100bd9190610cf1565b610350565b6040516100cf9190610ef3565b60405180910390f35b6100f260048036038101906100ed9190610f15565b61053f565b604051610103959493929190610fbd565b60405180910390f35b61012660048036038101906101219190610f15565b61065a565b604051610137959493929190610fbd565b60405180910390f35b61014d8585858585610775565b61015a85858585856108f0565b5050505050565b60606000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561034557838290600052602060002090600502016040518060a00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546102aa90611046565b80601f01602080910402602001604051908101604052809291908181526020018280546102d690611046565b80156103235780601f106102f857610100808354040283529160200191610323565b820191906000526020600020905b81548152906001019060200180831161030657829003601f168201915b50505050508152602001600482015481525050815260200190600101906101c1565b505050509050919050565b60606000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561053457838290600052602060002090600502016040518060a00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201805461049990611046565b80601f01602080910402602001604051908101604052809291908181526020018280546104c590611046565b80156105125780601f106104e757610100808354040283529160200191610512565b820191906000526020600020905b8154815290600101906020018083116104f557829003601f168201915b50505050508152602001600482015481525050815260200190600101906103b0565b505050509050919050565b6001602052816000526040600020818154811061055b57600080fd5b9060005260206000209060050201600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030180546105d190611046565b80601f01602080910402602001604051908101604052809291908181526020018280546105fd90611046565b801561064a5780601f1061061f5761010080835404028352916020019161064a565b820191906000526020600020905b81548152906001019060200180831161062d57829003601f168201915b5050505050908060040154905085565b6000602052816000526040600020818154811061067657600080fd5b9060005260206000209060050201600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030180546106ec90611046565b80601f016020809104026020016040519081016040528092919081815260200182805461071890611046565b80156107655780601f1061073a57610100808354040283529160200191610765565b820191906000526020600020905b81548152906001019060200180831161074857829003601f168201915b5050505050908060040154905085565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a001604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200183815250908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030190816108dc9190611223565b506080820151816004015550505050505050565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a001604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200183815250908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003019081610a589190611223565b506080820151816004015550505050505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610aab82610a80565b9050919050565b610abb81610aa0565b8114610ac657600080fd5b50565b600081359050610ad881610ab2565b92915050565b6000819050919050565b610af181610ade565b8114610afc57600080fd5b50565b600081359050610b0e81610ae8565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610b6782610b1e565b810181811067ffffffffffffffff82111715610b8657610b85610b2f565b5b80604052505050565b6000610b99610a6c565b9050610ba58282610b5e565b919050565b600067ffffffffffffffff821115610bc557610bc4610b2f565b5b610bce82610b1e565b9050602081019050919050565b82818337600083830152505050565b6000610bfd610bf884610baa565b610b8f565b905082815260208101848484011115610c1957610c18610b19565b5b610c24848285610bdb565b509392505050565b600082601f830112610c4157610c40610b14565b5b8135610c51848260208601610bea565b91505092915050565b600080600080600060a08688031215610c7657610c75610a76565b5b6000610c8488828901610ac9565b9550506020610c9588828901610ac9565b9450506040610ca688828901610aff565b935050606086013567ffffffffffffffff811115610cc757610cc6610a7b565b5b610cd388828901610c2c565b9250506080610ce488828901610aff565b9150509295509295909350565b600060208284031215610d0757610d06610a76565b5b6000610d1584828501610ac9565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610d5381610aa0565b82525050565b610d6281610ade565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610da2578082015181840152602081019050610d87565b60008484015250505050565b6000610db982610d68565b610dc38185610d73565b9350610dd3818560208601610d84565b610ddc81610b1e565b840191505092915050565b600060a083016000830151610dff6000860182610d4a565b506020830151610e126020860182610d4a565b506040830151610e256040860182610d59565b5060608301518482036060860152610e3d8282610dae565b9150506080830151610e526080860182610d59565b508091505092915050565b6000610e698383610de7565b905092915050565b6000602082019050919050565b6000610e8982610d1e565b610e938185610d29565b935083602082028501610ea585610d3a565b8060005b85811015610ee15784840389528151610ec28582610e5d565b9450610ecd83610e71565b925060208a01995050600181019050610ea9565b50829750879550505050505092915050565b60006020820190508181036000830152610f0d8184610e7e565b905092915050565b60008060408385031215610f2c57610f2b610a76565b5b6000610f3a85828601610ac9565b9250506020610f4b85828601610aff565b9150509250929050565b610f5e81610aa0565b82525050565b610f6d81610ade565b82525050565b600082825260208201905092915050565b6000610f8f82610d68565b610f998185610f73565b9350610fa9818560208601610d84565b610fb281610b1e565b840191505092915050565b600060a082019050610fd26000830188610f55565b610fdf6020830187610f55565b610fec6040830186610f64565b8181036060830152610ffe8185610f84565b905061100d6080830184610f64565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061105e57607f821691505b60208210810361107157611070611017565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026110d97fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261109c565b6110e3868361109c565b95508019841693508086168417925050509392505050565b6000819050919050565b600061112061111b61111684610ade565b6110fb565b610ade565b9050919050565b6000819050919050565b61113a83611105565b61114e61114682611127565b8484546110a9565b825550505050565b600090565b611163611156565b61116e818484611131565b505050565b5b818110156111925761118760008261115b565b600181019050611174565b5050565b601f8211156111d7576111a881611077565b6111b18461108c565b810160208510156111c0578190505b6111d46111cc8561108c565b830182611173565b50505b505050565b600082821c905092915050565b60006111fa600019846008026111dc565b1980831691505092915050565b600061121383836111e9565b9150826002028217905092915050565b61122c82610d68565b67ffffffffffffffff81111561124557611244610b2f565b5b61124f8254611046565b61125a828285611196565b600060209050601f83116001811461128d576000841561127b578287015190505b6112858582611207565b8655506112ed565b601f19841661129b86611077565b60005b828110156112c35784890151825560018201915060208501945060208101905061129e565b868310156112e057848901516112dc601f8916826111e9565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220ab08a23f5b9c70d5d27369cf30281c17dc51807649ed6bca3623ca746c17a4b364736f6c63430008110033';

type CheerListDataConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: CheerListDataConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class CheerListData__factory extends ContractFactory {
  constructor(...args: CheerListDataConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<CheerListData> {
    return super.deploy(overrides || {}) as Promise<CheerListData>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
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
  static connect(address: string, signerOrProvider: Signer | Provider): CheerListData {
    return new Contract(address, _abi, signerOrProvider) as CheerListData;
  }
}
