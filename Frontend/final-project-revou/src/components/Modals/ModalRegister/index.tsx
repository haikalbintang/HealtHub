import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import Modal from "../Modal";
import useMultistepForm from "@/hooks/useMultistepForm";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { useState } from "react";
import { RegisterFormData } from "@/types";

type SetToggleMenuType = (
  value: boolean | ((prev: boolean) => boolean)
) => void;

interface Props {
  setShowRegisterModal: SetToggleMenuType;
}

export default function ModalRegister({ setShowRegisterModal }: Props) {
  const [formData, setFormData] = useState<Partial<RegisterFormData>>({});
  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: formData,
  });

  const onNextStep1 = (data: Partial<RegisterFormData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
    next();
  };

  const onNextStep2 = (data: Partial<RegisterFormData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
    next();
  };

  const onNextStep3 = (data: Partial<RegisterFormData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
    // Since this is the last step, you may handle submission or final state here
    console.log("Final Form Data:", formData);
    // Example: You might send the formData to an API endpoint here
  };

  const steps = [
    <Step1 key="step1" onNext={onNextStep1} />,
    <Step2 key="step2" onNext={onNextStep2} />,
    <Step3 key="step3" onNext={onNextStep3} />,
  ];

  const { step, next, back, isFirstStep, isLastStep } = useMultistepForm(steps);

  return (
    <Modal setShowModal={setShowRegisterModal}>
      <div className="p-6">
        <FormProvider {...methods}>
          {step}
          <div>
            {!isFirstStep && <button onClick={back}>Previous</button>}
            {!isLastStep && <button onClick={next}>Next</button>}
          </div>
        </FormProvider>
      </div>
    </Modal>
  );
}
