import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import CadastroUsuario from "./pages/CadastroUsuario";
import CadastroEmpresa from "./pages/CadastroEmpresa";
import Login from "./components/Login/Login";
import Map from './pages/TelaExplorador';
import TelaConfiguracoes from './pages/Configuracoes';
import Eventos from "./pages/Eventos";



const Rotas = () => {
   return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/cadastro-empresa" element={<CadastroEmpresa />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/explorador" element={<Map />} /> 
        <Route path="/configuracoes" element={<TelaConfiguracoes />} />
        <Route path="/empresa" element={<Eventos />} />
        <Route path="*" element={<h1>Not Found 404</h1>} /> 
      </Routes>
    </Router>
   )
}

export default Rotas;