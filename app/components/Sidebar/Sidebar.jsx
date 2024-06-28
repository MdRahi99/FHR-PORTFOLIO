'use client';

import sidebarItems from '@/public/data/sidebar';
import Link from 'next/link';
import profile from "../../../public/images/profile.png";
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import socialIcons from '@/public/data/socialIcons';

const Sidebar = () => {
  const path = usePathname();

  return (
    <div className="p-4 lg:p-6 bg-white border-r-4 lg:h-screen rounded-t-3xl lg:rounded-r-3xl flex flex-col gap-8">

      {/* Header Section */}
      <div className="hidden lg:flex items-center gap-3 lg:gap-4 py-3 lg:py-4 px-4 lg:px-6 bg-gray-100 rounded-t-3xl">
        <div className="relative h-12 w-12">
          <Image
            src={profile}
            alt="Profile Picture"
            className="rounded-full"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <p className="font-semibold text-lg text-gray-800 mb-1">MD Forhad Hossain</p>
          <p className="text-sm text-gray-600">Front-end Developer</p>
        </div>
      </div>

      {/* Sidebar Links */}
      <div className="flex flex-row justify-between lg:flex-col gap-3 lg:gap-4 px-4">
        {sidebarItems?.map((item, index) => {
          const isActive = path === item.route;
          return (
            <Link
              href={item.route}
              key={index}
              className={`group flex items-center gap-3 lg:gap-4 py-2 lg:py-3 px-3 lg:px-5 rounded-md transition-colors duration-300 ${isActive ? 'font-semibold text-orange-600 bg-gray-100' : 'text-gray-600 hover:text-orange-600 hover:bg-gray-200'
                }`}
            >
              <span className="text-xl lg:text-2xl transition-transform duration-300 group-hover:scale-105">{item.icon}</span>
              <h3 className="hidden lg:flex lg:transition-opacity lg:duration-300">
                {item.name}
              </h3>
            </Link>
          );
        })}
      </div>

      {/* Footer Section */}
      <div className="p-4 hidden bg-gray-100 rounded-b-3xl mt-auto lg:flex flex-col gap-4 items-center justify-center">
        <p className="text-gray-600 text-sm uppercase">Stay connected</p>
        <div className="flex gap-8">
          {socialIcons.map((socialIcon, index) => (
            <a
              href={socialIcon.url}
              key={index}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-500 hover:bg-blue-600 transition-colors duration-300"
            >
              {socialIcon.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
