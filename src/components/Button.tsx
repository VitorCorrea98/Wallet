import React from 'react';

type ButtonProps = {
  enabled: string,
  isUpdating: boolean
};

function Button({ enabled, isUpdating }: ButtonProps) {
  return (
    <div>
      {isUpdating ? (
        <button disabled={ !enabled } type="submit">Editar despesa</button>
      ) : (
        <button disabled={ !enabled } type="submit">Adicionar despesa</button>
      )}
    </div>
  );
}

export default Button;
