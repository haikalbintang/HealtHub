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
      <div className="flex flex-wrap justify-center items-center lg:flex xl:flex">
        <div className="flex-col justify-center items-center">
          <div className="flex justify-center items-center p-5 gap-2">
            <h1>-----</h1>
            <h1 className="text-xl">Be Inspired With</h1>
            <h1>-----</h1>
          </div>
          <div className="flex justify-center items-center text-3xl font-bold p-2">
            <Button onClick={goToPrevious} className="sm:hidden rounded-full">
              {"<"}
            </Button>
            <h1>Our Recipes</h1>
            <Button onClick={goToNext} className="sm:hidden rounded-full">
              {">"}
            </Button>
          </div>
          <div className="hidden justify-center items-center p-5 lg:flex">
            <Button>Learn More</Button>
          </div>
        </div>
        <div className="flex-col justify-center items-center ">
          <div className="hidden justify-end items-center gap-2 pb-2 lg:flex">
            {/* Add previous and next buttons */}
            <Button onClick={goToPrevious} className="rounded-full">
              {"<"}
            </Button>
            <Button onClick={goToNext} className="rounded-full">
              {">"}
            </Button>
          </div>
          {/* masalah di flex */}
          <div className="flex flex-col justify-center items-center gap-3 z-0 lg:flex lg:flex-row">
            {/* Render the three images */}
            <div style={{ position: "relative", textAlign: "center" }}>
              <img
                src={foodImages[previousIndex]}
                alt="Previous Slider"
                className="h-auto rounded-xl "
                style={{
                  maxHeight: "55vh",
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <h2
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "red", // Adjust color as needed
                  zIndex: 1, // Ensure the title is above the image
                  margin: "0",
                  padding: "0",
                  width: "100%",
                }}
              >
                Your Title Here
              </h2>
            </div>
            <div style={{ position: "relative", textAlign: "center" }}>
              <img
                src={foodImages[middleIndex]}
                alt="Previous Slider"
                className="h-auto rounded-xl "
                style={{
                  maxHeight: "55vh",
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <h2
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "red", // Adjust color as needed
                  zIndex: 1, // Ensure the title is above the image
                  margin: "0",
                  padding: "0",
                  width: "100%",
                }}
              >
                Your Title Here
              </h2>
            </div>
            <div style={{ position: "relative", textAlign: "center" }}>
              <img
                src={foodImages[nextIndex]}
                alt="Previous Slider"
                className="h-auto rounded-xl "
                style={{
                  maxHeight: "55vh",
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <h2
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "red", // Adjust color as needed
                  zIndex: 1, // Ensure the title is above the image
                  margin: "0",
                  padding: "0",
                  width: "100%",
                }}
              >
                Your Title Here
              </h2>
            </div>

            {/* <img
              src={foodImages[middleIndex]}
              alt="Middle Slider"
              className=" h-auto rounded-xl lg:w-1/3"
              style={{ maxHeight: "55vh" }}
            />
            <img
              src={foodImages[nextIndex]}
              alt="Next Slider"
              className=" h-auto rounded-xl lg:w-1/3"
              style={{ maxHeight: "55vh" }}
            /> */}
            <div className="flex justify-center items-center p-5 lg:hidden">
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderImagev2;
