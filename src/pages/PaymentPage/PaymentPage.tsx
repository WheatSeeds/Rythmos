import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import "../../styles/PaymentPageStyles/PaymentPage.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store.ts";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { clearCart } from "../../store/cartSlice.ts";
import Input from "../../components/Input.tsx";
import Form from "../../components/Form.tsx";
import PriceDetails from "./PriceDetails.tsx";

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

  return (
    <>
      <Header />
      <main>
        <div id="payment-page-content">
          <Form
            fields={paymentFormFields}
            id={"payment-page-form"}
            title={"Confirm and pay"}
            submitButtonValue={"Confirm and pay"}
          />
          <PriceDetails />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PaymentPage;
