import React from "react";
import Image from "next/image";
import profile from "../../../public/images/profile.png";
import Link from "next/link";
import { FiCode } from "react-icons/fi";

const Profile = () => {
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-8">
      <div className="flex flex-col items-center gap-2">
        <div className="rounded-full overflow-hidden w-48 h-48">
          {/* Image placeholder */}
          <Image src={profile} alt="profile" />
          <div className="w-full h-full bg-primary"></div>
        </div>
        <h2 className="text-xl font-bold">Md Forhad Hossain Rahi</h2>
        <p className="text-secondary">fhrstation21@gmail.com</p>
      </div>
      <div className="text-center flex flex-col gap-2">
        <h2 className="text-sm font-medium">Education</h2>
        <h3 className="text-lg font-medium">
          Bachelor in Computer Science (2019-2023)
        </h3>
        <h4 className="text-secondary">Daffodil International University</h4>
      </div>
      <Link
        href="/projects"
        className="flex w-32 hover:animate-none animate-pulse items-center justify-center py-1.5 rounded-md border-2 hover:border-primary hover:text-primary border-hover text-hover transition-all duration-300 ease-in-out"
      >
        <FiCode className="mr-2 text-xl" />
        <span className="font-medium text-sm">Projects</span>
      </Link>
    </div>
  );
};

export default Profile;
