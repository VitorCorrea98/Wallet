import { useSelector } from 'react-redux';
import { ReduxState } from '../type';
import { MoneyIcon } from '../service/icons/MoneyIcon';
import { UserIcon } from '../service/icons/UserIcon';

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
    <header className="flex items-center gap-20">
      <img src="../../imgs/logo-Trybe.png" alt="Logo do projeto" />
      <div className="flex gap-2 blue-color items-center">
        <MoneyIcon />

        <p className="text-lg">
          Despesa total:
        </p>
        <div>
          <span data-testid="total-field">{totalAmount.toFixed(2)}</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </div>

      <div className="flex gap-2 green-color items-center">
        <UserIcon />
        <span data-testid="email-field" className="text-lg">{email}</span>
      </div>

    </header>
  );
}

export default Header;
