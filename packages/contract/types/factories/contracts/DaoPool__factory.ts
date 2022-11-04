/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { DaoPool, DaoPoolInterface } from "../../contracts/DaoPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolOwnerAddress",
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
      {
        internalType: "address",
        name: "_cheersDappAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_cheerProjectPoolAddress",
        type: "address",
      },
    ],
    name: "addCheerProject",
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
        name: "_projectPoolAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_cherAmount",
        type: "uint256",
      },
    ],
    name: "approveCherToProjectPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cherAmount",
        type: "uint256",
      },
    ],
    name: "chargeCher",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cheersDapp",
    outputs: [
      {
        internalType: "contract ICheers",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cher",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "daoAddress",
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
    name: "daoIcon",
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
    name: "daoName",
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
    name: "daoProfile",
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
    name: "getAllChallengeProjects",
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
  {
    inputs: [],
    name: "getDaoAddress",
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
    name: "getDaoIcon",
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
    name: "getDaoName",
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
    name: "getDaoPoolAddress",
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
    name: "getDaoProfile",
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
    name: "getTotalCher",
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
        name: "",
        type: "address",
      },
    ],
    name: "isCheer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
    name: "newProjectFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "projectsData",
    outputs: [
      {
        internalType: "contract IProjectsData",
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
        internalType: "address",
        name: "_cheerProjectPoolAddress",
        type: "address",
      },
    ],
    name: "removeCheerProject",
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
        name: "CHERAddress",
        type: "address",
      },
    ],
    name: "setCHER",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "projectsDataAddress",
        type: "address",
      },
    ],
    name: "setProjectsData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cherAmount",
        type: "uint256",
      },
    ],
    name: "withdrawCher",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600a80546001600160a01b0319167338d4172dde4e50a8cdd8b39abc572443d18ad72d1790553480156200003757600080fd5b5060405162002adb38038062002adb8339810160408190526200005a91620001ed565b600a54600280546001600160a01b03199081166001600160a01b039384161790915560058054928816928216831790556006805490911690911790556007620000a4858262000334565b506008620000b3848262000334565b506009620000c2838262000334565b50600480546001600160a01b03199081166001600160a01b0393841690811790925560038054821690921790915560005460018054919093169116179055506200040092505050565b80516001600160a01b03811681146200012357600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200015057600080fd5b81516001600160401b03808211156200016d576200016d62000128565b604051601f8301601f19908116603f0116810190828211818310171562000198576200019862000128565b81604052838152602092508683858801011115620001b557600080fd5b600091505b83821015620001d95785820183015181830184015290820190620001ba565b600093810190920192909252949350505050565b600080600080600060a086880312156200020657600080fd5b62000211866200010b565b60208701519095506001600160401b03808211156200022f57600080fd5b6200023d89838a016200013e565b955060408801519150808211156200025457600080fd5b6200026289838a016200013e565b945060608801519150808211156200027957600080fd5b5062000288888289016200013e565b92505062000299608087016200010b565b90509295509295909350565b600181811c90821680620002ba57607f821691505b602082108103620002db57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200032f57600081815260208120601f850160051c810160208610156200030a5750805b601f850160051c820191505b818110156200032b5782815560010162000316565b5050505b505050565b81516001600160401b0381111562000350576200035062000128565b6200036881620003618454620002a5565b84620002e1565b602080601f831160018114620003a05760008415620003875750858301515b600019600386901b1c1916600185901b1785556200032b565b600085815260208120601f198616915b82811015620003d157888601518255948401946001909101908401620003b0565b5085821015620003f05787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6126cb80620004106000396000f3fe60806040523480156200001157600080fd5b5060043610620001695760003560e01c8063649c3f2b11620000d3578063cc371c141162000086578063cc371c1414620002f8578063d39d655e1462000311578063d4a4fc4c146200034e578063d4dadf011462000358578063f6acee23146200036f578063ffd17c89146200038357600080fd5b8063649c3f2b14620002a55780636e1c120214620002af57806397987faf14620002b9578063a36b5fa214620002d0578063a7319fd814620002e7578063a80fcbf014620002ee57600080fd5b806348976936116200012c5780634897693614620001f25780634a37787014620001fc5780634c18308a14620002245780634d7adf09146200023b5780634ec9e9dc146200024f5780635e001c34146200026857600080fd5b80631d68702d146200016e5780631d90fb1f14620001985780632131c68c14620001ac578063250a12d914620001c05780632f593a0b14620001d9575b600080fd5b6006546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b6003546200017b906001600160a01b031681565b6006546200017b906001600160a01b031681565b620001ca620003a9565b6040519081526020016200018f565b620001e36200041e565b6040516200018f919062000cda565b620001e3620004b8565b620002136200020d36600462000d0f565b6200054e565b60405190151581526020016200018f565b6200017b6200023536600462000e2c565b620005d3565b6001546200017b906001600160a01b031681565b620002666200026036600462000ebe565b62000630565b005b620002666200027936600462000d0f565b600a80546001600160a01b039092166001600160a01b0319928316811790915560028054909216179055565b620001e362000757565b620001e362000766565b62000266620002ca36600462000eed565b62000775565b62000266620002e136600462000eed565b6200089e565b306200017b565b620001e362000990565b62000302620009a1565b6040516200018f919062000f07565b620002666200032236600462000d0f565b600080546001600160a01b039092166001600160a01b0319928316811790915560018054909216179055565b620001e362000a15565b620002136200036936600462000d0f565b62000a26565b6002546200017b906001600160a01b031681565b620002136200039436600462000d0f565b600c6020526000908152604090205460ff1681565b6002546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015620003f3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000419919062000ffb565b905090565b6060600880546200042f9062001015565b80601f01602080910402602001604051908101604052809291908181526020018280546200045d9062001015565b8015620004ae5780601f106200048257610100808354040283529160200191620004ae565b820191906000526020600020905b8154815290600101906020018083116200049057829003601f168201915b5050505050905090565b60078054620004c79062001015565b80601f0160208091040260200160405190810160405280929190818152602001828054620004f59062001015565b8015620005465780601f106200051a5761010080835404028352916020019162000546565b820191906000526020600020905b8154815290600101906020018083116200052857829003601f168201915b505050505081565b6001600160a01b0381166000908152600c602052604081205460ff16620005b05760405162461bcd60e51b815260206004820152601160248201527030b63932b0b23c903737ba1031b432b2b960791b60448201526064015b60405180910390fd5b506001600160a01b03166000908152600c60205260408120805460ff1916905590565b6000803030868686604051620005e99062000c78565b620005f995949392919062001051565b604051809103906000f08015801562000616573d6000803e3d6000fd5b50905062000628813087878762000c01565b949350505050565b6005546001600160a01b031633146200064857600080fd5b6002546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa15801562000691573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006b7919062000ffb565b1015620006d85760405162461bcd60e51b8152600401620005a790620010b5565b60025460405163095ea7b360e01b81526001600160a01b038481166004830152602482018490529091169063095ea7b3906044016020604051808303816000875af11580156200072c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007529190620010df565b505050565b60088054620004c79062001015565b60098054620004c79062001015565b6005546001600160a01b031633146200078d57600080fd5b6002546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa158015620007d6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007fc919062000ffb565b10156200081d5760405162461bcd60e51b8152600401620005a790620010b5565b60025460065460405163a9059cbb60e01b81526001600160a01b0391821660048201526024810184905291169063a9059cbb906044015b6020604051808303816000875af115801562000874573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200089a9190620010df565b5050565b6005546001600160a01b03163314620008b657600080fd5b6002546006546040516370a0823160e01b81526001600160a01b039182166004820152839291909116906370a0823190602401602060405180830381865afa15801562000907573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200092d919062000ffb565b10156200094e5760405162461bcd60e51b8152600401620005a790620010b5565b6002546006546040516323b872dd60e01b81526001600160a01b039182166004820152306024820152604481018490529116906323b872dd9060640162000854565b6060600980546200042f9062001015565b6001546040516358cedf5760e01b81523060048201526060916001600160a01b0316906358cedf5790602401600060405180830381865afa158015620009eb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000419919081019062001161565b6060600780546200042f9062001015565b6001600160a01b0381166000908152600c602052604081205460ff161562000a815760405162461bcd60e51b815260206004820152600d60248201526c30b63932b0b23c9031b432b2b960991b6044820152606401620005a7565b600b5460000362000af557600b805460018082019092557f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db90180546001600160a01b0319166001600160a01b0385169081179091556000908152600c60205260409020805460ff1916909117905562000be2565b60005b600b5481101562000be057826001600160a01b0316600b828154811062000b235762000b236200130a565b6000918252602090912001546001600160a01b03160362000b67576001600160a01b0383166000908152600c60205260409020805460ff1916600117905562000bcb565b600b805460018082019092557f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db90180546001600160a01b0319166001600160a01b0386169081179091556000908152600c60205260409020805460ff191690911790555b8062000bd78162001320565b91505062000af8565b505b506001600160a01b03166000908152600c602052604090205460ff1690565b60015460405163c34b28f560e01b81526001600160a01b039091169063c34b28f59062000c3d9030908990899089908990899060040162001348565b600060405180830381600087803b15801562000c5857600080fd5b505af115801562000c6d573d6000803e3d6000fd5b505050505050505050565b6112ed80620013a983390190565b60005b8381101562000ca357818101518382015260200162000c89565b50506000910152565b6000815180845262000cc681602086016020860162000c86565b601f01601f19169290920160200192915050565b60208152600062000cef602083018462000cac565b9392505050565b6001600160a01b038116811462000d0c57600080fd5b50565b60006020828403121562000d2257600080fd5b813562000cef8162000cf6565b634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171562000d6b5762000d6b62000d2f565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171562000d9d5762000d9d62000d2f565b604052919050565b600067ffffffffffffffff82111562000dc25762000dc262000d2f565b50601f01601f191660200190565b600082601f83011262000de257600080fd5b813562000df962000df38262000da5565b62000d71565b81815284602083860101111562000e0f57600080fd5b816020850160208301376000918101602001919091529392505050565b60008060006060848603121562000e4257600080fd5b833567ffffffffffffffff8082111562000e5b57600080fd5b62000e698783880162000dd0565b9450602086013591508082111562000e8057600080fd5b62000e8e8783880162000dd0565b9350604086013591508082111562000ea557600080fd5b5062000eb48682870162000dd0565b9150509250925092565b6000806040838503121562000ed257600080fd5b823562000edf8162000cf6565b946020939093013593505050565b60006020828403121562000f0057600080fd5b5035919050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101562000fed57888303603f19018552815180516001600160a01b0390811685528882015116888501528681015160e09062000f76898701826001600160a01b03169052565b50606080830151828288015262000f908388018262000cac565b925050506080808301518683038288015262000fad838262000cac565b9250505060a0808301518683038288015262000fca838262000cac565b60c094850151979094019690965250509487019492509086019060010162000f2e565b509098975050505050505050565b6000602082840312156200100e57600080fd5b5051919050565b600181811c908216806200102a57607f821691505b6020821081036200104b57634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160a01b0386811682528516602082015260a0604082018190526000906200107f9083018662000cac565b828103606084015262001093818662000cac565b90508281036080840152620010a9818562000cac565b98975050505050505050565b60208082526010908201526f1b9bdd081a5b9cdd59999a58da595b9d60821b604082015260600190565b600060208284031215620010f257600080fd5b8151801515811462000cef57600080fd5b8051620011108162000cf6565b919050565b600082601f8301126200112757600080fd5b81516200113862000df38262000da5565b8181528460208386010111156200114e57600080fd5b6200062882602083016020870162000c86565b600060208083850312156200117557600080fd5b825167ffffffffffffffff808211156200118e57600080fd5b818501915085601f830112620011a357600080fd5b815181811115620011b857620011b862000d2f565b8060051b620011c985820162000d71565b9182528381018501918581019089841115620011e457600080fd5b86860192505b83831015620012fd578251858111156200120357600080fd5b860160e0818c03601f190112156200121b5760008081fd5b6200122562000d45565b6200123289830162001103565b815260406200124381840162001103565b8a83015260606200125681850162001103565b82840152608091508184015189811115620012715760008081fd5b620012818f8d8388010162001115565b82850152505060a080840151898111156200129c5760008081fd5b620012ac8f8d8388010162001115565b838501525060c091508184015189811115620012c85760008081fd5b620012d88f8d8388010162001115565b82850152505060e08301518183015250808452505086820191508683019250620011ea565b9998505050505050505050565b634e487b7160e01b600052603260045260246000fd5b6000600182016200134157634e487b7160e01b600052601160045260246000fd5b5060010190565b6001600160a01b03878116825286811660208301528516604082015260c0606082018190526000906200137e9083018662000cac565b828103608084015262001392818662000cac565b905082810360a0840152620012fd818562000cac56fe6080604052600980546001600160a01b0319167338d4172dde4e50a8cdd8b39abc572443d18ad72d1790553480156200003757600080fd5b50604051620012ed380380620012ed8339810160408190526200005a91620001f4565b600b54600c80546001600160a01b03199081166001600160a01b0393841617909155600d54600e80548316918416919091179055600954600080548316918416919091179055600254600180548316918416919091179055600380548216331790556004805488841690831617905560058054928716929091169190911790556006620000e884826200033b565b506007620000f783826200033b565b5060086200010682826200033b565b50505050505062000407565b80516001600160a01b03811681146200012a57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200015757600080fd5b81516001600160401b03808211156200017457620001746200012f565b604051601f8301601f19908116603f011681019082821181831017156200019f576200019f6200012f565b81604052838152602092508683858801011115620001bc57600080fd5b600091505b83821015620001e05785820183015181830184015290820190620001c1565b600093810190920192909252949350505050565b600080600080600060a086880312156200020d57600080fd5b620002188662000112565b9450620002286020870162000112565b60408701519094506001600160401b03808211156200024657600080fd5b6200025489838a0162000145565b945060608801519150808211156200026b57600080fd5b6200027989838a0162000145565b935060808801519150808211156200029057600080fd5b506200029f8882890162000145565b9150509295509295909350565b600181811c90821680620002c157607f821691505b602082108103620002e257634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200033657600081815260208120601f850160051c81016020861015620003115750805b601f850160051c820191505b8181101562000332578281556001016200031d565b5050505b505050565b81516001600160401b038111156200035757620003576200012f565b6200036f81620003688454620002ac565b84620002e8565b602080601f831160018114620003a757600084156200038e5750858301515b600019600386901b1c1916600185901b17855562000332565b600085815260208120601f198616915b82811015620003d857888601518255948401946001909101908401620003b7565b5085821015620003f75787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610ed680620004176000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80635e001c341161008c57806373531cfe1161006657806373531cfe146102115780639a33e3001461021a578063f48ca5c114610222578063f6acee231461023557600080fd5b80635e001c34146101b157806365550ba4146101eb57806371b3423d146101fe57600080fd5b806316e66f43146100d45780631a314956146101105780631d90fb1f1461012e578063250a12d91461015957806332b04e2b1461016f5780634a73941e14610177575b600080fd5b61010e6100e2366004610a0d565b600b80546001600160a01b039092166001600160a01b03199283168117909155600c8054909216179055565b005b610118610248565b6040516101259190610a81565b60405180910390f35b600154610141906001600160a01b031681565b6040516001600160a01b039091168152602001610125565b6101616102d6565b604051908152602001610125565b610118610348565b61010e610185366004610a0d565b600d80546001600160a01b039092166001600160a01b03199283168117909155600e8054909216179055565b61010e6101bf366004610a0d565b600980546001600160a01b039092166001600160a01b0319928316811790915560008054909216179055565b61010e6101f9366004610b2c565b610355565b600c54610141906001600160a01b031681565b610161600a5481565b610118610484565b600e54610141906001600160a01b031681565b600054610141906001600160a01b031681565b6007805461025590610bb6565b80601f016020809104026020016040519081016040528092919081815260200182805461028190610bb6565b80156102ce5780601f106102a3576101008083540402835291602001916102ce565b820191906000526020600020905b8154815290600101906020018083116102b157829003601f168201915b505050505081565b600080546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa15801561031f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103439190610bf0565b905090565b6008805461025590610bb6565b600054600c54604051630accd1a960e11b815233600482015284926001600160a01b03908116926370a0823192911690631599a35290602401602060405180830381865afa1580156103ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103cf9190610c09565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa158015610413573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104379190610bf0565b10156104765760405162461bcd60e51b815260206004820152600a60248201526909cdee840cadcdeeaced60b31b604482015260640160405180910390fd5b6104808282610491565b5050565b6006805461025590610bb6565b600054600c54604051630accd1a960e11b81523360048201526001600160a01b03928316926323b872dd921690631599a35290602401602060405180830381865afa1580156104e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105089190610c09565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152306024820152604481018590526064016020604051808303816000875af115801561055b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057f9190610c26565b50600e54600c54604051630accd1a960e11b81523360048201526001600160a01b03928316926308df15a3923092911690631599a35290602401602060405180830381865afa1580156105d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fa9190610c09565b4285876040518663ffffffff1660e01b815260040161061d959493929190610c48565b600060405180830381600087803b15801561063757600080fd5b505af115801561064b573d6000803e3d6000fd5b505050506104808280600a60008282546106659190610ca3565b9091555060009050606461067a836046610cbc565b6106849190610cd3565b905060006064610695846019610cbc565b61069f9190610cd3565b90506000816106ae8486610cf5565b6106b89190610cf5565b905060005b600e546040516312d9ac6960e01b81523060048201526001600160a01b03909116906312d9ac6990602401600060405180830381865afa158015610705573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261072d9190810190610d08565b518110156108f657600054600e546040516312d9ac6960e01b81523060048201526001600160a01b039283169263a9059cbb9216906312d9ac6990602401600060405180830381865afa158015610788573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107b09190810190610d08565b83815181106107c1576107c1610e71565b6020908102919091018101510151600a54600e546040516312d9ac6960e01b81523060048201526001600160a01b03909116906312d9ac6990602401600060405180830381865afa15801561081a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108429190810190610d08565b858151811061085357610853610e71565b6020026020010151608001518861086a9190610cbc565b6108749190610cd3565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af11580156108bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e39190610c26565b50806108ee81610e87565b9150506106bd565b506000546004805460405163a9059cbb60e01b81526001600160a01b0391821692810192909252602482018590529091169063a9059cbb906044016020604051808303816000875af1158015610950573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109749190610c26565b5060005460055460405163a9059cbb60e01b81526001600160a01b0391821660048201526024810184905291169063a9059cbb906044016020604051808303816000875af11580156109ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ee9190610c26565b5050505050565b6001600160a01b0381168114610a0a57600080fd5b50565b600060208284031215610a1f57600080fd5b8135610a2a816109f5565b9392505050565b60005b83811015610a4c578181015183820152602001610a34565b50506000910152565b60008151808452610a6d816020860160208601610a31565b601f01601f19169290920160200192915050565b602081526000610a2a6020830184610a55565b634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715610acd57610acd610a94565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610afc57610afc610a94565b604052919050565b600067ffffffffffffffff821115610b1e57610b1e610a94565b50601f01601f191660200190565b60008060408385031215610b3f57600080fd5b82359150602083013567ffffffffffffffff811115610b5d57600080fd5b8301601f81018513610b6e57600080fd5b8035610b81610b7c82610b04565b610ad3565b818152866020838501011115610b9657600080fd5b816020840160208301376000602083830101528093505050509250929050565b600181811c90821680610bca57607f821691505b602082108103610bea57634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215610c0257600080fd5b5051919050565b600060208284031215610c1b57600080fd5b8151610a2a816109f5565b600060208284031215610c3857600080fd5b81518015158114610a2a57600080fd5b6001600160a01b038681168252851660208201526040810184905260a060608201819052600090610c7b90830185610a55565b90508260808301529695505050505050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610cb657610cb6610c8d565b92915050565b8082028115828204841417610cb657610cb6610c8d565b600082610cf057634e487b7160e01b600052601260045260246000fd5b500490565b81810381811115610cb657610cb6610c8d565b60006020808385031215610d1b57600080fd5b825167ffffffffffffffff80821115610d3357600080fd5b818501915085601f830112610d4757600080fd5b815181811115610d5957610d59610a94565b8060051b610d68858201610ad3565b9182528381018501918581019089841115610d8257600080fd5b86860192505b83831015610e6457825185811115610d9f57600080fd5b860160a0818c03601f19011215610db557600080fd5b610dbd610aaa565b88820151610dca816109f5565b8152604082810151610ddb816109f5565b828b0152606083015181830152608083015188811115610dfb5760008081fd5b8301603f81018e13610e0d5760008081fd5b8a810151610e1d610b7c82610b04565b8181528f84838501011115610e325760008081fd5b610e41828e8301868601610a31565b606085015250505060a09190910151608082015282529186019190860190610d88565b9998505050505050505050565b634e487b7160e01b600052603260045260246000fd5b600060018201610e9957610e99610c8d565b506001019056fea264697066735822122058b3866946725138a41496712ac5d0c095a82eb3a36afca2a66061f1c5481dcc64736f6c63430008110033a26469706673582212207162c377604386307ce761fe7194a525604ff2321d8b69013a41fd9fbfaa064f64736f6c63430008110033";

type DaoPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DaoPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DaoPool__factory extends ContractFactory {
  constructor(...args: DaoPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _poolOwnerAddress: PromiseOrValue<string>,
    _daoName: PromiseOrValue<string>,
    _daoProfile: PromiseOrValue<string>,
    _daoIcon: PromiseOrValue<string>,
    _cheersDappAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DaoPool> {
    return super.deploy(
      _poolOwnerAddress,
      _daoName,
      _daoProfile,
      _daoIcon,
      _cheersDappAddress,
      overrides || {}
    ) as Promise<DaoPool>;
  }
  override getDeployTransaction(
    _poolOwnerAddress: PromiseOrValue<string>,
    _daoName: PromiseOrValue<string>,
    _daoProfile: PromiseOrValue<string>,
    _daoIcon: PromiseOrValue<string>,
    _cheersDappAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _poolOwnerAddress,
      _daoName,
      _daoProfile,
      _daoIcon,
      _cheersDappAddress,
      overrides || {}
    );
  }
  override attach(address: string): DaoPool {
    return super.attach(address) as DaoPool;
  }
  override connect(signer: Signer): DaoPool__factory {
    return super.connect(signer) as DaoPool__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DaoPoolInterface {
    return new utils.Interface(_abi) as DaoPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DaoPool {
    return new Contract(address, _abi, signerOrProvider) as DaoPool;
  }
}
