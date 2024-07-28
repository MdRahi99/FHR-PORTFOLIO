"use client";
import React, { useState } from "react";
import tabsData from "@/public/data/about_tabs";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:items-center justify-between">
      <div className="">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4">Projects</h1>
        <div className="w-20 h-1 bg-hover"></div>
      </div>
      {/* Tabs */}
      <div className="flex flex-col">
        <div className="flex gap-12 flex-wrap">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              className={`relative p-2 font-medium text-sm sm:text-base transition-colors duration-200 ${
                activeTab === tab.id
                  ? "text-hover"
                  : "text-primary hover:text-hover"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] transition-all duration-200 ${
                  activeTab === tab.id ? "bg-hover" : "bg-transparent"
                }`}
              />
            </button>
          ))}
        </div>
        {/* <div className="mt-4">
    {tabsData.map((tab) => (
      <div
        key={tab.id}
        className={`${activeTab === tab.id ? 'block' : 'hidden'
          }`}
      >
        <div>{tab.content}</div>
      </div>
    ))}
  </div> */}
      </div>
    </div>
  );
};

export default Projects;
