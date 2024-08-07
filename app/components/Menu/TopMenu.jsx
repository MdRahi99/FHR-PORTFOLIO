'use client'
import React, { useState } from "react";
import Link from "next/link";
import { BsFiletypePdf } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "./MobileMenu";

const TopMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex items-center justify-between">
      <Link href='/' className="p-2 rounded-tl-xl rounded-br-xl border-[3px] w-11 h-11 border-hover flex items-center justify-center">
        <h1 className="font-medium text-hover text-2xl">R</h1>
      </Link>

      <button onClick={toggleDrawer} className="lg:hidden p-2">
        <FiMenu className="text-2xl" />
      </button>

      {/* Drawer Menu */}
      <MobileMenu isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      <Link
        href='/resume'
        className="hidden lg:flex w-32 items-center justify-center py-1.5 rounded-md border-2 hover:border-primary hover:text-primary border-hover text-hover transition-all duration-300 ease-in-out"
      >
        <BsFiletypePdf className="mr-2" />
        <span className="font-medium text-sm">Resume</span>
      </Link>
    </div>
  );
};

export default TopMenu;
