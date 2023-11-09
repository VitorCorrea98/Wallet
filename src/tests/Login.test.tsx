import { fireEvent, screen } from '@testing-library/dom';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

test('Teste da pagina de login', () => {
  renderWithRouterAndRedux(<App />);

  const emailText = 'Vitor@gmail.com';
  const passwordText = 'VitorBoladao08';

  const email = screen.getByTestId('email-input');
  const password = screen.getByTestId('password-input');

  const button = screen.getByRole('button', { name: /Entrar/i });
  expect(email).toBeInTheDocument();
  expect(email).toHaveValue('');
  expect(password).toBeInTheDocument();
  expect(password).toHaveValue('');
  expect(button).toBeInTheDocument();
  expect(button).toBeDisabled();

  fireEvent.change(email, { target: { value: emailText } });
  fireEvent.change(password, { target: { value: passwordText } });

  expect(button).toBeEnabled();

  fireEvent.click(button);

  const localStorageText = localStorage.getItem('email');
  console.log(localStorageText);

  expect(screen.getByText(emailText)).toBeInTheDocument();
});
