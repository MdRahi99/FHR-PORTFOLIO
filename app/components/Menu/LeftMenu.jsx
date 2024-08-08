"use client";
import sidebarItems from "@/public/data/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftMenu = () => {
  const path = usePathname();

  return (
    <div className="flex flex-col justify-center rounded-lg lg:flex-col gap-2">
      {sidebarItems?.map((item, index) => {
        const isActive = path === item.route;
        const isLastItem = index === sidebarItems.length - 1;

        return (
          <div key={index}>
            <Link
              href={item.route}
              className={`group flex items-center gap-4 p-2 rounded-md transition-colors duration-300 ${
                isActive
                  ? "font-semibold text-hover"
                  : "text-secondary hover:text-hover"
              }`}
            >
              {item.icon}
              <h3 className="hidden lg:block opacity-100">{item.name}</h3>
            </Link>
            {!isLastItem && (
              <div className="h-20 flex pl-5">
                <div className="border-l-2 border-dashed border-secondary h-full"></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LeftMenu;
