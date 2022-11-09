/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { IUserPoolFactory, IUserPoolFactoryInterface } from '../../../contracts/interfaces/IUserPoolFactory';

const _abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_userName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_userProfile',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_userIcon',
        type: 'string',
      },
    ],
    name: 'newUserPoolFactory',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class IUserPoolFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IUserPoolFactoryInterface {
    return new utils.Interface(_abi) as IUserPoolFactoryInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IUserPoolFactory {
    return new Contract(address, _abi, signerOrProvider) as IUserPoolFactory;
  }
}
