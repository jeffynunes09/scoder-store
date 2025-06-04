import { type CartItem } from "../../types";
import { useCart } from "../../hooks/useCart";
export const CartItemComponent = ({ item }: { item: CartItem }) => {
    const { removeFromCart } = useCart();
    return (
        <div className="card" style={{ marginBottom: "1rem" }}>
            <h4>{item.title}</h4>
            <p>Quantidade: {item.quantity}</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            <button className="button red" onClick={() =>
                removeFromCart(item.id)}>
                Remover
            </button>
        </div>
    );
};