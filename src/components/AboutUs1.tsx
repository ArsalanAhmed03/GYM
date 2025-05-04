import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.2, duration: 0.6 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 16 } }
};

const pointVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

export const AboutUs1: React.FC = (): JSX.Element => {
  const visionPoints = [
    { text: "To be a leading community hub for fitness and wellness.", iconSrc: "/target.svg" },
    { text: "To foster a supportive environment for all fitness levels.", iconSrc: "/group.svg" },
    { text: "To inspire lifelong journeys of health and fitness.", iconSrc: "/redFlag.svg" },
  ];
  const missionPoints = [
    { text: "To provide state-of-the-art facilities and equipment.", iconSrc: "/dumbbell.svg" },
    { text: "To offer diverse programs that cater to individual needs.", iconSrc: "/calender.svg" },
    { text: "To promote a culture of health, wellness, and community.", iconSrc: "/heart.svg" },
  ];

  return (
    <motion.section
      className="flex flex-col items-center justify-center gap-6 py-8 w-full bg-[#00000080]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.header variants={pointVariants} className="mb-4">
        <h2 className="font-bold text-gray-300 text-3xl text-center leading-9 font-['Roboto',Helvetica]">
          Vision &amp; Mission
        </h2>
      </motion.header>

      <motion.div
        className="flex flex-wrap items-start justify-center gap-8 w-full max-w-[1100px]"
        variants={cardVariants}
      >
        {/* Vision Card */}
        <motion.div variants={cardVariants} className="flex-1 min-w-[320px]">
          <Card className="bg-[#131922] rounded-lg border-none">
            <CardContent className="flex flex-col gap-4 p-6">
              <motion.h3
                variants={pointVariants}
                className="font-bold text-gray-300 text-2xl leading-8 font-['Roboto',Helvetica]"
              >
                Our Vision
              </motion.h3>
              {visionPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  variants={pointVariants}
                  className="flex items-start gap-2"
                >
                  <img
                    src={point.iconSrc}
                    alt="Vision icon"
                    className="w-5 h-5 mt-1"
                  />
                  <span className="text-gray-300 text-base leading-6 font-['Roboto',Helvetica]">
                    {point.text}
                  </span>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Mission Card */}
        <motion.div variants={cardVariants} className="flex-1 min-w-[320px]">
          <Card className="bg-[#131922] rounded-lg border-none">
            <CardContent className="flex flex-col gap-4 p-6">
              <motion.h3
                variants={pointVariants}
                className="font-bold text-gray-300 text-2xl leading-8 font-['Roboto',Helvetica]"
              >
                Our Mission
              </motion.h3>
              {missionPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  variants={pointVariants}
                  className="flex items-start gap-2"
                >
                  <img
                    src={point.iconSrc}
                    alt="Mission icon"
                    className="w-5 h-5 mt-1"
                  />
                  <span className="text-gray-300 text-base leading-6 font-['Roboto',Helvetica]">
                    {point.text}
                  </span>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
