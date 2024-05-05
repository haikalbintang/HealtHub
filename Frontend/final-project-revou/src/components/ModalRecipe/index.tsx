import React, { useEffect, useState } from "react";
import Modal from "../Modal";
import food1 from "../../components/images/sliderImagesv2/food1.jpg";
import time from "../../components/images/svg/clock-lines-svgrepo-com.svg";
import food2 from "../../components/images/slidersv3/1.png";
import Author from "../Author";
import { get } from "http";
import { Button } from "../ui/button";

interface RecipeProps {
  author_id: number;
  image: string;
  title: string;
  description: string;
  ingredients: string[];
  tags: string[];
  instructions: string;
  cooktime: number;
  complexity: string;
  servings: string;
  time: string;
  category: string;
  nutriscore: number;
}
interface ProfileData {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  location: string;
  phone: string;
  image: string;
  role: string;
  bio: string;
}

const ModalRecipe = ({
  recipe,
  setShowModal,
}: {
  recipe: RecipeProps;
  setShowModal: any;
}) => {
  const [profileData, setProfileData] = useState({} as ProfileData);
  useEffect(() => {
    fetchAuthorName(recipe.author_id);
  }, [recipe]);

  const fetchAuthorName = async (authorId: number) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/users/${authorId}`);
      if (response.ok) {
        const authorData = await response.json();
        setProfileData(authorData);
        console.log("123", authorData);
      } else {
        throw new Error("Failed to fetch author's username");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Modal setShowModal={closeModal}>
      {recipe && (
        <div className="flex flex-row h-auto w-full">
          {/* Left-side */}
          <div className="flex flex-col justify-start w-1/2">
            <div className="flex flex-col">
              <div className="flex justify-center items-center p-3 ">
                <div className="p-5 bg-orange-700 flex justify-center items-center rounded-xl shadow-md shadow-slate-900">
                  <h1 className="text-2xl font-extrabold bg-clip-text text-white uppercase text-center flex">
                    {recipe.title}
                  </h1>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <h2 className="text-md">
                  Recipe By:{" "}
                  <span className="uppercase">
                    {profileData.first_name} {profileData.last_name}
                  </span>
                </h2>
              </div>
            </div>
            <div className="h-1/4 p-5">
              <div className="pt-5 flex justify-center items-center gap-8">
                <div className="flex flex-col gap-2 ">
                  <div className="flex gap-2 justify-start items-center">
                    <img src={time.src} alt="" className="h-10 w-10" />
                    <h1>: {recipe.complexity}</h1>
                  </div>
                  <div className="flex gap-2 justify-start items-center">
                    <img src={time.src} alt="" className="h-10 w-10" />
                    <h1>: {recipe.cooktime}Minutes</h1>
                  </div>
                </div>
                <div className="flex flex-col gap-2 ">
                  <div className="flex gap-2 justify-start items-center">
                    <img src={time.src} alt="" className="h-10 w-10" />
                    <h1>: {recipe.nutriscore}</h1>
                  </div>
                  <div className="flex gap-2 justify-start items-center">
                    <img src={time.src} alt="" className="h-10 w-10" />
                    <h1>: {recipe.servings}People</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center p-5">
              <div className="pt-2 flex flex-col">
                <h2 className="text-xl flex justify-center items-center">
                  Description:
                </h2>
                <p className="text-sm">{recipe.description}</p>
              </div>
            </div>
            <div className="flex justify-center items-end">
              <Button>Read More</Button>
            </div>
          </div>
          {/* Food image */}
          <div className="w-1/2 h-full flex justify-center items-center overflow-hidden ">
            <img
              src={food1.src}
              alt=""
              className="rounded-tr-xl rounded-br-xl object-cover object-center h-full w-full"
            />
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ModalRecipe;
