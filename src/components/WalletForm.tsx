import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExpenseSubmit, UpdateExpense, fetchAPI } from '../redux/actions';
import {
  Dispatch, ReduxState, WalletFormType, WalletFormTypeInitialValue,
} from '../type';
import { fetchCurrencies } from '../service/fetch';
import Button from './Button';

function WalletForm() {
  const [form, setForm] = useState<WalletFormType>(WalletFormTypeInitialValue);
  const { currencies, isUpdating, expenses, updateId } = useSelector(
    (state:
    ReduxState) => state.wallet,
  );

  const dispatch: Dispatch = useDispatch();

  const handleChange = ({ target: { id, value } }:
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleExpenseSubmit = (rates: any) => {
    const currentExpense = { ...form, exchangeRates: rates };
    dispatch(ExpenseSubmit(currentExpense));

    setForm({
      ...WalletFormTypeInitialValue,
      id: currentExpense.id + 1,
    });
  };

  const handleExpenseEdit = (rates: any) => {
    const editedExpense = { ...form, exchangeRates: rates };

    dispatch(UpdateExpense(editedExpense, updateId));
    setForm({
      ...WalletFormTypeInitialValue,
      id: expenses.length,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const rates = await fetchCurrencies();

    if (isUpdating) {
      handleExpenseEdit(rates);
    } else {
      handleExpenseSubmit(rates);
    }
  };

  const enabled = (form.description && form.value);

  useEffect(() => {
    const expenseObj = expenses.find((expense) => expense.id === updateId);
    if (expenseObj) {
      const { id, value, description, currency, method, tag } = expenseObj;
      setForm({ id, value, description, currency, method, tag });
    }
  }, [updateId, isUpdating, expenses]);

  useEffect(() => {
    dispatch(fetchAPI());
  }, []);

  return (
    <div>
      <form onSubmit={ handleSubmit } className=" blue-color">
        <label htmlFor="description">
          Descrição:
          {' '}
          <input
            data-testid="description-input"
            value={ form.description }
            type="text"
            id="description"
            onChange={ handleChange }
            className="border-blue"
          />
        </label>
        <label htmlFor="value">
          Valor:
          {' '}
          <input
            data-testid="value-input"
            value={ form.value }
            type="text"
            id="value"
            onChange={ handleChange }
            className="border-blue"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          {' '}
          <select
            data-testid="currency-input"
            value={ form.currency }
            name="currency"
            id="currency"
            onChange={ handleChange }
            className="border-blue"
          >
            {currencies.map((element: string) => (
              <option value={ element } key={ element }>{element}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Pagamento:
          {' '}
          <select
            data-testid="method-input"
            value={ form.method }
            name="method"
            id="method"
            onChange={ handleChange }
            className="border-blue"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria da despesa:
          {' '}
          <select
            data-testid="tag-input"
            value={ form.tag }
            name="tag"
            id="tag"
            onChange={ handleChange }
            className="border-blue"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <Button enabled={ enabled } isUpdating={ isUpdating } />
      </form>
    </div>
  );
}

export default WalletForm;
