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

const step2Schema = z.object({
  username: z.string().min(1, "Username is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

type Step2Data = z.infer<typeof step2Schema>;

type Step2Props = {
  onNext: (data: Step2Data) => void;
  onBack?: () => void;
};

export default function Step2({ onNext, onBack }: Step2Props): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
  });

  const onSubmit = (data: Step2Data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        control={control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="Username" {...field} />
            </FormControl>
            <FormDescription></FormDescription>
            <FormMessage>{errors.username?.message}</FormMessage>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input placeholder="First Name" {...field} />
            </FormControl>
            <FormDescription></FormDescription>
            <FormMessage>{errors.firstName?.message}</FormMessage>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <Input placeholder="Last Name" {...field} />
            </FormControl>
            <FormDescription></FormDescription>
            <FormMessage>{errors.lastName?.message}</FormMessage>
          </FormItem>
        )}
      />
      <button type="button" onClick={onBack}>
        Previous
      </button>
      <button type="submit">Next</button>
    </form>
  );
}
