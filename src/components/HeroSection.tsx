import React from "react";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.3, duration: 0.8 }
  }
};

const topCardVariants = {
  hidden: { x: -150, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

const bottomContainerVariants = {
  hidden: {},
  visible: { transition: { when: "beforeChildren", staggerChildren: 0.2 } }
};

const ctaVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }
};

const rightCardVariants = {
  hidden: { x: 150, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      className="relative w-screen h-[calc(100vh)] flex flex-col justify-between pt-[73px] pb-8 px-8 bg-[url('../bg2-LS.jpg')] bg-[position:50%_20%] bg-cover"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top: Left Card */}
      <motion.div className="self-start mt-8" variants={topCardVariants}>
        <Card className="inline-flex flex-col items-start gap-4 p-4 bg-[#00000099] rounded-2xl border-none">
          <CardContent className="flex w-[400px] items-center justify-center p-0">
            <p className="text-white text-[30px] font-bold tracking-[-0.14px]">
              We are digital, where tech meets health
            </p>
          </CardContent>

          <CardContent className="flex w-[263px] items-center justify-center p-0">
            <p className="text-white text-[50px] font-bold tracking-[-0.14px]">
              CaloryCut
            </p>
          </CardContent>

          <CardContent className="flex flex-col items-center justify-center p-0">
            <Button
              variant="link"
              onClick={() => navigate("/price-range")}
              className="inline-flex gap-2 p-0 text-white no-underline hover:no-underline focus:no-underline focus:ring-0 outline-none"
            >
              <ArrowRightIcon className="w-12 h-12" />
              <span>JOIN NOW</span>
            </Button>
            <Separator className="w-full h-px" />
          </CardContent>
        </Card>
      </motion.div>

      {/* Bottom Row */}
      <motion.div
        className="flex justify-between items-end w-full gap-8"
        variants={bottomContainerVariants}
      >
        {/* CTA Buttons */}
        <div className="flex flex-col gap-8">
          <motion.div
            className="inline-flex items-center gap-8"
            variants={ctaVariants}
          >
            <Button
              onClick={() => navigate("/services")}
              className="inline-flex justify-center gap-2 p-8 bg-white rounded-[64px] text-[#06090E] hover:bg-[#06090E] hover:text-white transition-colors"
            >
              <span>start training</span>
            </Button>
            <Button onClick={() => navigate("/services")}
              className="inline-flex justify-center gap-2 p-8 bg-white rounded-[64px] text-[#06090E] hover:bg-[#06090E] hover:text-white transition-colors"
            >
              <ArrowUpRightIcon className="w-8 h-8" />
            </Button>
          </motion.div>

          {/* Removed Top Trainers Button */}
        </div>

        {/* Right Card */}
        <motion.div variants={rightCardVariants}>
          <Card className="flex w-[523px] items-center justify-center gap-2 p-8 bg-[#00000099] rounded-2xl border-none">
            <CardContent className="p-0 flex-1">
              <p className="text-white text-[length:var(--m3-display-small-font-size)] text-right">
                Transforming Your Potential into Peak Performance
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
