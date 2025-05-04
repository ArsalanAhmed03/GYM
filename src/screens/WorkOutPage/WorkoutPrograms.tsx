import { WP1 } from "../../components/WP1";
import { WP2 } from "../../components/WP2";
import { WP3 } from "../../components/WP3";
import { ExpertTrainer } from "../../components/ExpertTrainerSection";

export const WorkoutPrograms = (): JSX.Element => {
  return (
    <main
      className="flex flex-col items-center gap-4 px-20 py-8 relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url(..//workout-programs.png)" }}
      data-model-id="91:761"
    >
      <div className="flex flex-col items-center gap-[34px] relative self-stretch w-full">
        <div className="h-8"></div>
        <WP1 />
        <WP2 />
        <ExpertTrainer />
      </div>
    </main>
  );
};
