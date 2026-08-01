# Contacto — Cabañas El Capitan

Página de contacto con formulario y datos de contacto.

## Setup del proyecto

- **Vite 6** + **React 19** + **Tailwind CSS 4.1**
- Para instalar: `npm install`
- Para desarrollar: `npm run dev`
- Para build: `npm run build`

## Componentes de esta pantalla

### PageBanner
- Breadcrumb: Inicio > Contacto
- Kicker: "Estamos para ayudarte"
- Título: "Contáctenos"

### ContactLayout
- Layout de 2 columnas:

#### ContactInfo (columna izquierda, fondo oscuro)
- Dirección
- Teléfono/WhatsApp (link `tel:`)
- Redes sociales
- Horario de atención
- Botón verde de WhatsApp directo

#### ContactForm (columna derecha)
- Formulario con 5 campos:
  1. Nombre completo (requerido)
  2. Correo electrónico (requerido)
  3. Teléfono (opcional)
  4. Asunto (requerido)
  5. Mensaje — textarea (requerido)
- Validación client-side con regex
- Mensaje de éxito al enviar
- Botón "Enviar"

## Componentes compartidos (de global)

- Header
- Footer

## Datos

- `data/site.js` — Teléfono, WhatsApp, dirección, horario

## Referencia

Ver `contacto.html` en la rama `base` para el código HTML original.
