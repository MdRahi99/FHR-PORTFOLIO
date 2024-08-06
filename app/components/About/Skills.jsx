import React from 'react';

const Skills = ({data}) => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      {data?.map((skill) => (
        <div key={skill._id} className="flex items-center gap-1 bg-primary text-primary px-4 py-2 rounded-md">
          {/* {skill.icon} */}
          <span className="text-sm font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  ); 
};

export default Skills;