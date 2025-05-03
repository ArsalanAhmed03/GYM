import { Event1 } from "../../components/Event1";
import { Event2 } from "../../components/Event2";

export const EventsChallenges = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center gap-4 px-20 py-8 min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(..//bg1.png)" }}
      data-model-id="91:975"
    >
      <div className="mt-6"></div>
      <Event1 />
      <Event2 />
    </div>
  );
};
