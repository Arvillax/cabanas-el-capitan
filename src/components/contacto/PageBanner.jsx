import { siteConfig } from "../../../data/site";

function PageBanner() {
  return (
    <section className="bg-[#6f4f3a] text-[#f7efe7]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <nav className="mb-6 text-sm text-[#ead8c2]" aria-label="Ruta de navegación">
          <a href="/" className="hover:text-white">
            Inicio
          </a>
          <span className="mx-2">›</span>
          <span>Contacto</span>
        </nav>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#ead8c2]">
          Estamos para ayudarte
        </p>
        <h1 className="text-4xl font-bold sm:text-5xl">Contáctenos</h1>
        <p className="mt-4 max-w-2xl text-lg text-[#f3e7d9]">
          Resolvemos tus dudas, gestionamos tu reserva y coordinamos tu visita a la Isla del Tigre.
        </p>
      </div>
    </section>
  );
}

export default PageBanner;
