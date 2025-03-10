import {useEffect, useState} from "react";
import {fetchProducts} from "../API/api.ts";
import ProductList from "../components/ProductList.tsx";

const ProductsPage = () => {
    const [products, setProducts] = useState([])

    async function loadProducts() {
        const data = await fetchProducts();
        setProducts(data);
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <main>
            <ProductList products={products}/>
        </main>
    );
};

export default ProductsPage;