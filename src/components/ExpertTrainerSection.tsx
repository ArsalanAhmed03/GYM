import { Card, CardContent } from "./ui/card";

export const ExpertTrainer = (): JSX.Element => {
  // Trainers data
  const trainers = [
    {
      name: "John Doe",
      specialty: "Strength Training",
    },
    {
      name: "Jane Smith",
      specialty: "Weight Loss",
    },
    {
      name: "Emily Johnson",
      specialty: "Cardio Fitness",
    },
  ];

  return (
    <div>
      {/* Our Expert Trainers Section */}
      <section className="flex flex-col items-start gap-6 px-4 py-10 relative self-stretch w-full bg-black/50">
        <div className="flex items-center justify-center relative self-stretch w-full">
          <h2 className="font-['Roboto',Helvetica] font-bold text-white text-3xl text-center tracking-[0] leading-9">
            Our Expert Trainers
          </h2>
        </div>

        <div className="flex items-center justify-center gap-2 relative self-stretch w-full">
          {trainers.map((trainer, index) => (
            <Card
              key={index}
              className="flex flex-col w-[405px] items-center gap-2 p-6 bg-[#181e28] rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] border-0"
            >
              <CardContent className="p-0 flex flex-col items-center w-full">
                <img
                  className="w-[200px] h-[200px] mb-2"
                  alt={`${trainer.name} profile`}
                  src="/whiteCircle.svg"
                />

                <h3 className="font-['Roboto',Helvetica] font-bold text-red-500 text-xl text-center tracking-[0] leading-7 mb-1">
                  {trainer.name}
                </h3>

                <p className="font-['Roboto',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-6">
                  {trainer.specialty}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
