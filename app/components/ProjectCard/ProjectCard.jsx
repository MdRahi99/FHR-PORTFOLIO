import Link from "next/link";
import React from "react";
import { FiFolder, FiGithub } from "react-icons/fi";
import { TbExternalLink } from "react-icons/tb";
import project from "../../../public/images/project.jpg";
import Image from "next/image";

const ProjectCard = ({ content }) => {
  console.log(content);
  return (
    <div className="relative w-full rounded-md h-96 lg:h-64 shadow-lg overflow-hidden">
      {/* Background image */}
      <Image
        src={project}
        alt="Project"
        className="absolute inset-0 rounded-md opacity-90 w-full h-full object-cover"
      />

      {/* Glass effect on hover for larger screens, visible by default on small screens */}
      <div className="absolute inset-0 bg-primary bg-opacity-90 lg:bg-opacity-80 backdrop-blur-sm opacity-100 lg:opacity-0 lg:hover:opacity-100 transition-opacity duration-300 ease-in-out p-4 flex flex-col justify-between">
        <div className="flex justify-between w-full items-center">
          <FiFolder className="text-hover text-2xl" />
          <div className="flex items-center gap-4">
            <Link href="/" className="text-hover">
              <FiGithub className="text-xl text-primary" />
            </Link>
            <Link href="/" className="text-hover">
              <TbExternalLink className="text-2xl text-primary" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-medium text-white">
            Integrating Algolia Search with WordPress Multisite
          </h3>
          <p className="text-primary text-sm">
            Building a custom multisite compatible WordPress plugin to build
            global search with Algolia
          </p>
        </div>
        <div className="flex space-x-2">
          <span className="bg-secondary px-4 py-2 text-xs rounded text-white">Algolia</span>
          <span className="bg-secondary px-4 py-2 text-xs rounded text-white">WordPress</span>
          <span className="bg-secondary px-4 py-2 text-xs rounded text-white">PHP</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
