import { Button } from "@/components/shadcn-ui/ui/button";
import { ReactNode } from "react";

interface Button2Props {
  children: ReactNode;
  handleClick?: () => void
}

export default function Button2({ children, handleClick }: Button2Props) {
  return (
    <Button onClick={handleClick}
      className={`h-12 px-8 text-lg font-semibold bg-red-500 text-white rounded-full z-10`}
    >
      {children}
    </Button>
  );
}
