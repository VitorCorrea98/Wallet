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
    <div className="h-screen flex items-center justify-center">
      <div className="container-img-form">
        <img src="../../imgs/logo-Trybe.png" alt="Logo do projeto" />
        <form onSubmit={ handleSubmit } className="flex flex-col gap-3 w-80">
          <input
            type="email"
            id="email"
            value={ form.email }
            onChange={ handleChange }
            data-testid="email-input"
            autoComplete="true"
            placeholder="E-mail"
            className="input-login"
          />
          <input
            type="password"
            id="password"
            value={ form.password }
            onChange={ handleChange }
            autoComplete="true"
            data-testid="password-input"
            placeholder="Senha"
            className="input-login"
          />
          <button
            disabled={ !isValid }
            type="submit"
            className="bg-blue-700 p-2 text-white text-xl font-bold rounded-lg"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
