import Image from "next/image";
import React from "react";
import resume from "../../../public/images/resume.jpg";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

const Resume = () => {
  const url = 'https://drive.google.com/file/d/1yE2FQmp5aFW-FlgNpFtqx2mox5ccx9AE/view?usp=sharing'
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">Resume</h1>
            <div className="w-20 h-1 bg-hover"></div>
          </div>
          <Link href={url} target="_blank" className="flex items-center gap-1 px-4 py-2 rounded-md hover:bg-primary hover:text-hover cursor-pointer bg-secondary">
            <FiDownload className="text-xl" />{" "}
            View
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src={resume} alt="Resume" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Resume;
