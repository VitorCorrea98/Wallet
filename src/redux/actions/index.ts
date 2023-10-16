// Coloque aqui suas

import { Dispatch, FormLogin } from '../../type';

export const LOGIN = 'LOGIN';
export const FETCH_DONE = 'FETCH_DONE';

export const LoginAction = (payload: FormLogin) => ({
  type: LOGIN,
  payload,
});

export const fectDone = (payload: string[]) => ({
  type: FETCH_DONE,
  payload,
});

export const fetchAPI = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const dataCurrency = Object.keys(data);
      const rightCurrency = dataCurrency.filter((currency) => currency !== 'USDT');
      dispatch(fectDone(rightCurrency));
    } catch (error) {
      console.log(error);
    }
  };
};
