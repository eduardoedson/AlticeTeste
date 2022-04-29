import React, { createContext, useContext, useState, useMemo } from 'react';

const Valor = createContext();

function useValor() {
  const context = useContext(Valor);

  if (!context) {
    window.alert('Valor não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function ValorProvider(props) {
  const [selecionado, setSelecionado] = useState('');
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <Valor.Provider value={value} {...props} />;
}

export { useValor, ValorProvider };
