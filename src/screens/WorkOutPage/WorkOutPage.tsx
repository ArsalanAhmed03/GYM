import React from "react";
import Header from "../../components/Header";
import { WorkoutPrograms } from "./WorkoutPrograms";
import Footer from "../../components/Footer";

const WorkoutProgram: React.FC = () => (
  <main className="relative w-full overflow-x-hidden bg-black">
    <Header />
    <WorkoutPrograms />
    <Footer />
  </main>
);

export default WorkoutProgram;