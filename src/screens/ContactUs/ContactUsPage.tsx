import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ContactUs } from "./ContactUs";

const ContactUsPage: React.FC = () => (
  <main className="relative w-full overflow-x-hidden bg-black">
    <Header />
    <ContactUs />
    <Footer />
  </main>
);

export default ContactUsPage;