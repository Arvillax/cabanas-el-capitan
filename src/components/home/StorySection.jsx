export default function StorySection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Left — story copy */}
        <div className="flex-1">
          <span className="text-green uppercase text-xs font-extrabold tracking-wider">
            Acerca del lugar
          </span>
          <h2 className="text-3xl font-bold text-primary mt-1 mb-4">
            Descubre la Magia del Golfo de Fonseca
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Nuestras cabañas cuentan con cómodas camas matrimoniales, aire
            acondicionado y entretenimiento completo con TV que incluye
            Disney+, Netflix y HBO para una estadía placentera.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Además, nuestros clientes pueden disfrutar de diversas amenidades
            como piscina, quiosco con hamacas y área de fogata, ideales para
            compartir momentos inolvidables en familia.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed">
            También podrán explorar las distintas playas que rodean la isla,
            realizar caminatas por senderos hacia la cima del Cerro El Tigre,
            donde disfrutarán de una vista espectacular del Golfo de Fonseca y
            de los tres países que lo conforman: Honduras, Nicaragua y El
            Salvador.
          </p>
        </div>

        {/* Right — story panel */}
        <div className="bg-primary text-white p-6 rounded-[15px] shadow-lg flex flex-col gap-4 flex-1">
          <div className="p-4 bg-white/[0.10] rounded-lg">
            <span className="block text-accent uppercase text-xs font-extrabold mb-1.5">
              Ubicación
            </span>
            <span className="block text-sm">
              Amapala, Valle, Honduras. Isla del Tigre, Golfo de Fonseca.
            </span>
          </div>
          <div className="p-4 bg-white/[0.10] rounded-lg">
            <span className="block text-accent uppercase text-xs font-extrabold mb-1.5">
              Capacidad
            </span>
            <span className="block text-sm">
              Entre 2 y 6 huéspedes según la unidad.
            </span>
          </div>
          <div className="p-4 bg-white/[0.10] rounded-lg">
            <span className="block text-accent uppercase text-xs font-extrabold mb-1.5">
              Experiencia
            </span>
            <span className="block text-sm">
              Descanso, naturaleza y comodidad en un solo lugar.
            </span>
          </div>
          <div className="p-4 bg-white/[0.10] rounded-lg">
            <span className="block text-accent uppercase text-xs font-extrabold mb-1.5">
              Espacios disponibles
            </span>
            <span className="block text-sm">
              7 cabañas y habitaciones para elegir.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
