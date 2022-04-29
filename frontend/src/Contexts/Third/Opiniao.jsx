import React, { createContext, useContext, useState, useMemo } from 'react';

const Opiniao = createContext();

function useOpiniao() {
  const context = useContext(Opiniao);

  if (!context) {
    window.alert('Opiniao não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function OpiniaoProvider(props) {
  const [selecionado, setSelecionado] = useState('');
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <Opiniao.Provider value={value} {...props} />;
}

export { useOpiniao, OpiniaoProvider };
