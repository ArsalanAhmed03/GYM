import React from "react";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const HeroSection: React.FC = () => {
  return (
    <section
      className="
        relative w-screen
        h-[calc(100vh)]
        flex flex-col justify-between
        pt-[73px] pb-8 px-8
        bg-[url('../bg2-LS.jpg')]
        bg-[position:50%_20%]
        bg-cover
      "
    >
      {/* Top: Left Card */}
      <div className="self-start mt-8">
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
              className="inline-flex gap-2 p-0 text-white no-underline hover:no-underline focus:no-underline focus:ring-0 outline-none"
            >
              <ArrowRightIcon className="w-12 h-12" />
              <span>JOIN NOW</span>
            </Button>
            <Separator className="w-full h-px" />
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row: CTA on left, Right Card on right */}
      <div className="flex justify-between items-end w-full gap-8">
        {/* CTA Buttons */}
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-8">
            <Button
              className="inline-flex justify-center gap-2 p-8 bg-white rounded-[64px] text-[#06090E] hover:bg-[#06090E] hover:text-white transition-colors"
            >
              <span>start training</span>
            </Button>
            <Button
              className="inline-flex justify-center gap-2 p-8 bg-white rounded-[64px] text-[#06090E] hover:bg-[#06090E] hover:text-white transition-colors"
            >
              <ArrowUpRightIcon className="w-8 h-8" />
            </Button>
          </div>
          <div className="inline-flex flex-col items-center justify-center gap-2 px-8 py-2 rounded-2xl">
            <Button
              variant="link"
              className="inline-flex gap-2 p-0 text-white hover:no-underline focus:no-underline"
            >
              <ArrowRightIcon className="w-12 h-12" />
              <span>Top Trainers</span>
            </Button>
            <Separator className="w-full h-px" />
          </div>
        </div>

        {/* Right Card */}
        <Card className="flex w-[523px] items-center justify-center gap-2 p-8 bg-[#00000099] rounded-2xl border-none">
          <CardContent className="p-0 flex-1">
            <p className="text-white text-[length:var(--m3-display-small-font-size)] text-right">
              Transforming Your Potential into Peak Performance
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;