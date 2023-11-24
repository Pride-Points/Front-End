import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from "./components/Home/Home.jsx";
import Dash from "./components/dashboard/dash.jsx";

const Rotas = () => {
   return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dash" element={<Dash />} />
      </Routes>
    </Router>
   )
}

export default Rotas;