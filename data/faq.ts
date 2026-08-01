// TODO: Migrar datos de FAQ desde faq.html
export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export interface FaqCategory {
  titulo: string;
  items: FaqItem[];
}

export const faqData: FaqCategory[] = [];
