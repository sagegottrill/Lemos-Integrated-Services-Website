export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'tops' | 'pants' | 'accessories';
  image: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
