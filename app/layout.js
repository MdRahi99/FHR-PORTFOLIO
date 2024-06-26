import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FHR PORTFOLIO",
  description: "FHR PORTFOLIO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 flex flex-col min-h-screen`}>
        <div className="flex-1">
          <div className="w-full px-4 lg:px-0 grid grid-cols-12 gap-8">
            {/* Sidebar for mobile (hidden on lg screens) */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-10">
              <Sidebar />
            </div>
            {/* Sidebar for lg screens (hidden on mobile) */}
            <div className="hidden lg:block col-span-12 lg:col-span-3 order-2 lg:order-1">
              <Sidebar />
            </div>
            <div className="col-span-12 lg:col-span-9 order-1 lg:order-2 pb-16 lg:pb-0">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
