"use client";

import { useState } from "react";
import "../../app/globals.css";
import { ThemeAction } from "@/redux/slices/themes";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const styles = {
  social_styling: "p-2 rounded-full",
};

export default function Navbar() {
  const dispatch = useDispatch();

  const themeToggle =
    useSelector((state) => state.themesStore.darkMode) ||
    window.localStorage.getItem("darkMode");

  const handleToggle = () => {
    dispatch(ThemeAction(themeToggle));
  };

  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <div className="flex w-full items-center justify-between sm:p-5 py-5 select-none">
      {/* Socials Icons */}
      <ul className="list-none flex gap-2 sm:text-2xl text-lg">
        <li className="bg-blue-600 text-white rounded-full p-2">
          <FiFacebook />
        </li>
        <li className="bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 text-white rounded-full p-2">
          <FiInstagram />
        </li>
        <li className="bg-blue-400 text-white rounded-full p-2">
          <FiTwitter />
        </li>
        <li className="bg-red-500 text-white rounded-full p-2">
          <FiYoutube />
        </li>
      </ul>
      {/* Title Navbar */}
      <Link href="/" className="text-3xl font-bold">Blog</Link>
      {/* Menus */}
      <ul className="md:flex hidden items-center gap-2">
        <li
          onClick={handleToggle}
          className={`${
            themeToggle == "dark" ? "bg-white" : "bg-black"
          } relative flex justify-between rounded-3xl w-[4rem] p-1 ${themeToggle}`}
        >
          <img src="/IMAGES/sun.png" alt="" className="h-6 w-6" />
          <div
            className={`absolute top-1 h-6 w-6 rounded-full transition-all duration-500 ${
              themeToggle == "dark"
                ? "translate-x-[34px] bg-black"
                : "translate-x-0 bg-white"
            }`}
          />

          <img src="/IMAGES/moon.png" alt="" className="h-6 w-6" />
        </li>
        <li className="">Homepage</li>
        <li className="">Contact</li>
        <li className="">About</li>
        <li className="">Login</li>
      </ul>
      <div className="relative md:hidden block">
        <RxHamburgerMenu
          size={40}
          onClick={() => setToggleNavbar(!toggleNavbar)}
          className=" font-bold hover:bg-gray-200 rounded-full p-2"
        />
        {toggleNavbar && (
          <ul className="absolute top-10 left-[-8rem] rounded-2xl p-2 w-[10rem] flex flex-col items-center gap-2 bg-green-500">
            <li
              onClick={handleToggle}
              className={`${
                themeToggle == "dark" ? "bg-white" : "bg-black"
              } relative flex justify-between rounded-3xl w-[4rem] p-1 ${themeToggle}`}
            >
              <img src="/IMAGES/sun.png" alt="" className="h-6 w-6" />
              <div
                className={`absolute top-1 h-6 w-6 rounded-full transition-all duration-500 ${
                  themeToggle == "dark"
                    ? "translate-x-[34px] bg-black"
                    : "translate-x-0 bg-white"
                }`}
              />

              <img src="/IMAGES/moon.png" alt="" className="h-6 w-6" />
            </li>
            <li className="">Homepage</li>
            <li className="">Contact</li>
            <li className="">About</li>
            <li className="">Login</li>
          </ul>
        )}
      </div>
    </div>
  );
}
