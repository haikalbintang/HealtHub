import React from "react";
import { Button } from "../ui/button";
import { recipeDetailCards } from "@/data";

const Instructions = () => {
  return (
    <div className="xl:px-8">
      {recipeDetailCards[0].instructions.map((card: any, index: number) => (
        <div className="gap-3" key={index}>
          <h1 className="flex justify-center items-center text-xl font-bold mb-3 lg:mb-6 text-orange-700">
            2. Instructions
          </h1>
          {Object.keys(card).map((key) => (
            <div className="flex items-start gap-2 lg:mt-2" key={key}>
              <Button className="rounded-full  flex items-start bg-orange-900">
                {key}
              </Button>
              <h2 className="sm:pl-2 text-slate-800 lg:leading-normal sm:tracking-normal leading-snug tracking-tight text-base font-medium border-b-2 sm:pb-1 border-slate-200 mb-3">
                {card[key]}
              </h2>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Instructions;
