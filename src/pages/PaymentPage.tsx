import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "../styles/PaymentPage.css"
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import {useEffect, useState} from "react";

const PaymentPage = () => {

    const paymentFormFields = [
        {
            name: "card-number",
            type: "text",
            placeholder: "1234 5678 9000 0000",
            label: "CARD NUMBER",
        },
        {
            name: "card-holder",
            type: "text",
            placeholder: "Name Surname",
            label: "CARD HOLDER",
        },
        {
            name: "card-expiration-date",
            type: "text",
            placeholder: "MM / YY",
            label: "EXPIRATION DATE",
        },
        {
            name: "card-cvv",
            type: "text",
            placeholder: "***",
            label: "CVV",
        },
    ];

    const cart = useSelector((state: RootState) => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);

    function totalPriceCalc() {
        let totalPriceCount = 0;
        cart.map((item) => {
            totalPriceCount += parseFloat(item.price.amount) * item.quantity;
        })
        setTotalPrice(totalPriceCount);
    }

    useEffect(() => {
        totalPriceCalc()
    }, [cart])

    return (
        <>
            <Header/>
            <main>
                <div id="payment-page-content">
                    <span id="payment-page-content-title">Confirm and pay</span>
                    <form id="payment-page-form">
                        <span id="payment-page-form-title">Credit Card</span>
                        {paymentFormFields.map((item) => (
                            <div className="payment-page-form-field">
                                <label htmlFor={item.name}>{item.label}</label>
                                <input type={item.type} name={item.name} placeholder={item.placeholder}></input>
                            </div>
                        ))}
                        <button id="payment-page-form-button"
                                onClick={(e) => e.preventDefault()}>Confirm and pay
                        </button>
                    </form>
                    <div id="payment-page-price-details">
                        <span id="payment-page-price-details-title">Price details</span>
                        {cart.map((product) => (
                            <div className="payment-page-price-details-item" key={product.id}>
                                <span>{product.price.display} x {product.quantity}</span>
                                <span>{product.price.symbol}{parseFloat(product.price.amount) * product.quantity}</span>
                            </div>
                        ))}
                        <div className="payment-page-divider"></div>
                        <div className="payment-page-price-details-total">
                            <span>Total <span>(USD)</span></span>
                            <span>${totalPrice}</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default PaymentPage;