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
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from '../common';

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

  export type ProjectStructOutput = [string, string, string, string, string, string, BigNumber] & {
    projectOwnerAddress: string;
    projectAddress: string;
    belongDaoAddress: string;
    projectName: string;
    projectContents: string;
    projectReword: string;
    creationTime: BigNumber;
  };
}

export interface UserPoolInterface extends utils.Interface {
  functions: {
    'addCheerProject(address)': FunctionFragment;
    'approveCherToProjectPool(address,uint256)': FunctionFragment;
    'chargeCher(uint256)': FunctionFragment;
    'cheersDapp()': FunctionFragment;
    'cher()': FunctionFragment;
    'getAllChallengeProjects()': FunctionFragment;
    'getTotalCher()': FunctionFragment;
    'getUserAddress()': FunctionFragment;
    'getUserIcon()': FunctionFragment;
    'getUserName()': FunctionFragment;
    'getUserPoolAddress()': FunctionFragment;
    'getUserProfile()': FunctionFragment;
    'isCheer(address)': FunctionFragment;
    'newProjectFactory(address,string,string,string)': FunctionFragment;
    'projectsData()': FunctionFragment;
    'removeCheerProject(address)': FunctionFragment;
    'userAddress()': FunctionFragment;
    'userIcon()': FunctionFragment;
    'userName()': FunctionFragment;
    'userProfile()': FunctionFragment;
    'withdrawCher(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'addCheerProject'
      | 'approveCherToProjectPool'
      | 'chargeCher'
      | 'cheersDapp'
      | 'cher'
      | 'getAllChallengeProjects'
      | 'getTotalCher'
      | 'getUserAddress'
      | 'getUserIcon'
      | 'getUserName'
      | 'getUserPoolAddress'
      | 'getUserProfile'
      | 'isCheer'
      | 'newProjectFactory'
      | 'projectsData'
      | 'removeCheerProject'
      | 'userAddress'
      | 'userIcon'
      | 'userName'
      | 'userProfile'
      | 'withdrawCher',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'addCheerProject', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'approveCherToProjectPool',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'chargeCher', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'cheersDapp', values?: undefined): string;
  encodeFunctionData(functionFragment: 'cher', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getAllChallengeProjects', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getUserAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getUserIcon', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getUserName', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getUserPoolAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getUserProfile', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isCheer', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'approveCherToProjectPool',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'chargeCher', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'cheersDapp', values?: undefined): string;
  encodeFunctionData(functionFragment: 'cher', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getAllChallengeProjects', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getTotalCher', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getUserAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getUserIcon', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getUserName', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getUserPoolAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getUserProfile', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isCheer', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'newProjectFactory',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'projectsData', values?: undefined): string;
  encodeFunctionData(functionFragment: 'removeCheerProject', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'userAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'userIcon', values?: undefined): string;
  encodeFunctionData(functionFragment: 'userName', values?: undefined): string;
  encodeFunctionData(functionFragment: 'userProfile', values?: undefined): string;
  encodeFunctionData(functionFragment: 'withdrawCher', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'projectsData', values?: undefined): string;
  encodeFunctionData(functionFragment: 'removeCheerProject', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setCHER', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setProjectsData', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'userAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'userIcon', values?: undefined): string;
  encodeFunctionData(functionFragment: 'userName', values?: undefined): string;
  encodeFunctionData(functionFragment: 'userProfile', values?: undefined): string;
  encodeFunctionData(functionFragment: 'withdrawCher', values: [PromiseOrValue<BigNumberish>]): string;

  decodeFunctionResult(functionFragment: 'addCheerProject', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approveCherToProjectPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'chargeCher', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cheersDapp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cher', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAllChallengeProjects', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getTotalCher', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUserAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUserIcon', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUserName', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUserPoolAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUserProfile', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isCheer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'newProjectFactory', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'projectsData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeCheerProject', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userIcon', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userName', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userProfile', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawCher', data: BytesLike): Result;

  events: {};
}

export interface UserPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UserPoolInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addCheerProject(
      _cheerProjectPoolAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    approveCherToProjectPool(
      _projectPoolAddress: PromiseOrValue<string>,
      _cherAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    chargeCher(
      _cherAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    cheersDapp(overrides?: CallOverrides): Promise<[string]>;

    cher(overrides?: CallOverrides): Promise<[string]>;

    getAllChallengeProjects(overrides?: CallOverrides): Promise<[SharedStruct.ProjectStructOutput[]]>;

    getTotalCher(overrides?: CallOverrides): Promise<[BigNumber]>;

    getUserAddress(overrides?: CallOverrides): Promise<[string]>;

    getUserIcon(overrides?: CallOverrides): Promise<[string]>;

    getUserName(overrides?: CallOverrides): Promise<[string]>;

    getUserPoolAddress(overrides?: CallOverrides): Promise<[string]>;

    getUserProfile(overrides?: CallOverrides): Promise<[string]>;

    isCheer(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    newProjectFactory(
      _belongDaoAddress: PromiseOrValue<string>,
      _projectName: PromiseOrValue<string>,
      _projectContents: PromiseOrValue<string>,
      _projectReword: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    projectsData(overrides?: CallOverrides): Promise<[string]>;

    removeCheerProject(
      _cheerProjectPoolAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    userAddress(overrides?: CallOverrides): Promise<[string]>;

    userIcon(overrides?: CallOverrides): Promise<[string]>;

    userName(overrides?: CallOverrides): Promise<[string]>;

    userProfile(overrides?: CallOverrides): Promise<[string]>;

    withdrawCher(
      _cherAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  addCheerProject(
    _cheerProjectPoolAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  approveCherToProjectPool(
    _projectPoolAddress: PromiseOrValue<string>,
    _cherAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  chargeCher(
    _cherAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  cheersDapp(overrides?: CallOverrides): Promise<string>;

  cher(overrides?: CallOverrides): Promise<string>;

  getAllChallengeProjects(overrides?: CallOverrides): Promise<SharedStruct.ProjectStructOutput[]>;

  getTotalCher(overrides?: CallOverrides): Promise<BigNumber>;

  getUserAddress(overrides?: CallOverrides): Promise<string>;

  getUserIcon(overrides?: CallOverrides): Promise<string>;

  getUserName(overrides?: CallOverrides): Promise<string>;

  getUserPoolAddress(overrides?: CallOverrides): Promise<string>;

  getUserProfile(overrides?: CallOverrides): Promise<string>;

  isCheer(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  newProjectFactory(
    _belongDaoAddress: PromiseOrValue<string>,
    _projectName: PromiseOrValue<string>,
    _projectContents: PromiseOrValue<string>,
    _projectReword: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  projectsData(overrides?: CallOverrides): Promise<string>;

  removeCheerProject(
    _cheerProjectPoolAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  userAddress(overrides?: CallOverrides): Promise<string>;

  userIcon(overrides?: CallOverrides): Promise<string>;

  userName(overrides?: CallOverrides): Promise<string>;

  userProfile(overrides?: CallOverrides): Promise<string>;

  withdrawCher(
    _cherAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    addCheerProject(_cheerProjectPoolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    approveCherToProjectPool(
      _projectPoolAddress: PromiseOrValue<string>,
      _cherAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    chargeCher(_cherAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    cheersDapp(overrides?: CallOverrides): Promise<string>;

    cher(overrides?: CallOverrides): Promise<string>;

    getAllChallengeProjects(overrides?: CallOverrides): Promise<SharedStruct.ProjectStructOutput[]>;

    getTotalCher(overrides?: CallOverrides): Promise<BigNumber>;

    getUserAddress(overrides?: CallOverrides): Promise<string>;

    getUserIcon(overrides?: CallOverrides): Promise<string>;

    getUserName(overrides?: CallOverrides): Promise<string>;

    getUserPoolAddress(overrides?: CallOverrides): Promise<string>;

    getUserProfile(overrides?: CallOverrides): Promise<string>;

    isCheer(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    newProjectFactory(
      _belongDaoAddress: PromiseOrValue<string>,
      _projectName: PromiseOrValue<string>,
      _projectContents: PromiseOrValue<string>,
      _projectReword: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<string>;

    projectsData(overrides?: CallOverrides): Promise<string>;

    removeCheerProject(_cheerProjectPoolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    userAddress(overrides?: CallOverrides): Promise<string>;

    userIcon(overrides?: CallOverrides): Promise<string>;

    userName(overrides?: CallOverrides): Promise<string>;

    userProfile(overrides?: CallOverrides): Promise<string>;

    withdrawCher(_cherAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addCheerProject(
      _cheerProjectPoolAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    approveCherToProjectPool(
      _projectPoolAddress: PromiseOrValue<string>,
      _cherAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    chargeCher(
      _cherAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    cheersDapp(overrides?: CallOverrides): Promise<BigNumber>;

    cher(overrides?: CallOverrides): Promise<BigNumber>;

    getAllChallengeProjects(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalCher(overrides?: CallOverrides): Promise<BigNumber>;

    getUserAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getUserIcon(overrides?: CallOverrides): Promise<BigNumber>;

    getUserName(overrides?: CallOverrides): Promise<BigNumber>;

    getUserPoolAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getUserProfile(overrides?: CallOverrides): Promise<BigNumber>;

    isCheer(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    newProjectFactory(
      _belongDaoAddress: PromiseOrValue<string>,
      _projectName: PromiseOrValue<string>,
      _projectContents: PromiseOrValue<string>,
      _projectReword: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    projectsData(overrides?: CallOverrides): Promise<BigNumber>;

    removeCheerProject(
      _cheerProjectPoolAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    userAddress(overrides?: CallOverrides): Promise<BigNumber>;

    userIcon(overrides?: CallOverrides): Promise<BigNumber>;

    userName(overrides?: CallOverrides): Promise<BigNumber>;

    userProfile(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawCher(
      _cherAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addCheerProject(
      _cheerProjectPoolAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    approveCherToProjectPool(
      _projectPoolAddress: PromiseOrValue<string>,
      _cherAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    chargeCher(
      _cherAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    cheersDapp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cher(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllChallengeProjects(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalCher(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserIcon(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserPoolAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserProfile(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isCheer(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newProjectFactory(
      _belongDaoAddress: PromiseOrValue<string>,
      _projectName: PromiseOrValue<string>,
      _projectContents: PromiseOrValue<string>,
      _projectReword: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    projectsData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeCheerProject(
      _cheerProjectPoolAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    userAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userIcon(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userProfile(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawCher(
      _cherAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
