"use client";
import React, { useState } from "react";
import ChefProfile from "../../components/ChefProfile";
import { chefMainCard } from "../../components/ChefProfile";
import { Button } from "@/components/ui/button";

import facebooksvg from "../../components/images/svg/317727_facebook_social media_social_icon.svg";
import tiktoksvg from "../../components/images/svg/tiktok-logo-logo-svgrepo-com.svg";
const ProfilePage: React.FC = () => {
  const [following, setFollowing] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const handleFollowToggle = () => {
    setFollowing(!following);
  };
  const recipeCards = chefMainCard[0].recipe.slice(startIndex, startIndex + 2);
  const handleNext = () => {
    if (startIndex < chefMainCard[0].recipe.length - 2) {
      setStartIndex((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };
  return (
    <div className="flex justify-center items-center bg-red-500 ">
      <div className="flex justify-center items-center p-16 m-10 ">
        <div className="flex justify-center items-center">
          <ChefProfile className="lg:w-1/2 lg:h1/2 overflow-hidden" />
        </div>
        <div className="lg:w-1/2 lg:h-1/2 bg-white rounded-tr-3xl rounded-br-3xl overflow-hidden ">
          {chefMainCard.map((card: any) => (
            <div className=" 2xl:p-10">
              {chefMainCard[0].socialMedia.map((social: any) => (
                <div className="flex justify-around gap-2">
                  <h1 className=" pt-6 2xl:pt-6">{card.userRole}</h1>
                  <div className="flex justify-center items-center gap-3 pt-4 2xl:p-8">
                    <div>
                      <Button>
                        <a>Following :</a>
                        <a> {social.following}</a>
                      </Button>
                    </div>
                    <div>
                      <Button>
                        <a>Followers :</a>
                        <a> {social.followers}</a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              <h1 className="text-5xl pl-10 py-5">{card.name}</h1>
              <h1 className=" pl-10  w-full">{card.description}</h1>
              {chefMainCard[0].socialMedia.map((social: any) => (
                <div className="social-media pr-10 pt-6 flex justify-end items center">
                  <div className="flex gap-2">
                    <Button onClick={handleFollowToggle}>
                      {following ? "Following" : "+ Follow"}
                    </Button>
                    <div className="flex justify-center items-center">
                      <a href={social.facebook}>
                        <img
                          src={facebooksvg.src}
                          alt=""
                          className="w-6 h-6 rounded-lg"
                        />
                      </a>
                    </div>
                    <div className="flex justify-center items-center">
                      <a href={social.facebook}>
                        <img
                          src={tiktoksvg.src}
                          alt=""
                          className="w-6 h-6 rounded-lg"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex flex-col  px-10">
                <div>
                  <h1 className="py-2">Recipes</h1>
                </div>
                <div className="flex gap-3">
                  {recipeCards.map((recipe: any) => (
                    <div className="flex flex-col h-40 w-1/2 pb-10">
                      <img
                        src={recipe.image}
                        alt=""
                        className="rounded-xl object-cover h-full w-full"
                      />
                      <div className="pt-2">
                        <h1 className="">{recipe.recipeName}</h1>
                        <div className="flex gap-3">
                          <h1 className="text-md font-extralight">
                            {recipe.tags}
                          </h1>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end pt-8 pb-4 gap-3">
                  <Button
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                    className="rounded-full bg-red-500 hover:bg-red-600"
                  >
                    {"<"}
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={startIndex === chefMainCard[0].recipe.length - 1}
                    className="rounded-full bg-red-500 hover:bg-red-600"
                  >
                    {">"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
