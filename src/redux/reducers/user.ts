// Esse reducer será responsável por tratar as informações da pessoa usuária

import { AnyAction } from 'redux';
import { FormLogin } from '../../type';
import { LOGIN } from '../actions';

const INITIAL_STATE: FormLogin = { email: '', password: '' };

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;

    default:
      return state;
  }
};
