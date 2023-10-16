import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type FormLogin = {
  email: string,
  password: string
};

export type WalletCurrency = {
  currency: string[]
};

export type ReduxState = {
  user: FormLogin,
  wallet: WalletCurrency
};

export type Dispatch = ThunkDispatch<WalletCurrency, null, AnyAction>;
