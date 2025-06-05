import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { type Product } from "../types";
import { Button } from "../components/button";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const {user} = useAuth();
  const { addToCart } = useCart();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(console.error);
  }, [id]);

  const buyItem =(product:Product) => {
    if(product){
      addToCart(product)
      navigate("/checkout") }
  }  
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
      <Button 
      onClick={
        ()=>{buyItem(product)}}
      title="Comprar agora"
      style={{width:"200px",height:"40px"}}/>
      <Button 
      onClick={() => user ?? addToCart(product)}
      title="Adicionar ao carrinho"
      style={{width:"200px",
      height:"40px",
      backgroundColor:"#fff",
      border:"1px solid gray",
      color:"#111",
      }}/>
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
