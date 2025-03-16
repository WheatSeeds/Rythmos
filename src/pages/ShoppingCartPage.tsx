import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {useState} from "react";

const ShoppingCartPage = () => {
    const [cartProducts, setCartProducts] = useState<[]>([]);
    return (
        <>
            <Header/>
            <main>
                <div id="cart-page-content">
                    <span>Cart</span>
                    <div id="cart-page-content-list">
                        
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default ShoppingCartPage;