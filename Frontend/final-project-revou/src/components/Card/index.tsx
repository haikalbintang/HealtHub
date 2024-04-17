// import { useState } from "react";
import { Button } from "../ui/button";

interface Props {
  title: string;
  difficulty: string;
  time: string;
  foodImage: string;
}

export default function Card({ title, difficulty, time, foodImage }: Props) {
  return (
    <div className="relative text-center">
      <img
        src={foodImage}
        alt="Previous Slider"
        className="block my-0 mx-auto h-auto rounded-xl"
        style={{ maxHeight: "55vh" }}
      />
      <h1
        className="absolute bottom-1/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-2xl font-bold text-white z-10 m-0 p-0 w-full"
        style={{ bottom: "20%", left: "50%" }}
      >
        {title}
      </h1>
      <div
        className="flex gap-2 absolute bottom-0 left-8 -translate-x-2/4 -translate-y-2/4 text-white z-10 m-0 p-0 w-1/5"
        style={{ bottom: "2%", left: "15%" }}
      >
        <Button className="rounded-full">D</Button>
        <h2 className="flex justify-center items-center">{difficulty}</h2>
      </div>
      <div
        className="flex gap-2 absolute -translate-x-2/4 -translate-y-2/4 text-white z-10 m-0 p-0 w-1/5"
        style={{ bottom: "2%", right: "15%" }}
      >
        <Button className="rounded-full">T</Button>
        <h2 className="flex justify-center items-center">{time}</h2>
      </div>
    </div>
  );
}
