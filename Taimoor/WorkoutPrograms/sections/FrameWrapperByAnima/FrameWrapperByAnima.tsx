import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameWrapperByAnima = (): JSX.Element => {
  // Define workout program data for mapping
  const workoutPrograms = [
    {
      title: "30-Day Weight Loss",
      duration: "30 Days",
      difficulty: "Intermediate",
      features: ["Daily workouts", "Nutrition guide", "Community support"],
    },
    {
      title: "Strength Training Basics",
      duration: "4 Weeks",
      difficulty: "Beginner",
      features: ["Full-body workouts", "Form tutorials", "Weekly check-ins"],
    },
    {
      title: "Muscle Gain Program",
      duration: "8 Weeks",
      difficulty: "Advanced",
      features: [
        "Difficulty: Advanced", // Note: This appears to be a duplicate in the original
        "Progress tracking",
        "Expert coaching",
      ],
    },
    {
      title: "Cardio Blast",
      duration: "6 Weeks",
      difficulty: "Intermediate",
      features: ["HIIT sessions", "Endurance training", "Motivational tips"],
    },
    {
      title: "Yoga for Beginners",
      duration: "30 Days",
      difficulty: "Beginner",
      features: ["Daily poses", "Meditation practices", "Flexibility tips"],
    },
    {
      title: "Pilates Essentials",
      duration: "4 Weeks",
      difficulty: "Intermediate",
      features: [
        "Core strengthening",
        "Breathing techniques",
        "Posture improvement",
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center px-20 py-10 w-full [background:url(..//frame.png)_50%_50%_/_cover]">
      <header className="flex items-center justify-center gap-2 w-full">
        <h2 className="font-bold text-white text-3xl text-center leading-9 font-['Roboto',Helvetica]">
          Workout Plans
        </h2>
      </header>

      <div className="flex flex-wrap items-center justify-center gap-[20px_18px] px-[52px] py-[30px] w-full bg-[#0c0f13]">
        {workoutPrograms.map((program, index) => (
          <Card
            key={index}
            className="flex flex-col w-[302.44px] bg-[#181e28] rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] border-none"
          >
            <CardContent className="flex flex-col items-start justify-center gap-2 p-4">
              <div className="flex items-center gap-2 w-full">
                <h3 className="flex-1 font-bold text-red-500 text-xl leading-7 font-['Roboto',Helvetica]">
                  {program.title}
                </h3>
              </div>

              <div className="flex items-center justify-center gap-2 w-full">
                <p className="flex-1 font-normal text-white text-base leading-6 font-['Roboto',Helvetica]">
                  Duration: {program.duration}
                </p>
              </div>

              <div className="flex flex-col items-start px-4 w-full">
                <p className="w-full font-normal text-white text-base leading-6 font-['Roboto',Helvetica]">
                  Difficulty: {program.difficulty}
                </p>

                {program.features.map((feature, featureIndex) => (
                  <p
                    key={featureIndex}
                    className="w-full font-normal text-white text-base leading-6 font-['Roboto',Helvetica]"
                  >
                    {feature}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
