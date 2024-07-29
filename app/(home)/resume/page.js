import React from "react";
import SeeMore from "@/app/components/SeeMore/SeeMore";

const Resume = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4">Resume</h1>
        <div className="w-20 h-1 bg-hover"></div>
      </div>
      <div className="flex flex-col bg-primary text-white">
        <div className="bg-primary p-1 rounded-lg shadow-lg">
          <embed
            src="/resume.pdf"
            type="application/pdf"
            width="800"
            height="450"
          />
        </div>
      </div>

      <div className="flex items-end justify-end pr-2">
        <SeeMore
          url={"/contact"}
          title={`Are you convinced to contact me now ?`}
        />
      </div>
    </div>
  );
};

export default Resume;
