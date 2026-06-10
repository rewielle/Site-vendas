export interface Kit {
  id: string;
  name: string;
  price: number;
  badge?: string;
  items: string[];
  color: string;
  emoji: string;
}

export interface Adicional {
  id: string;
  name: string;
  price: number;
  emoji: string;
}

export const KITS: Kit[] = [
  {
    id: "festejar",
    name: "Kit Festejar",
    price: 75,
    items: [
      "Mini arco do tema desejado",
      "Arco de balões",
      "1 boleira",
      "3 bandejas",
      "Jarro com flores ou graminha",
      "Display de acordo com o tema",
    ],
    color: "rose",
    emoji: "🌸",
  },
  {
    id: "celebrar",
    name: "Kit Celebrar",
    price: 140,
    badge: "Mais completo",
    items: [
      "Mini painel de 50 cm",
      "Arco de balões",
      "1 boleira",
      "3 bandejas",
      "Jarro de flor (graminha)",
      "Display de acordo com o tema",
      "Mesa branca",
      "Suporte de balões",
      "Escadinha",
      "Tapete",
    ],
    color: "dourado",
    emoji: "✨",
  },
  {
    id: "alegrar",
    name: "Kit Alegrar",
    price: 160,
    badge: "Premium",
    items: [
      "Mini painel de 50 cm",
      "Arco de balões",
      "1 boleira",
      "3 bandejas",
      "Jarro de flor (graminha)",
      "Display de acordo com o tema",
      "Mesa branca",
      "Guirlanda de balões",
      "Tapete",
    ],
    color: "marrom",
    emoji: "🎉",
  },
];

export const ADICIONAIS: Adicional[] = [
  { id: "escadinha", name: "Escadinha decorativa", price: 15, emoji: "🪜" },
  {
    id: "suporte-baloes",
    name: "Suporte de balões (com balões)",
    price: 30,
    emoji: "🎈",
  },
  { id: "mesa-boiserie", name: "Mesa boiserie (cômoda)", price: 40, emoji: "🛋️" },
  { id: "mesa-ripada", name: "Mesa ripada", price: 20, emoji: "🪵" },
];
