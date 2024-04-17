import { Button } from "../ui/button";
import chefsvg from "../images/svg/chef-hat-minimalistic-svgrepo-com.svg";
import clocksvg from "../images/svg/clock-lines-svgrepo-com.svg";
import cookgreensvg from "../images/svg/cook-svgrepo-com (green).svg";
import cookyellowsvg from "../images/svg/cook-svgrepo-com (yellow).svg";
import cookredsvg from "../images/svg/cook-svgrepo-com (red).svg";

interface Props {
  title: string;
  difficulty: string;
  time: string;
  foodImage: string;
  role?: string;
}

export default function Card({
  title,
  difficulty,
  time,
  foodImage,
  role,
}: Props) {
  return (
    <div className={`relative text-center`}>
      <img
        src={foodImage}
        alt="Food image."
        className={`block my-0 mx-auto h-auto rounded-xl`}
        style={{ maxHeight: "55vh" }}
      />
      <h1
        className="absolute bottom-1/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-xl font-bold text-white z-10 m-0 p-0 w-full"
        style={{ bottom: "17%", left: "50%" }}
      >
        {title}
      </h1>
      <div
        className="flex gap-2 absolute bottom-0 left-8 -translate-x-2/4 -translate-y-2/4 text-white z-10 m-0 p-0 w-1/5"
        style={{ bottom: "2%", left: "17%" }}
      >
        {/* <Button
          className={`rounded-full ${
            difficulty === "Easy"
              ? {"bg-green-500 hover:bg-green-600"}
              : difficulty === "Medium"
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          D
        </Button> */}
        <img
          src={
            difficulty === "Easy"
              ? cookgreensvg.src
              : difficulty === "Medium"
              ? cookyellowsvg.src
              : cookredsvg.src
          }
          alt="Cooking icon."
          className="w-8 h-8"
        />
        <h2 className="flex justify-center items-center text-sm">
          {difficulty}
        </h2>
      </div>
      <div
        className="flex gap-2 absolute -translate-x-2/4 -translate-y-2/4 text-white z-10 m-0 p-0 w-1/5"
        style={{ bottom: "2%", right: "12%" }}
      >
        <img src={clocksvg.src} alt="Clock icon." className="w-8 h-8" />
        <h2 className="flex justify-center items-center text-sm">{time}</h2>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent rounded-xl `}
      ></div>
      <div
        className={`absolute bottom-0 left-0 w-full h-full rounded-xl ${
          role === "chef" ? "border-8 border-yellow-500 rounded-xl" : ""
        }`}
      ></div>
      {role === "chef" ? (
        <>
          <div className="absolute top-3 right-3 w-16 h-16 rotate-12">
            <img src={chefsvg.src} alt="Chef icon." />
          </div>
          <h2 className="text-yellow-500 top-6 -right-5 text-base absolute font-bold z-10 m-0 p-0 w-full rotate-12">
            CHEF
          </h2>
        </>
      ) : null}
    </div>
  );
}
