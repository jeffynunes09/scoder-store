import type { Product } from "../types";

export const fetchProducts = async (): Promise<Product[]> => {
const res = await fetch("https://fakestoreapi.com/products");
if (!res.ok) throw new Error("Failed to fetch products");
return res.json();
};


export const fetchCategories = async (): Promise<string[]> => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  if (!res.ok) throw new Error("Falha ao buscar categorias");
  return res.json();
};
