import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Persona from './screens/Persona';
import Estadisticas from './screens/Estadisticas';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/person/:id" element={<Persona />} />
        <Route path="/Estadisticas" element={<Estadisticas />} />
      </Routes>
    </Router>
  );
};

export default App;
