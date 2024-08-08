import { Inter } from "next/font/google";
import "../globals.css";
import MobileMenu from "../components/Menu/MobileMenu";
import TopMenu from "../components/Menu/TopMenu";
import LeftMenu from "../components/Menu/LeftMenu";
import RightMenu from "../components/Menu/RightMenu";
import BottomMenu from "../components/Menu/BottomMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FHR",
  description: "FHR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white bg-primary`} suppressHydrationWarning={true}>
        <div className="fixed inset-0 flex flex-col max-w-[1500px] max-h-[1000px] mx-auto 2xl:px-16 xl:px-14 lg:px-12 md:px-10 px-4 py-4">
          <div className="flex-shrink-0 pb-4">
            <TopMenu />
          </div>
          <div className="flex-grow flex overflow-hidden">
            <div className="w-[12%] hidden lg:flex">
              <LeftMenu />
            </div>
            <div className="lg:w-[76%] w-full overflow-y-auto py-4 lg:py-0 custom-scrollbar">
              {children}
            </div>
            <div className="w-[12%] hidden lg:flex justify-end items-center">
              <RightMenu />
            </div>
          </div>
          <div className="pt-4">
            <BottomMenu />
          </div>
          {/* Sidebar for mobile (hidden on lg screens) */}
          {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 z-10">
            <MobileMenu />
          </div> */}
        </div>
      </body>
    </html>
  );
}
