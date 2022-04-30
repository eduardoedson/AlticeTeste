import React, { createContext, useContext, useState, useMemo } from 'react';

const ErrorEmail = createContext();

function useErrorEmail() {
  const context = useContext(ErrorEmail);

  if (!context) {
    window.alert('ErrorEmail não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function ErrorEmailProvider(props) {
  const [selecionado, setSelecionado] = useState(false);
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <ErrorEmail.Provider value={value} {...props} />;
}

export { useErrorEmail, ErrorEmailProvider };
