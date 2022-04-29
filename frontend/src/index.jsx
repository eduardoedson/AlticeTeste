import React from 'react';
import { render } from 'react-dom';
import RoutesFile from './Routes';
import AppContextProvider from './Contexts/Providers';
import './Styles/Global.css';

render(
  <AppContextProvider>
    <RoutesFile />
  </AppContextProvider>, 
  document.getElementById('root')
);
