import React from "react";
import { Button } from "../ui/button";
import Food1 from "../images/sliderImagesv2/food1.jpg";
import { recipeDetailCards } from "@/data";
interface ImageProps {
  images: string[];
}

export default function RecipeHeroPage({ images }: ImageProps) {
  return (
    <div className=" pt-5 flex flex-col justify-center items-center">
      <div
        className="flex justify-center items-center gap-2 bg-orange-800 w-full h-16 text-white  lg:rounded-t-3xl"
        style={{ maxWidth: "150vh" }}
      >
        {recipeDetailCards.map((recipe: any) => (
          <div className="flex justify-center items-center gap-2">
            <h1>Welcome {">"}</h1>
            <h1>The Recipes {">"}</h1>
            <h1>{recipe.title}</h1>
          </div>
        ))}
      </div>
      <div className="relative w-full flex justify-center items-center px-6 overflow-hidden">
        <img
          src={images[0]}
          alt=""
          className="w-full h-full object-cover lg:rounded-b-3xl"
          style={{
            maxHeight: "30vh",
            maxWidth: "150vh",
            display: "block",
            objectPosition: "bottom",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white m-5">
          {recipeDetailCards.map((recipe: any) => (
            <div className="mb-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {recipe.title}
              </h1>
            </div>
          ))}
          {recipeDetailCards.map((recipe: any) => (
            <div className=" w-1/4 h-1/4 flex justify-center items-center">
              <div className="flex justify-center items-center rounded-xl bg-white lg:h-14 lg:w-full lg:px-64 m-2">
                <div className="flex items-center my-1 mr-4 text-black">
                  <div className="rounded-full bg-slate-200  h-8 w-8 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                    </svg>
                  </div>
                  <h1 className="ml-2">{recipe.servings}People</h1>
                </div>
                <div className="flex items-center  my-1 mr-4 text-black">
                  <div className="rounded-full bg-slate-200  h-8 w-8 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                    </svg>
                  </div>
                  <h1 className="ml-2">{recipe.time}</h1>
                </div>
                <div className="flex items-center  my-1 text-black">
                  <div className="rounded-full bg-slate-200  h-8 w-8 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                    </svg>
                  </div>
                  <h1 className="ml-2">{recipe.difficulty}</h1>
                </div>
              </div>
            </div>
          ))}
          <Button
            className="bg-green-500 text-xl font-bold "
            style={{ position: "absolute", bottom: "-10%" }}
          >
            See The Other Recipes
          </Button>
        </div>
      </div>
    </div>
  );
}
