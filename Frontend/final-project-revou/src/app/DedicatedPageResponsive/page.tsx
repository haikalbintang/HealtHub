"use client";
import React, { useState } from "react";
import SideBarv2 from "@/components/SideBarv2";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <SideBarv2 />
    </div>
  );
};

export default App;
