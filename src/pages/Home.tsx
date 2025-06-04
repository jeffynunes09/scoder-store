import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import { type Product } from "../types";
import { useSearch } from "../context/SearchContext";
import "../App.css";
import { ProductCard } from "../components/productCard/ProductCard";
import { ProductSlider } from "../components/productSlider";

export const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { search } = useSearch();

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

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
            <div className="container grid">
                {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

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
