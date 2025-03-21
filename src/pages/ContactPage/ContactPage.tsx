import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import Form from "../../components/Form.tsx";
import MapComponent from "./Map.tsx";
import { fields } from "../../data/contactFormFields.ts";

const ContactPage = () => {
  return (
    <>
      <Header />
      <main>
        <div id="contact-page-content">
          <Form
            fields={fields}
            id={"contact-page-form"}
            title={"Contact Us"}
            submitButtonValue={"SEND REQUEST"}
            linkPath={"/home"}
          />
          <MapComponent />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
