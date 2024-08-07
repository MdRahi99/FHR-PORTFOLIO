import React from "react";
import About from "../../components/About/About";
import { getAbout } from "@/app/hooks/getAbout";
import { getSkills } from "@/app/hooks/getSkills";
import { getExperience } from "@/app/hooks/getExperience";

export default async function AboutMe() {
  const profileData = await getAbout();
  const skillsData = await getSkills();
  const experienceData = await getExperience();
  return (
    <div className="">
      <About profileData={profileData} skillsData={skillsData} experienceData={experienceData} />
    </div>
  );
}

export const revalidate = 3600;
