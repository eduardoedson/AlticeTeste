import React, { createContext, useContext, useState, useMemo } from 'react';

const Porta = createContext();

function usePorta() {
  const context = useContext(Porta);

  if (!context) {
    window.alert('Porta não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function PortaProvider(props) {
  const [selecionado, setSelecionado] = useState('');
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <Porta.Provider value={value} {...props} />;
}

export { usePorta, PortaProvider };
