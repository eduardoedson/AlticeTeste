import React, { createContext, useContext, useState, useMemo } from 'react';

const Complemento = createContext();

function useComplemento() {
  const context = useContext(Complemento);

  if (!context) {
    window.alert('Complemento não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function ComplementoProvider(props) {
  const [selecionado, setSelecionado] = useState('');
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <Complemento.Provider value={value} {...props} />;
}

export { useComplemento, ComplementoProvider };
