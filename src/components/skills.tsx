import { useEffect } from "react";
import TechnologyIcon from "./techIcon";
import {
  SiJavascript,
  SiHtml5,
  SiTypescript,
  SiCypress,
  SiJest,
} from "react-icons/si";
import { FaCss3, FaSass, FaReact } from "react-icons/fa";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
});

const Skills = () => {
  useEffect(() => {
    const skillIcons = document.getElementsByClassName("skillsIcons");
    for (let i = 0; i < skillIcons.length; i++) {
      observer.observe(skillIcons[i]);
    }
  }, []);

  return (
    <div className="container p-6 mx-auto relative">
      <div className="flex justify-center">
        <h2 className="myHeadingsGray my-6">Skills</h2>
      </div>

      <div className="my-6 flex gap-2 flex-col laptop:flex-row justify-center items-center">
        <div className="laptop:w-2/4 flex flex-col justify-center items-center">
          <ul className="list-none flex flex-col gap-2 w-32">
            <li className="skillsIcons fade-left flex gap-4 items-center">
              <TechnologyIcon
                icon={<SiHtml5 size={44} color="#f05c2a" />}
                iconType="bg-transparent-icon"
              />
              HTML
            </li>
            <li className="skillsIcons fade-left flex gap-4 items-center">
              <TechnologyIcon
                icon={<FaCss3 size={44} color="#1774bb" />}
                iconType="bg-transparent-icon"
              />
              CSS
            </li>
            <li className="skillsIcons fade-left flex gap-4 items-center">
              <TechnologyIcon
                icon={<FaSass size={44} color="#c76494" />}
                iconType="bg-transparent-icon"
              />
              SASS
            </li>
            <li className="skillsIcons fade-left flex gap-4 items-center">
              <TechnologyIcon
                icon={<SiJavascript size={44} color="yellow" />}
                iconType="javascript-icon2"
              />
              JavaScript
            </li>
          </ul>
        </div>
        <div className="laptop:w-2/4 flex flex-col justify-center items-center">
          <ul className="list-none flex flex-col gap-2 w-32">
            <li className="skillsIcons fade-right flex gap-4 items-center">
              <TechnologyIcon
                icon={<SiTypescript size={44} color="#0076c6" />}
                iconType="bg-white-icon"
              />
              TypeScript
            </li>
            <li className="skillsIcons fade-right flex gap-4 items-center">
              <TechnologyIcon
                icon={<FaReact size={44} color="#5ed3f3" />}
                iconType="bg-transparent-icon"
              />
              React
            </li>
            <li className="skillsIcons fade-right flex gap-4 items-center">
              <TechnologyIcon
                icon={<SiJest size={44} color="#bf3b16" />}
                iconType="bg-transparent-icon"
              />
              Jest
            </li>
            <li className="skillsIcons fade-right flex gap-4 items-center">
              <TechnologyIcon
                icon={<SiCypress size={44} color="#383838" />}
                iconType="bg-transparent-icon"
              />
              Cypress
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
