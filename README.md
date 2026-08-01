# Global — Componentes Compartidos

Esta rama contiene los componentes compartidos usados por todas las pantallas de la aplicación.

## Setup del proyecto

- **Vite 6** + **React 19** + **Tailwind CSS 4.1**
- Para instalar: `npm install`
- Para desarrollar: `npm run dev`
- Para build: `npm run build`

## Componentes compartidos

### Header
- Logo (`img/logo/logo_1.webp`, 48x48)
- Nombre del sitio + slogan
- Links de redes sociales (Facebook, TikTok, WhatsApp)
- Menú hamburguesa (mobile)
- Navegación con 10 links (resaltado de página activa)

### Footer
- 4 columnas: Brand, Explorar, Información, Contacto
- Copyright 2025

### PageBanner
- Breadcrumb (Inicio > [Página actual])
- Kicker (texto pequeño arriba del título)
- Título h1
- Descripción
- Usado en todas las páginas internas excepto Quiénes Somos

### SectionHeading
- Kicker + h2 para secciones
- Usado en Quiénes Somos y Home

### CtaBlock
- Link a WhatsApp directo
- Link a página de contacto
- Fondo oscuro
- Usado al final de varias pantallas

### Layout
- Envoltorio de página
- Incluye Header + Children + Footer
- Maneja el layout base de la app

## Datos compartidos

- `data/site.js` — Configuración del sitio (nombre, teléfono, dirección, redes)
- `data/cabins.js` — Datos de cabañas
- `data/gallery.js` — Datos de galería

## Ramas que heredan estos componentes

Todas las ramas de pantalla (`home`, `galeria`, `servicios`, etc.) heredan estos componentes y los importan directamente.
