import React, { useState } from "react";

const RecipeForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    origin: "",
    category: "",
    cookTime: "",
    complexity: "",
    servings: "",
    budget: "",
    instructions: [""],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    const { name, value } = e.target;
    if (index !== undefined) {
      const newInstructions = [...formData.instructions];
      newInstructions[index] = value;
      setFormData({ ...formData, instructions: newInstructions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddStep = () => {
    setFormData({ ...formData, instructions: [...formData.instructions, ""] });
  };

  const handleRemoveStep = (index: number) => {
    const newInstructions = [...formData.instructions];
    newInstructions.splice(index, 1);
    setFormData({ ...formData, instructions: newInstructions });
  };

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
      <form>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
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
        </div>
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
            value={formData.description}
            onChange={handleChange}
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
            type="text"
            id="cookTime"
            name="cookTime"
            value={formData.cookTime}
            onChange={handleChange}
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
            value={formData.complexity}
            onChange={handleChange}
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
            type="text"
            id="servings"
            name="servings"
            value={formData.servings}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter number of servings"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="instructions"
            className="block text-sm font-medium text-gray-700"
          >
            Instructions
          </label>
          {formData.instructions.map((instruction, index) => (
            <div key={index} className="flex items-center mt-1">
              <textarea
                value={instruction}
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
        </div>
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
