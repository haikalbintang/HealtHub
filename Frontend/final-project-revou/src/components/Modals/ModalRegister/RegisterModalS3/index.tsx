import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn-ui/ui/form";
import { Input } from "../../../shadcn-ui/ui/input";
import { RegisterProps } from "../RegisterModalS1";

export default function RegisterModalS1({ form }: RegisterProps): JSX.Element {
  return (
    <>
      <FormField
        control={form.control}
        name="resetPasswordQuestion"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Reset password question</FormLabel>
            <FormControl>
              <Input placeholder="Reset password question" {...field} />
            </FormControl>
            <FormDescription></FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="resetPasswordAnswer"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Reset password answer</FormLabel>
            <FormControl>
              <Input placeholder="Reset password answer" {...field} />
            </FormControl>
            <FormDescription></FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
