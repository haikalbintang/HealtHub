import React from "react";
import { Button } from "../ui/button";
import Food1 from "../images/sliderImagesv2/food1.jpg";

interface ImageProps {
  images: string[];
}
export const recipeDetailCards = [
  {
    title: "Spaghetti Lasagna",
    difficulty: "Easy",
    time: "20Min",
    foodImage: Food1.src,
    servings: "4",
    ingredients: [
      {
        name: "Pasta",
        ingredientsImage: Food1.src,
        quantity: "500g",
      },
      {
        name: "Tomato",
        ingredientsImage: Food1.src,
        quantity: "500g",
      },
      {
        name: "Olive oil",
        ingredientsImage: Food1.src,
        quantity: "20ml",
      },
      {
        name: "Salt",
        ingredientsImage: Food1.src,
        quantity: "500g",
      },
      {
        name: "Pepper",
        ingredientsImage: Food1.src,
        quantity: "150g",
      },
    ],
    instructions: [
      {
        step1: "Cut the pasta into bite-sized pieces.",
        step2: "Heat up the olive oil in a pan.",
        step3: "Add the garlic, tomato, and salt.",
        step4: "Cook until the garlic is fragrant.",
        step5: "Add the pasta and cook until the sauce thickens.",
        step6: "Season with pepper.",
        step7: "Serve immediately.",
      },
    ],
    nuttritions: [
      {
        name: "Calories",
        value: "200",
      },
      {
        name: "Protein",
        value: "20g",
      },
      {
        name: "Fat",
        value: "20g",
      },
      {
        name: "Carbs",
        value: "20g",
      },
    ],
  },
];
export default function RecipeHeroPage({ images }: ImageProps) {
  return (
    <div className="lg:px-20">
      <div className="flex justify-center items-center gap-2 bg-orange-800 w-full h-16 text-white  lg:rounded-t-3xl">
        {recipeDetailCards.map((recipe: any) => (
          <div className="flex gap-2">
            <h1>Welcome {">"}</h1>
            <h1>The Recipes {">"}</h1>
            <h1>{recipe.title}</h1>
          </div>
        ))}
      </div>
      <div className="relative ">
        <img
          src={images[0]}
          alt=""
          className="w-full object-cover lg:rounded-b-3xl"
          style={{ maxHeight: "40vh" }}
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
