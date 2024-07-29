/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";
import profile from "../../../public/images/profile.png";
import { TypeAnimation } from "react-type-animation";
import SeeMore from "../SeeMore/SeeMore";

const Overview = () => {
  return (
    <div className="h-full flex flex-col gap-4 pt-10 lg:pt-20">
      {/* <div className="flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image
          src={profile}
          alt="Profile Picture"
          className="rounded-full shadow-hover h-[200px] w-[200px] shadow"
        />
      </div> */}

      <div className="flex flex-col gap-6">
        <h1 className="text-hover font-medium">Hi,</h1>
        <h2 className="text-3xl lg:text-5xl">I'm Md Forhad Hossain </h2>
        <h1 className="text-2xl lg:text-3xl font-semibold w-full">
          <span className="text-hover font-normal">
            <TypeAnimation
              sequence={[
                "Front-end Developer",
                1000,
                "ReactJS Enthusiast",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              cursorStyle="_"
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </span>
        </h1>
        <p className="text-primary leading-8 text-justify">
          Front-end developer with 2+ years of experience in creating dynamic
          web solutions. Skilled in ReactJS, Next.js, and Tailwind CSS. I focus
          on crafting pixel-perfect, responsive designs and building robust
          backend applications with Node.js and Express.js. Let's create
          something amazing together! Reach out to me.
        </p>
      </div>
      <div className="flex items-end justify-end pr-2">
        <SeeMore url={"/about"} title={`See More About Me`} />
      </div>
    </div>
  );
};

export default Overview;
