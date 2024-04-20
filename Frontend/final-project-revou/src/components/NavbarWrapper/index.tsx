"use client";

import { useState } from "react";
import LoginModal from "../LoginModal";
import Navbar from "../Navbar";
import NavbarDropdown from "../NavbarDropdown";

export default function NavbarWrapper() {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showNavbarHamburgerMenu, setShowNavbarHamburgerMenu] =
    useState<boolean>(false);

  return (
    <>
      <div>
        <Navbar
          setShowLoginModal={setShowLoginModal}
          setShowNavbarHamburgerMenu={setShowNavbarHamburgerMenu}
        />
        {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal} />}
        {showNavbarHamburgerMenu && (
          <NavbarDropdown
            setShowNavbarHamburgerMenu={setShowNavbarHamburgerMenu}
            setShowLoginModal={setShowLoginModal}
          />
        )}
      </div>
    </>
  );
}
