import React, { createContext, useContext, useState, useMemo } from 'react';

const ErrorTelefone = createContext();

function useErrorTelefone() {
  const context = useContext(ErrorTelefone);

  if (!context) {
    window.alert('ErrorTelefone não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function ErrorTelefoneProvider(props) {
  const [selecionado, setSelecionado] = useState(false);
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <ErrorTelefone.Provider value={value} {...props} />;
}

export { useErrorTelefone, ErrorTelefoneProvider };
