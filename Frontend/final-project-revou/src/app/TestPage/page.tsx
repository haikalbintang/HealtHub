import React from "react";
import RecipeFeeds from "@/components/RecipesFeeds";
import food1 from "../../components/images/sliderImagesv2/food1.jpg";
import food2 from "../../components/images/sliderImagesv2/food2.jpg";
import food3 from "../../components/images/sliderImagesv2/food3.jpg";
import food4 from "../../components/images/sliderImagesv2/food4.jpg";
export default function TestPage() {
  const images = [food1.src, food2.src, food3.src, food4.src];
  return (
    <div>
      {/* <SliderImagev2 foodImages={images} title="test" /> */}
      <RecipeFeeds />
    </div>
  );
}
