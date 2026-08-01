# Blog — Cabañas El Capitan

Página de blog con artículos de viajes y experiencias.

## Setup del proyecto

- **Vite 6** + **React 19** + **Tailwind CSS 4.1**
- Para instalar: `npm install`
- Para desarrollar: `npm run dev`
- Para build: `npm run build`

## Componentes de esta pantalla

### PageBanner
- Breadcrumb: Inicio > Blog
- Kicker: "Inspiración de viaje"
- Título: "Blog de Viajes"

### BlogGrid
- 6 tarjetas de artículos, cada una con:
  - Imagen
  - Fecha de publicación
  - Tag/pill (categoría)
  - Título
  - Extracto
  - Botón "Leer artículo"
- Artículos:
  1. "Los 5 mejores puntos para ver el atardecer" (Viaje y naturaleza, 12 Ene 2025)
  2. "Guía completa para subir el volcán de Amapala" (Aventura, 28 Dic 2024)
  3. "Qué comer en Amapala: la gastronomía" (Gastronomía, 15 Nov 2024)
  4. "Historia y leyendas del Golfo de Fonseca" (Historia y cultura, 3 Oct 2024)
  5. "Cabaña o habitación? Cómo elegir el alojamiento" (Alojamiento, 20 Sep 2024)
  6. "Avistamiento de tortugas marinas" (Vida marina, 8 Ago 2024)

### SocialCTA
- Fondo oscuro
- "Síguenos para más contenido"
- Botón Facebook
- Botón TikTok

## Componentes compartidos (de global)

- Header
- Footer

## Datos

- `data/blog.js` — Array de 6 artículos (título, excerpt, imagen, fecha, tag)

## Referencia

Ver `blog.html` en la rama `base` para el código HTML original.
