import React, { useState } from "react";
import { StorePage1 } from "../../components/StorePage1";
import { StorePage2 } from "../../components/StorePage2";
import { useAuth } from "../../context/AuthContext";

export const StorePageGym = (): JSX.Element => {
  const [cartUpdateTrigger, setCartUpdateTrigger] = useState(0);
  const { token } = useAuth();

  const handleCartUpdate = () => {
    setCartUpdateTrigger((prev) => prev + 1);
  };

  return (
    <div
      className="flex flex-col items-center gap-4 px-20 py-0 relative [background:url(..//bg1.png)_50%_50%_/_cover] min-h-screen"
      data-model-id="91:1046"
    >
      <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto] bg-[#00000080]">
        <div className="flex flex-col items-center gap-8 px-4 py-10 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="font-['Roboto',Helvetica] font-bold text-gray-300 text-3xl text-center tracking-[0] leading-9">
            ---
          </h1>
          <div className="flex items-center justify-center gap-2 px-[159px] py-0 relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-white text-3xl text-center tracking-[0] leading-9 whitespace-nowrap">
              Gym Merchandise &amp; Supplements
            </h1>
          </div>

          <StorePage1 onCartUpdate={handleCartUpdate} />
          <StorePage2 key={cartUpdateTrigger} />
        </div>
      </div>
    </div>
  );
};
