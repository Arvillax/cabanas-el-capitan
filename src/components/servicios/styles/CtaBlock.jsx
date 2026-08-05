import { siteConfig } from "../../../data/site.js";

function CtaBlock() {
  return (
    <section className="relative overflow-hidden bg-[#362117] py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        aria-hidden="true"
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 800 300"
          preserveAspectRatio="none"
        >
          <path
            d="M-20 150 Q 200 100, 400 170 T 820 130"
            fill="none"
            stroke="#e7c89e"
            strokeWidth="2"
            strokeDasharray="2 14"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative mx-auto flex w-[min(1180px,calc(100%-2rem))] flex-col items-center gap-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e7c89e]">
          Reserva tu estadía
        </p>
        <h2 className="max-w-xl font-serif text-3xl text-[#fffaf4] sm:text-4xl">
          ¿Listo para zarpar hacia tu próximo descanso?
        </h2>
        <p className="max-w-lg text-[#f6efe6]/75">
          Escríbenos y armamos juntos los servicios que quieres incluir en tu
          visita a Cabañas El Capitán.
        </p>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-[#0f3d24] shadow-[0_18px_40px_rgba(37,211,102,0.25)] transition-transform hover:-translate-y-0.5"
          >
            <span aria-hidden="true">💬</span> Escríbenos por WhatsApp
          </a>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e7c89e]/50 px-7 py-3.5 text-sm font-semibold text-[#f6efe6] transition-colors hover:bg-[#e7c89e]/10"
          >
            Ir a Contacto <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CtaBlock;
