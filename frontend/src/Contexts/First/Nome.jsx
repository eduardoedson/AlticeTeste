import React, { createContext, useContext, useState, useMemo } from 'react';

const Nome = createContext();

function useNome() {
  const context = useContext(Nome);

  if (!context) {
    window.alert('Nome não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function NomeProvider(props) {
  const [selecionado, setSelecionado] = useState('');
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <Nome.Provider value={value} {...props} />;
}

export { useNome, NomeProvider };
