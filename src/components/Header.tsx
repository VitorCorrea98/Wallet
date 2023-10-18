import { useSelector } from 'react-redux';
import { ReduxState } from '../type';

function Header() {
  const email = JSON.parse(localStorage.getItem('email') as string);
  const expenses = useSelector((
    state: ReduxState,
  ) => state.wallet.expenses);

  const totalAmount = expenses.reduce((total, expense) => {
    const rate = expense.exchangeRates[expense.currency].ask;
    const fixedAmount = parseFloat(expense.value) * Number(rate);
    return total + fixedAmount;
  }, 0);

  return (
    <header>
      <p>
        Emai:
        {' '}
        <span data-testid="email-field">{email}</span>
      </p>
      <p>
        Despesa total:
        <span data-testid="total-field">{totalAmount.toFixed(2)}</span>
        {' '}
        <span data-testid="header-currency-field">BRL</span>
      </p>

    </header>
  );
}

export default Header;
