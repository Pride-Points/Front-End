import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "../../index.js";
import Map from "./Map.jsx";
import ModeloComentario from './commentModel.js'; 




const Rotas = () => {
   return(
    <Router>
      <Routes>
        <Route path="/" element={<Map />} />
      </Routes>
    </Router>
   )
}

export default Rotas ;