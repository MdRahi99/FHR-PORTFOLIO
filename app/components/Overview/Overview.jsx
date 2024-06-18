'use client'
import Image from 'next/image';
import React from 'react';
import profile from '../../../public/images/profile.png';
import { TypeAnimation } from 'react-type-animation';

const Overview = () => {
  return (
    <div className="px-4 lg:px-12 flex flex-col items-center justify-center gap-8 text-justify lg:text-center py-12">
      <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image
          src={profile}
          alt="Profile Picture"
          className="rounded-full shadow-orange-400 h-[200px] w-[200px] shadow"
        />
      </div>

      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold">
          <TypeAnimation
            sequence={[
              "Hey, I'm Rahi",
              1000, // Waits 1s
              "Front-end Developer",
              1000, // Waits 1s
              "ReactJS Enthusiast",
              1000, // Waits 1s
            ]}
            wrapper="span"
            cursor={false}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
          />
        </h1>
        <p className="text-gray-500 text-lg leading-8">
          Front-end developer with 2+ years of experience in creating dynamic web solutions. Skilled in ReactJS, NextJS, and Tailwind CSS. I build pixel-perfect, responsive designs. I also craft robust backend applications with NodeJS and ExpressJS. Let's create something amazing together! Reach out to me.
        </p>
      </div>
    </div>
  );
};

export default Overview;
