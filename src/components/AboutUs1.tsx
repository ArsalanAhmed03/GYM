import React from "react";
import { Card, CardContent } from "./ui/card";

// Define the data structure for vision and mission points
interface PointData {
  text: string;
  iconSrc: string;
}

// Data for vision points
const visionPoints: PointData[] = [
  {
    text: "To be a leading community hub for fitness and wellness.",
    iconSrc: "/frame-11.svg",
  },
  {
    text: "To foster a supportive environment for all fitness levels.",
    iconSrc: "/frame-20.svg",
  },
  {
    text: "To inspire lifelong journeys of health and fitness.",
    iconSrc: "/frame-16.svg",
  },
];

// Data for mission points
const missionPoints: PointData[] = [
  {
    text: "To provide state-of-the-art facilities and equipment.",
    iconSrc: "/frame-9.svg",
  },
  {
    text: "To offer diverse programs that cater to individual needs.",
    iconSrc: "/frame-18.svg",
  },
  {
    text: "To promote a culture of health, wellness, and community.",
    iconSrc: "/frame-17.svg",
  },
];

export const AboutUs1 = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-2 py-8 relative w-full bg-[#00000080]">
      <header className="flex items-center justify-center w-full mb-2">
        <h2 className="font-bold text-gray-300 text-3xl text-center leading-9 font-['Roboto',Helvetica]">
          Vision &amp; Mission
        </h2>
      </header>

      <div className="flex flex-wrap items-center justify-center gap-8 w-full max-w-[1100px] mx-auto">
        <Card className="flex-1 min-w-[320px] bg-[#181e28] rounded-lg border-none">
          <CardContent className="flex flex-col items-start gap-4 p-6">
            <h3 className="font-bold text-gray-300 text-2xl leading-8 font-['Roboto',Helvetica] w-full">
              Our Vision
            </h3>

            <div className="w-full space-y-2">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <img
                    className="w-4 h-4 mt-1 flex-shrink-0"
                    alt="Vision point icon"
                    src={point.iconSrc}
                  />
                  <span className="font-normal text-gray-300 text-base leading-6 font-['Roboto',Helvetica]">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1 min-w-[320px] bg-[#181e28] rounded-lg border-none">
          <CardContent className="flex flex-col items-start gap-4 p-6">
            <h3 className="font-bold text-gray-300 text-2xl leading-8 font-['Roboto',Helvetica] w-full">
              Our Mission
            </h3>

            <div className="w-full space-y-2">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <img
                    className="w-4 h-4 mt-1 flex-shrink-0"
                    alt="Mission point icon"
                    src={point.iconSrc}
                  />
                  <span className="font-normal text-gray-300 text-base leading-6 font-['Roboto',Helvetica]">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
