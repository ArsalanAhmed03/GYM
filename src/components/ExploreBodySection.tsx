import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  "Professional Equipment",
  "World Class Trainers",
  "Mixed Martial Art Trainers",
  "Personalized Diet Plan",
];

const bgImages = [
  "/bg1.png",
  "/bg3.png",
  "/bg4.png",
  "/bg5.png",
];

// Animation variants
const bgVariants = {
  initial: { opacity: 0, scale: 1.1 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.5, ease: "easeIn" } },
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ExploreBodySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = features.length;

  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % total);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background carousel with AnimatePresence */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={activeIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${bgImages[activeIndex]}')` }}
          variants={bgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </AnimatePresence>

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4">
        <motion.h2
          className="text-5xl font-bold mb-4"
          variants={textVariants}
          initial="initial"
          animate="animate"
          key={`title-${activeIndex}`}
        >
          EXPLORE YOUR BODY
        </motion.h2>
        <motion.p
          className="text-3xl font-semibold"
          variants={textVariants}
          initial="initial"
          animate="animate"
          key={`text-${activeIndex}`}
        >
          {features[activeIndex]}
        </motion.p>
      </div>

      {/* Navigation Buttons wrapper for consistent positioning */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <motion.button
          onClick={prevSlide}
          className="pointer-events-auto bg-black/50 text-white p-3 rounded-full"
          variants={bgVariants}
          initial="animate"
          whileHover={{ scale: 1.2, backgroundColor: "rgba(0,0,0,0.7)" }}
          transition={{ type: "spring", stiffness: 300 }}
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className="pointer-events-auto bg-black/50 text-white p-3 rounded-full"
          variants={bgVariants}
          initial="animate"
          whileHover={{ scale: 1.2, backgroundColor: "rgba(0,0,0,0.7)" }}
          transition={{ type: "spring", stiffness: 300 }}
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
};

export default ExploreBodySection;
