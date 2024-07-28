'use client'
import { BsFiletypePdf } from "react-icons/bs";
import React from "react";

const TopMenu = () => {

  const handleBtn = () => {
    window.open('/resume.pdf', '_blank');
  }

  return (
    <div className="flex items-center justify-between">
      <div className="p-2 rounded-tl-xl rounded-br-xl border-[3px] w-11 h-11 border-hover flex items-center justify-center">
        <h1 className="font-medium text-hover text-2xl">R</h1>
      </div>

      <button
          onClick={handleBtn}
          className="flex w-32 items-center justify-center py-1.5 rounded-xl border-2 hover:border-primary hover:text-primary border-hover text-hover transition-all duration-300 ease-in-out"
        >
          <BsFiletypePdf className="text-lg mr-2" />
          <span className="font-medium">Resume</span>
      </button>
    </div>
  );
};

export default TopMenu;
