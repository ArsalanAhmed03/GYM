import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { GymEquipment } from "./GymEquipment";

const GymEquipmentPage: React.FC = () => (
  <main className="relative w-full overflow-x-hidden bg-black">
    <Header />
    <GymEquipment />
    <Footer />
  </main>
);

export default GymEquipmentPage;