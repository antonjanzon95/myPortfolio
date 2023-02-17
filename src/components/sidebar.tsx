import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import React from "react";
import SideBarIcon from "./sidebarIcon";

interface Props {
  size: number;
}

const laptopLayout =
  "laptop:fixed laptop:h-screen laptop:w-16 laptop:top-0 laptop:py-0 laptop:right-0 laptop:flex laptop:flex-col laptop:items-center laptop:justify-center laptop:gap-0 laptop:bg-transparent laptop:z-10";

const SideBar: React.FC<Props> = ({ size }) => {
  return (
    <div
      className={`bg-gray-800 py-4 flex justify-center items-center gap-4 ${laptopLayout}`}
    >
      <SideBarIcon
        icon={<FaFacebook size={size} color="blue" />}
        link={"https://www.facebook.com/anton.janzon.9"}
      />
      <SideBarIcon
        icon={<FaLinkedin size={size} color="blue" />}
        link={"https://www.linkedin.com/in/anton-janzon-55aaa7162/"}
      />
      <SideBarIcon
        icon={<FaGithub size={size} />}
        link={"https://github.com/antonjanzon95"}
      />
    </div>
  );
};

export default SideBar;
