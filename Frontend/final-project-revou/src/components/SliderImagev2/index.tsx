"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

interface ImageSliders {
  foodImages: string[];
}

const SliderImagev2: React.FC<ImageSliders> = ({ foodImages }) => {
  const [middleIndex, setMiddleIndex] = useState<number>(0);

  const goToPrevious = () => {
    setMiddleIndex((prevIndex) =>
      prevIndex === 0 ? foodImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setMiddleIndex((prevIndex) =>
      prevIndex === foodImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Calculate the indices of the previous and next images
  const previousIndex =
    middleIndex === 0 ? foodImages.length - 1 : middleIndex - 1;
  const nextIndex = middleIndex === foodImages.length - 1 ? 0 : middleIndex + 1;

  return (
    <div className="p-5">
      <div className="flex justify-center items-center">
        <div className="flex-col justify-center items-center">
          <div className="flex justify-center items-center p-5">
            <h1>-----</h1>
            <h1>Be Inspired With</h1>
            <h1>-----</h1>
          </div>
          <div className="flex justify-center items-center text-3xl font-bold p-5">
            <h1>Our Recipes</h1>
          </div>
          <div className="flex justify-center items-center p-5">
            <Button>Learn More</Button>
          </div>
        </div>
        <div className="flex-col justify-center items-center">
          <div className="flex justify-end items-end gap-2 pb-2">
            {/* Add previous and next buttons */}
            <Button onClick={goToPrevious}>Previous</Button>
            <Button onClick={goToNext}>Next</Button>
          </div>
          <div className="flex justify-center items-center gap-3 relative z-0">
            {/* Render the three images */}
            <img
              src={foodImages[previousIndex]}
              alt="Previous Slider"
              className="w-1/3 h-auto rounded-xl"
              style={{ maxHeight: "50vh" }}
            />
            <img
              src={foodImages[middleIndex]}
              alt="Middle Slider"
              className="w-1/3 h-auto rounded-xl"
              style={{ maxHeight: "50vh" }}
            />
            <img
              src={foodImages[nextIndex]}
              alt="Next Slider"
              className="w-1/3 h-auto rounded-xl"
              style={{ maxHeight: "50vh" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderImagev2;
