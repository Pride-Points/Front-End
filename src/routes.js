import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import CadastroUsuario from "./pages/CadastroUsuario";
import CadastroEmpresa from "./pages/CadastroEmpresa";
import Login from "./components/Login/Login";
import Map from './pages/TelaExplorador';
import Eventos from "./components/TelasUsuario/Eventos"
import Avaliacoes from "./components/TelasUsuario/Avaliacoes"
import EventosEmpresa from "./pages/EventosEmpresa";
import Dash from "./components/dashboard/dash.jsx";
import HomeLocais from "./pages/Home";
import HomeLocaisAvalicoes from "./components/TelasUsuario/Home-avaliacoes"
import HomeLocaisEventos from "./components/TelasUsuario/Home-eventos.jsx"
import HomeUsuarioEventos from "./components/TelasUsuario/Home-locais-eventos.jsx"



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
        <Route path="*" element={<h1>Not Found 404</h1>} /> 
        <Route path="/eventos-empresa" element={<EventosEmpresa />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/home-usuario" element={<HomeLocais />} />
        <Route path="/home-usuario-avaliacoes" element={<HomeLocaisAvalicoes />} />
        <Route path="/home-usuario-eventos" element={<HomeLocaisEventos />} />
        <Route path="/home-usuario-eventos-locais" element={<HomeUsuarioEventos />} />

      </Routes>
    </Router>
   )
}

export default Rotas;