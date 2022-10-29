/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DaosData,
  DaosDataInterface,
} from "../../../contracts/data/DaosData";

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
        name: "_daoAddress",
        type: "address",
      },
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
    name: "addDaos",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "daos",
    outputs: [
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
    stateMutability: "view",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610e89806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806302c256f6146100465780636721b7c014610062578063ccbbd26014610080575b600080fd5b610060600480360381019061005b91906107c1565b6100b3565b005b61006a6101a6565b6040516100779190610a3d565b60405180910390f35b61009a60048036038101906100959190610a95565b610411565b6040516100aa9493929190610b1b565b60405180910390f35b600060405180608001604052808673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200183815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190816101719190610d81565b5060408201518160020190816101879190610d81565b50606082015181600301908161019d9190610d81565b50505050505050565b60606000805480602002602001604051908101604052809291908181526020016000905b8282101561040857838290600052602060002090600402016040518060800160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461025390610ba4565b80601f016020809104026020016040519081016040528092919081815260200182805461027f90610ba4565b80156102cc5780601f106102a1576101008083540402835291602001916102cc565b820191906000526020600020905b8154815290600101906020018083116102af57829003601f168201915b505050505081526020016002820180546102e590610ba4565b80601f016020809104026020016040519081016040528092919081815260200182805461031190610ba4565b801561035e5780601f106103335761010080835404028352916020019161035e565b820191906000526020600020905b81548152906001019060200180831161034157829003601f168201915b5050505050815260200160038201805461037790610ba4565b80601f01602080910402602001604051908101604052809291908181526020018280546103a390610ba4565b80156103f05780601f106103c5576101008083540402835291602001916103f0565b820191906000526020600020905b8154815290600101906020018083116103d357829003601f168201915b505050505081525050815260200190600101906101ca565b50505050905090565b6000818154811061042157600080fd5b90600052602060002090600402016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101805461046a90610ba4565b80601f016020809104026020016040519081016040528092919081815260200182805461049690610ba4565b80156104e35780601f106104b8576101008083540402835291602001916104e3565b820191906000526020600020905b8154815290600101906020018083116104c657829003601f168201915b5050505050908060020180546104f890610ba4565b80601f016020809104026020016040519081016040528092919081815260200182805461052490610ba4565b80156105715780601f1061054657610100808354040283529160200191610571565b820191906000526020600020905b81548152906001019060200180831161055457829003601f168201915b50505050509080600301805461058690610ba4565b80601f01602080910402602001604051908101604052809291908181526020018280546105b290610ba4565b80156105ff5780601f106105d4576101008083540402835291602001916105ff565b820191906000526020600020905b8154815290600101906020018083116105e257829003601f168201915b5050505050905084565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106488261061d565b9050919050565b6106588161063d565b811461066357600080fd5b50565b6000813590506106758161064f565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6106ce82610685565b810181811067ffffffffffffffff821117156106ed576106ec610696565b5b80604052505050565b6000610700610609565b905061070c82826106c5565b919050565b600067ffffffffffffffff82111561072c5761072b610696565b5b61073582610685565b9050602081019050919050565b82818337600083830152505050565b600061076461075f84610711565b6106f6565b9050828152602081018484840111156107805761077f610680565b5b61078b848285610742565b509392505050565b600082601f8301126107a8576107a761067b565b5b81356107b8848260208601610751565b91505092915050565b600080600080608085870312156107db576107da610613565b5b60006107e987828801610666565b945050602085013567ffffffffffffffff81111561080a57610809610618565b5b61081687828801610793565b935050604085013567ffffffffffffffff81111561083757610836610618565b5b61084387828801610793565b925050606085013567ffffffffffffffff81111561086457610863610618565b5b61087087828801610793565b91505092959194509250565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6108b18161063d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156108f15780820151818401526020810190506108d6565b60008484015250505050565b6000610908826108b7565b61091281856108c2565b93506109228185602086016108d3565b61092b81610685565b840191505092915050565b600060808301600083015161094e60008601826108a8565b506020830151848203602086015261096682826108fd565b9150506040830151848203604086015261098082826108fd565b9150506060830151848203606086015261099a82826108fd565b9150508091505092915050565b60006109b38383610936565b905092915050565b6000602082019050919050565b60006109d38261087c565b6109dd8185610887565b9350836020820285016109ef85610898565b8060005b85811015610a2b5784840389528151610a0c85826109a7565b9450610a17836109bb565b925060208a019950506001810190506109f3565b50829750879550505050505092915050565b60006020820190508181036000830152610a5781846109c8565b905092915050565b6000819050919050565b610a7281610a5f565b8114610a7d57600080fd5b50565b600081359050610a8f81610a69565b92915050565b600060208284031215610aab57610aaa610613565b5b6000610ab984828501610a80565b91505092915050565b610acb8161063d565b82525050565b600082825260208201905092915050565b6000610aed826108b7565b610af78185610ad1565b9350610b078185602086016108d3565b610b1081610685565b840191505092915050565b6000608082019050610b306000830187610ac2565b8181036020830152610b428186610ae2565b90508181036040830152610b568185610ae2565b90508181036060830152610b6a8184610ae2565b905095945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610bbc57607f821691505b602082108103610bcf57610bce610b75565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610c377fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610bfa565b610c418683610bfa565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610c7e610c79610c7484610a5f565b610c59565b610a5f565b9050919050565b6000819050919050565b610c9883610c63565b610cac610ca482610c85565b848454610c07565b825550505050565b600090565b610cc1610cb4565b610ccc818484610c8f565b505050565b5b81811015610cf057610ce5600082610cb9565b600181019050610cd2565b5050565b601f821115610d3557610d0681610bd5565b610d0f84610bea565b81016020851015610d1e578190505b610d32610d2a85610bea565b830182610cd1565b50505b505050565b600082821c905092915050565b6000610d5860001984600802610d3a565b1980831691505092915050565b6000610d718383610d47565b9150826002028217905092915050565b610d8a826108b7565b67ffffffffffffffff811115610da357610da2610696565b5b610dad8254610ba4565b610db8828285610cf4565b600060209050601f831160018114610deb5760008415610dd9578287015190505b610de38582610d65565b865550610e4b565b601f198416610df986610bd5565b60005b82811015610e2157848901518255600182019150602085019450602081019050610dfc565b86831015610e3e5784890151610e3a601f891682610d47565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220771ec8f769d49fdae60054b4a707749dcb7ff73c5fa3d1b5fb0aed78f657392164736f6c63430008110033";

type DaosDataConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DaosDataConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DaosData__factory extends ContractFactory {
  constructor(...args: DaosDataConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DaosData> {
    return super.deploy(overrides || {}) as Promise<DaosData>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DaosData {
    return super.attach(address) as DaosData;
  }
  override connect(signer: Signer): DaosData__factory {
    return super.connect(signer) as DaosData__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DaosDataInterface {
    return new utils.Interface(_abi) as DaosDataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DaosData {
    return new Contract(address, _abi, signerOrProvider) as DaosData;
  }
}
