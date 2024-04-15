import React from "react";
import { Button } from "../ui/button";
import Food1 from "../images/sliderImagesv2/food1.jpg";

interface ImageProps {
  images: string[];
}

export default function RecipeHeroPage({ images }: ImageProps) {
  return (
    <div>
      <div className="flex justify-center items-center gap-2 bg-orange-800 w-full h-16 text-white">
        <h1>Welcome {">"}</h1>
        <h1>The Recipes {">"}</h1>
        <h1>Leek Fondue</h1>
      </div>
      <div className="relative">
        <img
          src={images[0]}
          alt=""
          className="w-full object-cover"
          style={{ maxHeight: "40vh" }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white m-5">
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
          <div className="flex flex-wrap justify-center items-center m-4 mt-10 rounded-xl lg:h-14 lg:w-1/4 lg:bg-white">
            <div className="flex items-center my-1 mr-4 text-black">
              <div className="rounded-full bg-slate-200  h-10 w-10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                </svg>
              </div>
              <h1 className="ml-2">2 People</h1>
            </div>
            <div className="flex items-center  my-1 mr-4 text-black">
              <div className="rounded-full bg-slate-200  h-10 w-10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                </svg>
              </div>
              <h1 className="ml-2">40 Mins</h1>
            </div>
            <div className="flex items-center  my-1 text-black">
              <div className="rounded-full bg-slate-200  h-10 w-10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                </svg>
              </div>
              <h1 className="ml-2">Average</h1>
            </div>
          </div>
          <Button
            className="bg-green-500 text-xl font-bold"
            style={{ position: "absolute", bottom: "-10%" }}
          >
            See The Other Recipes
          </Button>
        </div>
      </div>
    </div>
  );
}
