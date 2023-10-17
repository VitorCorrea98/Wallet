// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';
import { DELETE_DISPENSE, EXPENSE_SUBMIT, FETCH_DONE, TOTAL_DISPENSE } from '../actions';
import { NewCurrencyInitialValue, NewCurrencyType, WalletCurrency } from '../../type';

const INITIAL_VALUE: WalletCurrency = {
  currentCurrency: 'BRL',
  expenses: [],
  newExpense: NewCurrencyInitialValue,
  expensesValue: 0,
  currencies: [],
};

export const walletFetch = (state = INITIAL_VALUE, action: AnyAction) => {
  switch (action.type) {
    case FETCH_DONE:
      return {
        ...state,
        currencies: Object.keys(action.payload).filter((element) => element !== 'USDT'),
        newExpense: {
          ...state.newExpense,
          id: state.newExpense.id + 1,
          exchangeRates: action.payload,
        },
      };
    case EXPENSE_SUBMIT:
      return {
        ...state,
        expenses: [
          ...state.expenses,
          {
            id: state.newExpense.id + 1,
            value: action.payload.value,
            description: action.payload.description,
            currency: action.payload.currency,
            method: action.payload.method,
            tag: action.payload.tag,
            exchangeRates: state.newExpense.exchangeRates,
          },
        ],
      };
    case TOTAL_DISPENSE:
      if (state.expenses) {
        const TotalExpense = state.expenses.reduce(
          (acc, curr: NewCurrencyType) => acc + parseFloat(
            (curr.exchangeRates[curr.currency].ask * curr.value).toFixed(2),
          ),
          0,
        );
        return {
          ...state,
          expensesValue: TotalExpense,
        };
      } break;

    case DELETE_DISPENSE:
      return {
        ...state,
        expenses: state
          .expenses.filter((el: NewCurrencyType) => el.id !== action.payload.id),
      };
    default:
      return state;
  }
};
