import { navItems, siteConfig } from "../../../data/site";

const formattedPhone = siteConfig.telefono.replace(/^\+504(\d{4})(\d{4})$/, "+504 $1-$2");

function SiteFooter() {
  return (
    <footer className="border-t border-[#e8ddd0] bg-[#f7efe7] py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-8">
        <div>
          <strong className="text-lg text-[#2b221c]">Cabañas El Capitan</strong>
          <p className="mt-3 text-sm leading-7 text-[#6b5b4b]">
            Un refugio natural en la Isla del Tigre, Golfo de Fonseca. Honduras.
          </p>
        </div>
        <div>
          <strong className="text-lg text-[#2b221c]">Explorar</strong>
          <ul className="mt-3 space-y-2 text-sm text-[#6b5b4b]">
            {navItems.slice(0, 5).map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-[#1f2d1f]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <strong className="text-lg text-[#2b221c]">Información</strong>
          <ul className="mt-3 space-y-2 text-sm text-[#6b5b4b]">
            {navItems.slice(5).map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-[#1f2d1f]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <strong className="text-lg text-[#2b221c]">Contacto</strong>
          <address className="mt-3 space-y-2 text-sm not-italic leading-7 text-[#6b5b4b]">
            <p>{siteConfig.direccion}</p>
            <p>Tel: {formattedPhone}</p>
          </address>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-[#e8ddd0] px-6 pt-6 text-sm text-[#6b5b4b] lg:px-8">
        <p>© 2025 Cabañas El Capitan. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default SiteFooter;
