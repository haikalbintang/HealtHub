"use client";

import { useState } from "react";
import LoginModal from "../../Modals/ModalLogin";
import RegisterModal from "../../Modals/ModalRegister";
import Navbar from "@/components/Navbars/Navbar"
import NavbarDropdown from "../NavbarDropdown";

export default function NavbarWrapper() {
  const [showNavbarHamburgerMenu, setShowNavbarHamburgerMenu] =
    useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);

  return (
    <>
      <Navbar
        setShowLoginModal={setShowLoginModal}
        setShowNavbarHamburgerMenu={setShowNavbarHamburgerMenu}
      />
      {showNavbarHamburgerMenu && (
        <NavbarDropdown
          setShowNavbarHamburgerMenu={setShowNavbarHamburgerMenu}
          setShowLoginModal={setShowLoginModal}
        />
      )}
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
}
