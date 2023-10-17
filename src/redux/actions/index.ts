// Coloque aqui suas

import { Dispatch, FormLogin, WalletFormType } from '../../type';

export const LOGIN = 'LOGIN';
export const FETCH_DONE = 'FETCH_DONE';
export const FORM_SUBMIT = 'FORM_SUBMIT';
export const EXPENSE_SUBMIT = 'EXPENSE_SUBMIT';
export const TOTAL_DISPENSE = 'TOTAL_DISPENSE';

export const LoginAction = (payload: FormLogin) => ({
  type: LOGIN,
  payload,
});

export const fectDone = (payload: string[]) => ({
  type: FETCH_DONE,
  payload,
});

export const ExpenseSubmit = (payload: WalletFormType) => (
  { type: EXPENSE_SUBMIT, payload }
);

export const TotalDispense = () => ({ type: TOTAL_DISPENSE });

export const fetchAPI = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(fectDone(data));
    } catch (error) {
      console.log(error);
    }
  };
};
