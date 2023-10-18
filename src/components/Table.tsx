import { useDispatch, useSelector } from 'react-redux';
import { ExpenseFormType, ReduxState } from '../type';
import { DeleteExpense } from '../redux/actions';

function Table() {
  const expenses = useSelector((state: ReduxState) => state.wallet.expenses);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(DeleteExpense(id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        { expenses.length ? (expenses.map((expense: ExpenseFormType) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{parseFloat(expense.value).toFixed(2)}</td>
            <td>{expense.exchangeRates[expense.currency].name}</td>
            <td>
              {parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}
            </td>
            <td>
              {(parseFloat(expense.value)
                * parseFloat(expense.exchangeRates[expense.currency].ask)).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              Editar/
              <button
                data-testid="delete-btn"
                onClick={ () => handleDelete(expense.id) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))) : (null)}
      </tbody>
    </table>

  );
}

export default Table;
