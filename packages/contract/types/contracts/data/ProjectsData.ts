/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace SharedStruct {
  export type ProjectStruct = {
    projectOwnerAddress: PromiseOrValue<string>;
    projectAddress: PromiseOrValue<string>;
    belongDaoAddress: PromiseOrValue<string>;
    projectName: PromiseOrValue<string>;
    projectContents: PromiseOrValue<string>;
    projectReword: PromiseOrValue<string>;
    creationTime: PromiseOrValue<BigNumberish>;
  };

  export type ProjectStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber
  ] & {
    projectOwnerAddress: string;
    projectAddress: string;
    belongDaoAddress: string;
    projectName: string;
    projectContents: string;
    projectReword: string;
    creationTime: BigNumber;
  };

  export type CheerStruct = {
    cheerPoolAddress: PromiseOrValue<string>;
    creationTime: PromiseOrValue<BigNumberish>;
    message: PromiseOrValue<string>;
    cher: PromiseOrValue<BigNumberish>;
  };

  export type CheerStructOutput = [string, BigNumber, string, BigNumber] & {
    cheerPoolAddress: string;
    creationTime: BigNumber;
    message: string;
    cher: BigNumber;
  };
}

export interface ProjectsDataInterface extends utils.Interface {
  functions: {
    "addEachProjectCheerList(address,address,uint256,string,uint256)": FunctionFragment;
    "addProjects(address,address,address,string,string,string)": FunctionFragment;
    "allProjectsList(uint256)": FunctionFragment;
    "eachProjectCheerList(address,uint256)": FunctionFragment;
    "eachProjectsList(address,uint256)": FunctionFragment;
    "getAllProjectList()": FunctionFragment;
    "getEachProjectCheerList(address)": FunctionFragment;
    "getEachProjectList(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addEachProjectCheerList"
      | "addProjects"
      | "allProjectsList"
      | "eachProjectCheerList"
      | "eachProjectsList"
      | "getAllProjectList"
      | "getEachProjectCheerList"
      | "getEachProjectList"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addEachProjectCheerList",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addProjects",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "allProjectsList",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "eachProjectCheerList",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "eachProjectsList",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllProjectList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEachProjectCheerList",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getEachProjectList",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addEachProjectCheerList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addProjects",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allProjectsList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eachProjectCheerList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eachProjectsList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllProjectList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEachProjectCheerList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEachProjectList",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ProjectsData extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProjectsDataInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addEachProjectCheerList(
      _projectPoolAddress: PromiseOrValue<string>,
      _cheerPoolAddres: PromiseOrValue<string>,
      _creationTime: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      _cher: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addProjects(
      _projectOwnerAddress: PromiseOrValue<string>,
      _projectPoolAddress: PromiseOrValue<string>,
      _belongDaoAddress: PromiseOrValue<string>,
      _projectName: PromiseOrValue<string>,
      _projectContents: PromiseOrValue<string>,
      _projectReword: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    allProjectsList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string, BigNumber] & {
        projectOwnerAddress: string;
        projectAddress: string;
        belongDaoAddress: string;
        projectName: string;
        projectContents: string;
        projectReword: string;
        creationTime: BigNumber;
      }
    >;

    eachProjectCheerList(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, BigNumber] & {
        cheerPoolAddress: string;
        creationTime: BigNumber;
        message: string;
        cher: BigNumber;
      }
    >;

    eachProjectsList(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string, BigNumber] & {
        projectOwnerAddress: string;
        projectAddress: string;
        belongDaoAddress: string;
        projectName: string;
        projectContents: string;
        projectReword: string;
        creationTime: BigNumber;
      }
    >;

    getAllProjectList(
      overrides?: CallOverrides
    ): Promise<[SharedStruct.ProjectStructOutput[]]>;

    getEachProjectCheerList(
      _projectPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[SharedStruct.CheerStructOutput[]]>;

    getEachProjectList(
      _projectOwnerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[SharedStruct.ProjectStructOutput[]]>;
  };

  addEachProjectCheerList(
    _projectPoolAddress: PromiseOrValue<string>,
    _cheerPoolAddres: PromiseOrValue<string>,
    _creationTime: PromiseOrValue<BigNumberish>,
    _message: PromiseOrValue<string>,
    _cher: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addProjects(
    _projectOwnerAddress: PromiseOrValue<string>,
    _projectPoolAddress: PromiseOrValue<string>,
    _belongDaoAddress: PromiseOrValue<string>,
    _projectName: PromiseOrValue<string>,
    _projectContents: PromiseOrValue<string>,
    _projectReword: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  allProjectsList(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string, string, BigNumber] & {
      projectOwnerAddress: string;
      projectAddress: string;
      belongDaoAddress: string;
      projectName: string;
      projectContents: string;
      projectReword: string;
      creationTime: BigNumber;
    }
  >;

  eachProjectCheerList(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, BigNumber] & {
      cheerPoolAddress: string;
      creationTime: BigNumber;
      message: string;
      cher: BigNumber;
    }
  >;

  eachProjectsList(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string, string, BigNumber] & {
      projectOwnerAddress: string;
      projectAddress: string;
      belongDaoAddress: string;
      projectName: string;
      projectContents: string;
      projectReword: string;
      creationTime: BigNumber;
    }
  >;

  getAllProjectList(
    overrides?: CallOverrides
  ): Promise<SharedStruct.ProjectStructOutput[]>;

  getEachProjectCheerList(
    _projectPoolAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<SharedStruct.CheerStructOutput[]>;

  getEachProjectList(
    _projectOwnerAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<SharedStruct.ProjectStructOutput[]>;

  callStatic: {
    addEachProjectCheerList(
      _projectPoolAddress: PromiseOrValue<string>,
      _cheerPoolAddres: PromiseOrValue<string>,
      _creationTime: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      _cher: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addProjects(
      _projectOwnerAddress: PromiseOrValue<string>,
      _projectPoolAddress: PromiseOrValue<string>,
      _belongDaoAddress: PromiseOrValue<string>,
      _projectName: PromiseOrValue<string>,
      _projectContents: PromiseOrValue<string>,
      _projectReword: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    allProjectsList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string, BigNumber] & {
        projectOwnerAddress: string;
        projectAddress: string;
        belongDaoAddress: string;
        projectName: string;
        projectContents: string;
        projectReword: string;
        creationTime: BigNumber;
      }
    >;

    eachProjectCheerList(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, BigNumber] & {
        cheerPoolAddress: string;
        creationTime: BigNumber;
        message: string;
        cher: BigNumber;
      }
    >;

    eachProjectsList(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string, BigNumber] & {
        projectOwnerAddress: string;
        projectAddress: string;
        belongDaoAddress: string;
        projectName: string;
        projectContents: string;
        projectReword: string;
        creationTime: BigNumber;
      }
    >;

    getAllProjectList(
      overrides?: CallOverrides
    ): Promise<SharedStruct.ProjectStructOutput[]>;

    getEachProjectCheerList(
      _projectPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<SharedStruct.CheerStructOutput[]>;

    getEachProjectList(
      _projectOwnerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<SharedStruct.ProjectStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    addEachProjectCheerList(
      _projectPoolAddress: PromiseOrValue<string>,
      _cheerPoolAddres: PromiseOrValue<string>,
      _creationTime: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      _cher: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addProjects(
      _projectOwnerAddress: PromiseOrValue<string>,
      _projectPoolAddress: PromiseOrValue<string>,
      _belongDaoAddress: PromiseOrValue<string>,
      _projectName: PromiseOrValue<string>,
      _projectContents: PromiseOrValue<string>,
      _projectReword: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    allProjectsList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    eachProjectCheerList(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    eachProjectsList(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllProjectList(overrides?: CallOverrides): Promise<BigNumber>;

    getEachProjectCheerList(
      _projectPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEachProjectList(
      _projectOwnerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addEachProjectCheerList(
      _projectPoolAddress: PromiseOrValue<string>,
      _cheerPoolAddres: PromiseOrValue<string>,
      _creationTime: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      _cher: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addProjects(
      _projectOwnerAddress: PromiseOrValue<string>,
      _projectPoolAddress: PromiseOrValue<string>,
      _belongDaoAddress: PromiseOrValue<string>,
      _projectName: PromiseOrValue<string>,
      _projectContents: PromiseOrValue<string>,
      _projectReword: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    allProjectsList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    eachProjectCheerList(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    eachProjectsList(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllProjectList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEachProjectCheerList(
      _projectPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEachProjectList(
      _projectOwnerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
