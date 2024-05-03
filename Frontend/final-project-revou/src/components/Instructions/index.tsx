import React from "react";
import { Button } from "../ui/button";
import { recipeDetailCards } from "@/data";
interface Props {
  className?: string;
}

const Instructions: React.FC<Props> = () => {
  return (
    <div className="">
      {recipeDetailCards[0].instructions.map((card: any, index: number) => (
        <div className="flex flex-col gap-5" key={index}>
          <h1 className="flex justify-center items-center text-xl font-bold mb-3 text-amber-700">
            2. Instructions
          </h1>
          {Object.keys(card).map((key) => (
            <div className="flex items-start gap-2" key={key}>
              <Button className="rounded-full flex items-center justify-center bg-amber-900">
                {key}
              </Button>
              <h2 className=" leading-snug tracking-tight text-base font-medium border-b-2 border-slate-200 mb-3 flex justify-center items-center">
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
