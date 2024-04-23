import React from "react";
import { Button } from "../ui/button";
import { recipeDetailCards } from "@/data";

const Instructions = () => {
  return (
    <div className="">
      {recipeDetailCards[0].instructions.map((card: any) => (
        <div className="p-2 gap-3">
          <h1 className="text-2xl">Instructions :</h1>
          <div>
            <div className="flex items-center gap-2 p-2">
              <Button className="rounded-full bg-amber-700">1</Button>
              <h1>{card.step1}</h1>
            </div>
            <div className="flex items-center gap-2 p-2">
              <Button className="rounded-full bg-amber-700">2</Button>
              <h1>{card.step2}</h1>
            </div>
            <div className="flex items-center gap-2 p-2">
              <Button className="rounded-full bg-amber-700">3</Button>
              <h1>{card.step3}</h1>
            </div>
            <div className="flex items-center gap-2 p-2">
              <Button className="rounded-full bg-amber-700">4</Button>
              <h1>{card.step4}</h1>
            </div>
            <div className="flex items-center gap-2 p-2">
              <Button className="rounded-full bg-amber-700">5</Button>
              <h1>{card.step5}</h1>
            </div>
            <div className="flex items-center gap-2 p-2">
              <Button className="rounded-full bg-amber-700">6</Button>
              <h1>{card.step6}</h1>
            </div>
            <div className="flex items-center gap-2 p-2">
              <Button className="rounded-full bg-amber-700">7</Button>
              <h1>{card.step7}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructions;
