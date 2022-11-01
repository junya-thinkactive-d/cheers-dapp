/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "../common";

export interface CheersInterface extends utils.Interface {
  functions: {
    "daoPoolFactory()": FunctionFragment;
    "newDaoPoolFactory(string,string,string)": FunctionFragment;
    "newUserPoolFactory(string,string,string)": FunctionFragment;
    "setDaoPoolFactory(address)": FunctionFragment;
    "setUserPoolFactory(address)": FunctionFragment;
    "userPoolFactory()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "daoPoolFactory"
      | "newDaoPoolFactory"
      | "newUserPoolFactory"
      | "setDaoPoolFactory"
      | "setUserPoolFactory"
      | "userPoolFactory"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "daoPoolFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "newDaoPoolFactory",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "newUserPoolFactory",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setDaoPoolFactory",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setUserPoolFactory",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "userPoolFactory",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "daoPoolFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newDaoPoolFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newUserPoolFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDaoPoolFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUserPoolFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userPoolFactory",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Cheers extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CheersInterface;

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
    daoPoolFactory(overrides?: CallOverrides): Promise<[string]>;

    newDaoPoolFactory(
      _daoName: PromiseOrValue<string>,
      _daoProfile: PromiseOrValue<string>,
      _daoIcon: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    newUserPoolFactory(
      _userName: PromiseOrValue<string>,
      _userProfile: PromiseOrValue<string>,
      _userIcon: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setDaoPoolFactory(
      daoPoolFactoryAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setUserPoolFactory(
      userPoolFactoryAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    userPoolFactory(overrides?: CallOverrides): Promise<[string]>;
  };

  daoPoolFactory(overrides?: CallOverrides): Promise<string>;

  newDaoPoolFactory(
    _daoName: PromiseOrValue<string>,
    _daoProfile: PromiseOrValue<string>,
    _daoIcon: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  newUserPoolFactory(
    _userName: PromiseOrValue<string>,
    _userProfile: PromiseOrValue<string>,
    _userIcon: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setDaoPoolFactory(
    daoPoolFactoryAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setUserPoolFactory(
    userPoolFactoryAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  userPoolFactory(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    daoPoolFactory(overrides?: CallOverrides): Promise<string>;

    newDaoPoolFactory(
      _daoName: PromiseOrValue<string>,
      _daoProfile: PromiseOrValue<string>,
      _daoIcon: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    newUserPoolFactory(
      _userName: PromiseOrValue<string>,
      _userProfile: PromiseOrValue<string>,
      _userIcon: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setDaoPoolFactory(
      daoPoolFactoryAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setUserPoolFactory(
      userPoolFactoryAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    userPoolFactory(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    daoPoolFactory(overrides?: CallOverrides): Promise<BigNumber>;

    newDaoPoolFactory(
      _daoName: PromiseOrValue<string>,
      _daoProfile: PromiseOrValue<string>,
      _daoIcon: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    newUserPoolFactory(
      _userName: PromiseOrValue<string>,
      _userProfile: PromiseOrValue<string>,
      _userIcon: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setDaoPoolFactory(
      daoPoolFactoryAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setUserPoolFactory(
      userPoolFactoryAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    userPoolFactory(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    daoPoolFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newDaoPoolFactory(
      _daoName: PromiseOrValue<string>,
      _daoProfile: PromiseOrValue<string>,
      _daoIcon: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    newUserPoolFactory(
      _userName: PromiseOrValue<string>,
      _userProfile: PromiseOrValue<string>,
      _userIcon: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setDaoPoolFactory(
      daoPoolFactoryAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setUserPoolFactory(
      userPoolFactoryAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    userPoolFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}