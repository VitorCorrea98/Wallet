import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type FormLogin = {
  email: string,
  password: string
};

export const WalletInitialValue = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

export type WalletFormType = {
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
};

export type AllRatesFetch = {
  moeda: {
    code: string,
    name: string,
    ask: string
  }
};

export type NewCurrencyType = {
  id: number,
  value: number,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: any
};

export const NewCurrencyInitialValue = {
  id: -2,
  value: 0.00,
  description: '',
  currency: '',
  method: '',
  tag: '',
  exchangeRates: {
    code: '',
    name: '',
    ask: '',
  },
};

export type WalletCurrency = {
  currentCurrency: string
  expenses: [],
  newExpense: NewCurrencyType,
  expensesValue: number,
  currencies: any
};

export type ReduxState = {
  user: FormLogin,
  wallet: WalletCurrency
};

export type Dispatch = ThunkDispatch<WalletCurrency, null, AnyAction>;
