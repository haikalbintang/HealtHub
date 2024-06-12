"use client";
import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import bg1 from "../../images/sliderImagesv2/food3.jpg";
import googlesvg from "../../images/svg/7123025_logo_google_g_icon.svg";
import facebooksvg from "../../images/svg/317727_facebook_social media_social_icon.svg";
import inboxsvg from "../../images/svg/email-1-svgrepo-com.svg";
import locksvg from "../../images/svg/4213432_closed_lock_password_protect_secure_icon.svg";
import Modal from "../Modal";
import Header1 from "@/components/Header/Header1";
import SignInWith from "@/components/Button/SignIn/SignInWith";
import Header2 from "@/components/Header/Header2";

type SetToggleMenuType = (
  value: boolean | ((prev: boolean) => boolean)
) => void;

interface Props {
  setShowLoginModal: SetToggleMenuType;
  setShowRegisterModal: SetToggleMenuType;
}

export default function ModalLogin({
  setShowLoginModal,
  setShowRegisterModal,
}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const API_BASE_URL = "http://127.0.0.1:5000";

  function goToRegisterFromLogin() {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await handleLogin();
      setShowLoginModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users/login`, {
        username_or_email: loginData.username || loginData.email,
        password: loginData.password,
      });
      const access_token = response.data.token.access_token;

      localStorage.setItem("access_token", access_token);

      console.log("Login successful!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Modal setShowModal={setShowLoginModal}>
        <div className="w-1/2 flex flex-col justify-center items-center mx-auto">
          <div className="px-0 sm:p-6">
            <Header1
              h1={"Welcome Back!"}
              desc={"Please enter your credentials"}
            />
            <div className="flex flex-col gap-2 p-5">
              <SignInWith
                setShowLoginModal={setShowLoginModal}
                text={"Sign-in with Google"}
              >
                <img
                  src={googlesvg.src}
                  alt="Google logo."
                  className="w-12 h-12"
                />
              </SignInWith>
              <SignInWith
                setShowLoginModal={setShowLoginModal}
                text={"Sign-in with Facebook"}
              >
                <img
                  src={facebooksvg.src}
                  alt="Facebook logo."
                  className="w-8 h-8 mr-2"
                />
              </SignInWith>
              {/* LoginForm */}
              <div className="flex justify-center items-center mt-6 gap-4">
                <Header2 text={"Or Sign-in with Email"} />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="py-2">
                  <label
                    htmlFor="email"
                    className="text-sm cursor-pointer text-slate-600 font-semibold"
                  >
                    Email / User Name
                  </label>
                  <div className="relative ">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={loginData.email || loginData.username}
                      className="border border-gray-300 rounded-xl w-72 p-2 text-sm pl-9"
                      onChange={(e) =>
                        setLoginData({ ...loginData, email: e.target.value })
                      }
                      placeholder="Enter your email"
                      required
                    />
                    <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                      <img src={inboxsvg.src} alt="Logo" className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <label
                    htmlFor="password"
                    className="text-sm cursor-pointer text-slate-600 font-semibold"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={loginData.password}
                      className="border border-gray-300 rounded-xl w-72 p-2 text-sm pl-9"
                      onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                      }
                      placeholder="Enter your password"
                      required
                    />
                    <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                      <img src={locksvg.src} alt="Logo" className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor="remember"
                      className="text-xs cursor-pointer text-slate-600 hover:text-slate-800 active:text-slate-800"
                    >
                      Remember Me
                    </label>
                  </div>
                  <div
                    onClick={() => setShowLoginModal(false)}
                    className="cursor-pointer"
                  >
                    <p className="text-xs border-b-2 border-slate-700 hover:border-slate-800 text-slate-600 hover:text-slate-800">
                      Forgot Password?
                    </p>
                  </div>
                </div>
                <div>
                  <Button
                    className="w-72 bg-red-500 hover:bg-red-600 mt-4"
                    type="submit"
                    value={"Login"}
                  >
                    <p className="text-base">Login</p>
                  </Button>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-slate-700">
                    Don&apos;t have an account? Sign up{" "}
                    <span
                      onClick={() => goToRegisterFromLogin()}
                      className="text-red-500 hover:text-red-600 cursor-pointer hover:font-semibold"
                    >
                      here
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className="absolute top-1 right-1">
            <button
              onClick={() => setShowLoginModal(false)}
              type="button"
              className="bg-transparent rounded-md m-3 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden w-1/2 md:flex md:min-w-96">
          <img
            src={bg1.src}
            alt=""
            className="object-cover rounded-tr-xl rounded-br-xl"
          />
        </div>
      </Modal>
    </>
  );
}
