export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  category: 'perfume' | 'makeup' | 'skincare';
  image: string;
  description: string;
  tags: string[];
}

export interface CartItem extends Product {
  quantity: number;
}