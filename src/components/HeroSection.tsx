import React from "react";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const HeroSection: React.FC = () => (
  <section className="flex flex-col h-[1080px] items-center gap-8 px-8 py-0 relative self-stretch w-full [background:url(../frame-19.png)_50%_50%_/_cover]">
    {/* Top Spacer */}
    <div className="relative self-stretch w-full h-[73px]" />

    {/* Left Card */}
    <div className="flex flex-col items-start gap-8 relative self-stretch w-full">
      <Card className="inline-flex flex-col items-start gap-8 p-8 bg-[#00000099] rounded-2xl border-none">
        <CardContent className="flex w-[463px] items-center justify-center gap-2 p-0">
          <p className="font-m3-display-small text-white">We are digital, where tech meets health</p>
        </CardContent>
        <CardContent className="flex w-[263px] items-center justify-center gap-2 p-0">
          <p className="text-white text-[57px] font-bold tracking-[-0.14px]">CaloryCut</p>
        </CardContent>
        <CardContent className="inline-flex flex-col items-center justify-center gap-2 p-0">
          <Button variant="link" className="inline-flex gap-2 p-0 text-white">
            <ArrowRightIcon className="w-12 h-12" />
            <span>JOIN NOW</span>
          </Button>
          <Separator className="w-full h-px" />
        </CardContent>
      </Card>
    </div>

    {/* Right Card */}
    <div className="flex flex-col items-end gap-8 relative self-stretch w-full">
      <Card className="flex w-[523px] items-center justify-center gap-2 p-8 bg-[#00000099] rounded-2xl border-none">
        <CardContent className="p-0 flex-1">
          <p className="text-white text-[length:var(--m3-display-small-font-size)] text-right">
            Transforming Your Potential into Peak Performance
          </p>
        </CardContent>
      </Card>
    </div>

    {/* Mid Spacer */}
    <div className="relative self-stretch w-full h-[139px]" />

    {/* CTA Buttons */}
    <div className="flex flex-col gap-8 self-stretch w-full items-center relative">
      <div className="inline-flex items-start gap-8">
        <Button className="inline-flex justify-center gap-2 p-8 bg-white rounded-[64px] text-black">
          <span>start training</span>
        </Button>
        <Button className="inline-flex justify-center gap-2 p-8 bg-white rounded-[64px]">
          <ArrowUpRightIcon className="w-8 h-8" />
        </Button>
      </div>
      <div className="inline-flex flex-col items-center justify-center gap-2 px-8 py-2 rounded-2xl">
        <Button variant="link" className="inline-flex gap-2 p-0 text-white">
          <ArrowRightIcon className="w-12 h-12" />
          <span>Top Trainers</span>
        </Button>
        <Separator className="w-full h-px" />
      </div>
    </div>
  </section>
);

export default HeroSection;
