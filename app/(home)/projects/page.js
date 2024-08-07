import React from "react";
import Projects from "@/app/components/Projects/Projects";
import { getProjects } from "@/app/hooks/getProjects";

export default async function Page() {
  const projectsData = await getProjects();
  return (
    <div className="">
      <Projects projectsData={projectsData} />
    </div>
  );
}

export const revalidate = 3600;
