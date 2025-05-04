import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.2, duration: 0.2 }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { opacity: 0.3, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export const AboutUs2: React.FC = (): JSX.Element => {
  return (
    <motion.div
      className="flex flex-col items-center w-full bg-[#0e0505] rounded-lg overflow-hidden shadow-lg"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Image */}
      <motion.div
        className="relative w-full h-[456px] bg-cover bg-center"
        style={{ backgroundImage: "url('../bg3.png')" }}
        variants={imageVariants}
      />

      <motion.div
        className="w-full bg-[#0e0505]"
        variants={contentVariants}
      >
        <Card className="border-none bg-transparent shadow-none">
          <CardContent className="flex flex-col items-start gap-4 px-9 py-8 w-full">
            <motion.h2
              className="font-bold text-neutral-50 text-3xl leading-9"
              variants={contentVariants}
            >
              A Commitment to Growth
            </motion.h2>

            <div className="flex flex-col gap-4">
              {[
                "From our original location with just a few weights and a handful of members, we have expanded to include state-of-the-art equipment, diverse classes, and a community that supports one another.",
                "As we look to the future, we remain dedicated to fostering a welcoming environment where everyone can thrive. Join us as we continue to grow, innovate, and celebrate the incredible journey of fitness together."
              ].map((text, idx) => (
                <motion.p
                  key={idx}
                  className="text-neutral-50 text-lg leading-7"
                  variants={contentVariants}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};