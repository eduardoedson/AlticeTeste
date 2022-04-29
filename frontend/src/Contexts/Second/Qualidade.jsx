import React, { createContext, useContext, useState, useMemo } from 'react';

const Qualidade = createContext();

function useQualidade() {
  const context = useContext(Qualidade);

  if (!context) {
    window.alert('Qualidade não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function QualidadeProvider(props) {
  const [selecionado, setSelecionado] = useState('Razoável');
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <Qualidade.Provider value={value} {...props} />;
}

export { useQualidade, QualidadeProvider };
