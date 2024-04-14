import React from "react";
import { Button } from "../ui/button";
import Food1 from "../images/sliderImagesv2/food1.jpg";

interface ImageProps {
  images: string[];
}

export default function RecipeHeroPage({ images }: ImageProps) {
  return (
    <div>
      <div></div>
      <div className="relative">
        <img
          src={images[0]}
          alt=""
          className="w-full object-cover"
          style={{ maxHeight: "40vh" }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <div className=" flex mb-8 gap-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              -----
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              Dishes
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              -----
            </h1>
          </div>
          <div className="mb-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Leek Fondue
            </h1>
          </div>
          <div className="flex flex-wrap justify-center items-center m-4 mt-10">
            <div className="flex items-center mb-2 mr-4">
              <div className="rounded-full bg-slate-200 text-black h-10 w-10 flex items-center justify-center">
                {">"}
              </div>
              <h1 className="ml-2">2 People</h1>
            </div>
            <div className="flex items-center mb-2 mr-4">
              <div className="rounded-full bg-slate-200 text-black h-10 w-10 flex items-center justify-center">
                {">"}
              </div>
              <h1 className="ml-2">40 Mins</h1>
            </div>
            <div className="flex items-center">
              <div className="rounded-full bg-slate-200 text-black h-10 w-10 flex items-center justify-center">
                {">"}
              </div>
              <h1 className="ml-2">Average</h1>
            </div>
          </div>
          <Button
            className="bg-green-500"
            style={{ position: "absolute", bottom: "-5%" }}
          >
            See More Recipe
          </Button>
        </div>
      </div>
    </div>
  );
}
