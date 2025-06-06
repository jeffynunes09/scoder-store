import { useCart } from "../hooks/useCart";
import { CartItemComponent } from "../components/cartItem/index";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { formatCurrency } from "../utils/functions";
import { Button } from "../components/button";

export const Cart = () => {
    const { cart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const handlePurchase = () => {
        if(cart.length < 1){
            alert("Adicione algum item ao carrinho!")
            return
        }
        navigate("/checkout");
    };

    return (
        <div className="container">
            <h2>Seu carrinho</h2>
            <div className="grid">
            {cart.length > 0 && (
                <>
                    {cart.map(item => (
                        <CartItemComponent key={item.id} item={item} />
                    ))}
              
                </>
            )}
            </div>
                  <h3>Total: ${formatCurrency(total)}</h3>
                  <Button style={{width:"200px"}} title={"Confirmar compra"} onClick={()=> handlePurchase()}/>
        </div>
    );
};
