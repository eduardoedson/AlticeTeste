import React, { createContext, useContext, useState, useMemo } from 'react';

const ErrorCidade = createContext();

function useErrorCidade() {
  const context = useContext(ErrorCidade);

  if (!context) {
    window.alert('ErrorCidade não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function ErrorCidadeProvider(props) {
  const [selecionado, setSelecionado] = useState(false);
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <ErrorCidade.Provider value={value} {...props} />;
}

export { useErrorCidade, ErrorCidadeProvider };
