import { useCart } from "../hooks/useCart";
import { CartItemComponent } from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export const Cart = () => {
  const { cart } = useCart();
   const { user } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    if (!user) {
      navigate("/create-account");
    }
  }, [user, navigate]);


  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePurchase = () => {
    navigate("/checkout");
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
