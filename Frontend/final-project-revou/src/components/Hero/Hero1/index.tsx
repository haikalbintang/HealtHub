"use client";

import React, { useEffect } from "react";
import Button2 from "@/components/Button/Button2";

interface ImageSliderProps {
  images: string[];
  maxHeight?: string;
  className?: string;
}

const Hero1: React.FC<ImageSliderProps> = ({ images, maxHeight }) => {
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

  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt="Slider"
          className="w-full h-full object-cover rounded-3xl"
          style={{
            maxHeight: `${maxHeight}px`,
            maxWidth: "150vh",
            display: "block",
            margin: "0 auto",
          }}
        />

        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div className="text-center">
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
              <h1 className="text-4xl lg:text-9xl font-extrabold text-white mb-4 text-center">
                Escape to Italy
              </h1>
              <h2 className="text-2xl font-semibold text-white text-center py-4">
                Discover our Italian recipes
              </h2>
            </div>
          </div>
          <div className="flex justify-center">
            <Button2>Discover Now!</Button2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero1;
