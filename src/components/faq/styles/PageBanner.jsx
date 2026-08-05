function PageBanner() {
  return (
    <section className="relative overflow-hidden bg-[#362117]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
        <svg
          className="h-full w-full"
          viewBox="0 0 800 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-20 60 Q 200 20, 400 90 T 820 40"
            fill="none"
            stroke="#e7c89e"
            strokeWidth="2"
            strokeDasharray="2 14"
            strokeLinecap="round"
          />
          <path
            d="M-20 340 Q 220 380, 420 320 T 820 360"
            fill="none"
            stroke="#e7c89e"
            strokeWidth="2"
            strokeDasharray="2 14"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-[min(1180px,calc(100%-2rem))] py-20 sm:py-24">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#e7c89e]/80">
            <li>
              <a href="/" className="transition-colors hover:text-[#e7c89e]">
                Inicio
              </a>
            </li>
            <li aria-hidden="true" className="text-[#e7c89e]/50">
              /
            </li>
            <li className="font-medium text-[#e7c89e]" aria-current="page">
              FAQ
            </li>
          </ol>
        </nav>

        <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#e7c89e]">
          <span aria-hidden="true">⚓</span> Resolvemos tus dudas
        </p>

        <h1 className="max-w-2xl font-serif text-4xl leading-tight text-[#fffaf4] sm:text-5xl md:text-6xl">
          Preguntas Frecuentes
        </h1>

        <p className="mt-6 max-w-xl text-base text-[#f6efe6]/75 sm:text-lg">
          Todo lo que necesitas saber sobre reservas, horarios y servicios
          antes de zarpar hacia la isla.
        </p>
      </div>

      <svg
        className="relative block w-full text-[#f6efe6]"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0 32c120 12 240 12 360 0s240-12 360 0 240 12 360 0 240-12 360 0v28H0Z"
        />
      </svg>
    </section>
  );
}

export default PageBanner;
