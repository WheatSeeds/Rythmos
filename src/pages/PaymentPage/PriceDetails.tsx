import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import { useEffect, useState } from "react";

const PriceDetails = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  function totalPriceCalc() {
    let totalPriceCount = 0;
    cart.map((item) => {
      totalPriceCount += parseFloat(item.price.amount) * item.quantity;
    });
    setTotalPrice(totalPriceCount);
  }

  useEffect(() => {
    totalPriceCalc();
  }, [cart]);

  return (
    <div id="payment-page-price-details">
      <span id="payment-page-price-details-title">Price details</span>
      {cart.map((product) => (
        <div className="payment-page-price-details-item" key={product.id}>
          <span>
            {product.price.display} x {product.quantity}
          </span>
          <span>
            {product.price.symbol}
            {parseFloat(product.price.amount) * product.quantity}
          </span>
        </div>
      ))}
      <div className="payment-page-divider"></div>
      <div className="payment-page-price-details-total">
        <span>
          Total <span>(USD)</span>
        </span>
        <span>${totalPrice}</span>
      </div>
    </div>
  );
};

export default PriceDetails;
