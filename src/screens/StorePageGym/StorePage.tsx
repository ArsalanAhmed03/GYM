import React from "react";
import Header from "../../components/Header";
import { StorePageGym } from "./StorePageGym";
import Footer from "../../components/Footer";

const StorePage: React.FC = () => (
  <main className="relative w-full overflow-x-hidden bg-black">
    <Header />
    <StorePageGym />
    <Footer />
  </main>
);

export default StorePage;