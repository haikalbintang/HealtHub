import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { chefMainCard2 } from "@/data";
import useFetchRecipe from "@/hooks/UseFetchRecipe";
import ModalRecipe from "@/components/ModalRecipe";
import useUploadComponent from "@/hooks/useUploadComponent";

interface Props {
  recipeCategoryName: string;
}

interface RecipeData {
  id: string;
  title: string;
  complexity: string;
  servings: string;
  nutriScore: number;
  attachment: string;
  author_id: number;
  type: string;
}

const AllRecipes: React.FC<Props> = ({ recipeCategoryName }) => {
  const { recipes, error, refetchRecipes } = useFetchRecipe();
  const [showCount, setShowCount] = useState(4);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeData | null>(null);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const { file, imageUrl, handleFileChange, handleUpload, changeImage } =
    useUploadComponent();

  const toggleShowMore = () => {
    setShowCount((prevCount) => prevCount + 4);
  };

  const toggleShowLess = () => {
    setShowCount((prevCount) => Math.max(4, prevCount - 4));
  };
  // Function to handle recipe click
  const handleRecipeClick = (recipe: RecipeData) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
    console.log(setSelectedRecipe);
  };
  console.log("123", selectedRecipe);
  return (
    <div className="item-list container">
      <h2>{recipeCategoryName}</h2>
      <div className="pr-16">
        <div className="grid grid-cols-4 gap-4 px-10 pt-4">
          {recipes.slice(0, showCount).map((recipe, index: number) => (
            <div
              className="rounded-xl shadow-md shadow-black cursor-pointer"
              key={index}
              onClick={() => handleRecipeClick(recipe as unknown as RecipeData)}
            >
              <img src={recipe.attachment} alt="" className="rounded-t-xl" />
              <div className="flex flex-col gap-2 pt-2 bg-slate-50 rounded-b-xl p-5">
                <div className="flex justify-center items-center">
                  {recipe.title}
                </div>
                <div className="flex justify-around items-center">
                  <div>{recipe.complexity}</div>
                  <div>{recipe.servings}</div>
                  <div>{recipe.nutriscore}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-10 pt-4 flex justify-end items-center gap-2">
        {showCount > 4 && (
          <Button onClick={toggleShowLess} className="text-white">
            Show Less
          </Button>
        )}
        {showCount < recipes.length && (
          <Button onClick={toggleShowMore} className="text-white">
            Show More
          </Button>
        )}
      </div>
      {showModal && selectedRecipe && (
        <ModalRecipe recipe={selectedRecipe} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default AllRecipes;
