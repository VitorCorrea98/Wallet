import { AnyAction } from 'redux';
import { ExpenseType } from '../../type';
import {
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  EXPENSE_SUBMIT,
  GET_CURRENCIES,
  UPDATE_EXPENSE } from '../actions';

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
    case EDIT_EXPENSE:
      return {
        ...state,
        isUpdating: true,
        updateId: action.payload,
      };
    case UPDATE_EXPENSE: {
      return {
        ...state,
        updateId: null,
        isUpdating: false,
        expenses: state.expenses.map((expense) => {
          if (expense.id === action.payload.updateId) {
            return {
              ...expense,
              ...action.payload.expense,
            };
          }
          return expense;
        }),
      };
    }
    default: return state;
  }
};
