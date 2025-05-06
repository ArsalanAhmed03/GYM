import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export const Event1 = (): JSX.Element => {
  // Event data for mapping
  const events = [
    {
      id: 1,
      name: "Event Name 1",
      date: "March 15, 2023",
      description:
        "A brief overview of the event highlighting key details and activities.",
    },
    {
      id: 2,
      name: "Event Name 2",
      date: "April 20, 2023",
      description:
        "A brief overview of the event highlighting key details and activities.",
    },
    {
      id: 3,
      name: "Event Name 3",
      date: "May 10, 2023",
      description:
        "A brief overview of the event highlighting key details and activities.",
    },
    {
      id: 4,
      name: "Event Name 4",
      date: "June 25, 2023",
      description:
        "A brief overview of the event highlighting key details and activities.",
    },
    {
      id: 5,
      name: "Event Name 5",
      date: "July 18, 2023",
      description:
        "A brief overview of the event highlighting key details and activities.",
    },
    {
      id: 6,
      name: "Event Name 6",
      date: "August 30, 2023",
      description:
        "A brief overview of the event highlighting key details and activities.",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-4 px-4 py-8 w-full bg-[#00000080]">
      <header className="flex items-center justify-center gap-2 w-full">
        <h1 className="font-bold text-white text-4xl leading-10 [font-family:'Roboto',Helvetica]">
          Events &amp; Challenges
        </h1>
      </header>

      <div className="flex items-center gap-2 px-16 py-0 w-full">
        <h2 className="font-bold text-white text-3xl leading-9 [font-family:'Roboto',Helvetica]">
          Upcoming Events
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 w-full">
        {events.map((event) => (
          <Card
            key={event.id}
            className="w-96 bg-gray-800 rounded-lg overflow-hidden shadow-[0px_4px_6px_-1px_#0000001a,0px_2px_4px_-2px_#0000001a] border-0"
          >
            <CardContent className="p-6 flex flex-col items-start gap-3">
              <div className="w-full">
                <h3 className="font-bold text-white text-xl leading-7 [font-family:'Roboto',Helvetica]">
                  {event.name}
                </h3>
              </div>

              <div className="w-full">
                <p className="text-gray-400 text-base leading-6 [font-family:'Roboto',Helvetica]">
                  Date: {event.date}
                </p>
              </div>

              <div className="w-full">
                <p className="text-white text-base leading-6 [font-family:'Roboto',Helvetica]">
                  {event.description}
                </p>
              </div>

              {/* <ArrowRightIcon className="w-4 h-4 text-white" /> */}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* <div className="flex flex-col items-center justify-center gap-2 w-full">
        <Button className="w-[127px] h-10 bg-red-500 hover:bg-red-600 text-white rounded font-normal text-base [font-family:'Roboto',Helvetica]">
          Register Now
        </Button>
      </div> */}
    </section>
  );
};
