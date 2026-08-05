import React from 'react';
import Navbar from '../components/global/Navbar';
import { Galeria } from '../components/galeria/Galeria';
import Footer from '../components/global/Footer';

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-[#f6efe6] flex flex-col justify-between">
      <Navbar />
      
      <main className="container mx-auto py-8">
        <Galeria />
      </main>

      <Footer />
    </div>
  );
}
