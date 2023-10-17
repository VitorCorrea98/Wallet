import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExpenseSubmit, TotalDispense, fetchAPI } from '../redux/actions';
import { Dispatch, ReduxState, WalletFormType, WalletInitialValue } from '../type';

function WalletForm() {
  const [form, setForm] = useState<WalletFormType>(WalletInitialValue);
  const { currencies } = useSelector(
    (state:
    ReduxState) => state.wallet,
  );

  const dispatchFetch: Dispatch = useDispatch();
  const dispatch = useDispatch();

  const handleChange = ({ target: { id, value } }:
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(ExpenseSubmit(form));
    dispatch(TotalDispense());
    dispatchFetch(fetchAPI());
    setForm(WalletInitialValue);
  };

  useEffect(() => {
    dispatchFetch(fetchAPI());
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
        <button type="submit">Adicionar despesa</button>
      </form>
    </div>
  );
}

export default WalletForm;
