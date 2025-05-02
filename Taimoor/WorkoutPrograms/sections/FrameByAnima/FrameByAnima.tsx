import React from "react";

export const FrameByAnima = (): JSX.Element => {
  // Define workout categories data for mapping
  const workoutCategories = [
    {
      id: 1,
      name: "Weight Loss",
      icon: "/frame-1.svg",
    },
    {
      id: 2,
      name: "Strength Training",
      icon: "/frame-3.svg",
    },
    {
      id: 3,
      name: "Muscle Gain",
      icon: "/frame-4.svg",
    },
    {
      id: 4,
      name: "Cardio",
      icon: "/frame-5.svg",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-[34px] w-full">
      <header className="w-full text-center">
        <h2 className="font-bold text-3xl text-white font-['Roboto',Helvetica] leading-9">
          Workout Categories
        </h2>
      </header>

      <div className="flex items-center justify-center gap-4 w-full">
        {workoutCategories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center h-[60px]"
          >
            <img
              className="w-9 h-9 mb-3"
              alt={`${category.name} icon`}
              src={category.icon}
            />
            <p className="font-['Roboto',Helvetica] font-bold text-white text-base leading-6 whitespace-nowrap">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
