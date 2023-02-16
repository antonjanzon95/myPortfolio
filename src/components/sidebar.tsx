import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import React from "react";

interface Props {
  icon: React.ReactElement;
}

const laptopLayout =
  "laptop:fixed laptop:h-screen laptop:w-16 laptop:top-0 laptop:py-0 laptop:right-0 laptop:flex laptop:flex-col laptop:items-center laptop:justify-center laptop:gap-0 laptop:bg-transparent laptop:z-10";

const SideBar: React.FC = () => {
  return (
    <div
      className={`bg-gray-800 py-4 flex justify-center items-center gap-4 ${laptopLayout}`}
    >
      <SideBarIcon icon={<FaFacebook size={32} color="blue" />} />
      <SideBarIcon icon={<FaLinkedin size={32} color="blue" />} />
      <SideBarIcon icon={<FaGithub size={32} />} />
    </div>
  );
};

const SideBarIcon: React.FC<Props> = ({ icon }) => (
  <div className="sidebar-icon">{icon}</div>
);

export default SideBar;
