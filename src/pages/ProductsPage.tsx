import React, {useEffect, useState} from "react";
import {fetchProducts} from "../API/api.ts";
import List from "../components/List.tsx";
import Header from "../components/Header.tsx";
import SearchBar from "../components/SearchBar.tsx";
import Product from "../components/Product.tsx";
import {IProduct} from "../types/types.tsx";
import {useParams} from "react-router";

const ProductsPage = () => {
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState("");

    const { uuid } = useParams<string>();

    console.log(uuid);

    async function loadProducts(query = "", uuid = "") {
        const data = await fetchProducts({query, uuid});
        setProducts(data);
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }

    useEffect(() => {
        loadProducts(searchQuery, uuid);
    }, [searchQuery, uuid]);

    useEffect(() => {
        loadProducts("", uuid);
    }, [uuid]);

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