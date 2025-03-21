import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import "../../styles/PaymentPageStyles/PaymentPage.css";
import Form from "../../components/Form.tsx";
import PriceDetails from "./PriceDetails.tsx";
import { fields } from "../../data/paymentFormFields.ts";

const PaymentPage = () => {
  return (
    <>
      <Header />
      <main>
        <div id="payment-page-content">
          <Form
            fields={fields}
            id={"payment-page-form"}
            title={"Confirm and pay"}
            submitButtonValue={"Confirm and pay"}
            linkPath={"/cart/order"}
          />
          <PriceDetails />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PaymentPage;
