"use client";

import React, { useState } from "react";
import MyProfileSidebar from "@/components/Profiles/MyProfileSidebar";

const MyProfile: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MyProfileSidebar />
    </>
  );
};

export default MyProfile;
