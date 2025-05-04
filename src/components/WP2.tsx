import React from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

export const WP2: React.FC = (): JSX.Element => {
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
      features: ["Progress tracking", "Expert coaching"],
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
      features: ["Core strengthening", "Breathing techniques", "Posture improvement"],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.1, duration: 0.5 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150, damping: 20 } }
  };

  return (
    <section className="px-20 py-10 w-full bg-[url('../bg4.png')] bg-center bg-cover">
      <motion.header
        className="flex items-center justify-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        <h2 className="font-bold text-white text-3xl text-center leading-9 font-['Roboto',Helvetica]">
          Workout Plans
        </h2>
      </motion.header>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {workoutPrograms.map((program, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="flex"
          >
            <Card className="flex flex-col w-full bg-[#131922] rounded-lg overflow-hidden shadow-lg border-none">
              <CardContent className="flex flex-col items-start justify-center gap-2 p-6">
                <h3 className="font-bold text-red-500 text-xl leading-7 font-['Roboto',Helvetica] mb-2">
                  {program.title}
                </h3>
                <p className="font-normal text-white text-base leading-6">
                  Duration: {program.duration}
                </p>
                <p className="font-normal text-white text-base leading-6 mb-2">
                  Difficulty: {program.difficulty}
                </p>
                <ul className="list-disc list-inside text-white">
                  {program.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-base leading-6">
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};