import { siteConfig } from "../../../data/site.js";

function SocialCTA() {
  return (
    <section className="relative bg-[#17302d] px-6 py-16 text-center sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9A441]">
          Comunidad
        </span>

        <h2 className="font-serif text-3xl font-bold text-[#F6EFE6] sm:text-4xl">
          Síguenos para más contenido
        </h2>

        <p className="max-w-md text-sm leading-relaxed text-[#F6EFE6]/70">
          Historias, fotos y novedades directo desde la Isla del Tigre. Únete
          a nuestra comunidad en redes sociales.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteConfig.redes.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#F6EFE6] px-6 py-3 text-sm font-semibold text-[#17302d] transition-transform hover:-translate-y-0.5 hover:bg-white"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
            >
              <path d="M13.5 22v-8.5H16l.5-3.5h-3V7.7c0-1 .3-1.7 1.7-1.7H16.6V2.8C16.3 2.8 15.3 2.7 14.2 2.7c-2.4 0-4 1.5-4 4.1v2.3H7.7v3.5h2.5V22h3.3Z" />
            </svg>
            Facebook
          </a>

          <a
            href={siteConfig.redes.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#F6EFE6]/30 px-6 py-3 text-sm font-semibold text-[#F6EFE6] transition-colors hover:bg-[#F6EFE6]/10"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
            >
              <path d="M16.6 2h-3.2v13.4a2.9 2.9 0 1 1-2.1-2.8v-3.3a6.2 6.2 0 1 0 5.3 6.1V8.8a7.6 7.6 0 0 0 4.4 1.4V7a4.3 4.3 0 0 1-4.4-4.3V2Z" />
            </svg>
            TikTok
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialCTA;
