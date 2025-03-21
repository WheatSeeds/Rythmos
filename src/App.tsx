import "./styles/ProductsPageStyles/Product.css";
import "./styles/ProductsPageStyles/ProductList.css";
import "./styles/UI/Header.css";
import "./styles/ProductsPageStyles/SearchBar.css";
import "./styles/ProductsPageStyles/Filter.css";
import "./styles/ProductsPageStyles/ProductsPage.css";
import "./styles/UI/Footer.css";
import "./styles/App.css";
import "./styles/FAQPageStyles/FAQPage.css";
import "./styles/ProductPageStyles/ProductPage.css";
import "./styles/ShoppingCartPageStyles/ShoppingCartPage.css";
import "./styles/CategoriesPageStyles/CategoryList.css";
import "./styles/CategoriesPageStyles/Category.css";
import "./styles/ContactPageStyles/ContactPage.css";
import "./styles/UI/Form.css";

import { BrowserRouter, Route, Routes } from "react-router";

import ProductsPage from "./pages/ProductsPage/ProductsPage.tsx";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage.tsx";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage.tsx";
import FAQPage from "./pages/FAQPage/FAQPage.tsx";
import ProductPage from "./pages/ProductInfoPage/ProductPage.tsx";
import PaymentPage from "./pages/PaymentPage/PaymentPage.tsx";
import OrderPage from "./pages/OrderPage/OrderPage.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import ContactPage from "./pages/ContactPage/ContactPage.tsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/home" element={<HomePage />} />
          <Route path="/products" element={<CategoriesPage />} />
          <Route path="/products/:uuid" element={<ProductsPage />} />
          <Route path="/products/:uuid/:productId" element={<ProductPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/cart/payment" element={<PaymentPage />} />
          <Route path="/cart/order" element={<OrderPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
