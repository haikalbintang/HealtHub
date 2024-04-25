import chefsvg from "../images/svg/3.png";
import clocksvg from "../images/svg/clock-lines-svgrepo-com.svg";

import gif1 from "../images/svg/gif/tapas2go-thumbs-up.gif";
import gif2 from "../images/svg/gif/community.gif";
import cookgreensvg from "../images/svg/cook-svgrepo-com (green).svg";
import cookyellowsvg from "../images/svg/cook-svgrepo-com (yellow).svg";
import cookredsvg from "../images/svg/cook-svgrepo-com (red).svg";

interface Props {
  title: string;
  difficulty: string;
  time: string;
  foodImage: string;
  role?: string;
  className?: string;
  maxHeight?: string;
}

export default function Card({
  title,
  difficulty,
  time,
  foodImage,
  role,
  maxHeight,
}: Props) {
  return (
    <div
      className={`relative text-center hover:transform hover:scale-110 duration-300 rounded-xl `}
    >
      <img
        src={foodImage}
        alt="Food image."
        className={`block my-0 mx-auto h-auto  `}
        style={{ maxHeight }}
      />
      <h1
        className="absolute bottom-1/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-xl font-bold text-white z-10 m-0 p-0 w-full"
        style={{ bottom: "17%", left: "50%" }}
      >
        {title}
      </h1>
      <div
        className="flex gap-2 absolute bottom-0 left-8 -translate-x-2/4 -translate-y-2/4 text-white z-10 m-0 p-0 w-1/5"
        style={{ bottom: "3%", left: "20%" }}
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
        {/* <img
          src={
            difficulty === "Easy"
              ? cookgreensvg.src
              : difficulty === "Medium"
              ? cookyellowsvg.src
              : cookredsvg.src
          }
          alt="Cooking icon."
          className="w-8 h-8"
        /> */}
        <button
          className={`${
            difficulty === "Easy"
              ? "bg-green-500"
              : difficulty === "Medium"
              ? "bg-yellow-500"
              : "bg-red-500"
          } text-white text-sm py-1 px-2 rounded-xl`}
        >
          {difficulty}
        </button>
        {/* <h2 className="flex justify-center items-center text-sm">
          {difficulty}
        </h2> */}
      </div>
      <div
        className="flex gap-2 absolute -translate-x-2/4 -translate-y-2/4 text-white z-10 m-0 p-0 w-1/5"
        style={{ bottom: "2%", right: "13%" }}
      >
        <img src={clocksvg.src} alt="Clock icon." className="w-8 h-8" />
        <h2 className="flex justify-center items-center text-sm">{time}</h2>
      </div>
      {/* <div
        className={`absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent rounded-xl `}
      ></div> */}
      <div className="">
        <div
          className={`absolute bottom-0 left-0 w-full h-full shadow-xl shadow-black  ring-1 overflow-hidden ${
            role === "chef" ? " border-gradient " : ""
          }`}
          style={{ borderColor: role === "chef" ? "border-red-500" : "" }}
        ></div>
      </div>
      {role === "chef" ? (
        <>
          <div className="absolute -top-12 -right-2 w-24 h-24 ">
            <img src={gif1.src} alt="Chef icon." />
            {/* <img src={chefsvg.src} alt="Chef icon." /> */}
          </div>
          {/* <h2 className="text-black font-extrabold absolute top-6 -right-32 text-base font-serif z-20 m-0 p-0 w-full rotate-12 ">
            CHEF
          </h2> */}
        </>
      ) : null}
      {role !== "chef" ? (
        <div className="absolute -top-8 -right-2 w-24 h-24 ">
          <img src={gif2.src} alt="Chef icon." />
          {/* <img src={chefsvg.src} alt="Chef icon." /> */}
        </div>
      ) : null}
    </div>
  );
}
