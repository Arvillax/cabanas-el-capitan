import { navItems, siteConfig } from "../../data/site";

const whatsappLink = `${siteConfig.whatsappLink}?text=${encodeURIComponent("Hola quiero hacer una consulta")}`;

function SiteHeader() {
  return (
    <header className="border-b border-[#e8ddd0] bg-[#f7efe7]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <img src="/img/logo/logo_1.webp" alt="Logo Cabañas El Capitan" className="h-12 w-12" />
          <span className="flex flex-col leading-tight">
            <strong className="text-lg font-semibold text-[#2b221c]">Cabañas El Capitan</strong>
            <small className="text-sm text-[#6b5b4b]">Descanso, paisaje y experiencias a medida</small>
          </span>
        </a>

        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-[#4d3d32]">
          <a href={siteConfig.redes.facebook} target="_blank" rel="noreferrer" className="hover:text-[#1f2d1f]">
            Facebook
          </a>
          <a href={siteConfig.redes.tiktok} target="_blank" rel="noreferrer" className="hover:text-[#1f2d1f]">
            TikTok
          </a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="hover:text-[#1f2d1f]">
            WhatsApp
          </a>
        </div>
      </div>

      <nav className="border-t border-[#e8ddd0] bg-[#f7efe7]">
        <ul className="mx-auto flex max-w-7xl flex-wrap gap-4 px-6 py-3 text-sm font-medium text-[#4d3d32] lg:px-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="transition hover:text-[#1f2d1f]">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default SiteHeader;
