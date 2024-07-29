"use client";
import sidebarItems from "@/public/data/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftMenu = () => {
  const path = usePathname();

  return (
    <div className="flex flex-col justify-center lg:flex-col gap-8">
      <div className="h-24 flex pl-4">
        <div className="border-l-2 border-secondary h-full"></div>
      </div>
      {sidebarItems?.map((item, index) => {
        const isActive = path === item.route;
        return (
          <Link
            href={item.route}
            key={index}
            className={`group flex items-center gap-4 p-2 rounded-md transition-colors duration-300 ${
              isActive
                ? "font-semibold text-hover"
                : "text-secondary hover:text-hover"
            }`}
          >
            {item.icon}
            <h3 className="hidden lg:block opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-20px] group-hover:translate-x-0">
              {item.name}
            </h3>
          </Link>
        );
      })}
      <div className="h-24 flex pl-4">
        <div className="border-l-2 border-secondary h-full"></div>
      </div>
    </div>
  );
};

export default LeftMenu;