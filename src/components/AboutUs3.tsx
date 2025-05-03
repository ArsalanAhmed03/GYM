import React from "react";
import { Card, CardContent } from "./ui/card";

export const AboutUs3 = (): JSX.Element => {
  // Trainer data for mapping
  const trainers = [
    {
      id: 1,
      name: "Trainer 1",
      specialty: "Strength Training Specialist",
      description:
        "With over 5 years of experience, Trainer 1 focuses on building strength and endurance through personalized training programs.",
      imageSrc: "/whiteBox.svg",
    },
    {
      id: 2,
      name: "Trainer 2",
      specialty: "Yoga & Flexibility Coach",
      description:
        "Trainer 2 brings a holistic approach to fitness, helping clients improve flexibility and mindfulness through yoga practices.",
      imageSrc: "/whiteBox.svg",
    },
    {
      id: 3,
      name: "Trainer 3",
      specialty: "Nutrition & Wellness Advisor",
      description:
        "With a background in nutrition, Trainer 3 guides clients on their journey to a healthier lifestyle through balanced eating and wellness strategies.",
      imageSrc: "/whiteBox.svg",
    },
    {
      id: 4,
      name: "Trainer 4",
      specialty: "Cardio & Endurance Specialist",
      description:
        "Trainer 4 specializes in high-intensity cardio workouts designed to boost endurance and cardiovascular health.",
      imageSrc: "/whiteBox.svg",
    },
    {
      id: 5,
      name: "Trainer 5",
      specialty: "Group Fitness Instructor",
      description:
        "With a passion for community, Trainer 5 leads engaging group classes that motivate and inspire participants.",
      imageSrc: "/whiteBox.svg",
    },
    {
      id: 6,
      name: "Trainer 6",
      specialty: "Rehabilitation & Recovery Specialist",
      description:
        "Trainer 6 focuses on helping clients recover from injuries and regain strength through tailored rehabilitation programs.",
      imageSrc: "/whiteBox.svg",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-2 px-4 md:px-14 py-16 relative w-full bg-[#00000080]">
      <div className="flex flex-col items-center gap-8 max-w-7xl w-full">
        <h2 className="font-bold font-['Roboto',Helvetica] text-gray-300 text-3xl text-center leading-9">
          Meet Our Trainers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {trainers.map((trainer) => (
            <Card
              key={trainer.id}
              className="border-none flex flex-col bg-black rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt={`Trainer ${trainer.id}`}
                  src={trainer.imageSrc}
                />
              </div>

              <CardContent className="flex flex-col gap-2 p-6">
                <h3 className="font-['Roboto',Helvetica] font-bold text-gray-300 text-xl leading-7">
                  {trainer.name}
                </h3>
                <p className="font-['Roboto',Helvetica] font-normal text-gray-400 text-base leading-6">
                  {trainer.specialty}
                </p>
                <p className="font-['Roboto',Helvetica] font-normal text-gray-300 text-base leading-6">
                  {trainer.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
