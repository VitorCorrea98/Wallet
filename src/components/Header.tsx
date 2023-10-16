function Header() {
  const email = JSON.parse(localStorage.getItem('email') as string);

  return (
    <header>
      <p>
        Emai:
        {' '}
        <span data-testid="email-field">{email}</span>
      </p>
      <p>
        Despesa total:
        <span data-testid="total-field">0</span>
        {' '}
        <span data-testid="header-currency-field">BRL</span>
      </p>

    </header>
  );
}

export default Header;
