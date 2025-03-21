import {
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
} from "../../store/cartSlice.ts";
import { IProductInfo } from "../../types/types.tsx";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store.ts";

type CartItemProps = {
  product: IProductInfo;
};

const CartItem = ({ product }: CartItemProps) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div className="cart-list-item">
        <img
          className="cart-list-item-image"
          src={product._links.photo.href}
        ></img>
        <span className="cart-list-item-title">{product.model}</span>
        <span className="cart-list-item-price">{product.price.display}</span>
        <div className="cart-list-item-count">
          <button
            className="cart-list-item-count-button"
            onClick={() => {
              if (product.quantity > 1) {
                dispatch(decreaseQuantity(product));
              }
            }}
          >
            <img src="../../icons/entypo_minus.svg" alt="" />
          </button>
          <span className="cart-list-item-count-in-cart">
            {product.quantity}
          </span>
          <button
            className="cart-list-item-count-button"
            onClick={() => {
              dispatch(increaseQuantity(product));
            }}
          >
            <img src="../../icons/entypo_plus.svg" alt="" />
          </button>
        </div>
        <span className="cart-list-item-price">
          {product.price.symbol}
          {(parseFloat(product.price.amount) * product.quantity).toFixed(2)}
        </span>
        <button
          className="cart-item-delete-button"
          onClick={() => {
            dispatch(deleteFromCart(product));
          }}
        >
          <img src="../../icons/delete.svg" />
        </button>
      </div>
      <div className="cart-page-content-divider"></div>
    </>
  );
};

export default CartItem;
