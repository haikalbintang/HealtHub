import React from "react";
import { Button } from "../ui/button";
import { recipeDetailCards } from "@/data";
interface Props {
  className?: string;
}

const Instructions = ({ recipeData }: any) => {
  console.log(recipeData);
  const steps: string[] = (recipeData.instruction || "")
    .split(/\d+\.\s+/)
    .filter((step: any) => step.trim() !== "");
  console.log("ini steps", steps);
  return (
    <div className="xl:px-8">
      <div className="gap-3">
        <h1 className="flex justify-center items-center text-xl font-bold mb-3 lg:mb-6 text-orange-700">
          Instructions
        </h1>
        {recipeData.instruction !== null ? (
          <div className="flex flex-col items-start gap-2 lg:mt-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 lg:mt-2"
              >
                <Button className="rounded-full flex items-center justify-center bg-orange-900">
                  {index + 1}
                </Button>
                <div>
                  <div className="sm:pl-2 text-slate-800 lg:leading-normal sm:tracking-normal leading-snug tracking-tight text-base font-medium border-b-2 sm:pb-1 border-slate-200 mb-3 flex justify-center items-center">
                    {step}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Instructions;
