import Header from "../components/UI/Header.tsx";
import Footer from "../components/UI/Footer.tsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import {IProductInfo} from "../types/types.tsx";
import {Link} from "react-router";
import {decreaseQuantity, deleteFromCart, increaseQuantity} from "../store/cartSlice.ts";

const ShoppingCartPage = () => {
    const cart = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        totalPriceCalc()
    }, [cart])
    const [totalPrice, setTotalPrice] = useState<number>(0);

    function totalPriceCalc(){
        let totalPriceCount = 0;
        cart.map((item) => {
            totalPriceCount += parseFloat(item.price.amount) * item.quantity;
        })
        setTotalPrice(totalPriceCount);
    }

    return (
        <>
            <Header/>
            <main>
                <div id="cart-page-content">
                    <div id="cart-page-content-title">
                        <span id="cart-page-content-title-text">Cart</span>
                        <span id="cart-page-content-title-items-count">{cart.length}</span>
                    </div>
                    <div id="cart-page-content-list">
                        <div id="cart-page-content-list-top">
                            <span>Item</span>
                            <div></div>
                            <span>Price</span>
                            <span>Quantity</span>
                            <span>Total Price</span>
                        </div>
                        <div className="cart-page-content-divider"></div>
                        {cart.map((product: IProductInfo) => (
                            <>
                                <div className="cart-list-item">
                                    <img className="cart-list-item-image" src={product._links.photo.href}></img>
                                    <span className="cart-list-item-title">{product.model}</span>
                                    <span className="cart-list-item-price">{product.price.display}</span>
                                    <div className="cart-list-item-count">
                                        <button className="cart-list-item-count-button"
                                                onClick={() => {
                                                    if(product.quantity > 1){
                                                        dispatch(decreaseQuantity(product));
                                                    }
                                                }}
                                        >
                                            <img src="../../icons/entypo_minus.svg" alt=""/>
                                        </button>
                                        <span className="cart-list-item-count-in-cart">{product.quantity}</span>
                                        <button className="cart-list-item-count-button"
                                                onClick={() => {
                                                    dispatch(increaseQuantity(product));
                                                }}
                                        >
                                            <img src="../../icons/entypo_plus.svg" alt=""/>
                                        </button>
                                    </div>
                                    <span
                                        className="cart-list-item-price">{product.price.symbol}{(parseFloat(product.price.amount) * product.quantity).toFixed(2)}</span>
                                    <button className="cart-item-delete-button"
                                            onClick={() => {
                                                dispatch(deleteFromCart(product));
                                            }}
                                    ><img src="../../icons/delete.svg"/></button>
                                </div>
                                <div className="cart-page-content-divider"></div>
                            </>
                        ))}
                        <div id="cart-page-content-list-bottom">
                            <div id="cart-page-content-list-bottom-left">
                                <Link id="back-to-shopping-link" to="/products">
                                    <img id="back-to-shopping-link-image" src="/icons/arrow.svg" alt=""/>
                                    <span id="back-to-shopping-link-text">Back to shopping</span>
                                </Link>
                            </div>
                            <div id="cart-page-content-list-bottom-right">
                                <div id="cart-total-price">
                                    <span id="cart-total-price-title">Total Price:</span>
                                    <span id="cart-total-price-count">${totalPrice.toFixed(2)}</span>
                                </div>
                                <Link to="/cart/payment">
                                    <button className="check-out-button">Check Out</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default ShoppingCartPage;