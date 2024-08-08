import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const SideDrawer = ({ isOpen, onClose, content }) => {
  return (
    <div
      className={`fixed inset-0 z-50 backdrop-blur-sm bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed top-0 right-0 h-full w-full lg:w-2/3 bg-secondary shadow-xl p-6 overflow-y-auto transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 left-0 p-2 hover:text-primary transition-colors"
        >
          <AiOutlineClose size={24} />
        </button>

        {/* Content */}
        <div className="flex flex-col gap-8 mt-4">
          {content?.image && (
            <Image
              src={content.image}
              alt={content.title}
              width={900}
              height={900}
              className="mb-4 w-full h-96 object-cover rounded-lg"
            />
          )}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {content?.title}
            </h2>
            <p className="">{content?.description}</p>
          </div>

          {/* Links */}
          <div className="flex justify-end gap-8">
            {content?.sourceCode && (
              <Link
                href={content.sourceCode}
                target="_blank"
                className="hover:text-hover text-primary flex items-center gap-2"
              >
                <FaGithub size={24} />
                Github
              </Link>
            )}
            {content?.url && (
              <Link
                href={content.url}
                target="_blank"
                className="hover:text-hover text-primary flex items-center gap-2"
              >
                <FaExternalLinkAlt size={20} /> Live Link
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
