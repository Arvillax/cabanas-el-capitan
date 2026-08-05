import { cabinsData } from "../../../data/cabins.js";

export default function CabanasGrid() {
  return (
    <section id="cabanas" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-10">
          <span className="text-green uppercase text-xs font-extrabold tracking-wider">
            Nuestras cabañas
          </span>
          <h2 className="text-3xl font-bold text-primary mt-1 mb-3">
            Visita y alójate en nuestras hermosas cabañas.
          </h2>
          <p className="text-text-secondary text-sm">
            Cada una de nuestras estancias está diseñada a detalle para
            garantizar su comodidad y ofrecer una experiencia única.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cabinsData.map((cabana) => (
            <article
              key={cabana.nombre}
              className="bg-bg-card rounded-[15px] overflow-hidden shadow-lg"
            >
              {cabana.folder && cabana.portada ? (
                <img
                  src={`/img/${cabana.folder}/${cabana.portada}`}
                  alt={cabana.nombre}
                  className="w-full h-[210px] object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-[210px] bg-bg-muted flex items-center justify-center text-text-secondary text-sm p-4 text-center">
                  Imagen disponible próximamente
                </div>
              )}

              <div className="p-5">
                <span className="text-green uppercase text-xs font-extrabold mb-1 block">
                  {cabana.tipo}
                </span>
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {cabana.nombre}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {cabana.descripcion}
                </p>
                <a
                  href={cabana.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 bg-accent text-primary rounded-lg font-bold text-sm hover:bg-accent-hover transition-colors"
                >
                  Solicitar información
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
