# Normas del Hostal — Cabañas El Capitan

Página de normas y reglas del hostal.

## Componentes de esta pantalla

### PageBanner
- Breadcrumb: Inicio > Normas
- Título: "Normas del Hostal"

### RulesIntro
- Párrafo introductorio con borde izquierdo

### RulesGrid
- 6 categorías de normas, cada una con icono emoji + título + lista:

#### Horarios (🕐) — 6 reglas
- Check-in: 2:00 PM
- Check-out: 12:00 PM
- Silencio: 10:00 PM
- Piscina: 8AM-8PM
- BBQ: hasta 9PM
- Personal: 7AM-9PM

#### Convivencia (👨‍👩‍👧) — 6 reglas
- Respeto mutuo
- Volumen moderado
- Sin altavoces después de 10PM
- Trato cordial
- Visitas autorizadas
- No personas no registradas

#### Instalaciones (🏠) — 7 reglas
- Limpieza
- Basura
- No mover muebles
- Reportar daños
- Cobro por daños
- Sin comida en zona de piscina
- Cocina por reservación

#### Mascotas (🐾) — 5 reglas
- Mascotas pequeñas con aviso
- Correa obligatoria
- Sin mascotas en piscina
- Responsabilidad del dueño
- Cargo extra

#### Seguridad (🔒) — 7 reglas
- Objetos de valor
- Cerrar puertas
- Sin fuego fuera de áreas autorizadas
- Alcohol con moderación
- Sin drogas
- Instrucciones de emergencia
- Menores supervisados

#### Medio Ambiente (🌿) — 5 reglas
- Apagar luces/AC
- Ahorrar agua
- No tirar basura
- Respetar flora/fauna
- Reciclaje

### RulesFooterNote
- Fondo oscuro
- Advertencia de consecuencias ("finalización anticipada sin reembolso")
- Link a FAQ

## Componentes compartidos (de global)

- Header
- Footer

## Datos

- `data/rules.ts` — Array de 6 categorías con 36 reglas (icono, título, items[])

## Referencia

Ver `normas.html` en la rama `base` para el código HTML original.
