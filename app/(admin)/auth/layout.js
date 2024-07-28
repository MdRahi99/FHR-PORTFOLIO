import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Verify",
  description: "Verify",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 flex flex-col items-center justify-center max-w-[1500px] mx-auto 2xl:px-16 xl:px-14 lg:px-12 md:px-10 px-4 py-4 lg:py-12 min-h-screen`}
      >
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
