/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  CHERToken,
  CHERTokenInterface,
} from "../../../../contracts/mock/CHERMockToken.sol/CHERToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
<<<<<<< HEAD
  "0x60806040523480156200001157600080fd5b5060405162001e3038038062001e30833981810160405281019062000037919062000392565b6040518060400160405280600981526020017f43484552546f6b656e00000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f43484552000000000000000000000000000000000000000000000000000000008152508160039081620000b4919062000634565b508060049081620000c6919062000634565b505050620000e9620000dd6200010260201b60201c565b6200010a60201b60201c565b620000fb3382620001d060201b60201c565b5062000836565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000242576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000239906200077c565b60405180910390fd5b62000256600083836200034860201b60201c565b80600260008282546200026a9190620007cd565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002c19190620007cd565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000328919062000819565b60405180910390a362000344600083836200034d60201b60201c565b5050565b505050565b505050565b600080fd5b6000819050919050565b6200036c8162000357565b81146200037857600080fd5b50565b6000815190506200038c8162000361565b92915050565b600060208284031215620003ab57620003aa62000352565b5b6000620003bb848285016200037b565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200044657607f821691505b6020821081036200045c576200045b620003fe565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004c67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000487565b620004d2868362000487565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620005156200050f620005098462000357565b620004ea565b62000357565b9050919050565b6000819050919050565b6200053183620004f4565b6200054962000540826200051c565b84845462000494565b825550505050565b600090565b6200056062000551565b6200056d81848462000526565b505050565b5b8181101562000595576200058960008262000556565b60018101905062000573565b5050565b601f821115620005e457620005ae8162000462565b620005b98462000477565b81016020851015620005c9578190505b620005e1620005d88562000477565b83018262000572565b50505b505050565b600082821c905092915050565b60006200060960001984600802620005e9565b1980831691505092915050565b6000620006248383620005f6565b9150826002028217905092915050565b6200063f82620003c4565b67ffffffffffffffff8111156200065b576200065a620003cf565b5b6200066782546200042d565b6200067482828562000599565b600060209050601f831160018114620006ac576000841562000697578287015190505b620006a3858262000616565b86555062000713565b601f198416620006bc8662000462565b60005b82811015620006e657848901518255600182019150602085019450602081019050620006bf565b8683101562000706578489015162000702601f891682620005f6565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000764601f836200071b565b915062000771826200072c565b602082019050919050565b60006020820190508181036000830152620007978162000755565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620007da8262000357565b9150620007e78362000357565b92508282019050808211156200080257620008016200079e565b5b92915050565b620008138162000357565b82525050565b600060208201905062000830600083018462000808565b92915050565b6115ea80620008466000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063715018a61161008c578063a457c2d711610066578063a457c2d71461024f578063a9059cbb1461027f578063dd62ed3e146102af578063f2fde38b146102df576100ea565b8063715018a6146102095780638da5cb5b1461021357806395d89b4114610231576100ea565b806323b872dd116100c857806323b872dd1461015b578063313ce5671461018b57806339509351146101a957806370a08231146101d9576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461013d575b600080fd5b6100f76102fb565b6040516101049190610d9f565b60405180910390f35b61012760048036038101906101229190610e5a565b61038d565b6040516101349190610eb5565b60405180910390f35b6101456103b0565b6040516101529190610edf565b60405180910390f35b61017560048036038101906101709190610efa565b6103ba565b6040516101829190610eb5565b60405180910390f35b6101936103e9565b6040516101a09190610f69565b60405180910390f35b6101c360048036038101906101be9190610e5a565b6103f2565b6040516101d09190610eb5565b60405180910390f35b6101f360048036038101906101ee9190610f84565b610429565b6040516102009190610edf565b60405180910390f35b610211610471565b005b61021b610485565b6040516102289190610fc0565b60405180910390f35b6102396104af565b6040516102469190610d9f565b60405180910390f35b61026960048036038101906102649190610e5a565b610541565b6040516102769190610eb5565b60405180910390f35b61029960048036038101906102949190610e5a565b6105b8565b6040516102a69190610eb5565b60405180910390f35b6102c960048036038101906102c49190610fdb565b6105db565b6040516102d69190610edf565b60405180910390f35b6102f960048036038101906102f49190610f84565b610662565b005b60606003805461030a9061104a565b80601f01602080910402602001604051908101604052809291908181526020018280546103369061104a565b80156103835780601f1061035857610100808354040283529160200191610383565b820191906000526020600020905b81548152906001019060200180831161036657829003601f168201915b5050505050905090565b6000806103986106e5565b90506103a58185856106ed565b600191505092915050565b6000600254905090565b6000806103c56106e5565b90506103d28582856108b6565b6103dd858585610942565b60019150509392505050565b60006012905090565b6000806103fd6106e5565b905061041e81858561040f85896105db565b61041991906110aa565b6106ed565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610479610bc1565b6104836000610c3f565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546104be9061104a565b80601f01602080910402602001604051908101604052809291908181526020018280546104ea9061104a565b80156105375780601f1061050c57610100808354040283529160200191610537565b820191906000526020600020905b81548152906001019060200180831161051a57829003601f168201915b5050505050905090565b60008061054c6106e5565b9050600061055a82866105db565b90508381101561059f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059690611150565b60405180910390fd5b6105ac82868684036106ed565b60019250505092915050565b6000806105c36106e5565b90506105d0818585610942565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61066a610bc1565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036106d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d0906111e2565b60405180910390fd5b6106e281610c3f565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361075c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075390611274565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c290611306565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516108a99190610edf565b60405180910390a3505050565b60006108c284846105db565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461093c578181101561092e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092590611372565b60405180910390fd5b61093b84848484036106ed565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a890611404565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1790611496565b60405180910390fd5b610a2b838383610d05565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610ab1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa890611528565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b4491906110aa565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ba89190610edf565b60405180910390a3610bbb848484610d0a565b50505050565b610bc96106e5565b73ffffffffffffffffffffffffffffffffffffffff16610be7610485565b73ffffffffffffffffffffffffffffffffffffffff1614610c3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3490611594565b60405180910390fd5b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d49578082015181840152602081019050610d2e565b60008484015250505050565b6000601f19601f8301169050919050565b6000610d7182610d0f565b610d7b8185610d1a565b9350610d8b818560208601610d2b565b610d9481610d55565b840191505092915050565b60006020820190508181036000830152610db98184610d66565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610df182610dc6565b9050919050565b610e0181610de6565b8114610e0c57600080fd5b50565b600081359050610e1e81610df8565b92915050565b6000819050919050565b610e3781610e24565b8114610e4257600080fd5b50565b600081359050610e5481610e2e565b92915050565b60008060408385031215610e7157610e70610dc1565b5b6000610e7f85828601610e0f565b9250506020610e9085828601610e45565b9150509250929050565b60008115159050919050565b610eaf81610e9a565b82525050565b6000602082019050610eca6000830184610ea6565b92915050565b610ed981610e24565b82525050565b6000602082019050610ef46000830184610ed0565b92915050565b600080600060608486031215610f1357610f12610dc1565b5b6000610f2186828701610e0f565b9350506020610f3286828701610e0f565b9250506040610f4386828701610e45565b9150509250925092565b600060ff82169050919050565b610f6381610f4d565b82525050565b6000602082019050610f7e6000830184610f5a565b92915050565b600060208284031215610f9a57610f99610dc1565b5b6000610fa884828501610e0f565b91505092915050565b610fba81610de6565b82525050565b6000602082019050610fd56000830184610fb1565b92915050565b60008060408385031215610ff257610ff1610dc1565b5b600061100085828601610e0f565b925050602061101185828601610e0f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061106257607f821691505b6020821081036110755761107461101b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006110b582610e24565b91506110c083610e24565b92508282019050808211156110d8576110d761107b565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061113a602583610d1a565b9150611145826110de565b604082019050919050565b600060208201905081810360008301526111698161112d565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006111cc602683610d1a565b91506111d782611170565b604082019050919050565b600060208201905081810360008301526111fb816111bf565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061125e602483610d1a565b915061126982611202565b604082019050919050565b6000602082019050818103600083015261128d81611251565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006112f0602283610d1a565b91506112fb82611294565b604082019050919050565b6000602082019050818103600083015261131f816112e3565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061135c601d83610d1a565b915061136782611326565b602082019050919050565b6000602082019050818103600083015261138b8161134f565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006113ee602583610d1a565b91506113f982611392565b604082019050919050565b6000602082019050818103600083015261141d816113e1565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611480602383610d1a565b915061148b82611424565b604082019050919050565b600060208201905081810360008301526114af81611473565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611512602683610d1a565b915061151d826114b6565b604082019050919050565b6000602082019050818103600083015261154181611505565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061157e602083610d1a565b915061158982611548565b602082019050919050565b600060208201905081810360008301526115ad81611571565b905091905056fea264697066735822122057b72af28129fa18881efaa57f33647118aa757abf3da11ff4cffaadcda7a99a64736f6c63430008110033";
=======
  "0x60806040523480156200001157600080fd5b5060405162001e3038038062001e30833981810160405281019062000037919062000392565b6040518060400160405280600981526020017f43484552546f6b656e00000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f43484552000000000000000000000000000000000000000000000000000000008152508160039081620000b4919062000634565b508060049081620000c6919062000634565b505050620000e9620000dd6200010260201b60201c565b6200010a60201b60201c565b620000fb3382620001d060201b60201c565b5062000836565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000242576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000239906200077c565b60405180910390fd5b62000256600083836200034860201b60201c565b80600260008282546200026a9190620007cd565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002c19190620007cd565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000328919062000819565b60405180910390a362000344600083836200034d60201b60201c565b5050565b505050565b505050565b600080fd5b6000819050919050565b6200036c8162000357565b81146200037857600080fd5b50565b6000815190506200038c8162000361565b92915050565b600060208284031215620003ab57620003aa62000352565b5b6000620003bb848285016200037b565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200044657607f821691505b6020821081036200045c576200045b620003fe565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004c67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000487565b620004d2868362000487565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620005156200050f620005098462000357565b620004ea565b62000357565b9050919050565b6000819050919050565b6200053183620004f4565b6200054962000540826200051c565b84845462000494565b825550505050565b600090565b6200056062000551565b6200056d81848462000526565b505050565b5b8181101562000595576200058960008262000556565b60018101905062000573565b5050565b601f821115620005e457620005ae8162000462565b620005b98462000477565b81016020851015620005c9578190505b620005e1620005d88562000477565b83018262000572565b50505b505050565b600082821c905092915050565b60006200060960001984600802620005e9565b1980831691505092915050565b6000620006248383620005f6565b9150826002028217905092915050565b6200063f82620003c4565b67ffffffffffffffff8111156200065b576200065a620003cf565b5b6200066782546200042d565b6200067482828562000599565b600060209050601f831160018114620006ac576000841562000697578287015190505b620006a3858262000616565b86555062000713565b601f198416620006bc8662000462565b60005b82811015620006e657848901518255600182019150602085019450602081019050620006bf565b8683101562000706578489015162000702601f891682620005f6565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000764601f836200071b565b915062000771826200072c565b602082019050919050565b60006020820190508181036000830152620007978162000755565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620007da8262000357565b9150620007e78362000357565b92508282019050808211156200080257620008016200079e565b5b92915050565b620008138162000357565b82525050565b600060208201905062000830600083018462000808565b92915050565b6115ea80620008466000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063715018a61161008c578063a457c2d711610066578063a457c2d71461024f578063a9059cbb1461027f578063dd62ed3e146102af578063f2fde38b146102df576100ea565b8063715018a6146102095780638da5cb5b1461021357806395d89b4114610231576100ea565b806323b872dd116100c857806323b872dd1461015b578063313ce5671461018b57806339509351146101a957806370a08231146101d9576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461013d575b600080fd5b6100f76102fb565b6040516101049190610d9f565b60405180910390f35b61012760048036038101906101229190610e5a565b61038d565b6040516101349190610eb5565b60405180910390f35b6101456103b0565b6040516101529190610edf565b60405180910390f35b61017560048036038101906101709190610efa565b6103ba565b6040516101829190610eb5565b60405180910390f35b6101936103e9565b6040516101a09190610f69565b60405180910390f35b6101c360048036038101906101be9190610e5a565b6103f2565b6040516101d09190610eb5565b60405180910390f35b6101f360048036038101906101ee9190610f84565b610429565b6040516102009190610edf565b60405180910390f35b610211610471565b005b61021b610485565b6040516102289190610fc0565b60405180910390f35b6102396104af565b6040516102469190610d9f565b60405180910390f35b61026960048036038101906102649190610e5a565b610541565b6040516102769190610eb5565b60405180910390f35b61029960048036038101906102949190610e5a565b6105b8565b6040516102a69190610eb5565b60405180910390f35b6102c960048036038101906102c49190610fdb565b6105db565b6040516102d69190610edf565b60405180910390f35b6102f960048036038101906102f49190610f84565b610662565b005b60606003805461030a9061104a565b80601f01602080910402602001604051908101604052809291908181526020018280546103369061104a565b80156103835780601f1061035857610100808354040283529160200191610383565b820191906000526020600020905b81548152906001019060200180831161036657829003601f168201915b5050505050905090565b6000806103986106e5565b90506103a58185856106ed565b600191505092915050565b6000600254905090565b6000806103c56106e5565b90506103d28582856108b6565b6103dd858585610942565b60019150509392505050565b60006012905090565b6000806103fd6106e5565b905061041e81858561040f85896105db565b61041991906110aa565b6106ed565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610479610bc1565b6104836000610c3f565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546104be9061104a565b80601f01602080910402602001604051908101604052809291908181526020018280546104ea9061104a565b80156105375780601f1061050c57610100808354040283529160200191610537565b820191906000526020600020905b81548152906001019060200180831161051a57829003601f168201915b5050505050905090565b60008061054c6106e5565b9050600061055a82866105db565b90508381101561059f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059690611150565b60405180910390fd5b6105ac82868684036106ed565b60019250505092915050565b6000806105c36106e5565b90506105d0818585610942565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61066a610bc1565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036106d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d0906111e2565b60405180910390fd5b6106e281610c3f565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361075c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075390611274565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c290611306565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516108a99190610edf565b60405180910390a3505050565b60006108c284846105db565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461093c578181101561092e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092590611372565b60405180910390fd5b61093b84848484036106ed565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a890611404565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1790611496565b60405180910390fd5b610a2b838383610d05565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610ab1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa890611528565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b4491906110aa565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ba89190610edf565b60405180910390a3610bbb848484610d0a565b50505050565b610bc96106e5565b73ffffffffffffffffffffffffffffffffffffffff16610be7610485565b73ffffffffffffffffffffffffffffffffffffffff1614610c3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3490611594565b60405180910390fd5b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d49578082015181840152602081019050610d2e565b60008484015250505050565b6000601f19601f8301169050919050565b6000610d7182610d0f565b610d7b8185610d1a565b9350610d8b818560208601610d2b565b610d9481610d55565b840191505092915050565b60006020820190508181036000830152610db98184610d66565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610df182610dc6565b9050919050565b610e0181610de6565b8114610e0c57600080fd5b50565b600081359050610e1e81610df8565b92915050565b6000819050919050565b610e3781610e24565b8114610e4257600080fd5b50565b600081359050610e5481610e2e565b92915050565b60008060408385031215610e7157610e70610dc1565b5b6000610e7f85828601610e0f565b9250506020610e9085828601610e45565b9150509250929050565b60008115159050919050565b610eaf81610e9a565b82525050565b6000602082019050610eca6000830184610ea6565b92915050565b610ed981610e24565b82525050565b6000602082019050610ef46000830184610ed0565b92915050565b600080600060608486031215610f1357610f12610dc1565b5b6000610f2186828701610e0f565b9350506020610f3286828701610e0f565b9250506040610f4386828701610e45565b9150509250925092565b600060ff82169050919050565b610f6381610f4d565b82525050565b6000602082019050610f7e6000830184610f5a565b92915050565b600060208284031215610f9a57610f99610dc1565b5b6000610fa884828501610e0f565b91505092915050565b610fba81610de6565b82525050565b6000602082019050610fd56000830184610fb1565b92915050565b60008060408385031215610ff257610ff1610dc1565b5b600061100085828601610e0f565b925050602061101185828601610e0f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061106257607f821691505b6020821081036110755761107461101b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006110b582610e24565b91506110c083610e24565b92508282019050808211156110d8576110d761107b565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061113a602583610d1a565b9150611145826110de565b604082019050919050565b600060208201905081810360008301526111698161112d565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006111cc602683610d1a565b91506111d782611170565b604082019050919050565b600060208201905081810360008301526111fb816111bf565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061125e602483610d1a565b915061126982611202565b604082019050919050565b6000602082019050818103600083015261128d81611251565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006112f0602283610d1a565b91506112fb82611294565b604082019050919050565b6000602082019050818103600083015261131f816112e3565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061135c601d83610d1a565b915061136782611326565b602082019050919050565b6000602082019050818103600083015261138b8161134f565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006113ee602583610d1a565b91506113f982611392565b604082019050919050565b6000602082019050818103600083015261141d816113e1565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611480602383610d1a565b915061148b82611424565b604082019050919050565b600060208201905081810360008301526114af81611473565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611512602683610d1a565b915061151d826114b6565b604082019050919050565b6000602082019050818103600083015261154181611505565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061157e602083610d1a565b915061158982611548565b602082019050919050565b600060208201905081810360008301526115ad81611571565b905091905056fea2646970667358221220d0f2d7949b0dc7a5f08db447c413f2dac70597d34702eab3b4f4797b48da791f64736f6c63430008110033";
>>>>>>> 474e84f58ea972ada3ae248b236d7bd84d88f26f

type CHERTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CHERTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CHERToken__factory extends ContractFactory {
  constructor(...args: CHERTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CHERToken> {
    return super.deploy(initialSupply, overrides || {}) as Promise<CHERToken>;
  }
  override getDeployTransaction(
    initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialSupply, overrides || {});
  }
  override attach(address: string): CHERToken {
    return super.attach(address) as CHERToken;
  }
  override connect(signer: Signer): CHERToken__factory {
    return super.connect(signer) as CHERToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CHERTokenInterface {
    return new utils.Interface(_abi) as CHERTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CHERToken {
    return new Contract(address, _abi, signerOrProvider) as CHERToken;
  }
}
