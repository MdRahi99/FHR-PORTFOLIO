import Experience from "@/models/Experience";
import dbConnect from "@/utils/db";

export async function getExperience() {
  await dbConnect();
  
  const experienceData = await Experience.findOne().lean();

  return JSON.parse(JSON.stringify(experienceData));
}