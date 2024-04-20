"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import bg1 from "../../components/images/sliderImagesv2/food3.jpg";
import googlesvg from "../../components/images/svg/7123025_logo_google_g_icon.svg";
import facebooksvg from "../../components/images/svg/317727_facebook_social media_social_icon.svg";
import inboxsvg from "../../components/images/svg/email-1-svgrepo-com.svg";
import locksvg from "../../components/images/svg/4213432_closed_lock_password_protect_secure_icon.svg";

type SetToggleMenuType = (
  value: boolean | ((prev: boolean) => boolean)
) => void;

interface Props {
  setShowLoginModal: SetToggleMenuType;
}

export default function LoginModal({ setShowLoginModal }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here
    setShowLoginModal(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setShowLoginModal(false)}
        ></div>

        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl z-50">
          <div className="p-5 pb-3">
            <h1 className="text-3xl font-bold">WELCOME!</h1>
            <p className="text-slate-700">Please choose your Sign in method.</p>
          </div>
          <div className="flex flex-col gap-2 p-5">
            <div className="flex py-2">
              <Button className="gap-1 w-72 py-6 bg-slate-200 text-black hover:bg-slate-100">
                <img
                  src={googlesvg.src}
                  alt="Google logo."
                  className="w-12 h-12"
                />
                <p className="text-base">Sign in with Google</p>
              </Button>
            </div>
            <div className="flex py-2">
              <Button className="gap-1 w-72 py-6 bg-slate-200 text-black hover:bg-slate-100">
                <img src={facebooksvg.src} alt="" className="w-8 h-8 mr-2" />
                <p className="text-base">Sign in with Facebook</p>
              </Button>
            </div>
            <div className="flex justify-center items-center mt-6">
              <p className="text-base">----- Or Sign in with Email -----</p>
            </div>
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
                    placeholder="Enter your password"
                    style={{ paddingLeft: "35px" }}
                  />
                  <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                    <img src={locksvg.src} alt="Logo" className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
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
              <Button
                onClick={() => setShowLoginModal(false)}
                className="w-72 bg-red-500 hover:bg-red-600 mt-4"
              >
                <p className="text-base">Login</p>
              </Button>
            </div>
            <div>
              <p className="text-sm">
                Don't have an account? Sign up{" "}
                <span className="text-red-500">here</span>
              </p>
            </div>
          </div>
          {/* <div className="hidden lg:w-1/2 lg:flex lg:p-5">
              //{" "}
              <img src={bg1.src} alt="" className="object-cover rounded-xl" />
              //{" "}
            </div> */}
        </div>
      </div>
    </>
  );
}
