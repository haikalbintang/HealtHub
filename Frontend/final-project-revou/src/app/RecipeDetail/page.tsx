"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import RecipeHeroPage from "@/components/RecipeHeroPage";
import Ingredients from "@/components/Ingredients";
import { chefMainCard } from "@/components/ChefProfile";
import { recipeDetailCards } from "@/components/RecipeHeroPage";
import Food1 from "../../components/images/sliderImagesv2/food1.jpg";

import facebooksvg from "../../components/images/svg/317727_facebook_social media_social_icon.svg";
import tiktoksvg from "../../components/images/svg/tiktok-logo-logo-svgrepo-com.svg";
import { Button } from "@/components/ui/button";

export default function Recipees() {
  const truncate = (str: string) => {
    if (str.length > 100) {
      return str.substring(0, 150) + "...";
    } else {
      return str;
    }
  };
  const images: string[] = [Food1.src];
  return (
    <div className=" justify-center items-center">
      {/* <Navbar /> */}
      <RecipeHeroPage images={images} />
      <div className="flex justify-around items-center pt-5 px-20">
        <div className="flex justify-center items-center gap-10">
          {recipeDetailCards.map((card: any) => (
            <div className="flex justify-center items-center gap-4">
              <div className="flex  gap-5">
                <div>
                  <h1>Category:</h1>
                  <h1>{card.foodCategory}</h1>
                </div>
                <div>
                  <h1>Origin:</h1>
                  <h1>{card.foodOrigin}</h1>
                </div>
              </div>
            </div>
          ))}
          {recipeDetailCards[0].nuttritions.map((card: any) => (
            <div className="">
              <h1>{card.name}</h1>
              <h1>{card.value}</h1>
            </div>
          ))}
        </div>
        <div>
          <Button>Lorem, ipsum.</Button>
        </div>
        <div className="justify-center items-center ">
          {chefMainCard.map((card: any) => (
            <div className="flex justify-start items-center gap-2">
              <img
                src={card.chefImage}
                alt=""
                className=" h-20 w-20 rounded-full object-cover"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold text-amber-700">
                  {card.name}
                </h1>
                {chefMainCard[0].socialMedia.map((social: any) => (
                  <div className="flex justify-start items-center gap-2">
                    <Button>+ Follow</Button>
                    <a href={social.facebook}>
                      <img
                        src={facebooksvg.src}
                        alt=""
                        className="w-6 h-6 rounded-lg"
                      />
                    </a>
                    <a href={social.tiktok}>
                      <img
                        src={tiktoksvg.src}
                        alt=""
                        className="w-6 h-6 rounded-lg"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {recipeDetailCards.map((card: any) => (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold">Recipe Summary :</h1>
          <h1 className="flex justify-center items-center px-36">
            {card.summary}
          </h1>
        </div>
      ))}
      <div className="lg:flex">
        <div className="lg:w-1/2">
          <Ingredients className="flex justify-items-center items-center" />
        </div>
        <div className="lg:w-1/2 pt-10">
          <div className="">
            {recipeDetailCards[0].instructions.map((card: any) => (
              <div className="p-2 gap-3">
                <h1 className="text-2xl">Instructions :</h1>
                <div>
                  <div className="flex items-center gap-2 p-2">
                    <Button className="rounded-full bg-amber-700">1</Button>
                    <h1>{card.step1}</h1>
                  </div>
                  <div className="flex items-center gap-2 p-2">
                    <Button className="rounded-full bg-amber-700">2</Button>
                    <h1>{card.step2}</h1>
                  </div>
                  <div className="flex items-center gap-2 p-2">
                    <Button className="rounded-full bg-amber-700">3</Button>
                    <h1>{card.step3}</h1>
                  </div>
                  <div className="flex items-center gap-2 p-2">
                    <Button className="rounded-full bg-amber-700">4</Button>
                    <h1>{card.step4}</h1>
                  </div>
                  <div className="flex items-center gap-2 p-2">
                    <Button className="rounded-full bg-amber-700">5</Button>
                    <h1>{card.step5}</h1>
                  </div>
                  <div className="flex items-center gap-2 p-2">
                    <Button className="rounded-full bg-amber-700">6</Button>
                    <h1>{card.step6}</h1>
                  </div>
                  <div className="flex items-center gap-2 p-2">
                    <Button className="rounded-full bg-amber-700">7</Button>
                    <h1>{card.step7}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
