import React from 'react';
import { IoMdClose } from 'react-icons/io';

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <IoMdClose size={24} />
          </button>
        </div>
        <div className="text-gray-600">{content}</div>
      </div>
    </div>
  );
};

export default Modal;