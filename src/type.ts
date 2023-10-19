import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type FormLogin = {
  email: string,
  password: string
};

export const WalletFormTypeInitialValue = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

export type WalletFormType = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
};

export type ExpenseFormType = {
  id: number;
  value: string;
  description: string;
  currency: string;
  method: string;
  tag: string;
  exchangeRates: {
    [currency: string]: {
      code: string;
      name: string;
      ask: string;
    };
  };
};

export type ExpenseType = {
  expenses: ExpenseFormType[],
  currencies: [],
  isUpdating: boolean,
  updateId: null
};

export type ReduxState = {
  user: FormLogin,
  wallet: ExpenseType
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
