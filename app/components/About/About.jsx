"use client";

import React from "react";
import Skills from "./Skills";
import Profile from "./Profile";
import Experience from "./Experience";

const About = ({profileData, skillsData, experienceData}) => {
 
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold mb-4">About Me</h1>
        <div className="w-20 h-1 bg-hover mb-6"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left column */}
        <div className="flex-1 bg-secondary rounded-lg p-4">
          <Profile data={profileData} />
        </div>

        {/* Right column */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-secondary rounded-lg p-6">
            <h2 className="text-lg font-medium mb-2">Skills</h2>
            <div className="border border-hover w-8 mb-6"></div>
            <Skills data={skillsData} />
          </div>
          <div className="bg-secondary rounded-lg p-6">
            <h2 className="text-lg font-medium mb-2">Work Experience</h2>
            <div className="border border-hover w-8 mb-6"></div>
            <Experience data={experienceData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
