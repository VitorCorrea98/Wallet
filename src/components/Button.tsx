import React from 'react';

type ButtonProps = {
  enabled: string,
  isUpdating: boolean
};

function Button({ enabled, isUpdating }: ButtonProps) {
  return (
    <div>
      <button
        disabled={ !enabled }
        type="submit"
      >
        {isUpdating ? 'Editar ' : 'Adicionar '}
        {' '}
        despesa
      </button>
    </div>
  );
}

export default Button;
