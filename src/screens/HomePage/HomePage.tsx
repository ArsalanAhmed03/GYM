import React from "react";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import {SignUpSection} from "../../components/SignUpSection";
import ExploreBodySection from "../../components/ui/ExploreBodySection";
import Footer from "../../components/Footer";

const HomePage: React.FC = () => (
  <main className="relative w-full overflow-x-hidden bg-black">
    <Header />
    <HeroSection />
    <SignUpSection />
    <ExploreBodySection />
    <Footer />
  </main>
);

export default HomePage;