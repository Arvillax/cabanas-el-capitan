function FaqCta() {
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
          ¿Aún con dudas?
        </p>
        <h2 className="max-w-xl font-serif text-3xl text-[#fffaf4] sm:text-4xl">
          ¿No encontraste lo que buscabas?
        </h2>
        <p className="max-w-lg text-[#f6efe6]/75">
          Escríbenos y con gusto resolvemos cualquier pregunta antes de tu
          llegada a Cabañas El Capitán.
        </p>

        <a
          href="/contacto"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#e7c89e] px-7 py-3.5 text-sm font-semibold text-[#362117] shadow-[0_18px_40px_rgba(231,200,158,0.25)] transition-transform hover:-translate-y-0.5"
        >
          Ir a Contacto <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

export default FaqCta;
