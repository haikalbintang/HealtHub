"use client";
import React from "react";
import { Button } from "../ui/button";

interface ImageSliderProps {
  images: string[];
}

const SliderImage: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden rounded-lg z-0">
      <img
        src={images[currentIndex]}
        alt="Slider"
        className="w-full h-full object-cover transition-transform duration-500 transform-gpu scale-100 hover:scale-105"
        style={{
          maxHeight: "80vh",
          display: "block",
          margin: "0 auto",
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="text-center">
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
            <h1 className="text-9xl font-extrabold text-white mb-4 text-center">
              Escape to Italy
            </h1>
            <h2 className="text-4xl font-semibold text-white text-center">
              Discover our Italian recipes
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="h-12 px-8 text-lg font-semibold bg-red-500 text-white rounded-full ">
            Discover Now !
          </Button>
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l focus:outline-none z-10"
      >
        &lt;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r focus:outline-none z-10"
      >
        &gt;
      </button>
    </div>
  );
};

export default SliderImage;
