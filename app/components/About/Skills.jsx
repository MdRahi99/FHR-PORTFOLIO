import skillsData from '@/public/data/skillsData';
import React from 'react';

const Skills = () => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      {skillsData.map((skill, index) => (
        <div key={index} className="flex items-center gap-1 bg-primary text-primary px-4 py-2 rounded-md">
          {skill.icon}
          <span className="text-sm font-medium">{skill.title}</span>
        </div>
      ))}
    </div>
  ); 
};

export default Skills;