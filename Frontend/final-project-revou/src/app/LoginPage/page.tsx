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
          <div className="justify-start items-center">
            <div className="p-5 pb-3">
              <h1 className="text-3xl font-bold">WELCOME!</h1>
              <p className="text-slate-700">Please enter your details.</p>
            </div>
            <div className="flex flex-col gap-2 p-5">
              <div className="flex py-2">
                <Button className="gap-1 w-72 bg-slate-300 text-black hover:bg-slate-200">
                  <img
                    src={googlesvg.src}
                    alt="Google logo."
                    className="w-9 h-9"
                  />
                  Sign in with Google
                </Button>
              </div>
              <div className="flex py-2">
                <Button className="gap-1 w-72 bg-slate-300 text-black hover:bg-slate-200">
                  <img src={facebooksvg.src} alt="" className="w-7 h-7 pr-1" />
                  Sign in with Facebook
                </Button>
              </div>
              <div className="flex justify-center items-center mt-6">
                <p className="text-base">Or sign in with email</p>
              </div>
              {/* Email and Password input fields */}
              <div>
                <div className="py-2">
                  <p className="text-sm">Email</p>
                  <div className="relative ">
                    <input
                      type="email"
                      value={email}
                      className="border border-gray-300 rounded-xl w-72 p-2 text-sm"
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
                  <p className="text-sm">Password</p>
                  <div className="relative ">
                    <input
                      type="password"
                      value={password}
                      className="border border-gray-300 rounded-xl w-72 p-2 text-sm"
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
                  <h1 className="text-xs">Remember Me</h1>
                </div>
                <h1 className="text-xs border-b-2 border-black">
                  Forgot Password?
                </h1>
              </div>
              <div>
                <Button className=" w-72 bg-red-500 hover:bg-red-600 mt-4">
                  Login
                </Button>
              </div>
              <div>
                <p className="text-sm">
                  Don't have an account? sign up{" "}
                  <span className="text-red-500">here</span>
                </p>
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
