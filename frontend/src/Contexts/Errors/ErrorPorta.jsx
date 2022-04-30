import React, { createContext, useContext, useState, useMemo } from 'react';

const ErrorPorta = createContext();

function useErrorPorta() {
  const context = useContext(ErrorPorta);

  if (!context) {
    window.alert('ErrorPorta não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function ErrorPortaProvider(props) {
  const [selecionado, setSelecionado] = useState(false);
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <ErrorPorta.Provider value={value} {...props} />;
}

export { useErrorPorta, ErrorPortaProvider };
