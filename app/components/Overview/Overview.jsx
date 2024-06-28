/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image';
import React from 'react';
import profile from '../../../public/images/profile.png';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { ImProfile } from "react-icons/im";
import { GrContact } from "react-icons/gr";

const Overview = () => {
  return (
    <div className="min-h-screen opacity-75 px-4 lg:px-12 flex flex-col gap-4 py-4 lg:py-12">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold mb-4">Overview</h1>
        <div className="w-20 h-1 bg-orange-500 mb-6"></div>
      </div>
      <div className="flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image
          src={profile}
          alt="Profile Picture"
          className="rounded-full shadow-orange-400 h-[200px] w-[200px] shadow"
        />
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-2xl lg:text-3xl text-center font-semibold w-full">
          Hey, I'm Rahi{' '}
          <span className="text-orange-500 font-normal">
            (
            <TypeAnimation
              sequence={[
                "Front-end Developer",
                1000,
                "ReactJS Enthusiast",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              cursorStyle="_"
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
            )
          </span>
        </h1>
        <p className="text-gray-700 text-sm lg:text-lg leading-8 text-justify">
          Front-end developer with 2+ years of experience in creating dynamic web solutions. Skilled in ReactJS, Next.js, and Tailwind CSS. I focus on crafting pixel-perfect, responsive designs and building robust backend applications with Node.js and Express.js. Let's create something amazing together! Reach out to me.
        </p>
      </div>

      <div className="flex justify-center gap-8 mb-4 mt-0 lg:mb-0 lg:mt-8">
        <Link
          href="/about"
          className="flex w-full lg:w-1/6 items-center justify-center py-2 lg:py-3 rounded-lg border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"
        >
          <ImProfile className="text-xl mr-2" />
          <span className="font-medium">Explore</span>
        </Link>
        <Link
          href="/contact"
          className="flex w-full lg:w-1/6 items-center justify-center py-2 lg:py-3 rounded-lg border-2 border-orange-500 hover:text-orange-500 hover:bg-gray-50 bg-orange-500 text-white transition-all duration-300 ease-in-out"
        >
          <GrContact className="text-xl mr-2" />
          <span className="font-medium">Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Overview;