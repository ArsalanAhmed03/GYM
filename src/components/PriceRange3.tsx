import React from "react";
import { Card, CardContent } from "./ui/card";

export const PriceRange3 = (): JSX.Element => {
  return (
    <Card className="w-full bg-[#101823] rounded-lg border-none">
      <CardContent className="flex items-center justify-center gap-2 px-[53px] py-4">
        <span className="font-normal text-gray-300 text-lg text-center leading-7 font-['Roboto',Helvetica]">
          Use code
        </span>

        <span className="font-bold text-[#ff4b2b] text-lg text-center leading-7 font-['Roboto',Helvetica]">
          GETFIT
        </span>

        <span className="font-normal text-gray-300 text-lg text-center leading-7 font-['Roboto',Helvetica]">
          for 10% off your first month!
        </span>
      </CardContent>
    </Card>
  );
};
