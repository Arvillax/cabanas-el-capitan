# Ubicación — Cabañas El Capitan

Página de ubicación y cómo llegar a las cabañas.

## Setup del proyecto

- **Vite 6** + **React 19** + **Tailwind CSS 4.1**
- Para instalar: `npm install`
- Para desarrollar: `npm run dev`
- Para build: `npm run build`

## Componentes de esta pantalla

### PageBanner
- Breadcrumb: Inicio > Ubicación
- Kicker: "Encuéntranos"
- Título: "Cómo Llegar"

### LocationCard
- Layout de 2 columnas:

#### LocationInfo (columna izquierda, fondo oscuro)
- Dirección completa (Aldea San Pablo, frente al mirador, Amapala, Valle, Honduras)
- Referencia (Isla del Tigre, Golfo de Fonseca)
- Coordenadas (13.289 N, 87.632 W)
- Teléfono
- Botón de Google Maps

#### LocationSteps (columna derecha)
- 5 pasos con CSS counter:
  1. Salir desde Tegucigalpa/Choluteca
  2. Llegar al muelle de Coyolito
  3. Tomar lancha (~20 min)
  4. Llegar a Amapala
  5. Cabañas El Capitán frente al mirador

### AttractionsGrid
- 4 tarjetas de atracciones:
  1. Playas de la Isla (10-15 min mototaxi)
  2. Mirador San Pablo (a pasos)
  3. Volcán de Amapala (30-40 min caminando)
  4. Casco Histórico de Amapala (10 min mototaxi)
- Cada una: imagen, descripción, distancia

### TransportNote
- Fondo oscuro
- Datos: ~20 min lancha, ~3 h desde Tegucigalpa, ~1.5 h desde Choluteca

## Componentes compartidos (de global)

- Header
- Footer

## Datos

- `data/attractions.js` — Array de 4 atracciones (título, descripción, distancia, imagen)
- `data/site.js` — Dirección, coordenadas, teléfono

## Referencia

Ver `ubicacion.html` en la rama `base` para el código HTML original.
