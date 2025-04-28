import React from "react";
import { Card, CardContent} from "./ui/card";

export const AboutUs2 = (): JSX.Element => {
  return (
    <Card className="border-none flex flex-col items-center self-stretch w-full bg-[#0e0505] rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
      <div className="relative w-full h-[456px] [background:url(..//frame.png)_50%_50%_/_cover] opacity-30" />

      <CardContent className="border-none flex flex-col items-start gap-4 px-9 py-8 w-full">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-neutral-50 text-2xl leading-8 font-['Roboto',Helvetica]">
            A Commitment to Growth
          </h2>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-neutral-50 text-lg leading-7 font-['Roboto',Helvetica]">
            From our original location with just a few weights and a handful of
            members, we have expanded to include state-of-the-art equipment,
            diverse classes, and a community that supports one another. Our
            journey is a testament to the power of perseverance, and we are
            proud to have witnessed countless transformations along the way.
          </p>

          <p className="text-neutral-50 text-lg leading-7 font-['Roboto',Helvetica]">
            As we look to the future, we remain dedicated to fostering a
            welcoming environment where everyone can thrive. Join us as we
            continue to grow, innovate, and celebrate the incredible journey of
            fitness together.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
