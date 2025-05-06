import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { motion, Variants } from "framer-motion";

// Framer Motion variants
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.2, duration: 0.2 },
  },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

interface NutritionTip {
  _id: string;
  title: string;
  description: string;
  link?: string;
  imageUrl?: string;
}

export const Diet2: React.FC = (): JSX.Element => {
  const [tips, setTips] = useState<NutritionTip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTips = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("http://localhost:5000/api/nutrition-tips");
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.message || "Failed to load nutrition tips");
        }
        const data: NutritionTip[] = await res.json();
        console.log("Fetched nutrition tips:", data);
        setTips(data);
      } catch (err: any) {
        console.error("Error fetching nutrition tips:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTips();
  }, []);

  return (
    <motion.section
      className="flex flex-col items-start gap-6 py-10 w-full bg-[#00000080]"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header className="w-full text-center" variants={cardVariants}>
        <h2 className="font-bold text-white text-3xl leading-9">
          Nutrition Tips
        </h2>
      </motion.header>

      {loading ? (
        <div className="text-white text-lg w-full text-center">Loading...</div>
      ) : error ? (
        <div className="text-red-400 text-lg w-full text-center">{error}</div>
      ) : tips.length === 0 ? (
        <div className="text-white text-lg w-full text-center">
          No tips available.
        </div>
      ) : (
        <div
          className="flex flex-wrap items-stretch justify-center gap-6 w-full max-w-[1200px] mx-auto"
          variants={sectionVariants}
        >
          {tips.map((tip) => (
            <motion.div
              key={tip._id}
              className="flex-1 max-w-xs"
              variants={cardVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <Card className="bg-[#131922] rounded-lg overflow-hidden shadow-lg border-none">
                {tip.imageUrl && (
                  <img
                    src={tip.imageUrl}
                    alt={tip.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                )}
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
                      className="mt-2 text-red-500 text-base leading-6 underline"
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
        </div>
      )}
    </motion.section>
  );
};
