import TechnologyIcon from "./techIcon";
import {
  SiJavascript,
  SiHtml5,
  SiTypescript,
  SiCypress,
  SiJest,
} from "react-icons/si";
import { FaCss3, FaSass, FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="container p-6 mx-auto relative">
      <div className="flex justify-center">
        <h2 className="text-center myHeadingsBlue mb-6">Skills</h2>
      </div>

      <div className="flex gap-2 flex-col laptop:flex-row justify-center items-center">
        <div className="laptop:w-2/4">
          <ul className="list-none flex flex-col gap-2 w-32">
            <li className="flex gap-2">
              <TechnologyIcon
                icon={<SiHtml5 size={28} color="#f05c2a" />}
                iconType="bg-transparent-icon"
              />
              HTML
            </li>
            <li className="flex gap-2">
              <TechnologyIcon
                icon={<FaCss3 size={28} color="#1774bb" />}
                iconType="bg-transparent-icon"
              />
              CSS
            </li>
            <li className="flex gap-2">
              <TechnologyIcon
                icon={<FaSass size={28} color="#c76494" />}
                iconType="bg-transparent-icon"
              />
              SASS
            </li>
            <li className="flex gap-2">
              <TechnologyIcon
                icon={<SiJavascript size={28} color="yellow" />}
                iconType="javascript-icon"
              />
              JavaScript
            </li>
          </ul>
        </div>
        <div className="laptop:w-2/4">
          <ul className="list-none flex flex-col gap-2 w-32">
            <li className="flex gap-2">
              <TechnologyIcon
                icon={<SiTypescript size={28} color="#0076c6" />}
                iconType="bg-white-icon"
              />
              TypeScript
            </li>
            <li className="flex gap-2">
              <TechnologyIcon
                icon={<FaReact size={28} color="#5ed3f3" />}
                iconType="bg-transparent-icon"
              />
              React
            </li>
            <li className="flex gap-2">
              <TechnologyIcon
                icon={<SiJest size={28} color="#bf3b16" />}
                iconType="bg-transparent-icon"
              />
              Jest
            </li>
            <li className="flex gap-2">
              <TechnologyIcon
                icon={<SiCypress size={28} color="#383838" />}
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
