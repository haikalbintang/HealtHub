import Image from "next/image";
import Navbar from "@/components/Navbar";
import SliderImage from "@/components/SliderImage";
import image1 from "../components/images/1.jpg";
import image2 from "../components/images/2.png";

export default function Home() {
  const images: string[] = [image1.src, image2.src];
  return (
    <main>
      <Navbar />
      <SliderImage images={images} />
    </main>
  );
}
