import React from "react";
import Header from "../../components/Header";
import { PricePage } from "./PricePage";
import Footer from "../../components/Footer";

const PriceRangePage: React.FC = () => (
  <main className="relative w-full overflow-x-hidden bg-black">
    <Header />
    <PricePage />
    <Footer />
  </main>
);

export default PriceRangePage;