import { Card, CardContent } from "./ui/card";

export const Diet3 = (): JSX.Element => {
  const recipes = [
    {
      id: 1,
      title: "Veggie Salad",
      description: "A refreshing salad full of nutrients.",
      calories: 150,
      image: "/whiteBox.svg",
    },
    {
      id: 2,
      title: "Grilled Chicken",
      description: "Lean protein with a side of veggies.",
      calories: 350,
      image: "/whiteBox.svg",
    },
    {
      id: 3,
      title: "Smoothie Bowl",
      description: "A great way to start your day.",
      calories: 200,
      image: "/whiteBox.svg",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-6 py-10 w-full bg-[#00000080]">
      <header className="w-full text-center">
        <h2 className="font-bold text-white text-3xl leading-9 font-['Roboto',Helvetica]">
          Healthy Recipes
        </h2>
      </header>

      <div className="flex items-stretch justify-center gap-6 w-full max-w-[1200px] mx-auto">
        {recipes.map((recipe) => (
          <Card
            key={recipe.id}
            className="flex-1 bg-[#181e28] rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] border-0"
          >
            <img
              className="w-full h-40 object-cover"
              alt={recipe.title}
              src={recipe.image}
            />
            <CardContent className="flex flex-col items-start gap-2 p-4">
              <h3 className="font-bold text-red-500 text-xl leading-7 font-['Roboto',Helvetica]">
                {recipe.title}
              </h3>
              <p className="font-normal text-white text-base leading-6 font-['Roboto',Helvetica]">
                {recipe.description}
              </p>
              <p className="font-bold text-red-500 text-base leading-6 font-['Roboto',Helvetica]">
                Calories: {recipe.calories}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};