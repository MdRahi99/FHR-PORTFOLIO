import React from 'react';
import { FaDatabase } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa6';
import { RiHtml5Line, RiCss3Line, RiReactjsLine, RiFireLine, RiGitBranchLine } from 'react-icons/ri';
import { SiTailwindcss, SiNextdotjs, SiExpress } from 'react-icons/si';

const skillsData = [
  {
    icon: <RiHtml5Line className="text-4xl" />,
    title: 'HTML'
  },
  {
    icon: <RiCss3Line className="text-4xl" />,
    title: 'CSS'
  },
  {
    icon: <SiTailwindcss className="text-4xl" />,
    title: 'Tailwind CSS'
  },
  {
    icon: <RiReactjsLine className="text-4xl" />,
    title: 'React.js'
  },
  {
    icon: <SiNextdotjs className="text-4xl" />,
    title: 'Next.js'
  },
  {
    icon: <SiExpress className="text-4xl" />,
    title: 'Express.js',
  },
  {
    icon: <FaNodeJs className="text-4xl" />,
    title: 'Node.js',
  },
  {
    icon: <FaDatabase className="text-4xl" />,
    title: 'MongoDB',
  },
  {
    icon: <RiFireLine className="text-4xl" />,
    title: 'Firebase'
  },
  // {
  //   icon: <RiGitBranchLine className="text-4xl" />,
  //   title: 'Git'
  // }
];

export default skillsData;