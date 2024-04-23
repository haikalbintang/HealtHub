"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { chefMainCard } from "@/components/ChefProfile";
import photo1 from "../../components/images/chefimage/gordonram.jpeg";

const CommentsCard = [
  {
    recipename: "salad",
    userName: "Catur ageng",
    comments: [
      {
        username: "Amanda satya",
        userImage: photo1.src,
        comment:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, distinctio!",
        time: "5 min ago",
      },
      {
        username: "Iman Finuaz ",
        userImage: photo1.src,
        comment:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, distinctio!",
        time: "2 hour ago",
      },
      {
        username: "haikal bintang",
        userImage: photo1.src,
        comment:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, distinctio!",
        time: "3 hour ago",
      },
      {
        username: "Fachrezi ramadhani",
        userImage: photo1.src,
        comment:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, distin",
        time: "4 hour ago",
      },
    ],
  },
];
const CommentSections = () => {
  return (
    <div>
      <div>
        <div className="p-10">
          <div className=" bg-slate-300 rounded-xl">
            <div>
              <div className="flex- flex-col">
                <div className="flex">
                  <h1 className="p-5">Comments</h1>
                  <div className="flex justify-center items-center ">
                    <div className="flex justify-center items-center h-8 w-8 bg-black text-white rounded-full">
                      {CommentsCard[0].comments.length}
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="pl-5">
                    Add comment as {CommentsCard[0].userName} :
                  </h1>
                </div>
                <div className="p-3">
                  <form action="">
                    <textarea className="w-full h-20 bg-slate-400 text-white rounded-xl p-5" />
                    <div className="flex justify-end items-center">
                      <Button className="bg-red-600">Submit</Button>
                    </div>
                  </form>
                </div>
              </div>
              {CommentsCard[0].comments.map((card: any) => (
                <div className="flex p-5 border-b-2">
                  <div className="hidden lg:flex gap-2">
                    <img
                      src={card.userImage}
                      alt=""
                      className=" h-14 w-14 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col p-2">
                      <div className="flex gap-3">
                        <div className="lg:hidden">
                          <img
                            src={card.userImage}
                            alt=""
                            className=" h-14 w-14 rounded-full object-cover"
                          />
                        </div>
                        <h1>{card.username}</h1>
                        <h1>{card.time}</h1>
                      </div>
                      <div>{card.comment}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CommentSections;
