// TODO: Migrar datos de cabañas desde index.js
export interface Cabin {
  nombre: string;
  tipo: string;
  folder: string | null;
  portada: string | null;
  descripcion: string;
  enlace: string;
}

export const cabinsData: Cabin[] = [];
