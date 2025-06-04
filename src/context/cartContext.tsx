import { createContext, useState, type ReactNode } from "react";
import type { CartItem, Product } from "../types";
interface CartContextType {
cart: CartItem[];
addToCart: (product: Product) => void;
removeFromCart: (id: number) => void;
clearCart: () => void;
}
export const CartContext = createContext({} as CartContextType);
export const CartProvider = ({ children }: { children: ReactNode }) =>
{
const [cart, setCart] = useState<CartItem[]>([]);
const addToCart = (product: Product) => {
setCart(prev => {
const item = prev.find(p => p.id === product.id);
if (item) {
return prev.map(p =>
p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
);
}
return [...prev, { ...product, quantity: 1 }];
});
};
const removeFromCart = (id: number) => {
setCart(prev => prev.filter(p => p.id !== id));
};
const clearCart = () => setCart([]);
return (
<CartContext.Provider value={{ cart, addToCart, removeFromCart,
clearCart }}>
{children}
</CartContext.Provider>
);
};
