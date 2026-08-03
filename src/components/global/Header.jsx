import { useState } from "react";
import { siteConfig, navItems } from "../../../data/site.js";
import "../global/styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="flex flex-col bg-bg border-b-2 border-primary-light md:flex-row md:items-center md:p-6 md:px-5">
      <div className="flex items-center justify-between gap-4 p-3 px-5 md:flex-1 md:p-0">
        <a href="/" className="flex items-center gap-3 text-primary no-underline">
          <img
            src="/img/logo/logo_1.webp"
            alt="Logo Cabañas El Capitan"
            className="w-12 h-12 rounded-lg"
          />
          <span>
            <strong className="block text-lg font-bold leading-none">
              {siteConfig.nombre}
            </strong>
            <small className="block text-xs text-text-secondary mt-0.5 w-62" >
              {siteConfig.slogan}
            </small>
          </span>
        </a>

        <div className="hidden md:flex gap-2">
          <a
            href={siteConfig.redes.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-xs font-bold text-primary hover:bg-bg-muted"
          >
            Facebook
          </a>
          <a
            href={siteConfig.redes.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-xs font-bold text-primary hover:bg-bg-muted"
          >
            TikTok
          </a>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-xs font-bold text-primary hover:bg-bg-muted"
          >
            WhatsApp
          </a>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-evenly w-12 h-12 p-1 cursor-pointer bg-transparent border-none"
          aria-label="Menú"
        >
          <span className="block h-1 bg-primary rounded" />
          <span className="block h-1 bg-primary rounded" />
          <span className="block h-1 bg-primary rounded" />
        </button>
      </div>

      <nav className={`nav-mobile${menuOpen ? " open" : ""} bg-bg-card border-t border-gray-200`}>
        <ul className="list-none p-0 m-0 w-full md:w-auto md:flex md:flex-wrap md:items-center md:justify-end md:gap-2">
          {navItems.map((item) => (
            <li key={item.href} className="border-b border-gray-100 md:border-b-0">
              <a
                href={item.href}
                onClick={closeMenu}
                className="block p-3 px-5 text-primary font-semibold md:text-xs md:p-2 md:px-3 md:rounded hover:bg-bg-muted hover:text-primary-light"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
