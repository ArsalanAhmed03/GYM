import { Card, CardContent } from "./ui/card";

export const WP3 = (): JSX.Element => {
  // Data for trainers to enable mapping
  const trainers = [
    {
      id: 1,
      name: "John Doe",
      specialty: "Strength Training",
      image: "/whiteCircle.svg",
    },
    {
      id: 2,
      name: "Jane Smith",
      specialty: "Weight Loss",
      image: "/whiteCircle.svg",
    },
    {
      id: 3,
      name: "Emily Johnson",
      specialty: "Cardio Fitness",
      image: "/whiteCircle.svg",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-6 px-4 py-10 w-full bg-black/50">
      <header className="w-full text-center">
        <h2 className="font-bold text-white text-3xl leading-9 font-['Roboto',Helvetica]">
          Our Expert Trainers
        </h2>
      </header>

      <div className="flex flex-wrap items-center justify-center gap-4 w-full">
        {trainers.map((trainer) => (
          <Card
            key={trainer.id}
            className="flex flex-col w-full sm:w-[405px] items-center gap-2 p-6 bg-[#131922] rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] border-0"
          >
            <CardContent className="flex flex-col items-center p-0 pt-0">
              <img
                className="w-[200px] h-[200px]"
                alt={`${trainer.name} profile`}
                src={trainer.image}
              />

              <div className="mt-2 w-full text-center">
                <h3 className="font-bold text-red-500 text-xl leading-7 font-['Roboto',Helvetica]">
                  {trainer.name}
                </h3>
              </div>

              <div className="mt-2 w-full text-center">
                <p className="font-normal text-white text-base leading-6 font-['Roboto',Helvetica]">
                  {trainer.specialty}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};