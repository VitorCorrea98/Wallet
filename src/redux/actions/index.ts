import { Dispatch, ExpenseFormType, FormLogin } from '../../type';

//   --------------
export const LOGIN = 'LOGIN';
//   --------------
export const GET_CURRENCIES = 'GET_CURRENCIES';
//   --------------

export const EXPENSE_SUBMIT = 'EXPENSE_SUBMIT';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';

export const LoginAction = ({ email, password }: FormLogin) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  },
});

export const fectDone = (currencies: string[]) => ({
  type: GET_CURRENCIES,
  payload: currencies,
});

export const ExpenseSubmit = (expense: ExpenseFormType) => (
  {
    type: EXPENSE_SUBMIT,
    payload: expense,
  }
);

export const DeleteExpense = (id: number) => ({
  type: DELETE_EXPENSE,
  payload: id,
});

export const UpdateExpense = (expense: ExpenseFormType, updateId: number) => ({
  type: UPDATE_EXPENSE,
  payload: {
    updateId,
    expense,
  },
});

export const fetchAPI = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const currencies = Object.keys(data)
        .filter((currencie) => currencie !== 'USDT');
      dispatch(fectDone(currencies));
    } catch (error) {
      console.log(error);
    }
  };
};
