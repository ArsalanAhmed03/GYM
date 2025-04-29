import React from "react";
import { PriceRange1 } from "../../components/PriceRange1";
import { PriceRange2 } from "../../components/PriceRange2";
import { PriceRange3 } from "../../components/PriceRange3";

export const PricePage = (): JSX.Element => {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen px-20 py-8 relative bg-[url(..//bg1.png)] bg-cover bg-center">
      <section className="flex flex-col items-center gap-2 w-full bg-[#090d16b5]">
        <div className="flex flex-col items-center gap-[43px] w-full">
          {/* <header className="flex items-center justify-center w-full px-4 py-6"> */}
            <h1 className="font-['Roboto',Helvetica] font-bold text-gray-300 text-3xl text-center tracking-[0] leading-9">
              ---
            </h1>
          <header className="flex items-center justify-center w-full px-4 py-6">
            <h1 className="font-['Roboto',Helvetica] font-bold text-gray-300 text-3xl text-center tracking-[0] leading-9">
              Pricing Plans
            </h1>
          </header>

          <PriceRange1 />
          <PriceRange2 />
          <PriceRange3 />
        </div>
      </section>
    </main>
  );
};
