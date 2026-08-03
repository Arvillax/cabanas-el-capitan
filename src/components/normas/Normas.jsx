import React from 'react';
import { rulesData } from '../../../data/rules.js';

const formatItemText = (text) => {
  const timeRegex = /(\b\d{1,2}:\d{2}\s*(?:AM|PM)\b)/gi;
  const parts = text.split(timeRegex);

  return parts.map((part, index) =>
    timeRegex.test(part) ? (
      <strong key={index} className="font-bold text-[#1a0f0a]">
        {part}
      </strong>
    ) : (
      part
    )
  );
};

export function Normas() {
  return (
    <main className="min-h-screen bg-[#f6efe6] font-sans">
      <section className="bg-[#2c1d11] text-white py-12 px-4">
        <div className="max-w-[1100px] mx-auto text-left space-y-3">
          <nav className="text-sm text-white/70">
            <a href="#" className="underline hover:text-white">
              Inicio
            </a>
            <span className="mx-2">›</span>
            <span>Normas</span>
          </nav>

          <p className="text-xs uppercase tracking-widest font-extrabold text-[#d4a373] m-0">
            Convivencia y respeto
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white m-0 tracking-tight">
            Normas del Hostal
          </h1>

          <p className="text-white/80 text-base md:text-lg max-w-3xl m-0 pt-1 leading-relaxed">
            Para garantizar una estadía agradable para todos nuestros huéspedes, te pedimos leer y respetar las siguientes normas.
          </p>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto px-4 pt-10 pb-2">
        <div className="bg-[#fffaf4] border-l-4 border-[#5b3a29] p-5 md:p-6 rounded-r-xl shadow-sm border-t border-r border-b border-[#e0d0c0]">
          <p className="text-[#4a3525] text-sm md:text-base leading-relaxed m-0">
            Nuestras normas buscan crear un ambiente de <strong>respeto, seguridad y armonía</strong> para todos quienes visitan Cabañas El Capitan. Al confirmar tu reserva aceptas estas políticas. Si tienes dudas, no dudes en <a href="#" className="underline font-semibold text-[#5b3a29]">contactarnos</a>.
          </p>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rulesData.map((categoria) => (
            <div
              key={categoria.id}
              className="bg-[#fffdfa] rounded-2xl p-6 shadow-sm border border-[#eae3d9] h-full flex flex-col"
            >
              <div className="text-3xl mb-2 shrink-0">
                <span role="img" aria-label={categoria.titulo}>
                  {categoria.icono}
                </span>
              </div>

              <h2 className="text-xl font-bold text-[#2d1a10] pb-2.5 border-b-3 border-[#d4a373] shrink-0">
                {categoria.titulo}
              </h2>

              <ul className="divide-y divide-[#f2e9e1] text-xs md:text-sm text-[#4a3b32] font-medium mt-2 flex-1">
                {categoria.items.map((item, index) => (
                  <li key={index} className="py-2.5 flex items-start gap-2.5 leading-snug">
                    <span className="text-[#3b5941] font-bold text-sm shrink-0 select-none">
                      ✓
                    </span>
                    <span>{formatItemText(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto px-4 pb-16">
        <div className="bg-[#2c1d11] text-white p-6 md:p-8 rounded-2xl shadow-md text-center space-y-4">
          <p className="text-sm md:text-base text-[#e0d0c0] max-w-3xl mx-auto m-0 leading-relaxed">
            El incumplimiento de las normas puede resultar en la <strong className="text-white">finalización anticipada de la estadía sin derecho a reembolso</strong>. Agradecemos tu comprensión y colaboración para mantener Cabañas El Capitan como un destino de calidad para todos.
          </p>
          <div className="pt-2">
            <a
              href="#"
              className="inline-block bg-[#d4a373] text-[#2c1d11] hover:bg-[#e2b88c] font-semibold text-sm px-6 py-2.5 rounded-full transition-colors duration-200"
            >
              Ver preguntas frecuentes
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}