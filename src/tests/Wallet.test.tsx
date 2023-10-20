import { fireEvent, screen } from '@testing-library/dom';
import { vi } from 'vitest';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Teste do componente Wallet', () => {
  const spyFetch = vi.spyOn(global, 'fetch');

  const DescricaoText = 'Teste 1';
  const ValorText = '22';

  test('Testa o componente Wallet', async () => {
    renderWithRouterAndRedux(<Wallet />);

    expect(spyFetch).toBeCalled();
    expect(spyFetch).toBeCalledWith('https://economia.awesomeapi.com.br/json/all');

    const AdicionarButton = screen.getByRole('button', { name: /Adicionar despesa/i });
    const inputDescription = screen.getByLabelText('Descrição:');
    const inputValue = screen.getByLabelText('Valor:');

    fireEvent.change(inputDescription, { target: { value: DescricaoText } });
    fireEvent.change(inputValue, { target: { value: ValorText } });

    fireEvent.click(AdicionarButton);

    // const EditIcon = screen.getByTestId('edit-icon');

    // expect(EditIcon).toBeInTheDocument();
  });
});
