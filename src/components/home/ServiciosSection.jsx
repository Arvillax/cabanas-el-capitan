import { servicesData } from "../../../data/services.js";

export default function ServiciosSection() {
  return (
    <section className="bg-dark text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-10">
          <span className="text-accent uppercase text-xs font-extrabold tracking-wider">
            Servicios y comodidades
          </span>
          <h2 className="text-3xl font-bold text-white mt-1 mb-3">
            Nuestros servicios
          </h2>
          <p className="text-white/70 text-sm">
            Nuestras instalaciones cuentan con todos los servicios necesarios
            para una estancia cómoda y agradable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.map((servicio, i) => (
            <div
              key={i}
              className="p-6 bg-white/[0.08] border border-white/[0.14] rounded-[15px]"
            >
              <h3 className="text-accent text-lg font-bold mb-2">
                {servicio.titulo}
              </h3>
              <p className="text-white/78 text-sm">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
