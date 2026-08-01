# Galería — Cabañas El Capitan

Página de galería de fotos con filtro por categoría.

## Setup del proyecto

- **Vite 6** + **React 19** + **Tailwind CSS 4.1**
- Para instalar: `npm install`
- Para desarrollar: `npm run dev`
- Para build: `npm run build`

## Componentes de esta pantalla

### PageBanner
- Breadcrumb: Inicio > Galería
- Kicker: "Imágenes del paraíso"
- Título: "Galería de Fotos"
- Descripción

### FilterBar
- 4 botones pill con filtro por categoría:
  - **Todas** (activo por defecto)
  - **Área Social**
  - **Cabañas**
  - **Habitaciones**
- Filtrado client-side

### GalleryGrid
- Grid dinámico de 21 imágenes
- Cada imagen: `<figure>` con `<img>` + `<figcaption>`
- Categorías:
  - Área Social: 8 imágenes (`area_social_1.jpg` — `area_social_8.jpg`)
  - Cabañas: 8 imágenes (3 Catalejo, 3 Estribor, 1 La Perla, 1 Timonel)
  - Habitaciones: 5 imágenes (`habitacion_almeja_1.jpg` — `habitacion_almeja_5.jpg`)

## Componentes compartidos (de global)

- Header
- Footer

## Datos

- `data/gallery.js` — Array de 21 imágenes (src, alt, categoria)

## Referencia

Ver `galeria.html` en la rama `base` para el código HTML original.
