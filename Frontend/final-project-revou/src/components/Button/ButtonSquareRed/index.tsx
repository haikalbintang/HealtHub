import { Button } from "@/components/shadcn-ui/ui/button";
import { ReactNode } from "react";

interface ButtonSquareRedProps {
  children: ReactNode;
}

export default function ButtonSquareRed({ children }: ButtonSquareRedProps) {
  return (
    <Button className="w-72 bg-red-500 hover:bg-red-600 mt-4" type="submit">
      {children}
    </Button>
  );
}
