import React, { createContext, useContext, useState, useMemo } from 'react';

const Cidade = createContext();

function useCidade() {
  const context = useContext(Cidade);

  if (!context) {
    window.alert('Cidade não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function CidadeProvider(props) {
  const [selecionado, setSelecionado] = useState('');
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <Cidade.Provider value={value} {...props} />;
}

export { useCidade, CidadeProvider };
