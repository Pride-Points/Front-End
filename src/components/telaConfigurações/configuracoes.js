import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header'; 
import Sidebar from './menuLateral'; 
import ConteudoPrincipal from './conteudoPrincipal';  

const Configuracoes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Sidebar />
              <ConteudoPrincipal />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default Configuracoes;