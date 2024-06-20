import Header1 from "@/components/Header/Header1";
import Modal from "@/components/Modals/Modal";
import { SetToggleMenuType } from "@/types";
import { FormEvent, useState } from "react";
import Input from "@/components/Form/Input";
import { Button } from "@/components/shadcn-ui/ui/button";

interface ModalRegisterProps {
  show?: boolean;
  handleClose: () => void;
}

export default function ModalRegister({
  show,
  handleClose,
}: ModalRegisterProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submited...");
    handleClose();
  };

  return (
    <Modal handleClose={handleClose}>
      <div className="p-6">
        <form onSubmit={handleSubmit}>
          <Header1
            h1={"Registration Form"}
            desc="We just need a little bit of data from you to get started"
          />
          <Input
            label={{ text: "Email", htmlFor: "email" }}
            id="email"
            type="email"
            name="email"
            required
          />
          <Input
            label={{ text: "Password", htmlFor: "password" }}
            id="password"
            type="password"
            name="email"
            required
          />
          <Input
            label={{ text: "Confirm Password", htmlFor: "confirmPassword" }}
            id="confirmPassword"
            type="password"
            name="email"
            required
          />
          <Input
            label={{ text: "Username", htmlFor: "username" }}
            id="username"
            type="text"
            name="email"
            required
          />
          <Input
            label={{ text: "First Name", htmlFor: "firstName" }}
            id="firstName"
            type="text"
            name="email"
            required
          />
          <Input
            label={{ text: "Last Name", htmlFor: "lastName" }}
            id="lastName"
            type="text"
            name="email"
            required
          />
          <div className="flex justify-center items-center mt-4">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
