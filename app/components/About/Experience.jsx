import React from "react";
import Image from "next/image";
import job1 from "../../../public/images/company1.png";
import Link from "next/link";

const Experience = () => {
  return (
    <div className="flex items-center p-4 gap-4 bg-primary rounded-lg">
      <div className="flex-shrink-0">
        <Image
          src={job1}
          alt="role"
          className="w-16 h-16 rounded-md bg-white"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="text-lg font-medium">Mern Developer Intern</h1>
          <p className="text-xs text-secondary">April, 01 - July, 31</p>
        </div>
        <Link
          href={`https://ayykori.net/`}
          target="_blank"
          className="text-sm text-hover opacity-80 hover:opacity-90"
        >
          AyyKori Digital Limited
        </Link>
      </div>
    </div>
  );
};

export default Experience;
