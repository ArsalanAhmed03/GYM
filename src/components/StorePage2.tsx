import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const StorePage2 = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <div className="w-full">
        <h2 className="font-semibold text-white text-2xl leading-8">Cart</h2>
      </div>

      <Card className="w-full bg-gray-800 rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] border-0">
        <CardContent className="flex flex-col items-start gap-4 p-4">
          <div className="flex items-center justify-center gap-2">
            <p className="font-semibold text-white text-lg leading-7 whitespace-nowrap">
              Your Cart is Empty
            </p>
          </div>

          <Button className="w-[99px] h-10 bg-red-500 hover:bg-red-600 text-white rounded">
            Checkout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};