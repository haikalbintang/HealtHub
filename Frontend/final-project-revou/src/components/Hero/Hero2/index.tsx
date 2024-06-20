"use client";

import React, { useState } from "react";
import About1 from "../../../assets/images/about1.png";
import Button2 from "@/components/Button/Button2";
import ModalLogin from "@/components/Modals/ModalLogin";
import ModalRegister from "@/components/Modals/ModalRegister";
import Image from "next/image";

const Hero2 = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleSignUp = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  return (
    <>
      <div className="py-16">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-4">
            <div className="text-center mb-8">
              {" "}
              {/* Centered and added margin bottom */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                What&apos;s New
              </h1>
            </div>
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Breaded Delight
              </h2>
            </div>
            <div className="text-center mb-8 max-w-md mx-auto">
              <p className="text-lg md:text-xl text-gray-700">
                Rich in vegetables, ready in 10 minutes and ultra-gourmet: try
                it without delay! To be found in the fresh vegetable catering
                section.
              </p>
            </div>
            <Button2 handleClick={() => setIsLoginModalOpen(true)}>
              Discover Them Here!
            </Button2>
          </div>

          <Image
            src={About1.src}
            alt=""
            width={569}
            height={557}
            className="hidden md:block w-1/2"
          />
        </div>
      </div>
      {isLoginModalOpen && (
        <ModalLogin
          handleClose={() => setIsLoginModalOpen(false)}
          handleSignUp={handleSignUp}
        />
      )}
      {isRegisterModalOpen && (
        <ModalRegister handleClose={() => setIsRegisterModalOpen(false)} />
      )}
    </>
  );
};

export default Hero2;
