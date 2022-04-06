import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home';
import ProductDetails from '../../Pages/ProductDetails';
import About from '../../Pages/About';
import Navbar from '../Navbar';

function Routing() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
