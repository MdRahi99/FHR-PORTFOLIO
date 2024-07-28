import { Inter } from "next/font/google";
import "../globals.css";
import MobileMenu from "../components/Menu/MobileMenu";
import TopMenu from "../components/Menu/TopMenu";
import LeftMenu from "../components/Menu/LeftMenu";
import RightMenu from "../components/Menu/RightMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FHR",
  description: "FHR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary flex flex-col gap-8 max-w-[1500px] mx-auto 2xl:px-16 xl:px-14 lg:px-12 md:px-10 px-4 py-8`}>
        <div className="">
          <TopMenu />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Sidebar for mobile (hidden on lg screens) */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-10">
            <MobileMenu />
          </div>
          <div className="col-span-1 lg:flex hidden items-center">
            <LeftMenu />
          </div>
          <div className="col-span-10 py-4 lg:py-0 text-white h-[580px] overflow-y-auto custom-scrollbar">{children}</div>
          <div className="col-span-1 lg:flex hidden items-center justify-end">
            <RightMenu />
          </div>
        </div>
      </body>
    </html>
  );
}
