import { useState, useEffect, useCallback } from "react";
import { img } from "../../utils/base.js";
import "./styles/home.css";

const slides = [
  {
    imagen: img("/img/Area Social/area_social_5.jpg"),
    alt: "Área social Cabañas El Capitan",
    kicker: "Escapadas naturales con comodidad real",
    titulo: "Cabañas El Capitan",
    tituloTag: "h1",
    descripcion:
      "Un refugio rodeado de playas, creado para desconectar y disfrutar del descanso en medio de paisajes naturales y bellos atardeceres.",
    btnPrincipal: { texto: "Consultar disponibilidad", href: "#contacto" },
    btnSecundario: { texto: "Ver cabañas", href: "#cabanas" },
    stats: [
      { valor: "7", label: "Espacios disponibles" },
      { valor: "24/7", label: "Atención al huésped" },
      { valor: "100%", label: "Entorno natural" },
    ],
  },
  {
    imagen: img("/img/Cabaña Estribor/cabana_estribor_4.jpg"),
    alt: "Cabaña Estribor",
    kicker: "Cabaña Estribor",
    titulo: "Comodidad y naturaleza",
    tituloTag: "h2",
    descripcion:
      "Aire acondicionado, camas matrimoniales y TV con Disney+, Netflix y HBO para una estadía placentera.",
    btnPrincipal: { texto: "Ver cabañas", href: "#cabanas" },
    btnSecundario: null,
    stats: null,
  },
  {
    imagen: img("/img/Cabaña Timonel/cabana_timonel_3.jpg"),
    alt: "Cabaña Timonel",
    kicker: "Explora la isla",
    titulo: "Vista al Golfo de Fonseca",
    tituloTag: "h2",
    descripcion:
      "Senderos, playas y miradores con vistas espectaculares de Honduras, Nicaragua y El Salvador.",
    btnPrincipal: { texto: "Reservar ahora", href: "#contacto" },
    btnSecundario: null,
    stats: null,
  },
  {
    imagen: img("/img/Cabaña Catalejo/cabana_catalejo_1.jpg"),
    alt: "Cabaña Catalejo",
    kicker: "Cabaña Catalejo",
    titulo: "Descansa como mereces",
    tituloTag: "h2",
    descripcion:
      "Piscina, quiosco con hamacas y área de fogata ideales para compartir momentos inolvidables en familia.",
    btnPrincipal: { texto: "Ver cabañas", href: "#cabanas" },
    btnSecundario: null,
    stats: null,
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const moveNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const movePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(moveNext, 5000);
    return () => clearInterval(timer);
  }, [moveNext]);

  return (
    <section className="carousel" aria-label="Galería principal">
      <div className="track" style={{ left: `-${currentSlide * 100}vw` }}>
        {slides.map((slide, i) => (
          <div className="slide" key={i}>
            <div className="image">
              <img
                src={slide.imagen}
                alt={slide.alt}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>

            <div className="action">
              <span className="text-accent uppercase text-xs font-extrabold tracking-wider">
                {slide.kicker}
              </span>
              {slide.tituloTag === "h1" ? (
                <h1 className="text-white">{slide.titulo}</h1>
              ) : (
                <h2 className="text-white">{slide.titulo}</h2>
              )}
              <p>{slide.descripcion}</p>

              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={slide.btnPrincipal.href}
                  className="inline-block px-5 py-2.5 bg-accent text-primary rounded-lg font-bold text-sm hover:bg-accent-hover transition-colors"
                >
                  {slide.btnPrincipal.texto}
                </a>
                {slide.btnSecundario && (
                  <a
                    href={slide.btnSecundario.href}
                    className="inline-block px-5 py-2.5 border border-white/30 text-white rounded-lg font-bold text-sm hover:bg-white/10 transition-colors"
                  >
                    {slide.btnSecundario.texto}
                  </a>
                )}
              </div>

              {slide.stats && (
                <ul className="hero-stats">
                  {slide.stats.map((stat, j) => (
                    <li key={j}>
                      <strong>{stat.valor}</strong>
                      <span>{stat.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-btn btnleft"
        onClick={movePrev}
        aria-label="Anterior"
      >
        &#10094;
      </button>
      <button
        className="carousel-btn btnright"
        onClick={moveNext}
        aria-label="Siguiente"
      >
        &#10095;
      </button>
    </section>
  );
}
