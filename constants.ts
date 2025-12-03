import { Product } from './types';

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Midnight Orchid Elixir",
    brand: "LUMINA NOIR",
    price: 450.00,
    category: "perfume",
    image: "https://images.unsplash.com/photo-1594035910387-40669100d501?q=80&w=2574&auto=format&fit=crop",
    description: "Uma fragrância noturna e misteriosa com notas de orquídea negra, baunilha defumada e âmbar.",
    tags: ["Best Seller", "Noite"]
  },
  {
    id: 2,
    name: "Golden Hour Glow",
    brand: "SOLARIS",
    price: 189.90,
    category: "skincare",
    image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2535&auto=format&fit=crop",
    description: "Óleo corporal iluminador com partículas de ouro 24k para um brilho radiante.",
    tags: ["Verão", "Luxo"]
  },
  {
    id: 3,
    name: "Velvet Rose Matte",
    brand: "LÈVRES",
    price: 120.00,
    category: "makeup",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=2630&auto=format&fit=crop",
    description: "Batom líquido matte de longa duração com acabamento aveludado e hidratação intensa.",
    tags: ["Vegano", "Matte"]
  },
  {
    id: 4,
    name: "Azure Breeze",
    brand: "OCEANIC",
    price: 380.00,
    category: "perfume",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2670&auto=format&fit=crop",
    description: "Fresco como a brisa do mar. Notas cítricas de bergamota combinadas com sal marinho.",
    tags: ["Fresco", "Dia"]
  },
  {
    id: 5,
    name: "Crystal Clear Serum",
    brand: "PURE SKN",
    price: 245.50,
    category: "skincare",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2574&auto=format&fit=crop",
    description: "Sérum concentrado de ácido hialurônico para hidratação profunda e renovação celular.",
    tags: ["Anti-Aging", "Novo"]
  },
  {
    id: 6,
    name: "Stardust Palette",
    brand: "COSMOS",
    price: 299.90,
    category: "makeup",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2670&auto=format&fit=crop",
    description: "Paleta de sombras com pigmentos ultra-reflexivos inspirados nas nebulosas.",
    tags: ["Edição Limitada", "Glitter"]
  }
];