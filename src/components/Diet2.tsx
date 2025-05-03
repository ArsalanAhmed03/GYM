import { Card, CardContent } from "./ui/card";

export const Diet2 = (): JSX.Element => {
  const nutritionTips = [
    {
      id: 1,
      title: "Balanced Meals",
      description: "Ensure your meals include protein, carbs, and fats.",
      image: "/whiteBox.svg",
    },
    {
      id: 2,
      title: "Eat Your Colors",
      description: "Incorporate colorful fruits and veggies for nutrients.",
      image: "/whiteBox.svg",
    },
    {
      id: 3,
      title: "Stay Hydrated",
      description: "Drink plenty of water throughout the day.",
      image: "/whiteBox.svg",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-6 py-10 relative w-full bg-[#00000080]">
      <header className="flex items-center justify-center w-full">
        <h2 className="font-bold text-white text-3xl text-center leading-9 font-['Roboto',Helvetica]">
          Nutrition Tips
        </h2>
      </header>

      <div className="flex items-stretch justify-center gap-6 w-full max-w-[1200px] mx-auto">
        {nutritionTips.map((tip) => (
          <Card
            key={tip.id}
            className="flex-1 bg-[#181e28] rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] border-0"
          >
            <img className="w-full h-40 object-cover" alt={tip.title} src={tip.image} />
            <CardContent className="flex flex-col items-start gap-2 p-4">
              <h3 className="font-bold text-red-500 text-xl leading-7 font-['Roboto',Helvetica]">
                {tip.title}
              </h3>
              <p className="font-normal text-white text-base leading-6 font-['Roboto',Helvetica]">
                {tip.description}
              </p>
              <a
                href="#"
                className="font-normal text-red-500 text-base leading-6 underline font-['Roboto',Helvetica]"
              >
                Read more
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};