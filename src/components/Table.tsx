import { useDispatch, useSelector } from 'react-redux';
import { ExpenseFormType, ReduxState } from '../type';
import { DeleteExpense, EditExpense } from '../redux/actions';
import DeleteIcon from '../service/icons/DeleteIcon';
import EditIcon from '../service/icons/EditIcon';

function Table() {
  const expenses = useSelector((state: ReduxState) => state.wallet.expenses);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(DeleteExpense(id));
  };

  const handleEdit = (id: number) => {
    dispatch(EditExpense(id));
  };

  return (
    <table className="grid w-full mt-4 divide-y-2">
      <thead className=" m-2">
        <tr className="grid grid-cols-9 place-items-center    ">
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
      <tbody className="flex flex-col gap-3 m-2">
        { expenses.length ? (expenses.map((expense: ExpenseFormType) => (
          <tr
            key={ expense.id }
            className="grid grid-cols-9
           rounded-md text-center items-center
            p-1"
          >
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
            <td className="flex justify-center">
              <button
                data-testid="edit-btn"
                onClick={ () => handleEdit(expense.id) }
              >
                <EditIcon />
              </button>
              /
              <button
                data-testid="delete-btn"
                onClick={ () => handleDelete(expense.id) }
              >
                <DeleteIcon />
              </button>
            </td>
          </tr>
        ))) : (null)}
      </tbody>
    </table>

  );
}

export default Table;
