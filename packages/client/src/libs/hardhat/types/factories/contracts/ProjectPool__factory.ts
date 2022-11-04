/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ProjectPool,
  ProjectPoolInterface,
} from "../../contracts/ProjectPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_ownerPoolAddress",
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
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "cheerListData",
    outputs: [
      {
        internalType: "contract ICheerListData",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
        internalType: "uint256",
        name: "_cher",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_cheerMessage",
        type: "string",
      },
    ],
    name: "mintCheer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "poolListData",
    outputs: [
      {
        internalType: "contract IPoolListData",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "projectContents",
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
    name: "projectName",
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
    name: "projectReword",
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
        name: "poolListDataAddress",
        type: "address",
      },
    ],
    name: "setPoolListData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalCher",
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
];

const _bytecode =
  "0x60806040527338d4172dde4e50a8cdd8b39abc572443d18ad72d600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503480156200006657600080fd5b506040516200236d3803806200236d83398181016040528101906200008c919062000513565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600e60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260069081620002eb919062000843565b508160079081620002fd919062000843565b5080600890816200030f919062000843565b5050505050506200092a565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200035c826200032f565b9050919050565b6200036e816200034f565b81146200037a57600080fd5b50565b6000815190506200038e8162000363565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620003e9826200039e565b810181811067ffffffffffffffff821117156200040b576200040a620003af565b5b80604052505050565b6000620004206200031b565b90506200042e8282620003de565b919050565b600067ffffffffffffffff821115620004515762000450620003af565b5b6200045c826200039e565b9050602081019050919050565b60005b83811015620004895780820151818401526020810190506200046c565b60008484015250505050565b6000620004ac620004a68462000433565b62000414565b905082815260208101848484011115620004cb57620004ca62000399565b5b620004d884828562000469565b509392505050565b600082601f830112620004f857620004f762000394565b5b81516200050a84826020860162000495565b91505092915050565b600080600080600060a0868803121562000532576200053162000325565b5b600062000542888289016200037d565b955050602062000555888289016200037d565b945050604086015167ffffffffffffffff8111156200057957620005786200032a565b5b6200058788828901620004e0565b935050606086015167ffffffffffffffff811115620005ab57620005aa6200032a565b5b620005b988828901620004e0565b925050608086015167ffffffffffffffff811115620005dd57620005dc6200032a565b5b620005eb88828901620004e0565b9150509295509295909350565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200064b57607f821691505b60208210810362000661576200066062000603565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006cb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200068c565b620006d786836200068c565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620007246200071e6200071884620006ef565b620006f9565b620006ef565b9050919050565b6000819050919050565b620007408362000703565b620007586200074f826200072b565b84845462000699565b825550505050565b600090565b6200076f62000760565b6200077c81848462000735565b505050565b5b81811015620007a4576200079860008262000765565b60018101905062000782565b5050565b601f821115620007f357620007bd8162000667565b620007c8846200067c565b81016020851015620007d8578190505b620007f0620007e7856200067c565b83018262000781565b50505b505050565b600082821c905092915050565b60006200081860001984600802620007f8565b1980831691505092915050565b600062000833838362000805565b9150826002028217905092915050565b6200084e82620005f8565b67ffffffffffffffff8111156200086a5762000869620003af565b5b62000876825462000632565b62000883828285620007a8565b600060209050601f831160018114620008bb5760008415620008a6578287015190505b620008b2858262000825565b86555062000922565b601f198416620008cb8662000667565b60005b82811015620008f557848901518255600182019150602085019450602081019050620008ce565b8683101562000915578489015162000911601f89168262000805565b8355505b6001600288020188555050505b505050505050565b611a33806200093a6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806365550ba41161007157806365550ba41461016957806371b3423d1461018557806373531cfe146101a35780639a33e300146101c1578063f48ca5c1146101df578063f6acee23146101fd576100b4565b806316e66f43146100b95780631a314956146100d55780631d90fb1f146100f3578063250a12d91461011157806332b04e2b1461012f5780635e001c341461014d575b600080fd5b6100d360048036038101906100ce9190610f65565b61021b565b005b6100dd6102a0565b6040516100ea9190611022565b60405180910390f35b6100fb61032e565b60405161010891906110a3565b60405180910390f35b610119610354565b60405161012691906110d7565b60405180910390f35b6101376103f6565b6040516101449190611022565b60405180910390f35b61016760048036038101906101629190610f65565b610484565b005b610183600480360381019061017e9190611253565b610508565b005b61018d61068d565b60405161019a91906112d0565b60405180910390f35b6101ab6106b3565b6040516101b891906110d7565b60405180910390f35b6101c96106b9565b6040516101d69190611022565b60405180910390f35b6101e7610747565b6040516101f4919061130c565b60405180910390f35b61020561076d565b6040516102129190611348565b60405180910390f35b80600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600780546102ad90611392565b80601f01602080910402602001604051908101604052809291908181526020018280546102d990611392565b80156103265780601f106102fb57610100808354040283529160200191610326565b820191906000526020600020905b81548152906001019060200180831161030957829003601f168201915b505050505081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103b091906113d2565b602060405180830381865afa1580156103cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f19190611402565b905090565b6008805461040390611392565b80601f016020809104026020016040519081016040528092919081815260200182805461042f90611392565b801561047c5780601f106104515761010080835404028352916020019161047c565b820191906000526020600020905b81548152906001019060200180831161045f57829003601f168201915b505050505081565b80600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b8160008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631599a352336040518263ffffffff1660e01b81526004016105a091906113d2565b602060405180830381865afa1580156105bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e19190611444565b6040518263ffffffff1660e01b81526004016105fd91906113d2565b602060405180830381865afa15801561061a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063e9190611402565b101561067f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610676906114bd565b60405180910390fd5b6106898282610791565b5050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a5481565b600680546106c690611392565b80601f01602080910402602001604051908101604052809291908181526020018280546106f290611392565b801561073f5780601f106107145761010080835404028352916020019161073f565b820191906000526020600020905b81548152906001019060200180831161072257829003601f168201915b505050505081565b600e60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631599a352336040518263ffffffff1660e01b815260040161082891906113d2565b602060405180830381865afa158015610845573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108699190611444565b30856040518463ffffffff1660e01b8152600401610889939291906114dd565b6020604051808303816000875af11580156108a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108cc919061154c565b50600e60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166308df15a330600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631599a352336040518263ffffffff1660e01b815260040161096791906113d2565b602060405180830381865afa158015610984573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a89190611444565b4285876040518663ffffffff1660e01b81526004016109cb959493929190611579565b600060405180830381600087803b1580156109e557600080fd5b505af11580156109f9573d6000803e3d6000fd5b50505050610a0682610a0a565b5050565b80600a6000828254610a1c9190611602565b9250508190555060006064604683610a349190611636565b610a3e91906116a7565b905060006064601984610a519190611636565b610a5b91906116a7565b90506000818385610a6c91906116d8565b610a7691906116d8565b905060005b600e60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166312d9ac69306040518263ffffffff1660e01b8152600401610ad691906113d2565b600060405180830381865afa158015610af3573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610b1c9190611914565b51811015610d6a5760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600e60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166312d9ac69306040518263ffffffff1660e01b8152600401610bbb91906113d2565b600060405180830381865afa158015610bd8573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610c019190611914565b8381518110610c1357610c1261195d565b5b602002602001015160200151600a54600e60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166312d9ac69306040518263ffffffff1660e01b8152600401610c7d91906113d2565b600060405180830381865afa158015610c9a573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610cc39190611914565b8581518110610cd557610cd461195d565b5b60200260200101516080015188610cec9190611636565b610cf691906116a7565b6040518363ffffffff1660e01b8152600401610d1392919061198c565b6020604051808303816000875af1158015610d32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d56919061154c565b508080610d62906119b5565b915050610a7b565b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518363ffffffff1660e01b8152600401610de892919061198c565b6020604051808303816000875af1158015610e07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2b919061154c565b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b8152600401610ea992919061198c565b6020604051808303816000875af1158015610ec8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eec919061154c565b5050505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f3282610f07565b9050919050565b610f4281610f27565b8114610f4d57600080fd5b50565b600081359050610f5f81610f39565b92915050565b600060208284031215610f7b57610f7a610efd565b5b6000610f8984828501610f50565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610fcc578082015181840152602081019050610fb1565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ff482610f92565b610ffe8185610f9d565b935061100e818560208601610fae565b61101781610fd8565b840191505092915050565b6000602082019050818103600083015261103c8184610fe9565b905092915050565b6000819050919050565b600061106961106461105f84610f07565b611044565b610f07565b9050919050565b600061107b8261104e565b9050919050565b600061108d82611070565b9050919050565b61109d81611082565b82525050565b60006020820190506110b86000830184611094565b92915050565b6000819050919050565b6110d1816110be565b82525050565b60006020820190506110ec60008301846110c8565b92915050565b6110fb816110be565b811461110657600080fd5b50565b600081359050611118816110f2565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61116082610fd8565b810181811067ffffffffffffffff8211171561117f5761117e611128565b5b80604052505050565b6000611192610ef3565b905061119e8282611157565b919050565b600067ffffffffffffffff8211156111be576111bd611128565b5b6111c782610fd8565b9050602081019050919050565b82818337600083830152505050565b60006111f66111f1846111a3565b611188565b90508281526020810184848401111561121257611211611123565b5b61121d8482856111d4565b509392505050565b600082601f83011261123a5761123961111e565b5b813561124a8482602086016111e3565b91505092915050565b6000806040838503121561126a57611269610efd565b5b600061127885828601611109565b925050602083013567ffffffffffffffff81111561129957611298610f02565b5b6112a585828601611225565b9150509250929050565b60006112ba82611070565b9050919050565b6112ca816112af565b82525050565b60006020820190506112e560008301846112c1565b92915050565b60006112f682611070565b9050919050565b611306816112eb565b82525050565b600060208201905061132160008301846112fd565b92915050565b600061133282611070565b9050919050565b61134281611327565b82525050565b600060208201905061135d6000830184611339565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806113aa57607f821691505b6020821081036113bd576113bc611363565b5b50919050565b6113cc81610f27565b82525050565b60006020820190506113e760008301846113c3565b92915050565b6000815190506113fc816110f2565b92915050565b60006020828403121561141857611417610efd565b5b6000611426848285016113ed565b91505092915050565b60008151905061143e81610f39565b92915050565b60006020828403121561145a57611459610efd565b5b60006114688482850161142f565b91505092915050565b7f4e6f7420656e6f75676800000000000000000000000000000000000000000000600082015250565b60006114a7600a83610f9d565b91506114b282611471565b602082019050919050565b600060208201905081810360008301526114d68161149a565b9050919050565b60006060820190506114f260008301866113c3565b6114ff60208301856113c3565b61150c60408301846110c8565b949350505050565b60008115159050919050565b61152981611514565b811461153457600080fd5b50565b60008151905061154681611520565b92915050565b60006020828403121561156257611561610efd565b5b600061157084828501611537565b91505092915050565b600060a08201905061158e60008301886113c3565b61159b60208301876113c3565b6115a860408301866110c8565b81810360608301526115ba8185610fe9565b90506115c960808301846110c8565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061160d826110be565b9150611618836110be565b92508282019050808211156116305761162f6115d3565b5b92915050565b6000611641826110be565b915061164c836110be565b925082820261165a816110be565b91508282048414831517611671576116706115d3565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006116b2826110be565b91506116bd836110be565b9250826116cd576116cc611678565b5b828204905092915050565b60006116e3826110be565b91506116ee836110be565b9250828203905081811115611706576117056115d3565b5b92915050565b600067ffffffffffffffff82111561172757611726611128565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600061175a611755846111a3565b611188565b90508281526020810184848401111561177657611775611123565b5b611781848285610fae565b509392505050565b600082601f83011261179e5761179d61111e565b5b81516117ae848260208601611747565b91505092915050565b600060a082840312156117cd576117cc61173d565b5b6117d760a0611188565b905060006117e78482850161142f565b60008301525060206117fb8482850161142f565b602083015250604061180f848285016113ed565b604083015250606082015167ffffffffffffffff81111561183357611832611742565b5b61183f84828501611789565b6060830152506080611853848285016113ed565b60808301525092915050565b600061187261186d8461170c565b611188565b9050808382526020820190506020840283018581111561189557611894611738565b5b835b818110156118dc57805167ffffffffffffffff8111156118ba576118b961111e565b5b8086016118c789826117b7565b85526020850194505050602081019050611897565b5050509392505050565b600082601f8301126118fb576118fa61111e565b5b815161190b84826020860161185f565b91505092915050565b60006020828403121561192a57611929610efd565b5b600082015167ffffffffffffffff81111561194857611947610f02565b5b611954848285016118e6565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006040820190506119a160008301856113c3565b6119ae60208301846110c8565b9392505050565b60006119c0826110be565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036119f2576119f16115d3565b5b60018201905091905056fea2646970667358221220c36dda943f50d6e223b2de0487f22c28bbc3f9063b576f2954aad002ea80d89664736f6c63430008110033";

type ProjectPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProjectPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProjectPool__factory extends ContractFactory {
  constructor(...args: ProjectPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _ownerPoolAddress: PromiseOrValue<string>,
    _belongDaoAddress: PromiseOrValue<string>,
    _projectName: PromiseOrValue<string>,
    _projectContents: PromiseOrValue<string>,
    _projectReword: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProjectPool> {
    return super.deploy(
      _ownerPoolAddress,
      _belongDaoAddress,
      _projectName,
      _projectContents,
      _projectReword,
      overrides || {}
    ) as Promise<ProjectPool>;
  }
  override getDeployTransaction(
    _ownerPoolAddress: PromiseOrValue<string>,
    _belongDaoAddress: PromiseOrValue<string>,
    _projectName: PromiseOrValue<string>,
    _projectContents: PromiseOrValue<string>,
    _projectReword: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _ownerPoolAddress,
      _belongDaoAddress,
      _projectName,
      _projectContents,
      _projectReword,
      overrides || {}
    );
  }
  override attach(address: string): ProjectPool {
    return super.attach(address) as ProjectPool;
  }
  override connect(signer: Signer): ProjectPool__factory {
    return super.connect(signer) as ProjectPool__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProjectPoolInterface {
    return new utils.Interface(_abi) as ProjectPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProjectPool {
    return new Contract(address, _abi, signerOrProvider) as ProjectPool;
  }
}
