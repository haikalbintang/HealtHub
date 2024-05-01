import React, { useState } from "react";
import axios from "axios";
const RecipeForm: React.FC = () => {
  const [recipeData, setRecipeData] = useState({
    title: "",
    description: "",
    cooktime: "",
    complexity: "",
    servings: "",
    budget: "",
    instructions: "",
    nutriscore: "",
    // category: "",
    // image: "",
  });

  const handleCreate = async () => {
    const authToken = localStorage.getItem("access_token");
    // console.log("auth", authToken);
    try {
      // console.log(authToken);
      if (authToken) {
        const headers = {
          Authorization: `Bearer ${authToken}`,
        };
        const response = await axios.post(
          "http://127.0.0.1:5000/recipes/create",
          {
            title: recipeData.title,
            description: recipeData.description,
            cooktime: recipeData.cooktime,
            complexity: recipeData.complexity,
            servings: recipeData.servings,
            budget: recipeData.budget,
            nutriscore: recipeData.nutriscore,
            // image: recipeData.image,
            // category: recipeData.category,
          },
          {
            headers,
          }
        );
        console.log("123", response);
      }
    } catch (error) {
      // console.log("errorboy", error);
      console.error(error);
    }
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await handleCreate();
    } catch (error) {
      console.error(error);
    }
  };
  // const [formData, setFormData] = useState({
  //   title: "",
  //   image: "",
  //   description: "",
  //   origin: "",
  //   category: "",
  //   cookTime: "",
  //   complexity: "",
  //   servings: "",
  //   budget: "",
  //   instructions: "",
  // });

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  //   index?: number
  // ) => {
  //   const { name, value } = e.target;
  //   if (index !== undefined) {
  //     const newInstructions = [...formData.instructions];
  //     newInstructions[index] = value;
  //     setFormData({ ...formData, instructions: newInstructions });
  //   } else {
  //     setFormData({ ...formData, [name]: value });
  //   }
  // };

  // const handleAddStep = () => {
  //   setFormData({ ...formData, instructions: [...formData.instructions, ""] });
  // };

  // const handleRemoveStep = (index: number) => {
  //   const newInstructions = [...formData.instructions];
  //   newInstructions.splice(index, 1);
  //   setFormData({ ...formData, instructions: newInstructions });
  // };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // You can handle the file upload here, for example, using FileReader API to read the file contents
      // and then save it to the state or upload it to a server
      console.log("File uploaded:", file);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={recipeData.title}
            onChange={(e) =>
              setRecipeData({ ...recipeData, title: e.target.value })
            }
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        {/* <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Recipe Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div> */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Recipe Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={recipeData.description}
            onChange={(e) =>
              setRecipeData({ ...recipeData, description: e.target.value })
            }
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Cook Time
          </label>
          <input
            type="number"
            id="cookTime"
            name="cookTime"
            value={recipeData.cooktime}
            onChange={(e) =>
              setRecipeData({ ...recipeData, cooktime: e.target.value })
            }
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Complexity
          </label>
          <input
            type="text"
            id="complexity"
            name="complexity"
            value={recipeData.complexity}
            onChange={(e) =>
              setRecipeData({ ...recipeData, complexity: e.target.value })
            }
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="servings"
            className="block text-sm font-medium text-gray-700"
          >
            Servings
          </label>
          <input
            type="number"
            id="servings"
            name="servings"
            value={recipeData.servings}
            onChange={(e) =>
              setRecipeData({ ...recipeData, servings: e.target.value })
            }
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter number of servings"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-700"
          >
            budget
          </label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={recipeData.budget}
            onChange={(e) =>
              setRecipeData({ ...recipeData, budget: e.target.value })
            }
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter budget"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-700"
          >
            nutriscore
          </label>
          <input
            type="number"
            id="nutriscore"
            name="nutriscore"
            value={recipeData.nutriscore}
            onChange={(e) =>
              setRecipeData({ ...recipeData, nutriscore: e.target.value })
            }
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter nutriscore"
          />
        </div>
        {/* <div className="mb-4">
          <label
            htmlFor="instructions"
            className="block text-sm font-medium text-gray-700"
          >
            Instructions
          </label>
          {formData.instructions.map((instruction, index) => (
          <div className="flex items-center mt-1">
            <textarea
              value={recipeData.instructions}
              onChange={(e) =>
                setRecipeData({ ...recipeData, instructions: e.target.value })
              }
              onChange={(e) => handleChange(e, index)}
              className="p-4 border rounded-md flex-grow"
              placeholder={`Step ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => handleRemoveStep(index)}
              className="ml-2 p-2 bg-red-500 text-white rounded-md"
            >
              Remove Step
            </button>
          </div>
           ))} 
          <button
            type="button"
            onClick={handleAddStep}
            className="mt-2 p-2 bg-blue-500 text-white rounded-md"
          >
            Add Step
          </button>
        </div> */}
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
