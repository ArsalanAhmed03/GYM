import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.2, duration: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

export const Diet2: React.FC = (): JSX.Element => {
  const [nutritionTips, setNutritionTips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/nutrition-tips")
      .then((res) => res.json())
      .then((data) => {
        setNutritionTips(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <motion.section
      className="flex flex-col items-start gap-6 py-10 w-full bg-[#00000080]"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      <motion.header className="w-full text-center" variants={cardVariants}>
        <h2 className="font-bold text-white text-3xl leading-9 font-['Roboto',Helvetica]">
          Nutrition Tips
        </h2>
      </motion.header>

      {loading ? (
        <div className="text-white text-lg w-full text-center">Loading...</div>
      ) : (
        <motion.div
          className="flex flex-wrap items-stretch justify-center gap-6 w-full max-w-[1200px] mx-auto"
          variants={sectionVariants}
        >
          {nutritionTips.map((tip, index) => (
            <motion.div
              key={tip._id || index}
              className="flex-1 max-w-xs"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="bg-[#131922] rounded-lg overflow-hidden shadow-lg border-none">
                {/* If you have images in your DB, use tip.image here */}
                <CardContent className="flex flex-col gap-2 p-4">
                  <motion.h3
                    className="font-bold text-red-500 text-xl leading-7"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
                  >
                    {tip.title}
                  </motion.h3>
                  <motion.p
                    className="text-white text-base leading-6"
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
                  >
                    {tip.description}
                  </motion.p>
                  {tip.link && (
                    <motion.a
                      href={tip.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 text-base leading-6 underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 0.5 } }}
                    >
                      Read more
                    </motion.a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
};
