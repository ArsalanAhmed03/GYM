import { Card, CardContent } from "./ui/card";

export const Event2 = (): JSX.Element => {
  // Data for past events with titles and image paths
  const pastEvents = [
    { 
      id: 1, 
      title: "Personal Training Sessions",
      image: "/images/events/train.jpg" // Assuming you have trainer images
    },
    { 
      id: 2, 
      title: "Nutrition Workshop",
      image: "/images/events/nutrition.jpg" // Assuming you have diet-related images
    },
    { 
      id: 3, 
      title: "New Equipment Demo",
      image: "/images/events/machine.jpg" 
    },
    { 
      id: 4, 
      title: "Yoga & Mindfulness Class",
      image: "/images/events/yoga.jpg" 
    },
    { 
      id: 5, 
      title: "Supplement Guidance",
      image: "/images/events/supplements.png" 
    },
    { 
      id: 6, 
      title: "Fitness Challenge",
      image: "/images/events/fit.jpg" 
    }
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
            className="w-full h-64 rounded-lg overflow-hidden relative border-0 group hover:shadow-lg transition-shadow duration-300"
          >
            <CardContent className="p-0 h-full relative">
              {/* Image */}
              <img
                className="w-full h-full object-cover rounded-lg"
                alt={`Event - ${event.title}`}
                src={event.image}
              />
              
              {/* Overlay with title */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-60">
                <h3 className="font-['Roboto',Helvetica] font-bold text-white text-xl leading-7 text-center px-4">
                  {event.title}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};