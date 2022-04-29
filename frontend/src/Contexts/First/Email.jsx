import React, { createContext, useContext, useState, useMemo } from 'react';

const Email = createContext();

function useEmail() {
  const context = useContext(Email);

  if (!context) {
    window.alert('Email não foi carregado corretamente, tente atualizar a página.');
  }

  return context;
}

function EmailProvider(props) {
  const [selecionado, setSelecionado] = useState('');
  const value = useMemo(() => [selecionado, setSelecionado], [selecionado]);
  return <Email.Provider value={value} {...props} />;
}

export { useEmail, EmailProvider };
