import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

const facilityHighlights = [
  { title: "State-of-the-Art Equipment", img: "/images/Facilities/Equipment.jpg" },
  { title: "Spacious Training Areas", img: "/images/Facilities/TrainingAreas.jpg" },
  { title: "Dynamic Group Classes", img: "/images/Facilities/GroupClasses.jpg" },
  { title: "Yoga & Wellness Studio", img: "/images/Facilities/WellnessStudio.jpg" },
  { title: "Modern Locker Rooms", img: "/images/Facilities/LockerRooms.jpg" },
  { title: "Smoothie & Snack Bar", img: "/images/Facilities/SnackBar.jpg" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.2, duration: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } }
};

export const AboutUs4: React.FC = (): JSX.Element => {
  return (
    <motion.section
      className="relative w-full py-16 bg-[#00000080]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-gray-300 text-center mb-12 leading-9"
          variants={cardVariants}
        >
          Facility Highlights
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilityHighlights.map((facility, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="h-64"
            >
              <Card className="h-full bg-transparent border-0 overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-2/3 w-full">
                  <motion.img
                    src={facility.img}
                    alt={facility.title}
                    className="object-cover w-full h-full"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
                  />
                </div>
                <CardContent className="p-4 flex items-center justify-center h-1/3 bg-black/60">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.5 } }}
                  >
                    <h3 className="font-bold text-white text-lg leading-7">
                      {facility.title}
                    </h3>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
