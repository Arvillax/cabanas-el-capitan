export default function UbicacionSection() {
  return (
    <section className="bg-bg-muted py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-10">
          <span className="text-green uppercase text-xs font-extrabold tracking-wider">
            Ubicación
          </span>
          <h2 className="text-3xl font-bold text-primary mt-1 mb-3">
            ¿Cómo llegar?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row rounded-[15px] overflow-hidden shadow-lg">
          {/* Left — location info */}
          <div className="bg-primary text-white p-8 lg:w-2/5">
            <h3 className="text-xl font-bold text-accent mb-4">
              Cabañas El Capitan
            </h3>
            <p className="text-white/85 text-sm mb-1">
              <strong>Dirección:</strong> Aldea San Pablo, frente al mirador
            </p>
            <p className="text-white/85 text-sm mb-1">
              <strong>Municipio:</strong> Amapala, Valle, Honduras
            </p>
            <p className="text-white/85 text-sm mb-1">
              <strong>Referencia:</strong> Isla del Tigre, Golfo de Fonseca
            </p>
            <p className="text-white/85 text-sm mb-5">
              <strong>Coordenadas:</strong> 13.289° N, 87.632° W
            </p>
            <a
              href="https://maps.google.com/?q=Cabañas+El+Capitan+Amapala+Honduras"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 bg-accent text-primary rounded-lg font-bold text-sm hover:bg-accent-hover transition-colors"
            >
              Ver en Google Maps
            </a>
          </div>

          {/* Right — steps */}
          <div className="bg-bg-card p-8 lg:w-3/5">
            <h3 className="text-xl font-bold text-primary mb-4">
              Cómo llegar
            </h3>
            <ol className="text-text-secondary text-sm space-y-3 list-none p-0 m-0">
              <li className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-light text-white font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <span>
                  Salir hacia <strong className="text-primary">San Lorenzo, Valle</strong>
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-light text-white font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <span>
                  Tomar la barca en el muelle de{" "}
                  <strong className="text-primary">Coyolito</strong>
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-light text-white font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <span>
                  Llegar a la{" "}
                  <strong className="text-primary">Isla del Tigre</strong>
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-light text-white font-bold text-xs flex items-center justify-center">
                  4
                </span>
                <span>
                  Dirigirse a la{" "}
                  <strong className="text-primary">Aldea San Pablo</strong>,
                  frente al mirador
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
