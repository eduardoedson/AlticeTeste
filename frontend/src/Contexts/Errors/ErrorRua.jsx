import React, { createContext, useContext, useState, useMemo } from 'react';

const ErrorRua = createContext();

function useErrorRua() {
  const context = useContext(ErrorRua);

  if (!context) {
    window.alert('ErrorRua não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function ErrorRuaProvider(props) {
  const [selecionado, setSelecionado] = useState(false);
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <ErrorRua.Provider value={value} {...props} />;
}

export { useErrorRua, ErrorRuaProvider };
