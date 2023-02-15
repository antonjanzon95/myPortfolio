import React, { useState } from "react";

interface Props {}

const MobileHeader: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between p-4 w-full h-full">
      <a href="#" className="font-bold text-lg text-orange-500">
        AJ
      </a>
      <button
        className="focus:outline-none text-orange-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
        </svg>
      </button>

      <div
        className={`${
          isOpen ? "scale-100" : "scale-0"
        } absolute top-0 right-0 bg-white text-gray-900 p-4 mt-16 rounded-lg shadow-xl transition duration-300 ease-in-out`}
      >
        <a href="#" className="block px-4 py-2">
          Home
        </a>
        <a href="#" className="block px-4 py-2">
          Projects
        </a>
        <a href="#" className="block px-4 py-2">
          Skills
        </a>
        <a href="#" className="block px-4 py-2">
          About
        </a>
      </div>
    </nav>
  );
};

export default MobileHeader;
