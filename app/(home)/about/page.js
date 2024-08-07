import React from "react";
import About from "../../components/About/About";
import { getAbout } from "@/app/hooks/getAbout";
import { getSkills } from "@/app/hooks/getSkills";

export default async function AboutMe() {
  const profileData = await getAbout();
  const skillsData = await getSkills();
  return (
    <div className="">
      <About profileData={profileData} skillsData={skillsData} />
    </div>
  );
}

export const revalidate = 3600;
