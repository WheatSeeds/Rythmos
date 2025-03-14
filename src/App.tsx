import "./styles/Product.css"
import "./styles/ProductList.css"
import "./styles/Header.css"
import "./styles/SearchBar.css"
import "./styles/Filter.css"
import "./styles/ProductsPage.css"
import "./styles/Category.css"
import "./styles/CategoryList.css"
import "./styles/Footer.css"
import "./styles/App.css"

import ProductsPage from "./pages/ProductsPage.tsx";
import CategoriesPage from "./pages/CategoriesPage.tsx";

import {BrowserRouter, Route, Routes} from "react-router";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/products" element={<CategoriesPage/>} />
                <Route path="/products/:uuid" element={<ProductsPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;