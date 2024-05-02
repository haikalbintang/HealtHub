import React, { useState } from "react";
import MyProfile from "../DedicatedProfilePage/MyProfile";
import MyRecipe from "../DedicatedProfilePage/MyRecipe";
import CreateRecipe from "../DedicatedProfilePage/CreateRecipe";
import Security from "../DedicatedProfilePage/Security";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar_vmhb: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    "Home",
    "My Profile",
    "My Recipe",
    "Create Recipe",
    "Security",
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full bg-slate-800 text-white w-44 ">
        <div className="p-6 px-4">
          {categories.map((category) => (
            <h1
              className={`py-2 px-4 my-4 cursor-pointer ${
                selectedCategory === category
                  ? "text-slate-100"
                  : "text-slate-300"
              } hover:text-slate-100 ${
                selectedCategory === category ? "bg-slate-700 rounded-xl" : ""
              }`}
              key={category}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </h1>
          ))}
        </div>
      </div>
      <div className="w-1/5"></div>
      <div className="w-3/5 p-5">
        {selectedCategory === "My Profile" && <MyProfile />}
        {selectedCategory === "My Recipe" && <MyRecipe />}
        {selectedCategory === "Create Recipe" && <CreateRecipe />}
        {selectedCategory === "Security" && <Security />}
      </div>
    </div>
  );
};

export default Sidebar_vmhb;
