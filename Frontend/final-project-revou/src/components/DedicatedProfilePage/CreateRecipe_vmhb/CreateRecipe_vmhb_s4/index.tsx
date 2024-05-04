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

export default function CreateRecipe_vmhb_s4({
  createRecipeForm,
}: Props): JSX.Element {
  return (
    <>
      <h2 className="text-lg font-semibold">Nutrition</h2>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="nutriScore"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Nutrition Score <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Nutrition Score" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <h2>&mdash;&mdash;&mdash;&mdash;</h2>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="calories"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Calories
              </FormLabel>
              <FormControl>
                <Input placeholder="Calories" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="totalFat"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Total Fat
              </FormLabel>
              <FormControl>
                <Input placeholder="Total Fat" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="totalCarbohydrate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Total Carbohydrate
              </FormLabel>
              <FormControl>
                <Input placeholder="Total Carbohydrate" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="totalSugar"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Total Sugar
              </FormLabel>
              <FormControl>
                <Input placeholder="Total Sugar" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="cholesterol"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Cholesterol
              </FormLabel>
              <FormControl>
                <Input placeholder="Cholesterol" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="protein"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Protein</FormLabel>
              <FormControl>
                <Input placeholder="Protein" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="vitaminD"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Vitamin D
              </FormLabel>
              <FormControl>
                <Input placeholder="Vitamin D" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <h2>&mdash;&mdash;&mdash;&mdash;</h2>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="sodium"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Sodium</FormLabel>
              <FormControl>
                <Input placeholder="Sodium" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="calcium"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Calcium</FormLabel>
              <FormControl>
                <Input placeholder="Calcium" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="potassium"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Potassium
              </FormLabel>
              <FormControl>
                <Input placeholder="Potassium" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="iron"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Iron</FormLabel>
              <FormControl>
                <Input placeholder="Iron" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
