// TODO: Migrar datos de opiniones desde opiniones.html
export interface Review {
  autor: string;
  texto: string;
  estrellas: number;
  tipoViaje: string;
  fecha: string;
}

export const reviewsData: Review[] = [];
