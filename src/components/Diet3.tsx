import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 20 },
  },
};

export const Diet3: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/healthy-recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
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

      {loading ? (
        <div className="text-white text-lg w-full text-center">Loading...</div>
      ) : (
        <div className="flex flex-wrap items-stretch justify-center gap-6 w-full max-w-[1200px] mx-auto">
          {recipes.map((recipe, idx) => (
            <motion.div
              key={recipe._id || idx}
              className="flex-1 max-w-xs"
              variants={cardVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <Card className="bg-[#131922] rounded-lg overflow-hidden shadow-lg border-none">
                {/* If you have images in your DB, use recipe.image here */}
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
      )}
    </motion.section>
  );
};
