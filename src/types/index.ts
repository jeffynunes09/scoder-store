export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
export interface CartItem extends Product {
  quantity: number
}

export type User = {
  name?: string;
  email?: string;
  password: string
};

export type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export interface SearchContextType {
  search: string;
  setSearch: (value: string) => void;
}
