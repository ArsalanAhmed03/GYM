import React from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

// Sample recipe images: stored in public/images/Recipes folder
const recipes = [
  {
    id: 1,
    title: "Veggie Salad",
    description: "A refreshing mix of greens, veggies, and a light vinaigrette.",
    calories: 150,
    image: "/images/Recipes/VeggieSalad.jpg",
  },
  {
    id: 2,
    title: "Grilled Chicken",
    description: "Lean protein paired with seasonal grilled vegetables.",
    calories: 350,
    image: "/images/Recipes/GrilledChicken.jpg",
  },
  {
    id: 3,
    title: "Smoothie Bowl",
    description: "Base of blended berries topped with granola and fruit.",
    calories: 200,
    image: "/images/Recipes/SmoothieBowl.jpg",
  },
];

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.15, duration: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 140, damping: 20 } }
};

export const Diet3: React.FC = (): JSX.Element => (
  <motion.section
    className="flex flex-col items-center justify-center gap-6 py-10 w-full bg-[#00000080]"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <motion.header
      className="w-full text-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
    >
      <h2 className="font-bold text-white text-3xl leading-9 font-['Roboto',Helvetica]">
        Healthy Recipes
      </h2>
    </motion.header>

    <div className="flex flex-wrap items-stretch justify-center gap-6 w-full max-w-[1200px] mx-auto">
      {recipes.map((recipe, idx) => (
        <motion.div
          key={recipe.id}
          className="flex-1 max-w-xs"
          variants={cardVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <Card className="bg-[#131922] rounded-lg overflow-hidden shadow-lg border-none">
            <motion.img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
            />
            <CardContent className="flex flex-col gap-2 p-4">
              <motion.h3
                className="font-bold text-red-500 text-xl leading-7"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
              >
                {recipe.title}
              </motion.h3>
              <motion.p
                className="text-white text-base leading-6"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
              >
                {recipe.description}
              </motion.p>
              <motion.p
                className="font-bold text-red-500 text-base leading-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
              >
                Calories: {recipe.calories}
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </motion.section>
);
