import { CheckIcon, XIcon } from "lucide-react";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export const PriceRange2 = (): JSX.Element => {
  // Define the plan features data for easier mapping
  const planFeatures = [
    {
      feature: "Number of Classes",
      basic: "2",
      standard: "Unlimited",
      premium: "Unlimited",
    },
    {
      feature: "Personal Training Sessions",
      basic: "0",
      standard: "1",
      premium: "3",
    },
    {
      feature: "Diet Plan Access",
      basic: false,
      standard: true,
      premium: true,
    },
    {
      feature: "Online Workout Library",
      basic: false,
      standard: true,
      premium: true,
    },
  ];

  return (
    <div className="flex flex-col items-start gap-8 w-full">
      <div className="flex items-center justify-center w-full">
        <h2 className="font-bold text-3xl text-center text-gray-300 font-['Roboto',Helvetica] leading-9">
          Plan Comparison
        </h2>
      </div>

      <div className="w-full bg-[#111823]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[522px] font-bold text-gray-300 text-base">
                Features
              </TableHead>
              <TableHead className="w-[167px] font-bold text-gray-300 text-base">
                Basic
              </TableHead>
              <TableHead className="w-[232px] font-bold text-gray-300 text-base">
                Standard
              </TableHead>
              <TableHead className="w-[232px] font-bold text-gray-300 text-base">
                Premium
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {planFeatures.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-normal text-gray-300 text-base">
                  {row.feature}
                </TableCell>
                <TableCell className="font-normal text-gray-300 text-base">
                  {typeof row.basic === "boolean" ? (
                    row.basic ? (
                      <CheckIcon className="w-4 h-4" />
                    ) : (
                      <XIcon className="w-4 h-4" />
                    )
                  ) : (
                    row.basic
                  )}
                </TableCell>
                <TableCell className="font-normal text-gray-300 text-base">
                  {typeof row.standard === "boolean" ? (
                    row.standard ? (
                      <CheckIcon className="w-4 h-4" />
                    ) : (
                      <XIcon className="w-4 h-4" />
                    )
                  ) : (
                    row.standard
                  )}
                </TableCell>
                <TableCell className="font-normal text-gray-300 text-base">
                  {typeof row.premium === "boolean" ? (
                    row.premium ? (
                      <CheckIcon className="w-4 h-4" />
                    ) : (
                      <XIcon className="w-4 h-4" />
                    )
                  ) : (
                    row.premium
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
