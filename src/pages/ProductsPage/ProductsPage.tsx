import { ChangeEvent, useState } from "react";
import { fetchProducts } from "../../API/api.ts";
import List from "../../components/List.tsx";
import Header from "../../components/Header.tsx";
import SearchBar from "./UI/SearchBar.tsx";
import Product from "./Product.tsx";
import { IProduct } from "../../types/types.tsx";
import { useParams } from "react-router";
import FilterDropdown from "./UI/Filter/FilterDropdown.tsx";
import Footer from "../../components/Footer.tsx";

const ProductsPage = () => {
  const { uuid } = useParams<string>();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  async function loadProducts(
    query = "",
    uuid = "",
    brandsFilter = [""],
    minPrice = 1,
    maxPrice = 500000,
    priceFilter = "",
    page = 1,
  ) {
    const data = await fetchProducts({
      query,
      uuid,
      brandsFilter,
      minPrice,
      maxPrice,
      priceFilter,
      page,
    });
    setProducts(data);
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Header />
      <main>
        <div id="products-page-content">
          <div id="products-page-menu">
            <SearchBar value={searchQuery} changeHandler={changeHandler} />
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
            renderItem={(product: IProduct) => (
              <Product product={product} key={product.id} />
            )}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;
