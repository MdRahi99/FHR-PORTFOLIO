import Skills from "@/models/Skills";
import dbConnect from "@/utils/db";

export async function getSkills() {
  await dbConnect();
  
  const skillsData = await Skills.find().lean();

  return JSON.parse(JSON.stringify(skillsData));
}