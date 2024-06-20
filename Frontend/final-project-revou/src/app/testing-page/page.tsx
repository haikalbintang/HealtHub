"use client";

import ModalRegister from "@/components/Modals/ModalRegister";
import App from "@/components/TestComponents/App";
import React, { useState } from "react";

const TestPage = () => {
  // const [showRegisterModal, setShowRegisterModal] = useState(true);

  return (
    <>
      <App />
      {/* {showRegisterModal && (
        <ModalRegister setShowRegisterModal={setShowRegisterModal} />
      )} */}
    </>
  );
};

export default TestPage;
