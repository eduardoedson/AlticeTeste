import React, { createContext, useContext, useState, useMemo } from 'react';

const Telefone = createContext();

function useTelefone() {
  const context = useContext(Telefone);

  if (!context) {
    window.alert('Telefone não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function TelefoneProvider(props) {
  const [selecionado, setSelecionado] = useState('');
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <Telefone.Provider value={value} {...props} />;
}

export { useTelefone, TelefoneProvider };
