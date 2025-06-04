import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import { type Product } from "../types";
import "../App.css";
import { ProductCard } from "../components/productCard";
import { ProductSlider } from "../components/productSlider";
import { useSearch } from "../context/searchContext";

export const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { search } = useSearch();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;

    useEffect(() => {
        fetchProducts().then(setProducts).catch(console.error);
    }, []);
    
    const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );
    // Paginação
    const totalPages = Math.ceil(filtered.length / productsPerPage);
    const start = (currentPage - 1) * productsPerPage;
    const paginatedProducts = filtered.slice(start, start + productsPerPage);

    return (
        <div>
            <ProductSlider />
           {
            products ? ( 
                <>
                <h1 className="title">Produtos</h1>
                <div className="container grid">
                
                {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
                </>
            ) :(
                <div>
                    <h2>Nenhum produto encontrado!</h2>
                </div>
            )
           }
            {totalPages > 1 && (
                <div className="pagination">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            className={i + 1 === currentPage ? "active" : ""}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
