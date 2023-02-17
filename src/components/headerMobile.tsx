import React, { useEffect, useRef, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

interface Props {
  headerHeight: number;
  sectionIDs: string[];
}

const MobileHeader: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTopClick = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

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
          isOpen ? "scale-0" : "scale-100"
        } absolute opacity-90 top-0 right-0 bg-gray-100 text-gray-900 p-4 mt-16 shadow-xl transition duration-300 ease-in-out flex flex-col justify-center items-center`}
      >
        <Link
          to="top"
          onClick={handleTopClick}
          className="block px-4 py-2"
          key="top"
        >
          Home
        </Link>
        {props.sectionIDs.map((id) => (
          <Link
            to={id}
            smooth={true}
            offset={-props.headerHeight}
            className="block px-4 py-2"
            key={id}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileHeader;
