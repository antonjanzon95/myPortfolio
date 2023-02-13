import { SiJavascript, SiHtml5 } from "react-icons/si";
import { FaCss3, FaSass } from "react-icons/fa";
import React from "react";

interface Props {
  icon: React.ReactElement;
  iconType: string;
}

const Projects = () => {
  return (
    <div className="container p-6 mx-auto relative">
      <div className="flex justify-center">
        <h2 className="text-center myHeadingsSlate">Projects</h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <a
          href="https://antonjanzon95.github.io/Donut-Webshop/"
          target="_blank"
          className="mt-6 block max-w-sm bg-slate-100 rounded-lg shadow hover:bg-slate-200 hover:scale-105 transition-all duration-300"
        >
          <img
            src="public/munkar.png"
            alt="Donut webshop"
            className="rounded-t-lg max-h-52"
            width={384}
            height={200}
          />
          <div className="p-6">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Donut Webshop
            </h3>
            <p className="font-normal text-slate-700">
              A simple webshop with list of products, cart & payment form.
            </p>
            <div className="flex gap-1 items-center justify-end my-0 mt-6">
              <TechnologyIcon
                icon={<SiHtml5 size={28} color="#f05c2a" />}
                iconType="css-icon"
              />
              <TechnologyIcon
                icon={<FaCss3 size={28} color="#1774bb" />}
                iconType="css-icon"
              />
              <TechnologyIcon
                icon={<FaSass size={28} color="#c76494" />}
                iconType="css-icon"
              />
              <TechnologyIcon
                icon={<SiJavascript size={28} color="yellow" />}
                iconType="javascript-icon"
              />
            </div>
          </div>
        </a>

        <a
          href="https://incomparable-seahorse-0f5220.netlify.app/"
          target="_blank"
          className="mt-6 block max-w-sm bg-slate-100 rounded-lg shadow hover:bg-slate-200 hover:scale-105 transition-all duration-300"
        >
          <img
            src="public/quiz.png"
            alt="Quiz web application"
            className="rounded-t-lg max-h-52"
            width={384}
            height={200}
          />
          <div className="p-6">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Quiz Game
            </h3>
            <p className="font-normal text-slate-700">
              A quiz with different categories and difficulties. Questions are
              fetched from an API.
            </p>
            <div className="flex gap-1 items-center justify-end my-0 mt-6">
              <TechnologyIcon
                icon={<SiHtml5 size={28} color="#f05c2a" />}
                iconType="css-icon"
              />
              <TechnologyIcon
                icon={<FaCss3 size={28} color="#1774bb" />}
                iconType="css-icon"
              />
              <TechnologyIcon
                icon={<FaSass size={28} color="#c76494" />}
                iconType="css-icon"
              />
              <TechnologyIcon
                icon={<SiJavascript size={28} color="yellow" />}
                iconType="javascript-icon"
              />
            </div>
          </div>
        </a>

        <a
          href="https://resonant-tulumba-7148cf.netlify.app/"
          target="_blank"
          className="mt-6 block max-w-sm bg-slate-100 rounded-lg shadow hover:bg-slate-200 hover:scale-105 transition-all duration-300"
        >
          <img
            className="rounded-t-lg max-h-52"
            src="public/nothingPhone.png"
            alt="Phone advert web app"
            width={384}
            height={200}
          />
          <div className="p-6">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Nothing Phone
            </h3>
            <p className="font-normal text-slate-700">Design project.</p>
            <div className="flex gap-1 items-center justify-end my-0 mt-6">
              <TechnologyIcon
                icon={<SiHtml5 size={28} color="#f05c2a" />}
                iconType="css-icon"
              />
              <TechnologyIcon
                icon={<FaCss3 size={28} color="#1774bb" />}
                iconType="css-icon"
              />
              <TechnologyIcon
                icon={<FaSass size={28} color="#c76494" />}
                iconType="css-icon"
              />
              <TechnologyIcon
                icon={<SiJavascript size={28} color="yellow" />}
                iconType="javascript-icon"
              />
            </div>
          </div>
        </a>

        <a
          href=""
          className="mt-6 block max-w-sm p-6 bg-slate-100 border border-gray-200 rounded-lg shadow hover:bg-slate-200 hover:scale-105 transition-all duration-300"
        >
          <img src="" alt="" />
          <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            To The Moon!
          </h3>
          <p className="font-normal text-slate-700">Design project.</p>
          <div className="flex gap-1 items-center justify-end my-0 mt-6">
            <TechnologyIcon
              icon={<SiHtml5 size={28} color="#f05c2a" />}
              iconType="css-icon"
            />
            <TechnologyIcon
              icon={<FaCss3 size={28} color="#1774bb" />}
              iconType="css-icon"
            />
            <TechnologyIcon
              icon={<FaSass size={28} color="#c76494" />}
              iconType="css-icon"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

const TechnologyIcon: React.FC<Props> = ({ icon, iconType }) => (
  <div className={`${iconType}`}>{icon}</div>
);

export default Projects;
