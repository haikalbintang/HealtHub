"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import bg1 from "../../components/images/sliderImagesv2/food3.jpg";
import googlesvg from "../../components/images/svg/7123025_logo_google_g_icon.svg";
import facebooksvg from "../../components/images/svg/317727_facebook_social media_social_icon.svg";
import inboxsvg from "../../components/images/svg/email-1-svgrepo-com.svg";
import locksvg from "../../components/images/svg/4213432_closed_lock_password_protect_secure_icon.svg";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex lg:max-h-screen ">
        <div className="flex justify-center items-center lg:w-1/2 bg-slate-50">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">WELCOME BACK</h1>
              <h1>welcome back please enter your details</h1>
            </div>
            <div className="flex flex-col gap-2 p-5">
              <div className="flex py-2">
                <Button className="gap-1 w-72  bg-slate-200 text-black">
                  <img
                    src={googlesvg.src}
                    alt=""
                    style={{ width: "35px", height: "35px" }}
                  />
                  Sign in with Google
                </Button>
              </div>
              <div className="flex py-2">
                <Button className="gap-1 w-72 bg-slate-200 text-black">
                  <img
                    src={facebooksvg.src}
                    alt=""
                    style={{ width: "25px", height: "25px" }}
                  />
                  Sign in with Facebook
                </Button>
              </div>
              <div className="flex justify-center items-center">
                <h1>Or sign in with email</h1>
              </div>
              {/* Email and Password input fields */}
              <div>
                <div className="py-2">
                  <h1>Email</h1>
                  <div className="relative ">
                    <input
                      type="email"
                      value={email}
                      className="border border-gray-300 rounded-xl w-72 p-2"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      style={{ paddingLeft: "35px" }}
                    />
                    <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                      <img src={inboxsvg.src} alt="Logo" className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <h1>Password</h1>
                  <div className="relative ">
                    <input
                      type="password"
                      value={password}
                      className="border border-gray-300 rounded-xl w-72 p-2"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your email"
                      style={{ paddingLeft: "35px" }}
                    />
                    <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                      <img src={locksvg.src} alt="Logo" className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
              {/* end Email and Password input fields */}
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <input type="checkbox" name="remember" id="" />
                  <h1 className="text-sm">Remember Me</h1>
                </div>
                <h1 className="text-sm border-b-2 border-black">
                  Forgot Password?
                </h1>
              </div>
              <div>
                <Button className=" w-72 bg-red-500">Login</Button>
              </div>
              <div>
                <h1>
                  Don't have an account? sign up{" "}
                  <span className="text-red-500">here</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:w-1/2 lg:flex ">
          <img src={bg1.src} alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
