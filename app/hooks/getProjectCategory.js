import ProjectCategory from "@/models/ProjectCategory";
import dbConnect from "@/utils/db";

export async function getProjectCategory() {
  await dbConnect();
  
  const categoryData = await ProjectCategory.find().lean();

  return JSON.parse(JSON.stringify(categoryData));
}