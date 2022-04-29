import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Pages/Index'

function RoutesFile() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesFile;
