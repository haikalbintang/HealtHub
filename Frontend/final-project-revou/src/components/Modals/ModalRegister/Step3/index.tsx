import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn-ui/ui/form";
import { Input } from "../../../shadcn-ui/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const step3Schema = z.object({
  resetPasswordQuestion: z
    .string()
    .min(1, "Reset password question is required"),
  resetPasswordAnswer: z.string().min(1, "Reset password answer is required"),
});

type Step3Data = z.infer<typeof step3Schema>;

type Step3Props = {
  onNext: (data: Step3Data) => void;
  onBack?: () => void;
};

export default function Step3({ onNext, onBack }: Step3Props): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
  });

  const onSubmit = (data: Step3Data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        control={control}
        name="resetPasswordQuestion"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Reset Password Question</FormLabel>
            <FormControl>
              <Input placeholder="Reset Password Question" {...field} />
            </FormControl>
            <FormDescription></FormDescription>
            <FormMessage>{errors.resetPasswordQuestion?.message}</FormMessage>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="resetPasswordAnswer"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Reset Password Answer</FormLabel>
            <FormControl>
              <Input placeholder="Reset Password Answer" {...field} />
            </FormControl>
            <FormDescription></FormDescription>
            <FormMessage>{errors.resetPasswordAnswer?.message}</FormMessage>
          </FormItem>
        )}
      />
    </form>
  );
}
