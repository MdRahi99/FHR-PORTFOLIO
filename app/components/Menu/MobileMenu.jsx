'use client';
import sidebarItems from "@/public/data/sidebar";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { useRef } from "react";

const MobileMenu = ({ isOpen, toggleDrawer }) => {
  const drawerRef = useRef(null);

  const handleClick = (e) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      toggleDrawer();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } bg-primary bg-opacity-75`}
      onClick={handleClick}
    >
      <div
        className="fixed top-0 right-0 w-2/3 h-fit bg-primary shadow-lg p-5"
        ref={drawerRef}
      >
        <button onClick={toggleDrawer} className="text-primary text-2xl mb-6">
          <FiX />
        </button>
        <nav className="space-y-10">
          {sidebarItems.map((item) => (
            <Link
              key={item?.name}
              href={item?.route}
              className="flex items-center text-primary font-medium hover:text-secondary transition-colors duration-200"
              onClick={toggleDrawer}
            >
              {item?.icon}
              <span className="ml-3">{item?.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
