import { useCart } from "../hooks/useCart";
import { CartItemComponent } from "../components/CartItem";
import "../App.css";
export const Cart = () => {
const { cart, clearCart } = useCart();
const total = cart.reduce((sum, item) => sum + item.price *
item.quantity, 0);
const handlePurchase = () => {
alert("Purchase completed!");
clearCart();
};
return (
<div className="container">
<h2>Your Cart</h2>
{cart.length === 0 ? (
<p>No items in cart.</p>
) : (
<>
{cart.map(item => (
<CartItemComponent key={item.id} item={item} />
))}
<h3>Total: ${total.toFixed(2)}</h3>
<button className="button" onClick={handlePurchase}>
Confirm Purchase
</button>
</>
)}
</div>
);
};