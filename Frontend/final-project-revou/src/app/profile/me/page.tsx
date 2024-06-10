"use client";
import React, { useState } from "react";
import Sidebar_vmhb from "@/components/Sidebars/Sidebar_vmhb";

const MyProfile: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar_vmhb />
    </>
  );
};

export default MyProfile;
