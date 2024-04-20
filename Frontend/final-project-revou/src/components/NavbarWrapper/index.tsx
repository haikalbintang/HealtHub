"use client";
import { useState } from "react";
import LoginModal from "../LoginModal";
import Navbar from "../Navbar";

export default function NavbarWrapper() {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  return (
    <>
      <div>
        <Navbar setShowLoginModal={setShowLoginModal} />
        {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal} />}
      </div>
    </>
  );
}
