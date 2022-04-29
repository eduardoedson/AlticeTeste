import React, { createContext, useContext, useState, useMemo } from 'react';

const NomeOperadora = createContext();

function useNomeOperadora() {
  const context = useContext(NomeOperadora);

  if (!context) {
    window.alert('NomeOperadora não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function NomeOperadoraProvider(props) {
  const [selecionado, setSelecionado] = useState('');
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <NomeOperadora.Provider value={value} {...props} />;
}

export { useNomeOperadora, NomeOperadoraProvider };
