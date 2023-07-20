import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Pag2 from '../Pages/Second_page/SecondPage';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announces" element={<Pag2 />} />
      </Routes>
    </Router>
  );
}

export default Routing;