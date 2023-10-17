import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FormLogin } from '../type';
import { LoginAction } from '../redux/actions';

function Login() {
  const [form, setForm] = useState<FormLogin>({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { value, id } }:
  React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(LoginAction(form));
    localStorage.setItem('email', JSON.stringify(form.email));
    navigate('/carteira');
  };

  const emailCheck = (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g).test(form.email);

  const passwordCheck = form.password && form.password.length >= 6;
  const isValid = emailCheck && passwordCheck;

  return (
    <div>
      <h1>Vidaaaaaaa</h1>
      <form onSubmit={ handleSubmit }>
        <input
          type="email"
          id="email"
          value={ form.email }
          onChange={ handleChange }
          data-testid="email-input"
          autoComplete="true"
        />
        <input
          type="password"
          id="password"
          value={ form.password }
          onChange={ handleChange }
          autoComplete="true"
          data-testid="password-input"
        />
        <button disabled={ !isValid } type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
