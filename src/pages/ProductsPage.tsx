import {useState} from "react";
import {fetchProducts} from "../API/api.ts";
import List from "../components/List.tsx";
import Header from "../components/UI/Header.tsx";
import SearchBar from "../components/ProductsPageComponents/SearchBar.tsx";
import Product from "../components/ProductsPageComponents/Product.tsx";
import {IProduct} from "../types/types.tsx";
import {useParams} from "react-router";
import FilterDropdown from "../components/ProductsPageComponents/Filter/FilterDropdown.tsx";
import Footer from "../components/UI/Footer.tsx";

const ProductsPage = () => {
    const { uuid } = useParams<string>();
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState("");
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    async function loadProducts(query = "", uuid = "",brandsFilter = [''], minPrice = 1, maxPrice = 500000, priceFilter = "", page = 1) {
        const data = await fetchProducts({query, uuid, brandsFilter, minPrice, maxPrice, priceFilter, page});
        setProducts(data);
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }

    return (
        <>
            <Header/>
            <main>
                <div id="products-page-content">
                    <div id="products-page-menu">
                        <SearchBar value={searchQuery} changeHandler={changeHandler}/>
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
                        renderItem={(product: IProduct) => <Product product={product} key={product.id}/>}
                    />
                    <button onClick={() => {setCurrentPage(currentPage + 1)}}>Load More</button>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default ProductsPage;