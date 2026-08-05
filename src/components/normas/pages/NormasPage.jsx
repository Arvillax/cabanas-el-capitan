import React from 'react';
import Navbar from '../components/global/Navbar';
import { Normas } from '../components/normas/Normas';
import Footer from '../components/global/Footer';

export default function NormasPage() {
  return (
    <div className="min-h-screen bg-[#f6efe6] flex flex-col justify-between">
      <Navbar />
      
      <main className="container mx-auto py-8">
        <Normas />
      </main>

      <Footer />
    </div>
  );
}
