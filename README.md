# Quiénes Somos — Cabañas El Capitan

Página "Sobre nosotros" con historia, misión, visión y valores.

## Setup del proyecto

- **Vite 6** + **React 19** + **Tailwind CSS 4.1**
- Para instalar: `npm install`
- Para desarrollar: `npm run dev`
- Para build: `npm run build`

## Componentes de esta pantalla

### SectionHeading
- Kicker: "Nuestra historia"
- Título: "¿Quiénes Somos?"
- Nota: Esta página NO usa PageBanner (usa SectionHeading en su lugar)

### StoryLayout
- Layout de 2 columnas:

#### StoryCopy (columna izquierda)
- Título: "Un refugio natural en la Isla del Tigre"
- 3 párrafos sobre:
  - Origen de las cabañas
  - Ubicación en Amapala
  - Servicio personalizado

#### StoryPanel (columna derecha, fondo oscuro)
- 3 tarjetas:
  - **Misión**: "Ofrecer experiencias de descanso..."
  - **Visión**: "Ser un destino destacado..."
  - **Valores**: "Hospitalidad, respeto, compromiso y excelencia..."

### WhyChooseUs
- Fondo oscuro
- 6 tarjetas de razones:
  1. Entorno natural
  2. Comodidad
  3. Tranquilidad
  4. Atención
  5. Experiencias
  6. Ubicación

### CtaBlock
- "Vive la experiencia El Capitán"
- Link a Contacto
- Link a Galería

## Componentes compartidos (de global)

- Header
- Footer

## Datos

- No usa archivos de datos (todo hardcodeado)

## Referencia

Ver `quienes_somos.html` en la rama `base` para el código HTML original.
