import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import type { Product } from "../../types";
import "./index.css"
interface Props {
product: Product;
}


export const ProductCard = ({ product }: Props) => {
const { addToCart } = useCart();
const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/produto/${product.id}`);
  };
return (
<div className="card"
onClick={()=>handleClick()}>
<img src={product.image} alt={product.title} />
<h3 className="card-title">{product.title}</h3>
<p className="card-price">${product.price}</p>
<button className="button" onClick={() => addToCart(product)}>
Adicionar ao carrinho
</button>
</div>
);
};