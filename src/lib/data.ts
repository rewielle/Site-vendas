export interface Kit {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  items: string[];
}

export interface Adicional {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const KITS: Kit[] = [
  {
    id: "encanto",
    name: "Kit Encanto",
    price: 70,
    description: "Perfeito para comemorações menores.",
    image: "/images/kit-encanto.jpg",
    items: [
      "Painel com bolas",
      "1 boleira grande",
      "1 boleira pequena",
      "2 bandejas",
      "1 jarro com buchinho",
      "1 display",
    ],
  },
  {
    id: "celebracao",
    name: "Kit Celebração",
    price: 120,
    description: "Mais peças e mais destaque na decoração.",
    image: "/images/kit-celebracao.jpg",
    items: [
      "Painel com bolas",
      "1 boleira grande",
      "1 boleira pequena",
      "3 bandejas",
      "1 jarro com buchinho",
      "1 display",
      "1 mesa",
    ],
  },
  {
    id: "supremo",
    name: "Kit Supremo",
    price: 160,
    description: "Uma mesa impactante e cheia de detalhes.",
    image: "/images/kit-supremo.jpg",
    items: [
      "Painel com bolas",
      "2 boleiras grandes",
      "1 boleira pequena",
      "3 bandejas",
      "1 jarro com buchinho",
      "2 displays",
      "1 mesa",
      "1 escadinha",
      "1 arco de balões",
    ],
  },
];

export const ADICIONAIS: Adicional[] = [
  {
    id: "mesa",
    name: "Mesa",
    price: 40,
    image: "/images/adicional-mesa-boiserie.jpg",
  },
  {
    id: "escada",
    name: "Escada",
    price: 20,
    image: "/images/adicional-escadinha.jpg",
  },
  {
    id: "boleiras-bandejas",
    name: "Boleiras e bandejas",
    price: 10,
    image: "/images/adicional-mesa-ripada.jpg",
  },
];

export const WHATSAPP_NUMBER = "5581995861712";
export const WHATSAPP_DISPLAY = "(81) 99586-1712";
export const INSTAGRAM_HANDLE = "@levaemontadecor";
export const INSTAGRAM_URL = "https://www.instagram.com/levaemontadecor";
export const CATALOG_URL = "/catalogo-leva-monta-decor.pdf";
