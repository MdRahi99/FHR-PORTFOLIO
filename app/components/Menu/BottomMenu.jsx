"use client";
import React from "react";
import SeeMore from "../SeeMore/SeeMore";
import { usePathname } from "next/navigation";

const pathData = [
  { url: "/", title: "See More About Me", redirect: "/about" },
  { url: "/about", title: "Lets Continue To Projects", redirect: "/projects" },
  { url: "/projects", title: "Lets Go To My Resume", redirect: "/resume" },
  { url: "/resume", title: "Are you convinced to contact me now ?", redirect: "/contact" },
  { url: "/contact", title: "Go Back Home", redirect: "/" },
];

const BottomMenu = () => {
  const pathName = usePathname();
  const redirectPathData = pathData.find((path) => path.url === pathName);
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-secondary text-sm">
        Designed & Built by <span className="font-medium text-hover">FHR</span>
      </h1>
      <div className="pr-2">
        <SeeMore url={redirectPathData?.redirect} title={redirectPathData.title} />
      </div>
    </div>
  );
};

export default BottomMenu;
