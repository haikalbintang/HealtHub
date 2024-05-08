import React, { useState } from "react";
import { z } from "zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props {
  createRecipeForm: any;
}

interface Ingredient {
  name: string;
  amount: string;
}

const schema = z.object({
  ingredients: z.array(z.object({ name: z.string(), amount: z.string() })),
});

export default function CreateRecipe_vmhb_s3({
  createRecipeForm,
}: Props): JSX.Element {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [ingredientInput, setIngredientInput] = useState("");

  const handleAddIngredient = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredientInput(e.target.value);
  };

  const handleIngredientSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ingredientInput.trim() === "") return;
    const [name, amount] = ingredientInput.split(/\s+(?=\d)/);
    const data = { ingredients: [{ name, amount }] };
    try {
      schema.parse(data);
      setIngredients([...ingredients, { name, amount }]);
      setIngredientInput("");
    } catch (error) {
      console.error("Ingredient validation error:", error);
    }
  };

  return (
    <>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="ingredients"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Ingredients <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <form onSubmit={handleIngredientSubmit}>
                  <Input
                    type="text"
                    placeholder="Enter ingredient and quantity (e.g., garlic 200gr)"
                    value={ingredientInput}
                    onChange={handleAddIngredient}
                  />
                </form>
              </FormControl>
              <FormDescription>please include the units</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <span>
              {ingredient.name} - {ingredient.amount}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="instructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Instructions <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Instructions" {...field} />
              </FormControl>
              <FormDescription>start from step 1</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="cookTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Cook Time <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Cook Time"
                  {...field}
                  type="number"
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormDescription>in minutes</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="complexity"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Complexity <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Complexity" {...field} />
              </FormControl>
              <FormDescription>choose one</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
