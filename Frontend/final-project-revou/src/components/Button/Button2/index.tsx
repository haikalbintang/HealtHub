import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface Button2Props {
    children: ReactNode
}

export default function Button2({ children }: Button2Props) {
  return (
    <Button
      className={`h-12 px-8 text-lg font-semibold bg-red-500 text-white rounded-full z-10`}
    >
      {children}
    </Button>
  );
}
