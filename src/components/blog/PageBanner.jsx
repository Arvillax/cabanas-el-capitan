function PageBanner() {
  return (
    <section
      className="relative overflow-hidden px-6 pb-24 pt-16 sm:px-10 sm:pb-28 sm:pt-20 lg:px-16"
      style={{
        background:
          "radial-gradient(120% 140% at 15% 0%, #D9A441 0%, #C1572E 38%, #1F4E4A 78%, #163a37 100%)",
      }}
    >
      {/* Resplandor de sol tenue, evocando el atardecer sobre el Golfo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-32 h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{ background: "#FDECC8" }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#F6EFE6]/75">
            <li>
              <a href="/" className="transition-colors hover:text-[#F6EFE6]">
                Inicio
              </a>
            </li>
            <li aria-hidden="true" className="text-[#F6EFE6]/40">
              /
            </li>
            <li className="text-[#F6EFE6]" aria-current="page">
              Blog
            </li>
          </ol>
        </nav>

        {/* Kicker */}
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-[#F6EFE6]/60" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FDECC8]">
            Inspiración de viaje
          </span>
        </div>

        {/* Título */}
        <h1 className="max-w-2xl font-serif text-5xl font-bold leading-[1.05] text-[#F6EFE6] drop-shadow-sm sm:text-6xl">
          Blog de Viajes
        </h1>
      </div>

      {/* Divisor tipo línea de costa, transición hacia la cuadrícula de artículos */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-16 w-full sm:h-20"
      >
        <path
          d="M0,55 C 180,90 360,20 540,45 C 720,70 900,15 1080,40 C 1260,65 1350,35 1440,50 L1440,90 L0,90 Z"
          fill="#F6EFE6"
        />
      </svg>
    </section>
  );
}

export default PageBanner;
