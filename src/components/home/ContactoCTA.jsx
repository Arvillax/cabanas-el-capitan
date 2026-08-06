import { siteConfig } from "../../../data/site.js";

export default function ContactoCTA() {
  return (
    <section id="contacto" className="bg-dark py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-between">
        {/* Left — info */}
        <div className="flex-1">
          <span className="text-accent uppercase text-xs font-extrabold tracking-wider">
            Contacto y reservas
          </span>
          <h2 className="text-3xl font-bold text-white mt-1 mb-3">
            ¿Listo para reservar?
          </h2>
          <p className="text-white/80 text-sm mb-6">
            Contáctanos directamente y te confirmamos disponibilidad. Estamos
            en Amapala, Isla del Tigre, Honduras.
          </p>
          <ul className="text-white/85 text-sm space-y-2 p-0 m-0 list-none">
            <li className="pb-2 border-b border-white/10">
              <strong className="text-accent">Teléfono / WhatsApp:</strong>{" "}
              {siteConfig.telefono}
            </li>
            <li className="pb-2 border-b border-white/10">
              <strong className="text-accent">Dirección:</strong>{" "}
              {siteConfig.direccion}
            </li>
            <li className="pb-2 border-b border-white/10 last:border-b-0">
              <strong className="text-accent">Atención:</strong>{" "}
              {siteConfig.horario}
            </li>
          </ul>
        </div>

        {/* Right — actions */}
        <div className="flex flex-col gap-3 flex-shrink-0">
          <a
            href={`${siteConfig.whatsappLink}?text=Hola%20necesito%20informacion%20sobre%20las%20caba%C3%B1as`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-accent text-primary rounded-lg font-bold text-sm text-center hover:bg-accent-hover transition-colors"
          >
            Consultar por WhatsApp
          </a>
          <a
            href="#contacto"
            className="inline-block px-6 py-3 bg-transparent border-2 border-accent text-accent rounded-lg font-bold text-sm text-center hover:bg-accent/15 hover:text-white transition-colors"
          >
            Ir al formulario de contacto
          </a>
        </div>
      </div>
    </section>
  );
}
