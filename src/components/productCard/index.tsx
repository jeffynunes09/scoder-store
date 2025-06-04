import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import type { Product } from "../../types";
import "./index.css"
import { useAuth } from "../../hooks/useAuth";
import { formatCurrency } from "../../utils/functions";
interface Props {
  product: Product;
}


export const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const verifyUserLogin = () => {
    alert("Você precisa fazer login para adicionar ao carrinho!")
    navigate(`/login`);

  }
  const handleClick = () => {
  };
  return (
    <div className="card">
      <img src={product.image} alt={product.title}
        onClick={() => handleClick()}
      />
      <h3 className="card-title">{product.title}</h3>
      <p className="card-price">{formatCurrency(product.price)}</p>
      <button className="button" onClick={() => user ? addToCart(product) : verifyUserLogin()}>
        Adicionar ao carrinho
      </button>
    </div>
  );
};