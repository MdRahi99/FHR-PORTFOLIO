"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import LogoMarquee from "../LogoMarquee/LogoMarquee";
import Link from "next/link";
import { BsFiletypePdf } from "react-icons/bs";

const Overview = ({ data }) => {
  const { name, profileInfo, designation, progress } = data;

  const sequence = designation.length && [...designation, 1000];

  return (
    <div className="h-full flex flex-col gap-4 pt-10 lg:pt-20">
      <div className="flex flex-col gap-4 lg:gap-8">
        <h1 className="text-hover font-medium">Hi,</h1>
        <h2 className="text-3xl lg:text-5xl">I&apos;m {name}</h2>
        <h1 className="text-2xl lg:text-3xl font-semibold w-full">
          <span className="text-hover font-normal">
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              cursor={true}
              cursorStyle="_"
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </span>
        </h1>
        <p className="text-primary leading-8 text-justify">{profileInfo}</p>
      </div>

      <Link
        href="/resume"
        className="lg:hidden flex w-32 items-center justify-center py-1.5 my-4 rounded-md border-2 hover:border-primary hover:text-primary border-hover text-hover transition-all duration-300 ease-in-out"
      >
        <BsFiletypePdf className="mr-2" />
        <span className="font-medium text-sm">Resume</span>
      </Link>

      <div className="pt-4 lg:pt-12">
        <LogoMarquee progress={progress} />
      </div>
    </div>
  );
};

export default Overview;
