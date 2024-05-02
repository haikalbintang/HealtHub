"use client";
import React from "react";
import Footer_vmhb from "@/components/Footer_vmhb";
import NavbarWrapper from "@/components/NavbarWrapper";
import RecipeFeeds_vmhb from "@/components/RecipesFeeds copy";

const RecipePage: React.FC = () => {
  return (
    <div className="px-3 sm:px-5 justify-center items-center">
      <NavbarWrapper />
      <RecipeFeeds_vmhb />
      <Footer_vmhb />
    </div>
  );
};

export default RecipePage;
