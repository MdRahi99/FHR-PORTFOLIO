'use client'

import React, { useState } from 'react';
import { LuCircleDashed } from "react-icons/lu";
import Modal from '../Modal/Modal';

const GlassCard = ({ title, children, onViewClick }) => (
    <div className="relative group overflow-hidden bg-white bg-opacity-90 backdrop-blur-lg transition-all duration-300 w-full h-64 border-gray-200">
        <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
        <div className="p-6 h-full flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
            {children}
            <button
                onClick={onViewClick}
                className="absolute hover:animate-spin bg-gray-100 p-2 rounded-full text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-200"
            >
                <LuCircleDashed size={24} />
            </button>
        </div>
    </div>
);

const About = () => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        title: '',
        content: '',
    });

    const openModal = (title, content) => {
        setModalState({ isOpen: true, title, content });
    };

    const closeModal = () => {
        setModalState({ ...modalState, isOpen: false });
    };

    return (
        <div className='min-h-screen px-4 lg:px-12 py-12 flex flex-col'>
            <div>
                <h1 className="text-2xl lg:text-3xl font-bold mb-4">About Me</h1>
                <div className="w-20 h-1 bg-orange-500 mb-6"></div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between'>
                <GlassCard
                    title="Personal"
                    onViewClick={() => openModal('Personal', 'Personal details content goes here.')}
                >
                    <p className="text-gray-600">Brief personal info...</p>
                </GlassCard>
                <GlassCard
                    title="Experience"
                    onViewClick={() => openModal('Experience', 'Work experience details go here.')}
                >
                    <p className="text-gray-600">Brief experience info...</p>
                </GlassCard>
                <GlassCard
                    title="Skills"
                    onViewClick={() => openModal('Skills', 'List of skills and proficiencies.')}
                >
                    <p className="text-gray-600">Key skills overview...</p>
                </GlassCard>
                <GlassCard
                    title="Others"
                    onViewClick={() => openModal('Others', 'List')}
                >
                    <p className="text-gray-600">Key skills overview...</p>
                </GlassCard>
            </div>

            <Modal
                isOpen={modalState.isOpen}
                onClose={closeModal}
                title={modalState.title}
                content={modalState.content}
            />
        </div>
    );
};

export default About;