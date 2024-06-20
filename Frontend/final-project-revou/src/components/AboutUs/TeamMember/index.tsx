import { ReactNode } from "react";

interface TeamMemberProps {
  children: ReactNode;
  name: string;
  role: string;
}

export default function TeamMember({ children, name, role }: TeamMemberProps) {
  return (
    <div className="flex flex-col justify-center items-center w-1/4">
      {children}
      <h2 className={"text-2xl font-extrabold text-emerald-900 pt-2"}>
        {name}
      </h2>
      <p className="text-base text-slate-700 font-bold">{role}</p>
    </div>
  );
}
