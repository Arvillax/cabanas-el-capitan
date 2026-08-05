import { useState, useEffect, useCallback } from "react";
import { cabinsData } from "../../../data/cabins.js";
import { servicesData } from "../../../data/services.js";
import { reviewsData } from "../../../data/reviews.js";
import { siteConfig } from "../../../data/site.js";
import "./styles/home.css";

const slides = [
  {
    imagen: "/img/Area Social/area_social_5.jpg",
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
    imagen: "/img/Cabaña Estribor/cabana_estribor_4.jpg",
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
    imagen: "/img/Cabaña Timonel/cabana_timonel_3.jpg",
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
    imagen: "/img/Cabaña Catalejo/cabana_catalejo_1.jpg",
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

export default function Home() {
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
    <>
      {/* ─── 1. Carousel Hero ─── */}
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

      {/* ─── 2. Intro Strip ─── */}
      <section className="py-8 bg-bg-card border-y border-border text-center px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-text-secondary leading-relaxed">
            Cabañas El Capitan combina alojamiento acogedor, áreas exteriores y
            una experiencia pensada para quienes buscan desconectarse.
          </p>
        </div>
      </section>

      {/* ─── 3. Cabañas ─── */}
      <section id="cabanas" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10">
            <span className="text-green uppercase text-xs font-extrabold tracking-wider">
              Nuestras cabañas
            </span>
            <h2 className="text-3xl font-bold text-primary mt-1 mb-3">
              Visita y alójate en nuestras hermosas cabañas.
            </h2>
            <p className="text-text-secondary text-sm">
              Cada una de nuestras estancias está diseñada a detalle para
              garantizar su comodidad y ofrecer una experiencia única.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cabinsData.map((cabana) => (
              <article
                key={cabana.nombre}
                className="bg-bg-card rounded-[15px] overflow-hidden shadow-lg"
              >
                {cabana.folder && cabana.portada ? (
                  <img
                    src={`/img/${cabana.folder}/${cabana.portada}`}
                    alt={cabana.nombre}
                    className="w-full h-[210px] object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-[210px] bg-bg-muted flex items-center justify-center text-text-secondary text-sm p-4 text-center">
                    Imagen disponible próximamente
                  </div>
                )}

                <div className="p-5">
                  <span className="text-green uppercase text-xs font-extrabold mb-1 block">
                    {cabana.tipo}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    {cabana.nombre}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {cabana.descripcion}
                  </p>
                  <a
                    href={cabana.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2.5 bg-accent text-primary rounded-lg font-bold text-sm hover:bg-accent-hover transition-colors"
                  >
                    Solicitar información
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Servicios ─── */}
      <section className="bg-dark text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10">
            <span className="text-accent uppercase text-xs font-extrabold tracking-wider">
              Servicios y comodidades
            </span>
            <h2 className="text-3xl font-bold text-white mt-1 mb-3">
              Nuestros servicios
            </h2>
            <p className="text-white/70 text-sm">
              Nuestras instalaciones cuentan con todos los servicios necesarios
              para una estancia cómoda y agradable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesData.map((servicio, i) => (
              <div
                key={i}
                className="p-6 bg-white/[0.08] border border-white/[0.14] rounded-[15px]"
              >
                <h3 className="text-accent text-lg font-bold mb-2">
                  {servicio.titulo}
                </h3>
                <p className="text-white/78 text-sm">{servicio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. Acerca del lugar ─── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          {/* Left — story copy */}
          <div className="flex-1">
            <span className="text-green uppercase text-xs font-extrabold tracking-wider">
              Acerca del lugar
            </span>
            <h2 className="text-3xl font-bold text-primary mt-1 mb-4">
              Descubre la Magia del Golfo de Fonseca
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Nuestras cabañas cuentan con cómodas camas matrimoniales, aire
              acondicionado y entretenimiento completo con TV que incluye
              Disney+, Netflix y HBO para una estadía placentera.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Además, nuestros clientes pueden disfrutar de diversas amenidades
              como piscina, quiosco con hamacas y área de fogata, ideales para
              compartir momentos inolvidables en familia.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              También podrán explorar las distintas playas que rodean la isla,
              realizar caminatas por senderos hacia la cima del Cerro El Tigre,
              donde disfrutarán de una vista espectacular del Golfo de Fonseca y
              de los tres países que lo conforman: Honduras, Nicaragua y El
              Salvador.
            </p>
          </div>

          {/* Right — story panel */}
          <div className="bg-primary text-white p-6 rounded-[15px] shadow-lg flex flex-col gap-4 flex-1">
            <div className="p-4 bg-white/[0.10] rounded-lg">
              <span className="block text-accent uppercase text-xs font-extrabold mb-1.5">
                Ubicación
              </span>
              <span className="block text-sm">
                Amapala, Valle, Honduras. Isla del Tigre, Golfo de Fonseca.
              </span>
            </div>
            <div className="p-4 bg-white/[0.10] rounded-lg">
              <span className="block text-accent uppercase text-xs font-extrabold mb-1.5">
                Capacidad
              </span>
              <span className="block text-sm">
                Entre 2 y 6 huéspedes según la unidad.
              </span>
            </div>
            <div className="p-4 bg-white/[0.10] rounded-lg">
              <span className="block text-accent uppercase text-xs font-extrabold mb-1.5">
                Experiencia
              </span>
              <span className="block text-sm">
                Descanso, naturaleza y comodidad en un solo lugar.
              </span>
            </div>
            <div className="p-4 bg-white/[0.10] rounded-lg">
              <span className="block text-accent uppercase text-xs font-extrabold mb-1.5">
                Espacios disponibles
              </span>
              <span className="block text-sm">
                7 cabañas y habitaciones para elegir.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. Ubicación ─── */}
      <section className="bg-bg-muted py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10">
            <span className="text-green uppercase text-xs font-extrabold tracking-wider">
              Ubicación
            </span>
            <h2 className="text-3xl font-bold text-primary mt-1 mb-3">
              ¿Cómo llegar?
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row rounded-[15px] overflow-hidden shadow-lg">
            {/* Left — location info */}
            <div className="bg-primary text-white p-8 lg:w-2/5">
              <h3 className="text-xl font-bold text-accent mb-4">
                Cabañas El Capitan
              </h3>
              <p className="text-white/85 text-sm mb-1">
                <strong>Dirección:</strong> Aldea San Pablo, frente al mirador
              </p>
              <p className="text-white/85 text-sm mb-1">
                <strong>Municipio:</strong> Amapala, Valle, Honduras
              </p>
              <p className="text-white/85 text-sm mb-1">
                <strong>Referencia:</strong> Isla del Tigre, Golfo de Fonseca
              </p>
              <p className="text-white/85 text-sm mb-5">
                <strong>Coordenadas:</strong> 13.289° N, 87.632° W
              </p>
              <a
                href="https://maps.google.com/?q=Cabañas+El+Capitan+Amapala+Honduras"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 bg-accent text-primary rounded-lg font-bold text-sm hover:bg-accent-hover transition-colors"
              >
                Ver en Google Maps
              </a>
            </div>

            {/* Right — steps */}
            <div className="bg-bg-card p-8 lg:w-3/5">
              <h3 className="text-xl font-bold text-primary mb-4">
                Cómo llegar
              </h3>
              <ol className="text-text-secondary text-sm space-y-3 list-none p-0 m-0">
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-light text-white font-bold text-xs flex items-center justify-center">
                    1
                  </span>
                  <span>
                    Salir hacia <strong className="text-primary">San Lorenzo, Valle</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-light text-white font-bold text-xs flex items-center justify-center">
                    2
                  </span>
                  <span>
                    Tomar la barca en el muelle de{" "}
                    <strong className="text-primary">Coyolito</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-light text-white font-bold text-xs flex items-center justify-center">
                    3
                  </span>
                  <span>
                    Llegar a la{" "}
                    <strong className="text-primary">Isla del Tigre</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-light text-white font-bold text-xs flex items-center justify-center">
                    4
                  </span>
                  <span>
                    Dirigirse a la{" "}
                    <strong className="text-primary">Aldea San Pablo</strong>,
                    frente al mirador
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. Opiniones ─── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10">
            <span className="text-green uppercase text-xs font-extrabold tracking-wider">
              Opiniones
            </span>
            <h2 className="text-3xl font-bold text-primary mt-1 mb-3">
              Lo que dicen nuestros huéspedes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewsData.map((review, i) => (
              <blockquote
                key={i}
                className="p-6 bg-bg-card rounded-[15px] shadow-[0_4px_10px_rgba(0,0,0,0.10)] border border-border m-0"
              >
                <p className="text-text-secondary italic mb-4">
                  &ldquo;{review.texto}&rdquo;
                </p>
                <cite className="block not-italic font-bold text-sm text-primary-light">
                  {review.autor}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. Contacto CTA ─── */}
      <section id="contacto" className="bg-dark py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-between">
          {/* Left — info */}
          <div className="flex-1">
            <span className="text-accent uppercase text-xs font-extrabold tracking-wider">
              Contacto y reservas
            </span>
            <h2 className="text-3xl font-bold text-white mt-1 mb-3">
              ¿Listo para reservar?
            </h2>
            <p className="text-white/80 text-sm mb-6">
              Contáctanos directamente y te confirmamos disponibilidad. Estamos
              en Amapala, Isla del Tigre, Honduras.
            </p>
            <ul className="text-white/85 text-sm space-y-2 p-0 m-0 list-none">
              <li className="pb-2 border-b border-white/10">
                <strong className="text-accent">Teléfono / WhatsApp:</strong>{" "}
                {siteConfig.telefono}
              </li>
              <li className="pb-2 border-b border-white/10">
                <strong className="text-accent">Dirección:</strong>{" "}
                {siteConfig.direccion}
              </li>
              <li className="pb-2 border-b border-white/10 last:border-b-0">
                <strong className="text-accent">Atención:</strong>{" "}
                {siteConfig.horario}
              </li>
            </ul>
          </div>

          {/* Right — actions */}
          <div className="flex flex-col gap-3 flex-shrink-0">
            <a
              href={`${siteConfig.whatsappLink}?text=Hola%20necesito%20informacion%20sobre%20las%20caba%C3%B1as`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-accent text-primary rounded-lg font-bold text-sm text-center hover:bg-accent-hover transition-colors"
            >
              Consultar por WhatsApp
            </a>
            <a
              href="#contacto"
              className="inline-block px-6 py-3 bg-transparent border-2 border-accent text-accent rounded-lg font-bold text-sm text-center hover:bg-accent/15 transition-colors"
            >
              Ir al formulario de contacto
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
