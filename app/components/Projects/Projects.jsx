"use client";
import React, { useState } from "react";
import ProductCard from "../ProjectCard/ProjectCard";
import { FaExpand } from "react-icons/fa";
import dynamic from "next/dynamic";

// Dynamically import SideDrawer to avoid SSR issues
const SideDrawer = dynamic(() => import("../SideDrawer/SideDrawer"), {
  ssr: false,
});

const Projects = ({ projectsData, categoryData }) => {
  const allCategory = { _id: "all", name: "All" };
  const categories = [allCategory, ...categoryData];
  const [activeTab, setActiveTab] = useState(allCategory.name);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData?.filter((project) => project.category === activeTab);

  const handleDrawerOpen = (project) => {
    setSelectedProject(project);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-center justify-between">
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">Projects</h1>
          <div className="w-20 h-1 bg-hover"></div>
        </div>
        {/* Tabs */}
        <div className="flex flex-col">
          <div className="flex gap-8 flex-wrap">
            {categories?.map((tab) => (
              <button
                key={tab._id}
                className={`relative p-2 font-medium text-sm sm:text-base transition-colors duration-200 ${
                  activeTab === tab?.name
                    ? "text-hover"
                    : "text-primary hover:text-hover"
                }`}
                onClick={() => setActiveTab(tab?.name)}
              >
                {tab.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] transition-all duration-200 ${
                    activeTab === tab?.name ? "bg-hover" : "bg-transparent"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {filteredProjects?.map((content) => (
          <div
            key={content?._id}
            className="mb-2 flex flex-col gap-4 bg-secondary pb-3 rounded-lg"
          >
            <ProductCard content={content} handleDrawerOpen={handleDrawerOpen} />
            <button onClick={() => handleDrawerOpen(content)} className="flex items-center justify-between px-4">
              <h1 className="text-center">{content?.title}</h1>
              <div>
                <FaExpand
                  className="text-lg hover:text-hover"
                  title="View"
                />
              </div>
            </button>
          </div>
        ))}
      </div>
      {/* Drawer */}
      <SideDrawer
        isOpen={drawerOpen}
        onClose={handleDrawerClose}
        content={selectedProject}
      />
    </div>
  );
};

export default Projects;
