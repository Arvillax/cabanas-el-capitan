const base = import.meta.env.BASE_URL;

/**
 * Resuelve rutas de assets estáticos (imágenes, etc.)
 * Prefix automático con el base path de Vite.
 * Ejemplo: img("/img/logo/logo_1.webp") → "/cabanas-el-capitan/img/logo/logo_1.webp"
 */
export const img = (path) => base + path.replace(/^\//, "");
