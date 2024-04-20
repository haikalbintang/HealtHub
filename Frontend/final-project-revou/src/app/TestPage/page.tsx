"use client";
import React, { useState } from "react";
import ChefProfile from "../../components/ChefProfile";

const TestPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/2">
        <ChefProfile />
      </div>
      <div className="w-1/2">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nulla?
        </h1>
      </div>
    </div>
  );
};

export default TestPage;
