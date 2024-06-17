import SliderImage from "@/components/Hero/Hero1";

import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.png";

import food1 from "@/assets/images/sliderImagesv2/food1.jpg";
import food2 from "@/assets/images/sliderImagesv2/food2.jpg";
import food3 from "@/assets/images/sliderImagesv2/food3.jpg";
import food4 from "@/assets/images/sliderImagesv2/food4.jpg";

import foodImage1 from "@/assets/images/slidersv3/1.png";
import foodImage2 from "@/assets/images/slidersv3/2.png";
import foodImage3 from "@/assets/images/slidersv3/3.png";
import foodImage4 from "@/assets/images/slidersv3/4.png";
import foodImage5 from "@/assets/images/slidersv3/5.png";
import foodImage6 from "@/assets/images/slidersv3/6.png";
import Hero1 from "@/components/Hero/Hero1";
import Hero2 from "@/components/Hero/Hero2";

export default function Home() {
  const images: string[] = [image1.src, image2.src];

  return (
    <main>
      {/* <Hero1 images={images} maxHeight="500" /> */}
      <Hero2 />
    </main>
  );
}
