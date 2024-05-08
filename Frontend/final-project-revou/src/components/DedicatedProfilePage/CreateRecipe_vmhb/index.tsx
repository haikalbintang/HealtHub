import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import useMultistepForm from "@/hooks/useMultistepForm";
import CreateRecipe_vmhb_s1 from "./CreateRecipe_vmhb_s1";
import CreateRecipe_vmhb_s2 from "./CreateRecipe_vmhb_s2";
import CreateRecipe_vmhb_s3 from "./CreateRecipe_vmhb_s3";
import CreateRecipe_vmhb_s4 from "./CreateRecipe_vmhb_s4";
import CreateRecipe_vmhb_s5 from "./CreateRecipe_vmhb_s5";
import axios from "axios";

const createRecipeFormSchema = z
  .object({
    title: z.string(),
    description: z.string().max(300),
    nutriscore: z.number(),
    cookTime: z.number(),
    complexity: z.string(),
    servings: z.number(),
    budget: z.string(),
    instructions: z.string(),
    ingredients: z.string(),

    categories: z.string(),
    type: z.string(),
    origin: z.string(),
    tags: z.string(),

    attachment: z.string(),

    // servingPerContainer: z.number(),
    // servingSize: z.string(),

    calories: z.number(),
    totalFat: z.number(),
    totalCarbohydrate: z.number(),
    totalSugar: z.number(),
    cholesterol: z.number(),
    protein: z.number(),
    vitaminD: z.number(),

    sodium: z.number(),
    calcium: z.number(),
    potassium: z.number(),
    iron: z.number(),
  })
  .required();

const schema = z.object({
  ingredients: z.array(
    z.object({
      name: z.string().nonempty(),
      amount: z.string().nonempty(),
    })
  ),
});

export default function CreateRecipe_vmhb() {
  const createRecipeForm = useForm<z.infer<typeof createRecipeFormSchema>>({
    resolver: zodResolver(createRecipeFormSchema),
    defaultValues: {
      title: "",
      description: "",

      categories: "",
      type: "",
      origin: "",
      servings: 1,
      budget: "",

      ingredients: "",
      instructions: "",
      cookTime: 0,
      complexity: "",

      //   servingPerContainer: undefined,
      //   servingSize: "",

      nutriscore: 1,

      calories: 0,
      totalFat: 0,
      totalCarbohydrate: 0,
      totalSugar: 0,
      cholesterol: 0,
      protein: 0,
      vitaminD: 0,

      sodium: 0,
      calcium: 0,
      potassium: 0,
      iron: 0,

      tags: "",
      attachment: "",
    },
  });

  async function postRecipe() {
    const authToken = localStorage.getItem("access_token");
    try {
      if (authToken) {
        const headers = {
          Authorization: `Bearer ${authToken}`,
        };
        const recipeData = createRecipeForm.getValues();
        const response = await axios.post(
          "http://127.0.0.1:5000/recipes/create",
          {
            title: recipeData.title,
            description: recipeData.description,
            nutriscore: recipeData.nutriscore,
            cooktime: recipeData.cookTime,
            complexity: recipeData.complexity,
            servings: recipeData.servings,
            budget: recipeData.budget,
            instruction: recipeData.instructions,
            view_count: 0,
            categories: [recipeData.categories],
            type: recipeData.type,
            origin: recipeData.origin,
            tags: [recipeData.tags],
            attachment: recipeData.attachment,
            ingredients: [recipeData.ingredients],
          },
          { headers }
        );
        console.log("123", response);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function onSubmit(values: z.infer<typeof createRecipeFormSchema>) {
    console.log("Form submitted!");
    console.log(values);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      await postRecipe();
    } catch (error) {
      console.error(error);
    }
  }

  const { currentStepIndex, steps, isFirstStep, isLastStep, back, next, step } =
    useMultistepForm([
      <CreateRecipe_vmhb_s1 key={0} createRecipeForm={createRecipeForm} />,
      <CreateRecipe_vmhb_s2 key={1} createRecipeForm={createRecipeForm} />,
      <CreateRecipe_vmhb_s3 key={2} createRecipeForm={createRecipeForm} />,
      <CreateRecipe_vmhb_s4 key={3} createRecipeForm={createRecipeForm} />,
      <CreateRecipe_vmhb_s5 key={4} createRecipeForm={createRecipeForm} />,
    ]);

  return (
    <>
      <div className="p-6 flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Post Recipe Form</h1>
          <h2 className="text-lg font-medium">
            step{" "}
            <span className="text-xl font-bold">{currentStepIndex + 1}</span> /{" "}
            {steps.length}
          </h2>
        </div>
        <div className="mt-8">
          <Form {...createRecipeForm}>
            <form
              onSubmit={createRecipeForm.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              {step}
              <div className="flex justify-between">
                {!isFirstStep ? (
                  <Button type="button" onClick={back}>
                    {"<"} Back ({currentStepIndex})
                  </Button>
                ) : (
                  <Button type="button" onClick={back} disabled>
                    Back ({currentStepIndex})
                  </Button>
                )}
                {!isLastStep && (
                  <Button type="button" onClick={next}>
                    Next ({currentStepIndex + 2}) {">"}
                  </Button>
                )}
                {isLastStep && (
                  <div className="flex justify-end">
                    <Button
                      className="bg-red-500 hover:bg-red-600"
                      type={"submit"}
                    >
                      Submit
                    </Button>
                  </div>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
