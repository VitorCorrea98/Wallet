import { AnyAction } from 'redux';
import { ExpenseType } from '../../type';
import { DELETE_EXPENSE, EXPENSE_SUBMIT, GET_CURRENCIES } from '../actions';

const INITIAL_STATE: ExpenseType = {
  currencies: [],
  expenses: [],
  updateId: null,
  isUpdating: false,
};

export const WalletReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case GET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };
    case EXPENSE_SUBMIT:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((element) => element.id !== action.payload),
      };

    default: return state;
  }
};
