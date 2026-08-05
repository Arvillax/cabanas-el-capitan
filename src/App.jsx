<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Galeria from "./pages/Galeria";
import Ubicacion from "./pages/Ubicacion";
import Opiniones from "./pages/Opiniones";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import FAQ from "./pages/FAQ";
import Normas from "./pages/Normas";
import QuienesSomos from "./pages/QuienesSomos";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg text-text flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/ubicacion" element={<Ubicacion />} />
            <Route path="/opiniones" element={<Opiniones />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/normas" element={<Normas />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
=======
import React from 'react';
import { Galeria } from './components/galeria/Galeria';
import { Normas } from './components/normas/Normas';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6efe6]">
      <Normas />
    </div>
>>>>>>> origin/normas
  );
}