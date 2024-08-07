import { getAbout } from "../hooks/getAbout";
import Overview from "../components/Overview/Overview";

export default async function Home() {
  const profileData = await getAbout();
  return (
    <div className="">
      <Overview data={profileData} />
    </div>
  );
}

export const revalidate = 3600;
