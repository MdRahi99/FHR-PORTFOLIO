import Projects from "@/models/Projects";
import dbConnect from "@/utils/db";

export async function getProjects() {
  await dbConnect();
  
  const projectsData = await Projects.find().lean();

  return JSON.parse(JSON.stringify(projectsData));
}