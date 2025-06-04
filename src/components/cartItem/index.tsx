import { type CartItem } from "../../types";
import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/functions";
export const CartItemComponent = ({ item }: { item: CartItem }) => {
    const { removeFromCart } = useCart();
    return (
        <div className="card" style={{ marginBottom: "1rem" }}
        >
            <h4>{item.title}</h4>
            <p>Quantidade: {item.quantity}</p>
            <img src={item.image} alt="" />
            <p>Total: {(formatCurrency(item.price * item.quantity))}</p>
            <button className="button red" onClick={() =>
                removeFromCart(item.id)}>
                Remover
            </button>
        </div>
    );
};
