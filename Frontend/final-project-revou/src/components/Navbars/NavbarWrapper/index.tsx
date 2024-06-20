"use client";

import { useState } from "react";
import Navbar from "@/components/Navbars/Navbar";
import ModalRegister from "../../Modals/ModalRegister";
import ModalLogin from "@/components/Modals/ModalLogin";

export default function NavbarWrapper() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleSignUp = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  return (
    <>
      <Navbar onOpenLoginModal={() => setIsLoginModalOpen(true)} />

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
}
