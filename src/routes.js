import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import CadastroUsuario from "./pages/CadastroUsuario";
import CadastroEmpresa from "./pages/CadastroEmpresa";
import Login from "./components/Login/Login";
import Map from './pages/TelaExplorador';
// import TelaConfiguracoes from './pages/Configuracoes';
import Eventos from "./components/TelasUsuario/Eventos"
import Avaliacoes from "./components/TelasUsuario/Avaliacoes"
import HomeEventos from './components/TelasUsuario/Home-eventos';



const Rotas = () => {
   return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/cadastro-empresa" element={<CadastroEmpresa />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/explorador" element={<Map />} /> 
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/avaliacoes" element={<Avaliacoes />} />
        <Route path="/home-eventos" element={<HomeEventos />} />

      </Routes>
    </Router>
   )
}

export default Rotas;