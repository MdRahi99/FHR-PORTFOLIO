import { getAbout } from "../actions/getAbout";
import Overview from "../components/Overview/Overview";

export default async function Home() {
  const profileData = await getAbout();
  return (
    <div className="">
      <Overview data={profileData.data[0]} />
    </div>
  );
}
