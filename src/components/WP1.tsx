import React from "react";
import { motion } from "framer-motion";

export const WP1: React.FC = (): JSX.Element => {
  // Define workout categories data for mapping
  const workoutCategories = [
    { id: 1, name: "Weight Loss", icon: "/weight.svg" },
    { id: 2, name: "Strength Training", icon: "/dumbbell.svg" },
    { id: 3, name: "Muscle Gain", icon: "/balance.svg" },
    { id: 4, name: "Cardio", icon: "/running.svg" },
  ];

  // Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.15, duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 150, damping: 20 }
    }
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center gap-8 w-full p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header variants={itemVariants} className="w-full text-center">
        <h2 className="font-bold text-3xl text-white font-[Roboto] leading-9">
          Workout Categories
        </h2>
      </motion.header>

      <motion.div
        className="flex items-center justify-center gap-6 flex-wrap"
        variants={containerVariants}
      >
        {workoutCategories.map((category) => (
          <motion.div
            key={category.id}
            className="flex flex-col items-center h-[80px] w-[120px] rounded-lg p-4 cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <img
              className="w-10 h-10 mb-2"
              alt={`${category.name} icon`}
              src={category.icon}
            />
            <motion.p
              className="font-bold text-white text-base leading-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {category.name}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
