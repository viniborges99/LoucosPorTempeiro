import React from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Evento from  './components/pages/evento';
import Porcoes from './components/pages/porçoes';
import Temperos from './components/pages/temperos';
import Home from './components/pages/Home';
import Header from './components/header/Header';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/evento" element={<Evento />} />
        <Route path="/porcoes" element={<Porcoes />} />
        <Route path="/temperos" element={<Temperos />} />
      </Routes>
    </Router>
  );
}

export default App;
