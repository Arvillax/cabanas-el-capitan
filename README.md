# Opiniones — Cabañas El Capitan

Página de opiniones y testimonios de clientes.

## Componentes de esta pantalla

### PageBanner
- Breadcrumb: Inicio > Opiniones
- Título: "Opiniones y Testimonios"

### RatingSummary
- Calificación general: 4.8/5 (5 estrellas)
- 5 barras de rating con porcentaje:
  - Limpieza: 4.9 (95%)
  - Atención: 4.9 (97%)
  - Ubicación: 4.7 (90%)
  - Comodidad: 4.7 (92%)
  - Precio/calidad: 4.6 (88%)

### ReviewsGrid
- 9 tarjetas de reseñas, cada una con:
  - Estrellas (★★★★★)
  - Texto de la reseña
  - Nombre del autor
  - Tipo de viaje
  - Fecha
- Reseñas:
  1. Carlos M. - Escapada en pareja, Dic 2024 (5★)
  2. Ana L. - Viaje familiar, Ene 2025 (5★)
  3. Marcos R. - Viaje solo, Oct 2024 (4★)
  4. Laura V. - Escapada de fin de semana, Sep 2024 (5★)
  5. Roberto S. - Viaje de grupo, Ago 2024 (5★)
  6. Patricia G. - Escapada en pareja, Jul 2024 (4★)
  7. Diego C. - Viaje de grupo, Jun 2024 (5★)
  8. Sofía M. - Escapada de fin de semana, May 2024 (5★)
  9. Andrés B. - Viaje familiar, Abr 2024 (4★)

### CtaBlock
- Link a reseñas en Facebook
- Link a formulario de contacto

## Componentes compartidos (de global)

- Header
- Footer

## Datos

- `data/reviews.ts` — Array de 9 reseñas (autor, texto, estrellas, tipoViaje, fecha)

## Referencia

Ver `opiniones.html` en la rama `base` para el código HTML original.
