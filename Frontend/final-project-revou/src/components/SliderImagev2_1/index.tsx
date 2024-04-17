import Card from "../Card";
import food1 from "../images/sliderImagesv2/food1.jpg";
import food2 from "../images/sliderImagesv2/food2.jpg";
import food3 from "../images/sliderImagesv2/food3.jpg";
import food4 from "../images/sliderImagesv2/food4.jpg";

export default function SliderImagev2_1() {
  return (
    <div className="p-5">
      <div className="flex flex-wrap justify-center items-center gap-3 lg:flex xl:flex">
        <Card
          title={"Spaghetti Lasagna"}
          difficulty={"Easy"}
          time={"20Min"}
          foodImage={food1.src}
        />
        <Card
          title={"Spaghetti Lasagna"}
          difficulty={"Medium"}
          time={"5Min"}
          foodImage={food2.src}
        />
        <Card
          title={"Spaghetti Lasagna"}
          difficulty={"Hard"}
          time={"1Hour"}
          foodImage={food3.src}
        />
        <Card
          title={"Spaghetti Lasagna"}
          difficulty={"Easy"}
          time={"25Min"}
          foodImage={food4.src}
        />
      </div>
    </div>
  );
}
