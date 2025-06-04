import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import { type Product } from "../types";
import { ProductCard } from "../components/ProductCard";
import "../App.css";
export const Home = () => {
const [products, setProducts] = useState<Product[]>([]);
useEffect(() => {
fetchProducts().then(setProducts).catch(console.error);
}, []);
return (
<div className="container grid">
{products.map(product => (
<ProductCard key={product.id} product={product} />
))}
</div>
);
}