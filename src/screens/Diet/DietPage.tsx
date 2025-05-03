import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { DietNutritionPlans } from "./DietNutritionPlans";

const DietPage: React.FC = () => (
  <main className="relative w-full overflow-x-hidden bg-black">
    <Header />
    <DietNutritionPlans />
    <Footer />
  </main>
);

export default DietPage;