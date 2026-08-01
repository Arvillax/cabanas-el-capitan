# Cabañas El Capitan — React Migration

Migración del sitio web estático (HTML/CSS/JS) a React con TypeScript.

## Estructura de ramas

```
main ← img/ + data/ (archivos compartidos)
│
├─ base ← proyecto HTML/CSS/JS actual (referencia)
│
├─ global ← componentes compartidos (Header, Footer, etc.)
│  ├─ home
│  ├─ galeria
│  ├─ servicios
│  ├─ contacto
│  ├─ ubicacion
│  ├─ opiniones
│  ├─ faq
│  ├─ normas
│  ├─ quienes-somos
│  └─ blog
```

## Contenido de esta rama

- `img/` — assets compartidos (fotos, logo, favicon)
- `data/` — interfaces y datos en TypeScript

## Cada rama de pantalla

- Hereda `img/` y `data/` de `global`
- Contiene sus componentes específicos
- Usa los componentes compartidos de `global`

## Para empezar a migrar

1. Elegí una rama de pantalla (ej: `home`)
2. Revisá el `README.md` de esa rama para ver qué componentes necesita
3. Mirá el código HTML original en la rama `base` como referencia
4. Los datos están en `data/*.ts`
