import { includedServices, optionalServices } from "../../../data/services.js";

function InclusionsSection() {
  return (
    <section className="bg-[#f0dfc7] py-16 sm:py-20">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <div className="mb-12 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5b3a29]">
            Tu boleto de estadía
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#362117] sm:text-4xl">
            Qué está incluido y qué es opcional
          </h2>
        </div>

        <div className="relative grid grid-cols-1 overflow-hidden rounded-[34px] shadow-[0_24px_60px_rgba(54,33,23,0.14)] md:grid-cols-2">
          {/* Columna: Incluido */}
          <div className="relative bg-[#2f5b47] p-8 text-[#fffaf4] sm:p-10">
            <h3 className="font-serif text-2xl">
              Incluido sin costo adicional
            </h3>
            <p className="mt-2 text-sm text-[#e7c89e]">
              Servicios listos desde tu llegada, sin cargos extra.
            </p>
            <ul className="mt-6 space-y-4">
              {includedServices.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#e7c89e] text-sm font-bold text-[#2f5b47]"
                    aria-hidden="true"
                  >
                    ✔
                  </span>
                  <span className="text-sm leading-relaxed text-[#f6efe6]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisor tipo "pase de abordaje": perforación con muescas circulares */}
          <div
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-0 -translate-x-1/2 md:block"
            aria-hidden="true"
          >
            <div className="absolute -top-4 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-[#f0dfc7]" />
            <div className="h-full border-l-2 border-dashed border-[#f0dfc7]/70" />
            <div className="absolute -bottom-4 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-[#f0dfc7]" />
          </div>

          {/* Columna: Opcional */}
          <div className="bg-[#fffaf4] p-8 text-[#362117] sm:p-10">
            <h3 className="font-serif text-2xl">
              Servicios opcionales
              <span className="block text-base font-normal text-[#6e5a4d]">
                (costo adicional)
              </span>
            </h3>
            <p className="mt-2 text-sm text-[#6e5a4d]">
              Suma experiencias extra y personaliza tu visita.
            </p>
            <ul className="mt-6 space-y-4">
              {optionalServices.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#5b3a29] text-sm font-bold text-[#f6efe6]"
                    aria-hidden="true"
                  >
                    +
                  </span>
                  <span className="text-sm leading-relaxed text-[#33261f]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InclusionsSection;
