import React, { createContext, useContext, useState, useMemo } from 'react';

const ErrorCodigoPostal = createContext();

function useErrorCodigoPostal() {
  const context = useContext(ErrorCodigoPostal);

  if (!context) {
    window.alert('ErrorCodigoPostal não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function ErrorCodigoPostalProvider(props) {
  const [selecionado, setSelecionado] = useState(false);
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <ErrorCodigoPostal.Provider value={value} {...props} />;
}

export { useErrorCodigoPostal, ErrorCodigoPostalProvider };
