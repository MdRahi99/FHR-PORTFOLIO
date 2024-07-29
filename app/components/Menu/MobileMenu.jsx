"use client";

import sidebarItems from "@/public/data/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileMenu = () => {
  const path = usePathname();

  return (
    <div className="px-4 py-2 bg-secondary flex flex-col gap-8">
      <div className="flex flex-row justify-between gap-3 px-4">
        {sidebarItems?.map((item, index) => {
          const isActive = path === item.route;
          return (
            <Link
              href={item.route}
              key={index}
              className={`group flex items-center gap-3 py-2 px-3 rounded-md transition-colors duration-300 ${
                isActive
                  ? "font-semibold text-hover"
                  : "text-primary hover:text-secondary"
              }`}
            >
              <span className="text-xl transition-transform duration-300 group-hover:scale-105">
                {item.icon}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
