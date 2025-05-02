import React from "react";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { FrameByAnima } from "./sections/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima";

export const WorkoutPrograms = (): JSX.Element => {
  return (
    <main
      className="flex flex-col items-center gap-4 px-20 py-8 relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url(..//workout-programs.png)" }}
      data-model-id="91:761"
    >
      <div className="flex flex-col items-center gap-[34px] relative self-stretch w-full">
        <FrameByAnima />
        <FrameWrapperByAnima />
        <DivWrapperByAnima />
      </div>
    </main>
  );
};
