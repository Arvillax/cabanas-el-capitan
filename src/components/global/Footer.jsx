import { Link } from "react-router-dom";
import { siteConfig, navItems } from "../../../data/site.js";

export default function Footer() {
  const explorar = navItems.filter((item) =>
    ["Inicio", "Servicios", "Galería", "Ubicación", "Blog"].includes(item.label)
  );
  const informacion = navItems.filter((item) =>
    ["Opiniones", "Contacto", "FAQ", "Normas", "Quiénes Somos"].includes(item.label)
  );

  return (
    <footer className="bg-primary text-white py-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-8">
          <div className="flex-1 min-w-[180px]">
            <strong className="block text-base font-bold mb-2.5 text-accent">
              {siteConfig.nombre}
            </strong>
            <p className="m-0 mb-1.5 text-white/75 text-sm">
              Un refugio natural en la Isla del Tigre, Golfo de Fonseca. Honduras.
            </p>
          </div>

          <div className="flex-1 min-w-[180px]">
            <strong className="block text-base font-bold mb-2.5 text-accent">
              Explorar
            </strong>
            <ul className="list-none p-0 m-0">
              {explorar.map((item) => (
                <li key={item.href} className="mb-1.5">
                  <Link
                    to={item.href}
                    className="text-white/75 no-underline text-sm hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 min-w-[180px]">
            <strong className="block text-base font-bold mb-2.5 text-accent">
              Información
            </strong>
            <ul className="list-none p-0 m-0">
              {informacion.map((item) => (
                <li key={item.href} className="mb-1.5">
                  <Link
                    to={item.href}
                    className="text-white/75 no-underline text-sm hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 min-w-[180px]">
            <strong className="block text-base font-bold mb-2.5 text-accent">
              Contacto
            </strong>
            <address className="m-0 mb-1.5 text-white/75 text-sm not-italic">
              <p className="m-0 mb-1">Aldea San Pablo, frente al mirador</p>
              <p className="m-0 mb-1">Amapala, Valle, Honduras</p>
              <p className="m-0">Tel: {siteConfig.telefono}</p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/15 text-center text-white/50 text-xs">
          <p>&copy; 2025 {siteConfig.nombre}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
