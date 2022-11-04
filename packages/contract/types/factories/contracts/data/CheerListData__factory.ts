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
  "0x608060405234801561001057600080fd5b506109d0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806308df15a31461005c57806312d9ac69146100715780631a19f2cf1461009a578063b122cf2b146100ad578063e0a2f327146100d1575b600080fd5b61006f61006a3660046105f0565b6100e4565b005b61008461007f3660046106d4565b610105565b604051610091919061073c565b60405180910390f35b6100846100a83660046106d4565b610244565b6100c06100bb3660046107e2565b610376565b60405161009195949392919061080c565b6100c06100df3660046107e2565b61045b565b6100f18585858585610477565b6100fe8585858585610521565b5050505050565b6001600160a01b0381166000908152600160209081526040808320805482518185028101850190935280835260609492939192909184015b828210156102395760008481526020908190206040805160a0810182526005860290920180546001600160a01b0390811684526001820154169383019390935260028301549082015260038201805491929160608401919061019e90610851565b80601f01602080910402602001604051908101604052809291908181526020018280546101ca90610851565b80156102175780601f106101ec57610100808354040283529160200191610217565b820191906000526020600020905b8154815290600101906020018083116101fa57829003601f168201915b505050505081526020016004820154815250508152602001906001019061013d565b505050509050919050565b6001600160a01b038116600090815260208181526040808320805482518185028101850190935280835260609492939192909184015b828210156102395760008481526020908190206040805160a0810182526005860290920180546001600160a01b039081168452600182015416938301939093526002830154908201526003820180549192916060840191906102db90610851565b80601f016020809104026020016040519081016040528092919081815260200182805461030790610851565b80156103545780601f1061032957610100808354040283529160200191610354565b820191906000526020600020905b81548152906001019060200180831161033757829003601f168201915b505050505081526020016004820154815250508152602001906001019061027a565b6001602052816000526040600020818154811061039257600080fd5b600091825260209091206005909102018054600182015460028301546003840180546001600160a01b03948516975093909216945092916103d290610851565b80601f01602080910402602001604051908101604052809291908181526020018280546103fe90610851565b801561044b5780601f106104205761010080835404028352916020019161044b565b820191906000526020600020905b81548152906001019060200180831161042e57829003601f168201915b5050505050908060040154905085565b6000602052816000526040600020818154811061039257600080fd5b6001600160a01b03808516600081815260208181526040808320815160a0810183528b87168152808401958652918201898152606083018981526080840189905282546001818101855593875294909520835160059095020180549488166001600160a01b03199586161781559551918601805492909716919093161790945551600283015551600382019061050d90826108da565b506080820151816004015550505050505050565b6001600160a01b038086166000818152600160208181526040808420815160a0810183529586528a87168684019081529186018a8152606087018a8152608088018a90528254808701845592875293909520865160059092020180549188166001600160a01b03199283161781559151938201805494909716931692909217909455905160028201559151909190600382019061050d90826108da565b80356001600160a01b03811681146105d557600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080600080600060a0868803121561060857600080fd5b610611866105be565b945061061f602087016105be565b935060408601359250606086013567ffffffffffffffff8082111561064357600080fd5b818801915088601f83011261065757600080fd5b813581811115610669576106696105da565b604051601f8201601f19908116603f01168101908382118183101715610691576106916105da565b816040528281528b60208487010111156106aa57600080fd5b82602086016020830137600092810160200192909252509699959850939660800135949350505050565b6000602082840312156106e657600080fd5b6106ef826105be565b9392505050565b6000815180845260005b8181101561071c57602081850181015186830182015201610700565b506000602082860101526020601f19601f83011685010191505092915050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156107d457888303603f19018552815180516001600160a01b039081168552888201511688850152868101518785015260608082015160a082870181905291906107b2838801826106f6565b6080948501519790940196909652505094870194925090860190600101610763565b509098975050505050505050565b600080604083850312156107f557600080fd5b6107fe836105be565b946020939093013593505050565b6001600160a01b038681168252851660208201526040810184905260a06060820181905260009061083f908301856106f6565b90508260808301529695505050505050565b600181811c9082168061086557607f821691505b60208210810361088557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156108d557600081815260208120601f850160051c810160208610156108b25750805b601f850160051c820191505b818110156108d1578281556001016108be565b5050505b505050565b815167ffffffffffffffff8111156108f4576108f46105da565b610908816109028454610851565b8461088b565b602080601f83116001811461093d57600084156109255750858301515b600019600386901b1c1916600185901b1785556108d1565b600085815260208120601f198616915b8281101561096c5788860151825594840194600190910190840161094d565b508582101561098a5787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea2646970667358221220373ee0654f6773a676f641273dc025aff8b848ef961b2a15eb14aa652135978c64736f6c63430008110033";

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
