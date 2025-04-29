import { CheckIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./ui/card";

export const PriceRange1 = (): JSX.Element => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$29/month",
      features: [
        { name: "Unlimited Gym Access", included: true },
        { name: "Free Group Classes", included: true },
        { name: "One Personal Training Session", included: false },
      ],
      highlighted: false,
    },
    {
      name: "Standard",
      price: "$79/quarter",
      features: [
        { name: "Unlimited Gym Access", included: true },
        { name: "Free Group Classes", included: true },
        { name: "One Personal Training Session", included: true },
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "$249/year",
      features: [
        { name: "Unlimited Gym Access", included: true },
        { name: "Free Group Classes", included: true },
        { name: "One Personal Training Session", included: true },
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="flex items-center justify-center w-full gap-8">
      {pricingPlans.map((plan, index) => (
        <Card
          key={index}
          className={`w-[367.89px] bg-[#101823] rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] transition-all duration-300 hover:border-[#ff4b2b] border-4 border-transparent
          }`}
        >
          <CardHeader className="p-6 pb-0">
            <div className="flex items-center gap-2 w-full">
              <div className="[font-family:'Roboto',Helvetica] font-bold text-gray-300 text-2xl tracking-[0] leading-8">
                {plan.name}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-center gap-2 w-full">
              <div className="[font-family:'Roboto',Helvetica] font-bold text-gray-300 text-4xl tracking-[0] leading-10">
                {plan.price}
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 w-full">
              {plan.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-center w-full h-6 gap-2"
                >
                  {feature.included ? (
                    <CheckIcon className="w-4 h-4 text-gray-300" />
                  ) : (
                    <XIcon className="w-4 h-4 text-gray-300" />
                  )}
                  <div className="[font-family:'Roboto',Helvetica] font-normal text-gray-300 text-base tracking-[0] leading-6">
                    {feature.name}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Button className="w-fit bg-gray-700 hover:bg-gray-600 text-white rounded">
              Join Now
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};