"use client";
import React, { useState, useEffect } from "react";
import ModalRecipe from "@/components/ModalRecipe";
import Category_vmhb from "@/components/RecipesFeeds copy/Category_vmhb";
import Card_new from "@/components/Card_new";

import food1 from "@/components/images/sliderImagesv2/food1.jpg";
import food2 from "@/components/images/sliderImagesv2/food2.jpg";
import food3 from "@/components/images/sliderImagesv2/food3.jpg";
import food4 from "@/components/images/sliderImagesv2/food4.jpg";

const TestPage = () => {
  const recipeData = [
    {
      title: "Sate Maranggi",
      nutriScore: 9.0,
      rate: 4.7,
      like: 123,
      complexity: "medium",
      description: "Sate Maranggi bukan berasal dari ...",
      attachment: food1.src,
    },
    {
      title: "Sate Maranggi",
      nutriScore: 9.0,
      rate: 4.7,
      like: 123,
      complexity: "medium",
      description: "Sate Maranggi bukan berasal dari ...",
      attachment: food1.src,
    },
    {
      title: "Sosis Bakar",
      nutriScore: 9.5,
      rate: 4.8,
      like: 124,
      complexity: "easy",
      description: "Sosisnya dibakar, bukan digoreng ...",
      attachment: food2.src,
    },
  ];

  return (
    <div>
      {/* <ModalRecipe /> */}
      {/* <Category_vmhb /> */}
      <div className="flex flex-wrap justify-center items-center mx-auto gap-2 mt-5">
        {recipeData.map((data, index) => (
          <Card_new
            key={index}
            title={data.title}
            nutriScore={data.nutriScore}
            rate={data.rate}
            like={data.like}
            complexity={data.complexity}
            description={data.description}
            attachment={data.attachment}
          />
        ))}
      </div>
    </div>
  );
};

export default TestPage;
