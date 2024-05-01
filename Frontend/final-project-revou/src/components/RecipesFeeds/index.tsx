"use client";
import React, { useState } from "react";
import logo1 from "../../components/images/cookingtools/spatula-svgrepo-com.svg";
import SliderImage from "../SliderImage";
import Card from "../../components/Card";

import { chefMainCard, chefMainCard2 } from "@/data";
import HealtyRecipes from "./HealtyRecipes";
import MainDishes from "./MainDishes";
import Appetizers from "./Appetizers";
import Desserts from "./Desserts";
import Beverages from "./Beverages";
import SideDishes from "./SideDishes";
import WeeklyRecipes from "./WeeklyRecipes";
import { Button } from "../ui/button";
import Food1 from "../../components/images/sliderImagesv2/food1.jpg";
import Food2 from "../../components/images/sliderImagesv2/food2.jpg";
import Food3 from "../../components/images/sliderImagesv2/food3.jpg";
import Food4 from "../../components/images/sliderImagesv2/food4.jpg";
import NavbarWrapper from "../NavbarWrapper";
import DiscoverContent from "../DiscoverContent";

const RecipeFeeds = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    "Healty Recipe",
    "Appetizers",
    "Main Dishes",
    "Desserts",
    "Beverages",
    "Side Dishes",
  ];
  const sideBarCategories = [
    "Home",
    "My Recipe",
    "Followed Recipes",
    "My Favorite Recipes",
    "Nutrition",
    "Type",
    "Origin",
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const images: string[] = [Food1.src, Food2.src, Food3.src, Food4.src];
  return (
    <div className="">
      <SliderImage images={images} maxHeight="300" className="hidden" />
      <div className="flex ">
        <div className="flex flex-col justify-center items-center  p-5">
          <div className="flex flex-col justify-center items-center p-5">
            <div className="flex justify-center items-center p-5">
              <div className="flex flex-col justify-center items-start p-5 bg-slate-50 rounded-lg shadow-lg shadow-slate-400 gap-5">
                {sideBarCategories.map((sideBarCategory) => (
                  <div
                    key={sideBarCategory}
                    className={`sideBarCategories flex gap-3 justify-start items-center p-2 ${
                      selectedCategory === sideBarCategory
                        ? "bg-slate-500 w-full rounded-lg shadow-md shadow-black"
                        : ""
                    }`}
                    onClick={() => handleCategoryClick(sideBarCategory)}
                  >
                    <img src={logo1.src} alt="" className="h-6 w-6" />
                    <h1>{sideBarCategory}</h1>
                  </div>
                ))}

                {/* {isMenuOpen && (
                  <div className=" transform translate-x-10 ease-out duration-400 p-4">
                    <ul>
                      <li>Menu item 1</li>
                      <li>Menu item 2</li>
                    </ul>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 flex flex-col justify-center items-center ">
          <div className="pt-10">
            <div className="flex flex-col">
              <div>
                <h1 className="text-2xl">Discover Recipes</h1>
              </div>
              <div className="flex gap-5 p-5">
                {categories.map((category) => (
                  <Button
                    key={category}
                    className={`category p-2 bg-slate-400 ${
                      selectedCategory === category
                        ? "bg-black rounded-lg shadow-sm shadow-black"
                        : ""
                    }`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    <h1>{category}</h1>
                  </Button>
                ))}
              </div>
              <div className="pt-5">
                <h1>Weekly Recipes</h1>
                <WeeklyRecipes recipeCategoryName="" />
              </div>
            </div>
          </div>
          {selectedCategory === "Healty Recipe" && (
            <HealtyRecipes recipeCategoryName="Healty Recipes" />
          )}
          {selectedCategory === "Main Dishes" && <MainDishes />}
          {selectedCategory === "Appetizers" && <Appetizers />}
          {selectedCategory === "Desserts" && <Desserts />}
          {selectedCategory === "Beverages" && <Beverages />}
          {selectedCategory === "Side Dishes" && <SideDishes />}
          {selectedCategory === "Home" && <HealtyRecipes />}
        </div>
      </div>
    </div>
  );
};

export default RecipeFeeds;
