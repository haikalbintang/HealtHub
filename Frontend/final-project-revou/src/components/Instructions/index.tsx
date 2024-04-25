import React from "react";
import { Button } from "../ui/button";
import { recipeDetailCards } from "@/data";

const Instructions = () => {
  return (
    <div className="">
      {recipeDetailCards[0].instructions.map((card: any, index: number) => (
        <div className="p-2 gap-3" key={index}>
          <h1 className="text-2xl">Instructions :</h1>
          {Object.keys(card).map((key) => (
            <div className="flex items-center gap-2 p-2" key={key}>
              <Button className="rounded-full  flex items-start bg-amber-700">
                {key}
              </Button>
              <h1>{card[key]}</h1>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Instructions;
