// Premium E-Commerce Types

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
  sizes?: string[];
  colors?: string[];
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  taxes: number;
  shipping: number;
  total: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string;
  productCount: number;
}

export interface NewsletterSubscriber {
  email: string;
  subscribedAt: Date;
}
