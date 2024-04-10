"use client";
import React from "react";

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
    <div className="relative">
      <img
        src={images[currentIndex]}
        alt="Slider"
        className="w-full h-auto"
        style={{ maxHeight: "70vh" }}
      />
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l focus:outline-none"
      >
        Previous
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default SliderImage;
