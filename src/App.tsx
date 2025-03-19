import "./styles/ProductsPageStyles/Product.css"
import "./styles/ProductsPageStyles/ProductList.css"
import "./styles/UI/Header.css"
import "./styles/ProductsPageStyles/SearchBar.css"
import "./styles/ProductsPageStyles/Filter.css"
import "./styles/ProductsPageStyles/ProductsPage.css"
import "./styles/UI/Footer.css"
import "./styles/App.css"
import "./styles/FAQPageStyles/FAQPage.css"
import "./styles/ProductPageStyles/ProductPage.css"
import "./styles/ShoppingCartPageStyles/ShoppingCartPage.css"

import {BrowserRouter, Route, Routes} from "react-router";

import ProductsPage from "./pages/ProductsPage.tsx";
import CategoriesPage from "./pages/CategoriesPage.tsx";
import ShoppingCartPage from "./pages/ShoppingCartPage.tsx";
import FAQPage from "./pages/FAQPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import PaymentPage from "./pages/PaymentPage.tsx";
import OrderPage from "./pages/OrderPage.tsx";
import HomePage from "./pages/HomePage.tsx";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path="/home" element={<HomePage/>}/>
                    <Route path="/products" element={<CategoriesPage/>}/>
                    <Route path="/products/:uuid" element={<ProductsPage/>}/>
                    <Route path="/products/:uuid/:productId" element={<ProductPage/>}/>
                    <Route path="/faq" element={<FAQPage/>}/>
                    <Route path="/cart" element={<ShoppingCartPage/>}/>
                    <Route path="/cart/payment" element={<PaymentPage/>}/>
                    <Route path="/cart/order" element={<OrderPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;