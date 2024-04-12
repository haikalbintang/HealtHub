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
    <div className="relative z-0">
      <img
        src={images[currentIndex]}
        alt="Slider"
        className="w-full h-full object-cover"
        style={{
          maxHeight: "80vh",
          display: "block",
          margin: "0 auto",
          //   objectPosition: "bottom",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Button className=" lg:h-16 lg:w-40">Add to cart</Button>
      </div>
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
