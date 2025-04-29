import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { AboutUs } from "./AboutUs";

const AboutUsPage: React.FC = () => (
  <main className="relative w-full overflow-x-hidden bg-black">
    <Header />
    <AboutUs />
    <Footer />
  </main>
);

export default AboutUsPage;