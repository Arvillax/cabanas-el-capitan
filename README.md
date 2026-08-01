# Referencia — Proyecto Actual (HTML/CSS/JS)

Esta rama contiene el sitio web completo en HTML, CSS y JavaScript. Es solo para **referencia** durante la migración a React.

## Estructura

```
├── index.html              ← Home
├── galeria.html            ← Galería
├── servicios.html          ← Servicios
├── contacto.html           ← Contacto
├── ubicacion.html          ← Ubicación
├── opiniones.html          ← Opiniones
├── faq.html                ← Preguntas frecuentes
├── normas.html             ← Normas del hostal
├── quienes_somos.html      ← Quiénes somos
├── blog.html               ← Blog
├── styles/
│   └── style.css           ← Estilos globales (1788 líneas)
├── javascript/
│   ├── menu.js             ← Hamburger, nav activa
│   ├── index.js            ← Carousel hero + grid de cabañas
│   ├── galeria.js          ← Galería con filtros
│   ├── faq.js              ← Acordeón FAQ
│   └── contacto.js         ← Validación de formulario
├── img/                    ← Todas las imágenes
│   ├── Cabana Catalejo/
│   ├── Cabana Estribor/
│   ├── Cabana La Perla/
│   ├── Cabana Timonel/
│   ├── Habitacion Almeja/
│   ├── Area Social/
│   └── logo/
└── data/                   ← (no existe aquí, está en main)
```

## Notas de migración

- Cada página HTML → componente React con JSX
- `style.css` → se migrará gradualmente (CSS modules, styled-components, o Tailwind)
- Los datos hardcodeados en HTML → archivos `data/*.ts` en `main`
- Los scripts JS vanilla → lógica en componentes React

## No deployar

Esta rama es solo referencia. El sitio deployado está en `main` (futuro build de React).
