import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import useMultistepForm from "@/hooks/useMultistepForm";
import CreateRecipe_vmhb_s1 from "./CreateRecipe_vmhb_s1";
import CreateRecipe_vmhb_s2 from "./CreateRecipe_vmhb_s2";
import CreateRecipe_vmhb_s3 from "./CreateRecipe_vmhb_s3";
import CreateRecipe_vmhb_s4 from "./CreateRecipe_vmhb_s4";
import CreateRecipe_vmhb_s5 from "./CreateRecipe_vmhb_s5";

const createRecipeFormSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    nutriScore: z.number(),
    cookTime: z.number(),
    complexity: z.string(),
    servings: z.number(),
    budget: z.number(),
    instructions: z.string(),

    category: z.string(),
    type: z.string(),
    origin: z.string(),
    tag: z.string(),

    attachment: z.string(),

    servingPerContainer: z.number(),
    servingSize: z.string(),

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

export default function CreateRecipe_vmhb() {
  const createRecipeForm = useForm<z.infer<typeof createRecipeFormSchema>>({
    resolver: zodResolver(createRecipeFormSchema),
    defaultValues: {
      title: "",
      description: "",

      category: "",
      type: "",
      origin: "",
      servings: undefined,
      budget: undefined,

      //   *ingredients: "",
      instructions: "",
      cookTime: undefined,
      complexity: "",

      servingPerContainer: undefined,
      servingSize: "",

      nutriScore: undefined,

      calories: undefined,
      totalFat: undefined,
      totalCarbohydrate: undefined,
      totalSugar: undefined,
      cholesterol: undefined,
      protein: undefined,
      vitaminD: undefined,

      sodium: undefined,
      calcium: undefined,
      potassium: undefined,
      iron: undefined,

      tag: "",
      attachment: "",
    },
  });

  function onSubmit(values: z.infer<typeof createRecipeFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
                    Back ({currentStepIndex})
                  </Button>
                ) : (
                  <Button type="button" onClick={back} disabled>
                    Back ({currentStepIndex})
                  </Button>
                )}
                {isLastStep ? (
                  <Button
                    className="bg-red-500 hover:bg-red-600"
                    type={"submit"}
                  >
                    Submit
                  </Button>
                ) : (
                  <Button type="button" onClick={next}>
                    Next ({currentStepIndex + 2})
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
