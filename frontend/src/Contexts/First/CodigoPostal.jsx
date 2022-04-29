import React, { createContext, useContext, useState, useMemo } from 'react';

const CodigoPostal = createContext();

function useCodigoPostal() {
  const context = useContext(CodigoPostal);

  if (!context) {
    window.alert('CodigoPostal não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function CodigoPostalProvider(props) {
  const [selecionado, setSelecionado] = useState('');
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <CodigoPostal.Provider value={value} {...props} />;
}

export { useCodigoPostal, CodigoPostalProvider };
