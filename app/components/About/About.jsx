"use client";

import React, { useState } from "react";
import { LuCircleDashed } from "react-icons/lu";
import Modal from "../Modal/Modal";
import SeeMore from "../SeeMore/SeeMore";

const GlassCard = ({ title, children, onViewClick }) => (
  <div className="relative group overflow-hidden border border-hover bg-opacity-90 backdrop-blur-lg transition-all duration-300 w-full h-60">
    <div className="absolute inset-0 bg-hover opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    <div className="p-6 h-full flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold text-primary mb-4">{title}</h2>
      {children}
      <button
        onClick={onViewClick}
        className="absolute hover:animate-spin text-hover p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <LuCircleDashed size={24} />
      </button>
    </div>
  </div>
);

const About = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    content: "",
  });

  const openModal = (title, content) => {
    setModalState({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold mb-4">About Me</h1>
        <div className="w-20 h-1 bg-hover mb-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between">
        <GlassCard
          title="Personal"
          onViewClick={() =>
            openModal("Personal", "Personal details content goes here.")
          }
        >
          <p className="text-secondary">Brief personal info...</p>
        </GlassCard>
        <GlassCard
          title="Experience"
          onViewClick={() =>
            openModal("Experience", "Work experience details go here.")
          }
        >
          <p className="text-secondary">Brief experience info...</p>
        </GlassCard>
        <GlassCard
          title="Skills"
          onViewClick={() =>
            openModal("Skills", "List of skills and proficiencies.")
          }
        >
          <p className="text-secondary">Key skills overview...</p>
        </GlassCard>
        <GlassCard
          title="Others"
          onViewClick={() => openModal("Others", "List")}
        >
          <p className="text-secondary">Key skills overview...</p>
        </GlassCard>
      </div>

      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        content={modalState.content}
      />

      <div className="flex items-end justify-end pr-2">
        <SeeMore url={"/projects"} title={`Lets Continue To Projects`} />
      </div>
    </div>
  );
};

export default About;
