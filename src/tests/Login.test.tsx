import { fireEvent, screen } from '@testing-library/dom';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

test('Teste da pagina de login', () => {
  renderWithRouterAndRedux(<App />);

  const email = screen.getByTestId('email-input');
  const password = screen.getByTestId('password-input');

  const button = screen.getByRole('button', { name: /Entrar/i });
  expect(email).toBeInTheDocument();
  expect(email).toHaveValue('');
  expect(password).toBeInTheDocument();
  expect(password).toHaveValue('');
  expect(button).toBeInTheDocument();
  expect(button).toBeDisabled();

  fireEvent.change(email, { target: { value: 'Vitor@gmail.com' } });
  fireEvent.change(password, { target: { value: 'VitorBoladao08' } });

  expect(button).toBeEnabled();

  fireEvent.change(email, { target: { value: 'Vitor@gmail.com' } });
  fireEvent.change(password, { target: { value: 'VitorBoladao08' } });

  fireEvent.click(button);

  screen.debug();
});
