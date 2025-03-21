import { Link } from "react-router";
import { ReactNode } from "react";

type CartListProps = {
  children?: ReactNode;
  totalPrice: number;
};

const CartList = ({ children, totalPrice }: CartListProps) => {
  return (
    <>
      <div id="cart-page-content-list">
        <div id="cart-page-content-list-top">
          <span>Item</span>
          <div></div>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total Price</span>
        </div>
        <div className="cart-page-content-divider"></div>
        {children}
        <div id="cart-page-content-list-bottom">
          <div id="cart-page-content-list-bottom-left">
            <Link id="back-to-shopping-link" to="/products">
              <img
                id="back-to-shopping-link-image"
                src="/icons/arrow.svg"
                alt=""
              />
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
    </>
  );
};

export default CartList;
