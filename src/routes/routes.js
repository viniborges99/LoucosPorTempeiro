import React from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Evento from  '../components/pages/evento';
import Porcoes from '../components/pages/porçoes';
import Temperos from '../components/pages/temperos';
import Home from '../components/pages/Home';


function Rotas(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Evento" element={<Evento />} />
        <Route path="/Porcoes" element={<Porcoes />} />
        <Route path="/Temperos" element={<Temperos />} />
      </Routes>
    </Router>

  );
}

export default Rotas;
