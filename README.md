# Home — Cabañas El Capitan

Página principal del sitio. Muestra una vista general de las cabañas, servicios, ubicación y opiniones.

## Setup del proyecto

- **Vite 6** + **React 19** + **Tailwind CSS 4.1**
- Para instalar: `npm install`
- Para desarrollar: `npm run dev`
- Para build: `npm run build`

## Componentes de esta pantalla

### HeroCarousel
- 4 slides con imágenes responsivas (`<picture>`)
- Auto-avance cada 4 segundos, dirección ping-pong
- Cada slide tiene: kicker, título, descripción, botones CTA
- Contenido: (1) Intro general con estadísticas, (2) Cabaña Estribor, (3) Cabaña Timonel, (4) Cabaña Catalejo

### HeroStats
- 3 estadísticas: 7 Espacios, 24/7 Atención, 100% Entorno natural

### CabinsGrid
- Grid dinámico de cabañas (renderizado desde datos)
- Cada tarjeta: imagen de portada, nombre, descripción, link a WhatsApp
- 7 cabañas en total (5 con imágenes, 2 "Próximamente")

### ServicesStrip
- 6 tarjetas de servicios con iconos emoji
- Wi-Fi, Piscina, Estacionamiento, Área de descanso, Parrilla y fogata, Actividades

### StorySection
- Layout de 2 columnas
- Izquierda: texto "Descubre la Magia del Golfo de Fonseca"
- Derecha: 4 tarjetas (Ubicación, Capacidad, Experiencia, Espacios)

### LocationPreview
- Tarjeta de ubicación con dirección
- Link a Google Maps
- 4 pasos de direcciones

### ReviewsPreview
- 3 reseñas destacadas
- Cada una: texto, autor

### CtaBlock
- Link a WhatsApp
- Link a página de contacto

## Componentes compartidos (de global)

- Header
- Footer

## Datos

- `data/cabins.js` — Array de 7 cabañas (nombre, tipo, folder, portada, descripción, enlace)
- `data/site.js` — Configuración del sitio

## Referencia

Ver `index.html` en la rama `base` para el código HTML original.
