
import { Button } from "@/components/ui/button";
import SliderImage from "@/components/SliderImage";
import SliderImagev2 from "@/components/SliderImagev2";
import SliderV3 from "@/components/SliderImagev3";
import HeroPage from "@/components/HeroPage";
import Footer from "@/components/Footer";

import image1 from "../components/images/1.jpg";
import image2 from "../components/images/2.png";
import logo1 from "../components/images/logo1.png";
import logo2 from "../components/images/logo2.png";
import logo3 from "../components/images/logo3.png";
import logo4 from "../components/images/logo4.png";
import logo5 from "../components/images/logo5.png";

import food1 from "../components/images/sliderImagesv2/food1.jpg";
import food2 from "../components/images/sliderImagesv2/food2.jpg";
import food3 from "../components/images/sliderImagesv2/food3.jpg";
import food4 from "../components/images/sliderImagesv2/food4.jpg";

import foodImage1 from "../components/images/slidersv3/1.png";
import foodImage2 from "../components/images/slidersv3/2.png";
import foodImage3 from "../components/images/slidersv3/3.png";
import foodImage4 from "../components/images/slidersv3/4.png";
import foodImage5 from "../components/images/slidersv3/5.png";
import foodImage6 from "../components/images/slidersv3/6.png";
import SliderImagev2_1 from "../components/SliderImagev2_1";

import NavbarWrapper from "@/components/NavbarWrapper";

export default function Home() {
  const images: string[] = [image1.src, image2.src];
  const foodImages: string[] = [food1.src, food2.src, food3.src, food4.src];
  const foodImagesv2: string[] = [
    foodImage2.src,
    foodImage1.src,
    foodImage3.src,
    foodImage4.src,
    foodImage5.src,
    foodImage6.src,
  ];

  return (
    <main>
      <NavbarWrapper />
      <SliderImage images={images} />
      {/* Discover content */}
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
        <Button className="bg-red-500 text-xl font-bold ">Learn More</Button>
      </div>
      {/* End Discover content */}
      <SliderImagev2 foodImages={foodImages} />
      <SliderImagev2_1 />
      <SliderV3 images={foodImagesv2} />
      <HeroPage />
      <Footer />
    </main>
  );
}
