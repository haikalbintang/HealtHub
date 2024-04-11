import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import SliderImage from "@/components/SliderImage";
import image1 from "../components/images/1.jpg";
import image2 from "../components/images/2.png";
import logo1 from "../components/images/logo1.png";
import logo2 from "../components/images/logo2.png";
import logo3 from "../components/images/logo3.png";
import logo4 from "../components/images/logo4.png";
import logo5 from "../components/images/logo5.png";

export default function Home() {
  const images: string[] = [image1.src, image2.src];
  return (
    <main>
      <Navbar />
      <SliderImage images={images} />
      <div className="flex justify-center items-center p-10 text-xl gap-3">
        <h1>------</h1>
        <h1>Discover</h1>
        <h1>------</h1>
      </div>
      <div className="flex justify-center items-center  text-3xl font-bold gap-3">
        Our Engagement
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 p-10">
        <div className="flex-wrap justify-center items-center">
          <img src={logo1.src} alt="" />
          <h1>Fresh and Natural</h1>
        </div>
        <div className="flex-wrap justify-center items-center">
          <img src={logo2.src} alt="" />
          <h1>Fresh and Natural</h1>
        </div>
        <div className="flex-wrap justify-center items-center">
          <img src={logo3.src} alt="" />
          <h1>Fresh and Natural</h1>
        </div>
        <div className="flex-wrap justify-center items-center">
          <img src={logo4.src} alt="" />
          <h1>Fresh and Natural</h1>
        </div>
        <div className="flex-wrap justify-center items-center">
          <img src={logo5.src} alt="" />
          <h1>Fresh and Natural</h1>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Button>Learn More</Button>
      </div>
    </main>
  );
}
