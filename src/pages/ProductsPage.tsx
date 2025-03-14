import React, {useState} from "react";
import {fetchProducts} from "../API/api.ts";
import List from "../components/List.tsx";
import Header from "../components/Header.tsx";
import SearchBar from "../components/SearchBar.tsx";
import Product from "../components/Product.tsx";
import {IProduct} from "../types/types.tsx";
import {useParams} from "react-router";
import FilterDropdown from "../components/Filter/FilterDropdown.tsx";
import Footer from "../components/Footer.tsx";

const ProductsPage = () => {
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState("");
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const { uuid } = useParams<string>();

    async function loadProducts(query = "", uuid = "",brandsFilter = [''], minPrice = 1, maxPrice = 500000, priceFilter = "") {
        const data = await fetchProducts({query, uuid, brandsFilter, minPrice, maxPrice, priceFilter});
        setProducts(data);
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }

    return (
        <>
            <Header/>
            <main>
                <div id="products-page-menu">
                    <SearchBar
                        value={searchQuery}
                        changeHandler={changeHandler}
                    />
                    <FilterDropdown
                        visible={dropdownVisible}
                        setDropdownVisible={setDropdownVisible}
                        loadProducts={loadProducts}
                        query={searchQuery}
                        uuid={uuid!}
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
            <Footer/>
        </>
    );
};

export default ProductsPage;