import React from "react";
import Image from "next/image";
import Link from "next/link";

const Experience = ({data}) => {
  const { companyName, companyUrl, duration, role, companyLogo } = data;
  return (
    <div className="flex items-center p-4 gap-4 bg-primary rounded-lg">
      <div className="flex-shrink-0">
        <Image
          src={companyLogo}
          alt="role"
          width={900}
          height={900}
          className="w-16 h-16 rounded-md bg-white"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="text-lg font-medium">{role}</h1>
          <p className="text-xs text-secondary">{duration}</p>
        </div>
        <Link
          href={companyUrl}
          target="_blank"
          className="text-sm text-hover opacity-80 hover:opacity-90"
        >
          {companyName}
        </Link>
      </div>
    </div>
  );
};

export default Experience;
