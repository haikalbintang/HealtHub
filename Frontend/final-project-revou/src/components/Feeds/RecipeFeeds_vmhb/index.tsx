"use client";
import React, { useState } from "react";
import logo1 from "../../components/images/cookingtools/spatula-svgrepo-com.svg";

import { Button } from "../../shadcn-ui/ui/button";

import MainDishes_vmhb from "./MainDishes_vmhb";
import Appetizers_vmhb from "./Appetizers_vmhb";
import Desserts_vmhb from "./Desserts_vmhb";
import Beverages_vmhb from "./Beverages_vmhb";
import SideDishes_vmhb from "./SideDishes_vmhb";
import WeeklyRecipes_vmhb from "./WeeklyRecipes_vmhb";
import HealthyRecipes_vmhb from "./HealthyRecipes_vmhb";

import HomeLogo from "../../../assets/images/sidebarlogo/home-svgrepo-com.svg";
import MyRecipeLogo from "../../../assets/images/sidebarlogo/notes-svgrepo-com.svg";
import FollowedRecipesLogo from "../../../assets/images/sidebarlogo/follower-svgrepo-com.svg";
import MyFavoriteRecipesLogo from "../../../assets/images/sidebarlogo/love-letter-note-svgrepo-com.svg";
import NutritionsLogo from "../../../assets/images/sidebarlogo/nutrition-svgrepo-com.svg";
import CategoriesLogo from "../../../assets/images/sidebarlogo/category-svgrepo-com.svg";
import OriginsLogo from "../../../assets/images/sidebarlogo/country-direction-location-map-navigation-pin-svgrepo-com.svg";

import Magnifier from "../../../assets/images/svg/icons8-magnifier.svg";
import AllRecipes from "./AllRecipes";
import Header1 from "@/components/Header/Header1";

const RecipeFeeds_vmhb = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const categories = [
    "Healthy Recipes",
    "Appetizers",
    "Main Dishes",
    "Desserts",
    "Beverages",
    "Side Dishes",
  ];

  const sideBarCategories = [
    { name: "Home", image: HomeLogo.src },
    { name: "My Recipe", image: MyRecipeLogo.src },
    { name: "Followed Recipes", image: FollowedRecipesLogo.src },
    { name: "My Favorite Recipes", image: MyFavoriteRecipesLogo.src },
    { name: "Nutritions", image: NutritionsLogo.src },
    { name: "Categories", image: CategoriesLogo.src },
    { name: "Origins", image: OriginsLogo.src },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="flex justify-between mx-4 pb-2 mb-5 border-b-2 border-slate-800">
        <Header1 h1={"Discover Recipes"} />
        <div className="relative flex">
          <input
            type="search"
            className="border-slate-500 border-2 rounded-md p-2"
            placeholder="Search Recipe Here"
          />
          <img
            src={Magnifier.src}
            alt=""
            className="h-6 w-6  absolute right-2 top-2 "
          />
        </div>
      </div>
      <div className="flex relative w-full sm:justify-around">
        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="z-20 absolute top-0 left-0 sm:hidden sm:static flex-col items-center p-5 pl-0 pt-0">
            <div className="flex flex-col justify-center items-start p-4 bg-orange-200 rounded-lg shadow-sm shadow-slate-500 gap-2 lg:gap-5">
              {sideBarCategories.map((sideBarCategory) => (
                <div
                  key={sideBarCategory.name}
                  className={`sideBarCategories flex w-full rounded-lg gap-3 justify-start items-center p-2 xl:p-3 cursor-pointer hover:bg-slate-200 ${
                    selectedCategory === sideBarCategory.name
                      ? "bg-slate-200 shadow-sm shadow-slate-500 font-medium text-slate-800"
                      : ""
                  }`}
                  onClick={() => handleCategoryClick(sideBarCategory.name)}
                >
                  <img src={sideBarCategory.image} alt="" className="h-6 w-6" />
                  <h2 className="text-slate-700 text-sm xl:text-base">
                    {sideBarCategory.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="hidden z-20 absolute top-0 left-0 sm:static sm:flex flex-col items-center pb-5">
          <div className="flex flex-col w-64 bg-orange-200 justify-center items-start p-4 rounded-lg shadow-sm shadow-slate-500 gap-2 lg:gap-5">
            {sideBarCategories.map((sideBarCategory, index) => (
              <div
                key={index}
                className={`flex w-full gap-3 justify-start items-center p-2 xl:p-3 cursor-pointer hover:bg-orange-50 hover:rounded-t-lg ${
                  selectedCategory === sideBarCategory.name
                    ? "border-b-2 border-slate-700 bg-orange-100 shadow-sm shadow-slate-500 font-medium text-slate-800 rounded-t-lg"
                    : "border-b-2 border-slate-700"
                }`}
                onClick={() => handleCategoryClick(sideBarCategory.name)}
              >
                <img src={sideBarCategory.image} alt="" className="h-6 w-6" />
                <h2 className="text-slate-700 text-sm xl:text-base sm:pr-5">
                  {sideBarCategory.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
        {/* Main side */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          {/* Title and kebab button */}
          {/* <div className="flex justify-between items-center">
            <Button
              onClick={toggleSidebar}
              className="bg-slate-800 hover:bg-slate-900 sm:hidden"
            >
              ...
            </Button>
          </div> */}
          {/* Category tags */}
          <div className="flex justify-between">
            {categories.map((category, index) => (
              <Button
                key={index}
                className={`category text-lg py-2 px-4 text-slate-200 bg-emerald-600 hover:bg-emerald-800 ${
                  selectedCategory === category
                    ? "bg-emerald-800 rounded-lg shadow-sm text-white shadow-slate-800"
                    : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          <div>
            {selectedCategory === "Home" && <AllRecipes recipeCategoryName={""} />}
            {selectedCategory === "Healthy Recipes" && (
              <HealthyRecipes_vmhb recipeCategoryName="Healthy Recipes" />
            )}
            {selectedCategory === "Appetizers" && <Appetizers_vmhb />}
            {selectedCategory === "Main Dishes" && <MainDishes_vmhb />}
            {selectedCategory === "Desserts" && <Desserts_vmhb />}
            {selectedCategory === "Beverages" && <Beverages_vmhb />}
            {selectedCategory === "Side Dishes" && <SideDishes_vmhb />}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeFeeds_vmhb;
