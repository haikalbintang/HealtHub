import Image from "next/image";
import { type ReactNode } from "react";

interface Image {
  src: string;
  alt: string;
}

interface HeaderTestProps {
  image: Image;
  children: ReactNode;
}
export default function HeaderTest({ image, children }: HeaderTestProps) {
  return (
    <div className="flex justify-center items-center gap-3">
      <Image src={image.src} alt={image.alt} />
      {children}
    </div>
  );
}
