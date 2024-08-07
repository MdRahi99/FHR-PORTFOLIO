"use client";
import React, { useState } from "react";
import tabsData from "@/public/data/about_tabs";
import ProductCard from "../ProjectCard/ProjectCard";

const Projects = ({projectsData}) => {
  const [activeTab, setActiveTab] = useState(projectsData[0]?.category);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-center justify-between">
        <div className="">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">Projects</h1>
          <div className="w-20 h-1 bg-hover"></div>
        </div>
        {/* Tabs */}
        <div className="flex flex-col">
          <div className="flex gap-8 flex-wrap">
            {projectsData.map((tab) => (
              <button
                key={tab._id}
                className={`relative p-2 font-medium text-sm sm:text-base transition-colors duration-200 ${
                  activeTab === tab?.category
                    ? "text-hover"
                    : "text-primary hover:text-hover"
                }`}
                onClick={() => setActiveTab(tab?.category)}
              >
                {tab.category}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] transition-all duration-200 ${
                    activeTab === tab?.category ? "bg-hover" : "bg-transparent"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {projectsData?.map((content) => (
          <ProductCard key={content._id} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
