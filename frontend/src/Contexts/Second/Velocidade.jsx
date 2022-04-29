import React, { createContext, useContext, useState, useMemo } from 'react';

const Velocidade = createContext();

function useVelocidade() {
  const context = useContext(Velocidade);

  if (!context) {
    window.alert('Velocidade não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function VelocidadeProvider(props) {
  const [selecionado, setSelecionado] = useState('');
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <Velocidade.Provider value={value} {...props} />;
}

export { useVelocidade, VelocidadeProvider };
