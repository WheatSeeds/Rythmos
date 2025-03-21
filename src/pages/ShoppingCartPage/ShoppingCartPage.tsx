import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import { ICategory, IProductInfo } from "../../types/types.tsx";
import CartItem from "./CartItem.tsx";
import CartList from "./CartList.tsx";
import List from "../../components/List.tsx";
import Category from "../CategoriesPage/Category.tsx";

const ShoppingCartPage = () => {
  const cart: IProductInfo[] = useSelector((state: RootState) => state.cart);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    let totalPriceCount: number = 0;
    cart.map((item: IProductInfo) => {
      totalPriceCount += parseFloat(item.price.amount) * item.quantity;
    });
    setTotalPrice(totalPriceCount);
  }, [cart]);

  return (
    <>
      <Header />
      <main>
        <div id="cart-page-content">
          <div id="cart-page-content-title">
            <span id="cart-page-content-title-text">Cart</span>
            <span id="cart-page-content-title-items-count">{cart.length}</span>
          </div>
          <CartList totalPrice={totalPrice}>
            <List
              className=""
              items={cart}
              renderItem={(product: IProductInfo) => (
                <CartItem product={product} />
              )}
            />
          </CartList>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ShoppingCartPage;
