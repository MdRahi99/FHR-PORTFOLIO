import React from "react";
import Projects from "@/app/components/Projects/Projects";
import { getProjects } from "@/app/hooks/getProjects";
import { getProjectCategory } from "@/app/hooks/getProjectCategory";

export default async function Page() {
  const categoryData = await getProjectCategory();
  const projectsData = await getProjects();
  return (
    <div className="">
      <Projects projectsData={projectsData} categoryData={categoryData} />
    </div>
  );
}

export const revalidate = 3600;
