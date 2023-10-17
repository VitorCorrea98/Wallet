import { useSelector } from 'react-redux';
import { ReduxState } from '../type';

function Header() {
  const email = JSON.parse(localStorage.getItem('email') as string);
  const { currentCurrency, expensesValue } = useSelector((
    state: ReduxState,
  ) => state.wallet);

  return (
    <header>
      <p>
        Emai:
        {' '}
        <span data-testid="email-field">{email}</span>
      </p>
      <p>
        Despesa total:
        <span data-testid="total-field">{expensesValue}</span>
        {' '}
        <span data-testid="header-currency-field">{currentCurrency}</span>
      </p>

    </header>
  );
}

export default Header;
