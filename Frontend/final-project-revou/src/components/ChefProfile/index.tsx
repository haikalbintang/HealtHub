import React, { useState } from "react";

interface Profiles {
  //   className: string;
  image: string;
  name: string;
  userRole: string;
  description: string;
  //   link: string;
  //   foodTitle: string;
  //   followers: number;
  //   following: number;
}
interface Props {
  image: string;
}
const ChefProfile = ({
  //   className,
  image,
  name,
  description,
  userRole,
}: //   link,
//   foodTitle,
//   followers,
//   following,
Profiles) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="w-1/2 ">
          <div>
            <img src={image} alt="" />
            <div className="flex justify-center items-center w-24">
              <div className="rounded-full">
                <img src={image} alt="" />
              </div>
              <div className="rounded-full">
                <img src={image} alt="" />
              </div>
              <div className="">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="px-5">
            <h1>{userRole}</h1>
            <h1>{name}</h1>
            <h1>{description}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefProfile;
