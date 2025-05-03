import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

// FAQ data for mapping
const faqItems = [
  { question: "What is the return policy?", answer: "" },
  { question: "How do I contact support?", answer: "" },
  { question: "What payment methods are accepted?", answer: "" },
  { question: "How can I track my order?", answer: "" },
];

export const Faqs = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-[868px] items-center gap-4 px-20 py-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(..//bg1.png)" }}
    >
      <Card className="flex flex-col items-start gap-2 p-8 w-full bg-[#00000080] border-0">
        <CardContent className="p-0 w-full space-y-2">
          <div className="flex items-center justify-center gap-2 px-4 py-0 w-full">
            <h1 className="font-['Roboto',Helvetica] font-bold text-white text-3xl text-center tracking-[0] leading-9">
              Frequently Asked Questions
            </h1>
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            <div className="w-full h-12 bg-[#0c0f13] rounded overflow-hidden">
              <Input
                className="h-full bg-transparent border-0 text-[#b2b2b2] font-['Roboto',Helvetica] text-base"
                placeholder="Search FAQs..."
              />
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0"
              >
                <AccordionTrigger className="px-8 py-4 flex justify-between items-center w-full">
                  <span className="font-['Roboto',Helvetica] font-bold text-white text-lg tracking-[0] leading-7">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-8 text-gray-400">
                  {item.answer || "This information will be provided soon."}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex flex-col h-[85px] items-start gap-2 w-full">
            <div className="flex items-center gap-2 w-full">
              <h2 className="font-['Roboto',Helvetica] font-bold text-white text-xl tracking-[0] leading-7">
                Need More Help?
              </h2>
            </div>

            <div className="flex items-center w-full">
              <span className="font-['Roboto',Helvetica] font-normal text-gray-400 text-base tracking-[0] leading-6">
                If you have further inquiries, please visit our
              </span>
              <a
                href="#"
                className="font-['Roboto',Helvetica] font-normal text-red-500 text-base tracking-[0] leading-6 mx-1"
              >
                Contact Page
              </a>
              <span className="font-['Roboto',Helvetica] font-normal text-gray-400 text-base tracking-[0] leading-6">
                .
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
