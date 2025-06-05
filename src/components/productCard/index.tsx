import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import type { Product } from "../../types";
import "./index.css"
import { formatCurrency } from "../../utils/functions";
import { Button } from "../button";
interface Props {
  product: Product;
}


export const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`product/${product.id}`)
  };
  return (
    <div className="card">
      <img src={product.image} alt={product.title}
        onClick={() => handleClick()}
      />
      <h3 className="card-title">{product.title}</h3>
      <p className="card-price">{formatCurrency(product.price)}</p>
      <Button 
      onClick={()=> addToCart(product)} 
      title="Adicionar ao carrinho" 
      style={{maxWidth:"200px"}}/>
    </div>
  );
};