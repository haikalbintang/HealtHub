"use client";

import React, { useState } from "react";
import About1 from "../../../assets/images/about1.png";
import Button2 from "@/components/Button/Button2";
import LoginModal from "@/components/Modals/ModalLogin";
import RegisterModal from "@/components/Modals/ModalRegister";

const Hero2 = () => {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);

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
            <Button2 handleClick={() => setShowLoginModal(true)}>
              Discover Them Here!
            </Button2>
          </div>
          <div className="hidden md:block w-1/2">
            <img src={About1.src} alt="" className="w-full" />
          </div>
        </div>
      </div>
      {showLoginModal && (
        <LoginModal
          setShowLoginModal={setShowLoginModal}
          setShowRegisterModal={setShowRegisterModal}
        />
      )}
      {showRegisterModal && (
        <RegisterModal setShowRegisterModal={setShowRegisterModal} />
      )}
    </>
  );
};

export default Hero2;
