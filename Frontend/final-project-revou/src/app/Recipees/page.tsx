import React from "react";
import HeroEveryPage from "@/components/HeroEveryPage";
import foodBanner1 from "../../components/images/sliderImagesv2/food2.jpg";
import Navbar from "@/components/Navbar";
const RecipeesPage: React.FC = () => {
  const images = [foodBanner1.src];
  return (
    <div>
      <Navbar />
      <HeroEveryPage images={images} />
    </div>
  );
};

export default RecipeesPage;
