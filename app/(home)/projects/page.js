'use client'
import React, { useState } from 'react';
import tabsData from '@/public/data/about_tabs';

const Projects = () => {

    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    return (
        <div className='min-h-screen px-4 lg:px-12 py-12 flex flex-col'>
            <div className="mb-8">
                <h1 className="text-2xl lg:text-3xl font-bold mb-4">Projects</h1>
                <div className="w-20 h-1 bg-orange-500 mb-6"></div>
            </div>
            {/* Tabs */}
            <div className="flex flex-col">
                <div className="flex gap-4 lg:gap-16 flex-wrap border-b border-gray-200">
                    {tabsData.map((tab) => (
                        <button
                            key={tab.id}
                            className={`px-4 py-2 font-medium text-sm sm:text-base transition-colors duration-200 ${activeTab === tab.id
                                ? 'text-orange-500 border-b-2 border-orange-500'
                                : 'text-gray-500 hover:text-orange-500'
                                }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.title}
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