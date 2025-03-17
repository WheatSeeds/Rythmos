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
import "./styles/FAQPage.css"
import "./styles/ProductPage.css"
import "./styles/ShoppingCartPage.css"

import ProductsPage from "./pages/ProductsPage.tsx";
import CategoriesPage from "./pages/CategoriesPage.tsx";
import ShoppingCartPage from "./pages/ShoppingCartPage.tsx";
import FAQPage from "./pages/FAQPage.tsx";

import {BrowserRouter, Route, Routes} from "react-router";
import ProductPage from "./pages/ProductPage.tsx";
import PaymentPage from "./pages/PaymentPage.tsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/products" element={<CategoriesPage/>} />
                <Route path="/products/:uuid" element={<ProductsPage/>} />
                <Route path="/products/:uuid/:productId" element={<ProductPage/>} />
                <Route path="/faq" element={<FAQPage/>} />
                <Route path="/cart" element={<ShoppingCartPage/>} />
                <Route path="/cart/payment" element={<PaymentPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;