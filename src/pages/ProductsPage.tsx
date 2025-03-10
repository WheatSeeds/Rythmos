import React, {useEffect, useState} from "react";
import {fetchProducts} from "../API/api.ts";
import ProductList from "../components/ProductList.tsx";
import Header from "../components/Header.tsx";
import SearchBar from "../components/SearchBar.tsx";

const ProductsPage = () => {
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState("");

    async function loadProducts(query = "") {
        const data = await fetchProducts({query});
        setProducts(data);
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }

    useEffect(() => {
        loadProducts(searchQuery);
    }, [searchQuery]);

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <>
            <Header/>
            <main>
                <SearchBar
                    value={searchQuery}
                    changeHandler={changeHandler}
                />
                <ProductList products={products}/>
            </main>
        </>
    );
};

export default ProductsPage;