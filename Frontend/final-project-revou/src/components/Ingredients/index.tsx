"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { recipeDetailCards } from "../RecipeHeroPage";

const Ingredients = () => {
  const [userInput, setUserInput] = useState(0);

  const handleChange = (event: any) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="w-full flex flex-col items-center pt-10">
      {recipeDetailCards.map((card: any) => (
        <div className="flex justify-around lg:w-1/2">
          <h1 className="flex justify-center items-center text-xl font-bold">
            Ingredients
          </h1>
          <div className="flex gap-2">
            <Button onChange={handleChange} className="rounded-full">
              -
            </Button>
            <div className="items-center">
              <input
                type="number"
                className="bg-black text-white w-20 h-10 rounded-xl pl-4"
                defaultValue={card.servings}
              />
            </div>
            <Button onChange={handleChange} className="rounded-full">
              +
            </Button>
          </div>
        </div>
      ))}
      {recipeDetailCards[0].ingredients.map((card: any) => (
        <div className="flex justify-between items-center lg:w-1/3 container border-b-2 border-slate-200">
          <div className="flex flex-start justify-start items-center gap-2 p-3 w-56">
            <img
              src={card.ingredientsImage}
              alt=""
              className="w-12 h-12 flex  rounded-full"
            />
            <h1 className="text-md w-24 flex justify-start items-center">
              {card.name}
            </h1>
          </div>
          <div className="flex justify-end items-center">
            <h1 className="flex justify-end items-center">{card.quantity}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
