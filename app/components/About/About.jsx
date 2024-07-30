"use client";

import React, { useState } from "react";
import Modal from "../Modal/Modal";

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
    </div>
  );
};

export default About;
