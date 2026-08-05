import { servicesData } from "../../../data/services.js";

function ServicesGrid() {
  return (
    <section className="bg-[#f6efe6] py-16 sm:py-20">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <div className="mb-12 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f5b47]">
            A bordo de tu estadía
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#362117] sm:text-4xl">
            Comodidades pensadas para cada huésped
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {servicesData.map((service) => (
            <li key={service.id}>
              <article
                className="group h-full rounded-3xl border border-[#e7c89e]/60 bg-[#fffaf4] p-6 shadow-[0_18px_40px_rgba(54,33,23,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2f5b47]/40 hover:shadow-[0_24px_50px_rgba(54,33,23,0.14)]"
              >
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7c89e] text-2xl transition-colors duration-300 group-hover:bg-[#2f5b47]"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <h3 className="font-serif text-lg text-[#362117]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6e5a4d]">
                  {service.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ServicesGrid;
