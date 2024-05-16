import React from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Evento from  './components/pages/evento';
import Porcoes from './components/pages/porçoes';
import Temperos from './components/pages/temperos';
import Header from './components/header/Header';
import Sobre from './components/sobre';
function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/evento" element={<Evento />} />
        <Route path="/porcoes" element={<Porcoes />} />
        <Route path="/temperos" element={<Temperos />} />
      </Routes>
      <Sobre/>
    </Router>
  );
}

export default App;
