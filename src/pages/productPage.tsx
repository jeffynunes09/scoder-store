import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { type Product } from "../types";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(console.error);
  }, [id]);

  if (!product) return <p className="text-center mt-10">Carregando...</p>;

  return (
<div className="container">
  <div className="product-page-container">
  <div className="product-image-container">
    <img src={product.image} alt={product.title} />
  </div>

  <div className="product-info">
    <p className="product-id">ID: {product.id}</p>
    <h1>{product.title}</h1>
    <p className="price">R$ {product.price.toFixed(2)}</p>
    <p className="description">{product.description}</p>

    <div className="actions">
      <button className="buy-button">Comprar agora</button>
      <button className="cart-button">Adicionar ao carrinho</button>
    </div>

    <div className="details">
      <p><strong>Categoria:</strong> {product.category}</p>
      <p><strong>Entrega:</strong> Envio grátis para todo o Brasil</p>
      <p><strong>Garantia:</strong> 12 meses com o fabricante</p>
    </div>
  </div>
</div>
</div>

  );
}
