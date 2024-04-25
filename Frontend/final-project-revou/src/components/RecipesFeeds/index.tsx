"use client";
import React, { useState } from "react";
import logo1 from "../../components/images/cookingtools/spatula-svgrepo-com.svg";
import Card from "../../components/Card";
import { Button } from "../ui/button";

import food1 from "../../components/images/sliderImagesv2/food1.jpg";
const RecipeFeeds = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    "Healty recipe",
    "Appetizers",
    "Main Dishes",
    "Desserts",
    "Beverages",
    "Side Dishes",
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="">
      <div className="flex ">
        <div className="w-1/4 min-h-screen flex flex-col justify-center items-start">
          <div className="flex w-1/2 h-full flex-col-reverse justify-between items-start gap-3 p-3 bg-slate-400">
            <div>
              <h1>hello</h1>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 hover:recipe-gradients w-full rounded-xl p-2 justify-start items-center bg-slate-200 hover:shadow-lg hover:shadow-slate-500">
                <div className="bg-white p-2 rounded-xl">
                  <img src={logo1.src} alt="" className="h-6 w-6" />
                </div>
                <h1>Home</h1>
              </div>
              <div className="flex gap-2 hover:recipe-gradients w-full rounded-xl p-2 justify-start items-center bg-slate-200 hover:shadow-lg hover:shadow-slate-500">
                <div className="bg-white p-2 rounded-xl">
                  <img src={logo1.src} alt="" className="h-6 w-6" />
                </div>
                <h1>Recipees</h1>
              </div>
              <div className="flex gap-2 hover:recipe-gradients w-full rounded-xl p-2 justify-start items-center bg-slate-200 hover:shadow-lg hover:shadow-slate-500">
                <div className="bg-white p-2 rounded-xl">
                  <img src={logo1.src} alt="" className="h-6 w-6" />
                </div>
                <h1>My Recipees</h1>
              </div>
              <div className="flex gap-2 hover:recipe-gradients w-full rounded-xl p-2 justify-start items-center bg-slate-200 hover:shadow-lg hover:shadow-slate-500">
                <div className="bg-white p-2 rounded-xl">
                  <img src={logo1.src} alt="" className="h-6 w-6" />
                </div>
                <h1>Followed Recipees</h1>
              </div>
              <div className="flex gap-2 hover:recipe-gradients w-full rounded-xl p-2 justify-start items-center bg-slate-200 hover:shadow-lg hover:shadow-slate-500">
                <div className="bg-white p-2 rounded-xl">
                  <img src={logo1.src} alt="" className="h-6 w-6" />
                </div>
                <h1>Loved</h1>
              </div>
              <div className="flex gap-2 hover:recipe-gradients w-full rounded-xl p-2 justify-start items-center bg-slate-200 hover:shadow-lg hover:shadow-slate-500 relative">
                <div className="bg-white p-2 rounded-xl ">
                  <img src={logo1.src} alt="" className="h-6 w-6" />
                </div>
                <h1>Nutrions</h1>
                <div className="flex flex-col">
                  <div className="absolute right-5  text-white justify-center items-center">
                    <Button
                      className="rounded-full shadow-sm shadow-black h-6 w-6"
                      onClick={toggleMenu}
                    >
                      {">"}
                    </Button>
                  </div>
                </div>
              </div>
              {isMenuOpen && (
                <div className="bg-gray-200 p-4 rounded-xl">
                  <ul>
                    <li>Menu item 1</li>
                    <li>Menu item 2</li>
                    {/* Add more menu items here */}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-3/4 flex flex-col">
          <div className="w-2/3 pt-10">
            <div className="flex flex-col">
              <h1 className="text-2xl">Discover Recipes</h1>
              <div className="flex gap-5 p-5">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="category w-1/6 p-2 bg-slate-400 rounded-xl flex justify-center items-center"
                    onClick={() => handleCategoryClick(category)}
                  >
                    <h1>{category}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {selectedCategory === "Beverages" && <BeveragesList />}
          {selectedCategory === "Side Dishes" && <SideDishesList />}
        </div>
      </div>
    </div>
  );
};

const BeveragesList: React.FC = () => {
  return (
    <div className="item-list">
      <h2>Beverages</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  );
};
const SideDishesList: React.FC = () => {
  return (
    <div className="item-list">
      <h2>Side Dishes</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  );
};

export default RecipeFeeds;
