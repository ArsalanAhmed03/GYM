import React from "react";
import { Card, CardContent } from "./ui/card";

export const AboutUs4 = (): JSX.Element => {
  // Define facility highlights data for mapping
  const facilityHighlights = [
    { title: "State-of-the-Art Equipment" },
    { title: "Spacious Training Areas" },
    { title: "Dynamic Group Classes" },
    { title: "Yoga & Wellness Studio" },
    { title: "Modern Locker Rooms" },
    { title: "Smoothie & Snack Bar" },
  ];

  return (
    <section className="relative w-full py-16 bg-[#00000080]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-300 text-center mb-16 leading-9">
          Facility Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilityHighlights.map((facility, index) => (
            <Card
              key={index}
              className="h-64 bg-[#00000080] rounded-lg border-0 flex items-center justify-center"
            >
              <CardContent className="p-0 flex items-center justify-center h-full w-full">
                <div className="font-bold text-white text-lg leading-7 font-['Roboto',Helvetica]">
                  {facility.title}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
