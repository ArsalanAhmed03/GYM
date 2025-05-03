import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import { SignUpSection } from "../../components/SignUpSection";
import ExploreBodySection from "../../components/ExploreBodySection";
import {ExpertTrainer} from "../../components/ExpertTrainerSection";

import Footer from "../../components/Footer";

const HomePage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <main className="w-full overflow-x-hidden bg-black">
      <Header />
      <HeroSection />
      {!isLoggedIn && <SignUpSection />}
      <ExpertTrainer />
      <ExploreBodySection />
      <Footer />
    </main>
  );
};

export default HomePage;
