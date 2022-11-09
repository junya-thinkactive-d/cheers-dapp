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
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from '../../common';

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

export interface IProjectsDataInterface extends utils.Interface {
  functions: {
    'addProjects(address,address,address,string,string,string)': FunctionFragment;
    'getEachProjectList(address)': FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: 'addProjects' | 'getEachProjectList'): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'addProjects',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'getEachProjectList', values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: 'addProjects', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getEachProjectList', data: BytesLike): Result;

  events: {};
}

export interface IProjectsData extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IProjectsDataInterface;

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
    addProjects(
      _projectOwnerAddress: PromiseOrValue<string>,
      _projectPoolAddress: PromiseOrValue<string>,
      _belongDaoAddress: PromiseOrValue<string>,
      _projectName: PromiseOrValue<string>,
      _projectContents: PromiseOrValue<string>,
      _projectReword: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getEachProjectList(
      _projectOwnerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[SharedStruct.ProjectStructOutput[]]>;
  };

  addProjects(
    _projectOwnerAddress: PromiseOrValue<string>,
    _projectPoolAddress: PromiseOrValue<string>,
    _belongDaoAddress: PromiseOrValue<string>,
    _projectName: PromiseOrValue<string>,
    _projectContents: PromiseOrValue<string>,
    _projectReword: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getEachProjectList(
    _projectOwnerAddress: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<SharedStruct.ProjectStructOutput[]>;

  callStatic: {
    addProjects(
      _projectOwnerAddress: PromiseOrValue<string>,
      _projectPoolAddress: PromiseOrValue<string>,
      _belongDaoAddress: PromiseOrValue<string>,
      _projectName: PromiseOrValue<string>,
      _projectContents: PromiseOrValue<string>,
      _projectReword: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    getEachProjectList(
      _projectOwnerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<SharedStruct.ProjectStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    addProjects(
      _projectOwnerAddress: PromiseOrValue<string>,
      _projectPoolAddress: PromiseOrValue<string>,
      _belongDaoAddress: PromiseOrValue<string>,
      _projectName: PromiseOrValue<string>,
      _projectContents: PromiseOrValue<string>,
      _projectReword: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getEachProjectList(_projectOwnerAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addProjects(
      _projectOwnerAddress: PromiseOrValue<string>,
      _projectPoolAddress: PromiseOrValue<string>,
      _belongDaoAddress: PromiseOrValue<string>,
      _projectName: PromiseOrValue<string>,
      _projectContents: PromiseOrValue<string>,
      _projectReword: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getEachProjectList(
      _projectOwnerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
