import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPI } from '../redux/actions';
import { Dispatch, ReduxState } from '../type';

function WalletForm() {
  const currency = useSelector((state: ReduxState) => state.wallet.currency);
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAPI());
  }, []);

  return (
    <div>
      <h1>VIdaaaaaaa</h1>
      <label htmlFor="value">
        Valor:
        {' '}
        <input type="text" id="value" />
      </label>
      <label htmlFor="description">
        Descrição:
        {' '}
        <input type="text" id="description" />
      </label>
      <label htmlFor="currency">
        Moeda:
        {' '}
        <select name="currency" id="currency">
          {currency.map((element) => (
            <option value={ element } key={ element }>{element}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default WalletForm;
