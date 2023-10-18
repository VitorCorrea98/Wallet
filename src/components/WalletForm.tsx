import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExpenseSubmit, fetchAPI } from '../redux/actions';
import {
  Dispatch, ReduxState, WalletFormType, WalletFormTypeInitialValue,
} from '../type';
import { fetchCurrencies } from '../service/fetch';

function WalletForm() {
  const [form, setForm] = useState<WalletFormType>(WalletFormTypeInitialValue);
  const { currencies } = useSelector(
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const rates = await fetchCurrencies();

    const currentExpense = { ...form, exchangeRates: rates };
    dispatch(ExpenseSubmit(currentExpense));

    setForm(() => ({
      id: currentExpense.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  };

  const enabled = form.description && form.value;

  useEffect(() => {
    dispatch(fetchAPI());
  }, []);

  return (
    <div>
      <h1>VIdaaaaaaa</h1>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="value">
          Valor:
          {' '}
          <input
            data-testid="value-input"
            value={ form.value }
            type="text"
            id="value"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          {' '}
          <input
            data-testid="description-input"
            value={ form.description }
            type="text"
            id="description"
            onChange={ handleChange }
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
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          {' '}
          <select
            data-testid="tag-input"
            value={ form.tag }
            name="tag"
            id="tag"
            onChange={ handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button disabled={ !enabled } type="submit">Adicionar despesa</button>
      </form>
    </div>
  );
}

export default WalletForm;
