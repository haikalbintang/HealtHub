import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetchProfile from "@/hooks/useFetchProfile";
import { Button } from "@/components/ui/button";
import { chefMainCard2 } from "@/data";
const MyProfile: React.FC = () => {
  const { profile, error } = useFetchProfile();
  const [editing, setEditing] = useState(false);
  const [editedChefInfo, setEditedChefInfo] = useState(chefMainCard2);

  const handleSave = () => {
    console.log("Updated chef information:", editedChefInfo);
    setEditing(false);
  };

  return (
    <div className="">
      <h1 className="py-10">My Profile</h1>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center bg-white border-2 border-slate-200 shadow-lg px-10 rounded-lg">
          <div className="flex gap-5 py-5">
            {chefMainCard2.map((chef, index) => (
              <div className="flex justify-center items-center">
                <img
                  src={chef.chefImage}
                  alt=""
                  className="h-14 w-14 rounded-full object-cover"
                />
              </div>
            ))}
            {profile ? (
              <div className=" justify-center items-center">
                <div className="flex gap-2">
                  <h1>{profile?.first_name}</h1>
                  <h1>{profile?.last_name}</h1>
                </div>
                <h1 className=" font-light">{profile.role}</h1>
                <h1 className=" font-extralight">{profile.location}</h1>
              </div>
            ) : (
              <div className=" justify-center items-center">
                <h1>Loading...</h1>
              </div>
            )}
          </div>
          <div>
            <Button>Edit</Button>
          </div>
        </div>
        <div className="bg-white border-2 border-slate-200 shadow-lg px-10 rounded-lg">
          {chefMainCard2.map((chef, index) => (
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center  pt-5">
                <h1>Personal Information</h1>
                {editing ? (
                  <Button onClick={handleSave}>Save</Button>
                ) : (
                  <Button onClick={() => setEditing(true)}>Edit</Button>
                )}
              </div>
              {profile ? (
                <div className="flex flex-col gap-3 py-5">
                  <div className="flex ">
                    <div className="w-1/2">
                      <h1 className=" font-extralight">First Name</h1>
                      <h1>{profile.first_name}</h1>
                    </div>
                    <div className="w-1/2">
                      <h1 className=" font-extralight">Last Name</h1>
                      <h1>{profile.last_name}</h1>
                    </div>
                  </div>
                  <div className="flex ">
                    <div className="w-1/2">
                      <h1 className=" font-extralight">Email Address</h1>
                      <h1>{profile.email}</h1>
                    </div>
                    <div className="w-1/2">
                      <h1 className=" font-extralight">Phone Number</h1>
                      <h1>{chef.phoneNumber}</h1>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <h1 className=" font-extralight">Bio</h1>
                    <h1>{profile.bio}</h1>
                  </div>
                </div>
              ) : (
                <div className=" justify-center items-center">
                  <h1>Loading...</h1>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="bg-white border-2 border-slate-200 shadow-lg px-10 rounded-lg">
          {chefMainCard2.map((chef, index) => (
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center  pt-5">
                <h1>Address</h1>
                {editing ? (
                  <Button onClick={handleSave}>Save</Button>
                ) : (
                  <Button onClick={() => setEditing(true)}>Edit</Button>
                )}
              </div>
              <div className="flex flex-col gap-3 py-3">
                <div className="flex ">
                  <div className="w-1/2">
                    <h1 className=" font-extralight">Country</h1>
                    <h1>{chef.country}</h1>
                  </div>
                  <div className="w-1/2">
                    <h1 className=" font-extralight">City/State</h1>
                    <h1>{chef.city}</h1>
                  </div>
                </div>
                <div className="flex ">
                  <div className="w-1/2">
                    <h1 className=" font-extralight">Postal Code</h1>
                    <h1>{chef.postalCode}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
