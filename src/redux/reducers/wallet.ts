// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';
import { FETCH_DONE } from '../actions';

const INITIAL_VALUE = {
  currency: [],
};

export const walletFetch = (state = INITIAL_VALUE, action: AnyAction) => {
  switch (action.type) {
    case FETCH_DONE:
      return {
        currency: action.payload,
      };

    default:
      return state;
  }
};
