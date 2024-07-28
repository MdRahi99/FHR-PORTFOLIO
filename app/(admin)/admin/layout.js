import { Inter } from "next/font/google";
import "../../globals.css";
import MobileMenu from "@/app/components/Menu/MobileMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FHR - Admin",
  description: "FHR - Admin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 flex flex-col min-h-screen`}>
          <div className="max-w-[1500px] mx-auto 2xl:px-16 xl:px-14 lg:px-12 md:px-10 px-4 py-4 lg:py-12">
            {/* Sidebar for mobile (hidden on lg screens) */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-10">
              <MobileMenu />
            </div>
            <div>
              {children}
            </div>
          </div>
      </body>
    </html>
  );
}
