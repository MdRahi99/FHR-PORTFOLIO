import React from "react";

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
    </div>
  );
};

export default Resume;
