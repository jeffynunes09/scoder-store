import { type Product } from "../types";
import { useCart } from "../hooks/useCart";
interface Props {
product: Product;
}
export const ProductCard = ({ product }: Props) => {
const { addToCart } = useCart();
return (
<div className="card">
<img src={product.image} alt={product.title} />
<h3 className="card-title">{product.title}</h3>
<p className="card-price">${product.price}</p>
<button className="button" onClick={() => addToCart(product)}>
Add to Cart
</button>
</div>
);
};