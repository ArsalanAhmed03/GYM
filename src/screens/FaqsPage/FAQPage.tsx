import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Faqs } from "./Faqs";

const FAQPage: React.FC = () => (
  <main className="relative w-full overflow-x-hidden bg-black">
    <Header />
    <Faqs />
    <Footer />
  </main>
);

export default FAQPage;