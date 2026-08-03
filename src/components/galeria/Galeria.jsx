import { useState } from 'react';
import { galleryData } from '../../../data/gallery.js'; 

const FILTROS = [
  { id: 'todas', label: 'Todas' },
  { id: 'area-social', label: 'Área Social' },
  { id: 'cabanas', label: 'Cabañas' },
  { id: 'habitaciones', label: 'Habitaciones' },
];

export function Galeria() {
  const [categoriaActiva, setCategoriaActiva] = useState('todas');

  const imagenesFiltradas = categoriaActiva === 'todas'
    ? galleryData
    : galleryData.filter((img) => img.categoria === categoriaActiva);

  return (
    <main className="min-h-screen bg-[#f6efe6]">
      <section className="bg-[#362117] text-white py-10 px-4">
        <div className="max-w-[1100px] mx-auto text-left space-y-2">
          <nav className="text-xs text-white/70">
            <a href="#" className="underline hover:text-white">Inicio</a>
            <span className="mx-1">›</span>
            <span>Galería</span>
          </nav>

          <p className="text-[0.75rem] uppercase tracking-[0.12em] font-extrabold text-[#e7c89e] m-0">
            Imágenes del paraíso
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-white m-0">
            Galería de Fotos
          </h1>

          <p className="text-white/80 text-sm md:text-base max-w-2xl m-0 pt-1">
            Descubre visualmente las instalaciones, cabañas y ambientes de Cabañas El Capitan.
          </p>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-4 my-8">
        <div className="flex flex-wrap justify-start gap-3">
          {FILTROS.map((filtro) => {
            const esActivo = categoriaActiva === filtro.id;
            return (
              <button
                key={filtro.id}
                onClick={() => setCategoriaActiva(filtro.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer border ${
                  esActivo
                    ? 'bg-[#5b3a29] border-[#5b3a29] text-white shadow-sm'
                    : 'bg-[#fffaf4] border-[#bbb] text-[#362117] hover:bg-[#f0dfc7] hover:border-[#5b3a29]'
                }`}
              >
                {filtro.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imagenesFiltradas.map((item) => (
            <figure
              key={item.id || item.src}
              className="group overflow-hidden rounded-xl bg-[#fffaf4] shadow-md border border-[#e0d0c0] transition-all duration-300 hover:shadow-lg"
            >
              <div className="overflow-hidden aspect-4/3">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-3 text-center text-xs font-medium text-[#6e5a4d] bg-[#fffaf4]">
                {item.alt.split(' - ')[0].trim()}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}
