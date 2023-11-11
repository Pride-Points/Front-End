import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import CadastroUsuario from "./pages/CadastroUsuario";
import Eventos from "./components/TelasUsuario/Eventos"
import Avaliacoes from "./components/TelasUsuario/Avaliacoes"

const Rotas = () => {
   return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/avaliacoes" element={<Avaliacoes />} />
      </Routes>
    </Router>
   )
}

export default Rotas;