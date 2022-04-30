import React, { createContext, useContext, useState, useMemo } from 'react';

const ErrorNome = createContext();

function useErrorNome() {
  const context = useContext(ErrorNome);

  if (!context) {
    window.alert('ErrorNome não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function ErrorNomeProvider(props) {
  const [selecionado, setSelecionado] = useState(false);
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <ErrorNome.Provider value={value} {...props} />;
}

export { useErrorNome, ErrorNomeProvider };
