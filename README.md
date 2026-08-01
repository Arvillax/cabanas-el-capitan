# Servicios — Cabañas El Capitan

Página de servicios ofrecidos por las cabañas.

## Componentes de esta pantalla

### PageBanner
- Breadcrumb: Inicio > Servicios
- Kicker: "Lo que ofrecemos"
- Título: "Nuestros Servicios"

### ServicesGrid
- 12 tarjetas de servicio con icono emoji + título + descripción:
  1. WiFi de Alta Velocidad (📶)
  2. Desayuno (🍳)
  3. Piscina Privada (🏊)
  4. Estacionamiento (🚗)
  5. Bar y Terraza (🍹)
  6. Tours por la Isla (🗺)
  7. Traslados desde Coyolito (⛵)
  8. Cocina Equipada (🍽)
  9. Servicio de Lavandería (👕)
  10. Área de BBQ (🔥)
  11. Área Recreativa (🎮)
  12. Acceso al Muelle (⚓)

### InclusionsSection
- Layout de 2 columnas:
  - **Izquierda**: "Incluido sin costo adicional" (7 items con ✔)
  - **Derecha**: "Servicios opcionales (costo adicional)" (6 items con +)

### CtaBlock
- Link a WhatsApp
- Link a página de contacto

## Componentes compartidos (de global)

- Header
- Footer

## Datos

- `data/services.ts` — Array de 12 servicios (icono, título, descripción)

## Referencia

Ver `servicios.html` en la rama `base` para el código HTML original.
