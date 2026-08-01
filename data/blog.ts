// TODO: Migrar datos de blog desde blog.html
export interface BlogPost {
  titulo: string;
  excerpt: string;
  imagen: string;
  fecha: string;
  tag: string;
}

export const blogData: BlogPost[] = [];
