import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import RecipeHeroPage from "@/components/RecipeHeroPage";
import Ingredients from "@/components/Ingredients";
import Food1 from "../../components/images/sliderImagesv2/food1.jpg";

export default function Recipees() {
  const images: string[] = [Food1.src];
  return (
    <div>
      {/* <Navbar /> */}
      <RecipeHeroPage images={images} />
      <Ingredients />
    </div>
  );
}
