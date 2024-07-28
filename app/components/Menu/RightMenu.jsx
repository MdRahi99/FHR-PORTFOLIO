"use client";
import socialIcons from "@/public/data/socialIcons";
import React from "react";

const LeftMenu = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="border-l-2 border-secondary h-24"></div>
      <div className="rotated-text text-primary flex flex-col gap-12">
        {socialIcons.map((socialIcon, index) => (
          <a
            href={socialIcon.url}
            key={index}
            className="flex items-center justify-center text-xl text-secondary hover:text-hover transition-colors duration-300"
          >
            {socialIcon.icon}
          </a>
        ))}
      </div>
      <div className="border-l-2 border-secondary h-24"></div>
    </div>
  );
};

export default LeftMenu;
