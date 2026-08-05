function BlogCard({ articulo }) {
  const { titulo, extracto, imagen, imagenAlt, fechaLabel, tag } = articulo;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-sm bg-[#FFFDF8] ring-1 ring-[#362117]/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(54,33,23,0.45)]">
      {/* Imagen */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#362117]/5">
        <img
          src={imagen}
          alt={imagenAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Etiqueta estilo sello postal, superpuesta sobre la imagen */}
        <span className="absolute bottom-0 left-4 translate-y-1/2 rounded-sm bg-[#1F4E4A] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#F6EFE6] shadow-md">
          {tag}
        </span>
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col gap-3 px-5 pb-6 pt-7">
        <time className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#362117]/50">
          {fechaLabel}
        </time>

        <h3 className="font-serif text-xl font-bold leading-snug text-[#362117]">
          {titulo}
        </h3>

        <p className="line-clamp-3 flex-1 text-[0.925rem] leading-relaxed text-[#362117]/70">
          {extracto}
        </p>

        <a
          href={`/blog/${articulo.id}`}
          className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#C1572E] transition-colors hover:text-[#a3481f]"
        >
          Leer artículo
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </a>
      </div>
    </article>
  );
}

export default BlogCard;
