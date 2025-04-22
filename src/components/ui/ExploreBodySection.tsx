import React from "react";

const features = [
  "Professional Equipment",
  "World Class Trainers",
  "Mixed Martial Art Trainers",
  "Personalized Diet Plan",
];

const ExploreBodySection: React.FC = () => (
  <section className="relative h-screen w-full overflow-hidden">
    <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center text-white bg-black/30 backdrop-blur-sm z-10">
      <h2 className="text-4xl font-bold mb-6">EXPLORE YOUR BODY</h2>
      {features.map((text, i) => (
        <p key={i} className="text-3xl font-semibold my-2">{text}</p>
      ))}
    </div>
    <div className="absolute top-0 left-0 w-full">
      {[2, 3, 4, 5].map((idx) => (
        <div
          key={idx}
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(/frame-2${idx}.png)` }}
        />
      ))}
    </div>
  </section>
);

export default ExploreBodySection;
