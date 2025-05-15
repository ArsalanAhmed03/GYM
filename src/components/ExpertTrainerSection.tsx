import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

interface Trainer {
  _id: string;
  name: string;
  specialty: string;
  img: string;
}

export const ExpertTrainer: React.FC = (): JSX.Element => {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await fetch("https://gym-backend-ujzl.onrender.com/api/trainers");
        if (!response.ok) {
          throw new Error("Failed to fetch trainers");
        }
        const data = await response.json();
        setTrainers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchTrainers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px] text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <motion.section
      className="flex flex-col items-center gap-6 px-4 py-10 w-full bg-black/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="font-['Roboto',Helvetica] font-bold text-white text-3xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 } }}
      >
        Our Expert Trainers
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8 w-full">
        {trainers.map((trainer, index) => (
          <motion.div
            key={trainer._id}
            className="flex"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.3 + index * 0.1, duration: 0.4 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="flex flex-col w-[300px] items-center gap-4 p-6 bg-[#131922] rounded-lg overflow-hidden shadow-lg border-none">
              <motion.img
                className="w-[200px] h-[200px] object-cover rounded-full mb-2 filter brightness-50"
                alt={`${trainer.name} profile`}
                src={trainer.img}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { delay: 0.4 + index * 0.1, duration: 0.5 },
                }}
              />
              <motion.h3
                className="font-['Roboto',Helvetica] font-bold text-red-500 text-xl text-center mb-1"
                initial={{ x: -10, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { delay: 0.5 + index * 0.1, duration: 0.4 },
                }}
              >
                {trainer.name}
              </motion.h3>
              <motion.p
                className="font-['Roboto',Helvetica] text-white text-base text-center"
                initial={{ x: 10, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { delay: 0.6 + index * 0.1, duration: 0.4 },
                }}
              >
                {trainer.specialty}
              </motion.p>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
