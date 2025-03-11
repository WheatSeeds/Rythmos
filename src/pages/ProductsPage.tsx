import React, {useEffect, useState} from "react";
import {fetchProducts} from "../API/api.ts";
import List from "../components/List.tsx";
import Header from "../components/Header.tsx";
import SearchBar from "../components/SearchBar.tsx";
import Product from "../components/Product.tsx";
import {IProduct} from "../types/types.tsx";

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
                <div id="products-page-menu">
                    <SearchBar
                        value={searchQuery}
                        changeHandler={changeHandler}
                    />
                </div>
                <List
                    className={"product-list"}
                    items={products}
                    renderItem={
                        (product: IProduct) => <Product product={product} key={product.id} />
                    }
                />

            </main>
        </>
    );
};

export default ProductsPage;