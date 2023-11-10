"use client";

import { useSelector } from "react-redux";

export default function Features() {
  const themeToggle =
    useSelector((state) => state.themesStore.darkMode) ||
    window.localStorage.getItem("darkMode");

  return (
    <div className="flex flex-col items-center">
      {/* Title */}
      <div className="sm:text-5xl text-4xl font-bold text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, laudantium.
      </div>
      <div className=" grid sm:grid-cols-2">
        {/* LeftSide : Image */}
        <div className="w-full sm:p-10">
          <img
            src="/IMAGES/p1.jpeg"
            alt=""
            className="h-[20rem] sm:w-[30rem] w-full object-cover"
          />
        </div>
        {/* RightSide : Text Area */}
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="sm:text-3xl text-2xl text-center font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, in!
          </div>
          <div className="sm:text-xl text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odit
            omnis at officiis! Alias sapiente soluta debitis cum quae, eum
            voluptatem rerum minus repudiandae laborum aliquid facere
            praesentium, explicabo ipsum!
          </div>
          <button
            className={`${
              themeToggle === "light"
                ? "bg-black text-white"
                : "bg-white text-black"
            } w-[10rem] rounded-xl  p-2`}
          >
            Read More...
          </button>
        </div>
      </div>
    </div>
  );
}
