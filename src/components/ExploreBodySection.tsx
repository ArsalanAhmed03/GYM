import React, { useState, useEffect, useRef } from "react";

const features = [
  "Professional Equipment",
  "World Class Trainers",
  "Mixed Martial Art Trainers",
  "Personalized Diet Plan",
];

const ExploreBodySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top } = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const index = Math.floor((-top + viewportHeight / 2) / viewportHeight);
      if (index >= 0 && index < features.length) {
        setActiveIndex(index);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[400vh] overflow-hidden"
    >
      {/* Background slides */}
      <div className="absolute inset-0 z-0 h-[400vh]">
        {features.map((_, i) => (
          <div
            key={i}
            className="h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: `url('../frame-19-LS.jpg')` }}
          />
        ))}
      </div>

      {/* Sticky Overlay Text at top of section */}
      <div className="sticky top-0 z-20 w-full flex flex-col justify-center items-center h-screen text-white bg-black/30 backdrop-blur-sm pointer-events-none">
        <div className="pointer-events-auto text-center">
          <h2 className="text-4xl font-bold mb-6">EXPLORE YOUR BODY</h2>
          {features.map((text, i) => (
            <p
              key={i}
              className={`transition-transform duration-300 font-semibold my-2 ${
                activeIndex === i ? "scale-125 text-4xl" : "scale-100 text-3xl"
              }`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreBodySection;
