// map.js
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Map from "./Map.jsx";

const RoutesMap = () => {
  return (
    <Routes>
      <Route path="/" element={<Map />} />
    </Routes>
  );
}
export default RoutesMap;
