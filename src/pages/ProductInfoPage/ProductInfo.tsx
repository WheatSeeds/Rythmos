import { IProductInfo } from "../../types/types.tsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice.ts";
import { RootState } from "../../store/store.ts";
import Button from "../../components/Button.tsx";

type ProductInfoProps = {
  product?: IProductInfo;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [productCounter, setProductCounter] = useState(1);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div id="product">
      <img id="product-content-image" src={product?._links.photo.href} alt="" />
      <div id="product-content">
        <span id="product-content-title">{product?.model}</span>
        <span id="product-content-price">{product?.price.display}</span>
        <div id="product-content-buttons">
          <Button
            onClick={() =>
              dispatch(addToCart({ ...product!, quantity: productCounter }))
            }
          >
            <img
              id="add-to-cart-button-image"
              src="../../icons/cart-button.svg"
              alt=""
            />
            <span id="add-to-cart-button-text">Add to Cart</span>
          </Button>

          <div id="count-products-in-cart-buttons">
            <button
              className="count-products-in-cart"
              onClick={() => {
                if (productCounter > 0) {
                  setProductCounter(productCounter - 1);
                }
              }}
            >
              <img src="../../icons/entypo_minus.svg" alt="" />
            </button>
            <span id="count-products-in-cart">{productCounter}</span>
            <button
              className="count-products-in-cart"
              onClick={() => setProductCounter(productCounter + 1)}
            >
              <img src="../../icons/entypo_plus.svg" alt="" />
            </button>
          </div>
        </div>
        <div id="product-content-description">
          <span id="product-content-description-title">Description</span>
          <div
            id="product-content-description-content"
            dangerouslySetInnerHTML={{ __html: product?.description ?? "" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
