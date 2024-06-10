import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface Button1Props {
    children: ReactNode
}

export default function Button1({ children }: Button1Props) {
  return (
    <>
      <Button>{children}</Button>{" "}
    </>
  );
}
