"use client";

import React from "react";

import NavbarWrapper from "@/components/Navbars/NavbarWrapper";
import RecipeHeroPage from "@/components/RecipeHeroPage";
import CatOrNutLoSh from "@/components/CatOrNutLoSh";
import Author from "@/components/Author";
import Ingredients from "@/components/Ingredients";
import Instructions from "@/components/Instructions";
import CommentSections from "@/components/CommentSection";
import SliderImagev2 from "@/components/SliderImagev2";

import { recipeDetailCards } from "@/data";

import Food1 from "../../../components/images/sliderImagesv2/food1.jpg";
import Food2 from "../../../components/images/sliderImagesv2/food2.jpg";
import Food3 from "../../../components/images/sliderImagesv2/food3.jpg";

import Food4 from "../../../components/images/sliderImagesv2/food4.jpg";
import RecipeSummary from "@/components/RecipeSummary";
import RecipeTags from "@/components/RecipeTags";
import CommentSection from "@/components/CommentSection";

export default function RecipeDetailById() {
  const truncate = (str: string) => {
    if (str.length > 100) {
      return str.substring(0, 150) + "...";
    } else {
      return str;
    }
  };

  const images: string[] = [Food1.src, Food2.src, Food3.src, Food4.src];

  return (
    <div className="px-3 mx-auto justify-center items-center">
      <NavbarWrapper />
      <RecipeHeroPage images={images} />
      <CatOrNutLoSh />
      <Author />
      <RecipeSummary />
      {/* Ingredients n instructions */}
      <div className="px-1 lg:flex lg:pl-20">
        <div className="lg:w-1/3">
          <Ingredients className="flex justify-items-center items-center" />
        </div>
        <div className="lg:w-2/3 pt-8">
          <Instructions />
        </div>
      </div>
      {/* End of ingredients n instructions */}
      <RecipeTags />
      <div className="lg:flex lg:pl-20 lg:pt-5">
        <div className="lg:w-1/3 ">
          <CommentSection />
        </div>
      </div>
      <div className="lg:flex lg:pl-20 lg:pt-5">
        <div className="lg:w-2/3  lg:flex-col justify-start items-start pt-5">
          <SliderImagev2
            foodImages={images}
            title="Recipe Galery:"
            className="h-1/3"
          />
        </div>
      </div>
    </div>
  );
}
