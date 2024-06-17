import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/shadcn-ui/ui/button";
import { Form } from "@/components/shadcn-ui/ui/form";

import Modal from "../Modal";
import useMultistepForm from "@/hooks/useMultistepForm";
import RegisterModalS1 from "./RegisterModalS1";
import RegisterModalS2 from "./RegisterModalS2";
import RegisterModalS3 from "./RegisterModalS3";

export const registerSchema = z
  .object({
    email: z
      .string()
      .email({ message: "Invalid email" })
      .min(1, { message: "This field is required" }),
    password: z
      .string()
      .min(1, { message: "This field is required" })
      .min(4, { message: "Password must be at least 4 characters long" }),
    passwordConfirm: z.string().min(1, { message: "This field is required" }),
    username: z
      .string()
      .min(1, { message: "This field is required" })
      .min(4, { message: "Username must be at least 4 characters long" })
      .max(20),
    firstName: z.string().min(1, { message: "This field is required" }),
    lastName: z.string().min(1, { message: "This field is required" }),
    resetPasswordQuestion: z
      .string()
      .min(1, { message: "This field is required" }),
    resetPasswordAnswer: z
      .string()
      .min(1, { message: "This field is required" }),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    {
      message: "Passwords do not match",
      path: ["passwordConfirm"],
    }
  );

export type FormData = z.infer<typeof registerSchema>;

type SetToggleMenuType = (
  value: boolean | ((prev: boolean) => boolean)
) => void;

interface Props {
  setShowRegisterModal: SetToggleMenuType;
}

export default function ModalRegister({ setShowRegisterModal }: Props) {
  // 1. Define your form.
  const form = useForm<FormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      username: "",
      firstName: "",
      lastName: "",
      resetPasswordQuestion: "",
      resetPasswordAnswer: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: FormData) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("Form submitted!");
    console.log(values);
  }

  const { currentStepIndex, steps, isFirstStep, isLastStep, back, next, step } =
    useMultistepForm([
      <RegisterModalS1 key={0} form={form} />,
      <RegisterModalS2 key={1} form={form} />,
      <RegisterModalS3 key={2} form={form} />,
    ]);

  return (
    <Modal setShowModal={setShowRegisterModal}>
      <div className="p-6">
        <h2>
          {currentStepIndex + 1} / {steps.length}
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {step}
            <div className="flex justify-between">
              {!isFirstStep ? (
                <Button type="button" onClick={back}>
                  Back
                </Button>
              ) : (
                <Button type="button" onClick={back} disabled>
                  Back
                </Button>
              )}
              {isLastStep ? (
                <Button className="bg-red-500 hover:bg-red-600" type={"submit"}>
                  Submit
                </Button>
              ) : (
                <Button type="button" onClick={next}>
                  Next
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
}
