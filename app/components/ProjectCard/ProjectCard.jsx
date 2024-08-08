import Link from "next/link";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { TbExternalLink } from "react-icons/tb";
import Image from "next/image";

const ProjectCard = ({ content, handleDrawerOpen }) => {
  const { title, image, sourceCode, url, type, description, technologies } =
    content;
  return (
    <div className="relative rounded-t-lg w-full h-80 lg:h-64 shadow-lg overflow-hidden">
      {/* Background image */}
      <Image
        src={image}
        alt="Project"
        width={900}
        height={900}
        className="absolute inset-0 rounded-t-lg opacity-90 w-full h-full object-cover"
      />

      {/* Glass effect on hover for larger screens, visible by default on small screens */}
      <div className="absolute inset-0 bg-primary bg-opacity-100 lg:bg-opacity-80 backdrop-blur-sm opacity-95 lg:opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out p-4 flex flex-col justify-between">
        <div className="flex justify-between w-full items-center">
          <div>
            <span className="text-primary text-sm">{type}</span>
            <div className="w-8 h-[1px] bg-hover"></div>
          </div>
          <div className="flex items-center gap-4">
            <Link href={sourceCode} target="_blank" className="text-hover">
              <FiGithub className="text-xl text-primary hover:text-hover" />
            </Link>
            <Link href={url} target="_blank" className="text-hover">
              <TbExternalLink className="text-2xl text-primary hover:text-hover" />
            </Link>
          </div>
        </div>
        <button onClick={() => handleDrawerOpen(content)} className="flex flex-col gap-3">
          <h3 className="font-medium text-white text-lg">{title}</h3>
          <h4 className="font-light lg:block hidden text-left text-primary text-sm">
            {description?.slice(0, 120)}...
          </h4>
          <h4 className="font-light block lg:hidden text-left text-primary text-sm">
            {description?.slice(0, 180)}...
          </h4>
        </button>
        <button onClick={() => handleDrawerOpen(content)} className="flex space-x-2">
          {technologies?.slice(0, 3).map((tech, index) => {
            return (
              <span key={index} className="bg-primary px-4 py-2 text-xs rounded text-white">
                {tech?.title}
              </span>
            );
          })}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
