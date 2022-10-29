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
  export type DaoStruct = {
    daoAddres: PromiseOrValue<string>;
    daoName: PromiseOrValue<string>;
    daoProfile: PromiseOrValue<string>;
    daoIcon: PromiseOrValue<string>;
  };

  export type DaoStructOutput = [string, string, string, string] & {
    daoAddres: string;
    daoName: string;
    daoProfile: string;
    daoIcon: string;
  };
}

export interface DaosDataInterface extends utils.Interface {
  functions: {
    "addDaos(address,string,string,string)": FunctionFragment;
    "daos(uint256)": FunctionFragment;
    "getAllDaoList()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "addDaos" | "daos" | "getAllDaoList"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addDaos",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "daos",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllDaoList",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "addDaos", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "daos", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllDaoList",
    data: BytesLike
  ): Result;

  events: {};
}

export interface DaosData extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DaosDataInterface;

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
    addDaos(
      _daoAddress: PromiseOrValue<string>,
      _daoName: PromiseOrValue<string>,
      _daoProfile: PromiseOrValue<string>,
      _daoIcon: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    daos(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        daoAddres: string;
        daoName: string;
        daoProfile: string;
        daoIcon: string;
      }
    >;

    getAllDaoList(
      overrides?: CallOverrides
    ): Promise<[SharedStruct.DaoStructOutput[]]>;
  };

  addDaos(
    _daoAddress: PromiseOrValue<string>,
    _daoName: PromiseOrValue<string>,
    _daoProfile: PromiseOrValue<string>,
    _daoIcon: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  daos(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string] & {
      daoAddres: string;
      daoName: string;
      daoProfile: string;
      daoIcon: string;
    }
  >;

  getAllDaoList(
    overrides?: CallOverrides
  ): Promise<SharedStruct.DaoStructOutput[]>;

  callStatic: {
    addDaos(
      _daoAddress: PromiseOrValue<string>,
      _daoName: PromiseOrValue<string>,
      _daoProfile: PromiseOrValue<string>,
      _daoIcon: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    daos(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        daoAddres: string;
        daoName: string;
        daoProfile: string;
        daoIcon: string;
      }
    >;

    getAllDaoList(
      overrides?: CallOverrides
    ): Promise<SharedStruct.DaoStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    addDaos(
      _daoAddress: PromiseOrValue<string>,
      _daoName: PromiseOrValue<string>,
      _daoProfile: PromiseOrValue<string>,
      _daoIcon: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    daos(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllDaoList(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addDaos(
      _daoAddress: PromiseOrValue<string>,
      _daoName: PromiseOrValue<string>,
      _daoProfile: PromiseOrValue<string>,
      _daoIcon: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    daos(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllDaoList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
