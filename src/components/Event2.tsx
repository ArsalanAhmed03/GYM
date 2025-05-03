import { Card, CardContent } from "./ui/card";

export const Event2 = (): JSX.Element => {
  // Data for past events to enable mapping
  const pastEvents = [
    { id: 1, title: "State-of-the-Art Equipment" },
    { id: 2, title: "Spacious Training Areas" },
    { id: 3, title: "Dynamic Group Classes" },
    { id: 4, title: "Yoga & Wellness Studio" },
    { id: 5, title: "Modern Locker Rooms" },
    { id: 6, title: "Smoothie & Snack Bar" },
  ];

  return (
    <section className="flex flex-col items-center gap-4 px-4 py-8 w-full bg-[#00000080]">
      <header className="w-full text-center mb-2">
        <h2 className="font-bold text-3xl text-gray-300 font-['Roboto',Helvetica] leading-9">
          Past Events
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {pastEvents.map((event) => (
          <Card
            key={event.id}
            className="w-full h-64 rounded-lg overflow-hidden relative border-0"
          >
            <CardContent className="p-0 h-full">
              <div className="absolute inset-0 bg-[#00000080] rounded-lg flex items-center justify-center">
                <h3 className="font-['Roboto',Helvetica] font-bold text-white text-lg leading-7 text-center px-4">
                  {event.title}
                </h3>
              </div>
              <img
                className="w-full h-full object-cover"
                alt={`Event - ${event.title}`}
                src="/whiteBox.svg"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
