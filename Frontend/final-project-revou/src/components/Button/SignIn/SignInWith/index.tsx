import { Button } from "@/components/shadcn-ui/ui/button";
import { ReactNode } from "react";

type SetToggleMenuType = (
  value: boolean | ((prev: boolean) => boolean)
) => void;

interface SignInWithProps {
  text: string;
  children: ReactNode;
  setShowLoginModal: SetToggleMenuType;
}

export default function SignInWith({
  text,
  children,
  setShowLoginModal,
}: SignInWithProps) {
  return (
    <div className="flex py-2">
      <Button
        className="gap-1 w-72 py-6 pl-1 text-base text-slate-600 bg-slate-200 hover:bg-slate-100 hover:text-slate-800"
        onClick={() => setShowLoginModal(false)}
      >
        {children}
        <p>{text}</p>
      </Button>
    </div>
  );
}
