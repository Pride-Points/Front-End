import React from "react";
import { Route, Routes } from 'react-router-dom';
import Header from './header'; 
import Sidebar from './menuLateral'; 
import ConteudoPrincipal from './conteudoPrincipal'; 
import Forms from './forms'; 

const Configuracoes = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<ConteudoPrincipal />} />
        <Route path="/forms" element={<Forms />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </div>
  );
}

export default Configuracoes;
