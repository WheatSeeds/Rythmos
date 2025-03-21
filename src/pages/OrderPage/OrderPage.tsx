import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import Button from "../../components/Button.tsx";
import "../../styles/OrderPageStyles/OrderPage.css";
import { Link } from "react-router";

const OrderPage = () => {
  return (
    <>
      <Header />
      <main>
        <div id="order-page-content">
          <img
            id="order-page-content-image"
            src="../../images/frame.svg"
            alt=""
          />
          <div id="order-page-content-text">
            <span id="order-state">ORDER SUCCESSFUL</span>
            <span id="order-message">Thank you for your order!</span>
            <span id="order-number">
              Order number is <span>#{Date.now()}</span>
            </span>
            <span id="order-email-message">
              Check your email to track your order
            </span>
          </div>
          <Link to="/products">
            <Button height={48} width={195} borderRadius={90} fontSize={16}>
              Continue shopping
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OrderPage;
