import { Card, CardContent } from "./ui/card";

export const Diet4 = (): JSX.Element => {
  const mealPlans = [
    {
      title: "Weight Loss Plan",
      description: "A structured plan to help you lose weight healthily.",
      iconSrc: "/apple.svg",
      iconAlt: "Frame",
    },
    {
      title: "Muscle Gain Plan",
      description: "Designed to help you build muscle effectively.",
      iconSrc: "/dumbbell.svg",
      iconAlt: "Frame",
    },
    {
      title: "Balanced Diet Plan",
      description: "A well-rounded diet for overall health.",
      iconSrc: "/carrot.svg",
      iconAlt: "Frame",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-6 px-2 py-10 bg-[#00000080]">
      <header className="flex items-center justify-center w-full">
        <h2 className="font-bold text-white text-3xl text-center leading-9 font-['Roboto',Helvetica]">
          Weekly Meal Plans
        </h2>
      </header>

      <div className="flex w-full max-w-[1200px] mx-auto items-stretch gap-6">
        {mealPlans.map((plan, index) => (
          <Card
            key={index}
            className="flex-1 bg-[#131922] rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] border-0"
          >
            <CardContent className="flex flex-col h-full p-6">
              <h3 className="font-['Roboto',Helvetica] font-bold text-red-500 text-xl mb-2">
                {plan.title}
              </h3>
              <p className="font-['Roboto',Helvetica] font-normal text-white text-base mb-4">
                {plan.description}
              </p>
              <img
                className="w-9 h-9 mt-auto"
                alt={plan.iconAlt}
                src={plan.iconSrc}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};