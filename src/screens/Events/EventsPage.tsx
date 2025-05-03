import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { EventsChallenges } from "./EventsChallenges";

const EventsPage: React.FC = () => (
  <main className="relative w-full overflow-x-hidden bg-black">
    <Header />
    <EventsChallenges />
    <Footer />
  </main>
);

export default EventsPage;