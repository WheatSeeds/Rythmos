import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import Form from "../../components/Form.tsx";
import MapComponent from "./Map.tsx";

const ContactPage = () => {
  const contactFormFields = [
    {
      name: "topic",
      type: "text",
      placeholder: "What is your proposal?",
      label: "TOPIC",
    },
    {
      name: "name",
      type: "text",
      placeholder: "Name Surname",
      label: "YOUR NAME",
    },
    {
      name: "email",
      type: "email",
      placeholder: "your_email@gmail.com",
      label: "EMAIL",
    },
    {
      name: "description",
      type: "text",
      placeholder: "Optional",
      label: "Description",
    },
  ];
  return (
    <>
      <Header />
      <main>
        <div id="contact-page-content">
          <Form
            fields={contactFormFields}
            id={"contact-page-form"}
            title={"Contact Us"}
            submitButtonValue={"SEND REQUEST"}
          />
          <MapComponent />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
