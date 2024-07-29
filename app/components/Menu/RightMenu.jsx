"use client";
import socialIcons from "@/public/data/socialIcons";
import React from "react";

const RightMenu = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="border-l-2 border-secondary h-24"></div>
      <div className="rotated-text text-primary flex flex-col gap-12">
        {socialIcons.map((socialIcon, index) => (
          <a
            href={socialIcon.url}
            key={index}
            className="group flex items-center justify-center text-xl text-secondary hover:text-hover transition-colors duration-300 relative"
          >
            <span className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[20px] text-sm group-hover:translate-x-0 whitespace-nowrap">
              {socialIcon.name}
            </span>
            {socialIcon.icon}
          </a>
        ))}
      </div>
      <div className="border-l-2 border-secondary h-24"></div>
    </div>
  );
};

export default RightMenu;
