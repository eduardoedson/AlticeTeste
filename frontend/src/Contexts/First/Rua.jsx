import React, { createContext, useContext, useState, useMemo } from 'react';

const Rua = createContext();

function useRua() {
  const context = useContext(Rua);

  if (!context) {
    window.alert('Rua não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function RuaProvider(props) {
  const [selecionado, setSelecionado] = useState('');
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <Rua.Provider value={value} {...props} />;
}

export { useRua, RuaProvider };
