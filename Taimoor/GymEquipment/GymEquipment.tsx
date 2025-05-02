import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const GymEquipment = (): JSX.Element => {
  // Facility highlights data
  const facilityHighlights = [
    {
      title: "Sauna",
      description: "Relax and rejuvenate in our sauna after a workout.",
    },
    {
      title: "Locker Rooms",
      description: "Secure and clean locker rooms for your convenience.",
    },
    {
      title: "Group Training",
      description: "Join our group classes for a motivating workout.",
    },
  ];

  // Gallery items data
  const galleryItems = [
    { title: "State-of-the-Art Equipment" },
    { title: "Spacious Training Areas" },
    { title: "Dynamic Group Classes" },
    { title: "Yoga & Wellness Studio" },
    { title: "Modern Locker Rooms" },
    { title: "Smoothie & Snack Bar" },
  ];

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
    <div
      className="flex flex-col min-h-screen items-center gap-4 px-20 py-0 relative bg-cover bg-center"
      style={{ backgroundImage: "url(..//gym-equipment---facilities.png)" }}
      data-model-id="91:904"
    >
      {/* Facility Highlights Section */}
      <section className="flex flex-col items-center justify-center gap-6 py-10 relative self-stretch w-full bg-black/50">
        <div className="flex items-center justify-center relative self-stretch w-full">
          <h2 className="font-['Roboto',Helvetica] font-bold text-white text-3xl text-center tracking-[0] leading-9">
            Facility Highlights
          </h2>
        </div>

        <div className="flex items-center justify-center gap-6 relative self-stretch w-full">
          {facilityHighlights.map((facility, index) => (
            <Card
              key={index}
              className="flex flex-col w-[405px] items-start gap-[5px] p-6 bg-[#181e28] rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] border-0"
            >
              <CardContent className="p-0 w-full">
                <img
                  className="w-full h-40 mb-2"
                  alt="Facility image"
                  src="/frame.svg"
                />

                <div className="flex flex-col items-start gap-2 px-2 py-0 w-full">
                  <div className="flex items-center gap-2 w-full">
                    <h3 className="font-['Roboto',Helvetica] font-bold text-red-500 text-xl tracking-[0] leading-7">
                      {facility.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 w-full">
                    <p className="font-['Roboto',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gym Equipment Gallery Section */}
      <section className="flex flex-col items-start gap-2 relative self-stretch w-full bg-black/50">
        <div className="flex items-center justify-center relative self-stretch w-full py-4">
          <h2 className="font-['Roboto',Helvetica] font-bold text-gray-300 text-3xl text-center tracking-[0] leading-9">
            GYM Equipment Gallery
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-[32px_16px] relative self-stretch w-full pb-6">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col w-[505.84px] h-64 items-center justify-center relative bg-transparent border-0"
            >
              <CardContent className="p-0 w-full h-full relative">
                <div className="absolute w-full h-full top-0 left-0 bg-black/50 rounded-lg flex items-center justify-center">
                  <h3 className="font-['Roboto',Helvetica] font-bold text-white text-lg tracking-[0] leading-7 text-center">
                    {item.title}
                  </h3>
                </div>
                <img
                  className="w-full h-full object-cover"
                  alt={item.title}
                  src="/frame-4.svg"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

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
                  src="/frame-2.svg"
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