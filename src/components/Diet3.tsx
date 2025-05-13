import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { motion, Variants } from "framer-motion";

// Framer Motion variants for the section and cards
const sectionVariants: Variants = {
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

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 20 },
  },
};

// Match your Mongoose model schema
interface HealthyRecipe {
  _id: string;
  title: string;
  description: string;
  calories: number;
  imageUrl?: string;
}

export const Diet3: React.FC = () => {
  const [recipes, setRecipes] = useState<HealthyRecipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("https://gym-backend-ujzl.onrender.com");
        if (!res.ok) throw new Error("Failed to fetch recipes");
        const data: HealthyRecipe[] = await res.json();
        console.log("Fetched recipes:", data);
        setRecipes(data);
      } catch (err: any) {
        console.error("Error fetching recipes:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <motion.section
      className="flex flex-col items-center justify-center gap-6 py-10 w-full bg-[#00000080]"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header
        className="w-full text-center mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        <h2 className="font-bold text-white text-3xl leading-9">
          Healthy Recipes
        </h2>
      </motion.header>

      {loading ? (
        <div className="text-white text-lg">Loading…</div>
      ) : error ? (
        <div className="text-red-400 text-lg">{error}</div>
      ) : recipes.length === 0 ? (
        <div className="text-white text-lg">No recipes found.</div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1200px] mx-auto">
          {recipes.map((r) => (
            <motion.div
              key={r._id}
              className="flex-1 max-w-xs"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="bg-[#131922] rounded-lg overflow-hidden shadow-lg border-none">
                <CardContent className="p-4 flex flex-col gap-2">
                  {r.imageUrl && (
                    <img
                      src={r.imageUrl}
                      alt={r.title}
                      className="w-full h-40 object-cover rounded"
                    />
                  )}
                  <h3 className="text-red-500 font-bold text-xl">{r.title}</h3>
                  <p className="text-white">{r.description}</p>
                  <p className="text-red-500 font-bold">
                    Calories: {r.calories}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
};
