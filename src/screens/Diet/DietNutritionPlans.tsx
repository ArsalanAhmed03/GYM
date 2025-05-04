import { Diet1 } from "../../components/Diet1";
import { Diet2 } from "../../components/Diet2";
import { Diet3 } from "../../components/Diet3";
import { Diet4 } from "../../components/Diet4";


export const DietNutritionPlans = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full min-h-screen items-center gap-4 px-20 py-6 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(..//bg1.png)" }}
      data-model-id="91:833"
    >
      <div className="mt-6"></div>
      <Diet2 />
      <Diet3 />
      <Diet4 />
      <Diet1 />
    </div>
  );
};
