import About from "@/models/About";
import dbConnect from "@/utils/db";

export async function getAbout() {
  await dbConnect();
  
  const aboutData = await About.findOne().lean();

  return JSON.parse(JSON.stringify(aboutData));
}