import { SiJavascript, SiHtml5 } from "react-icons/si";
import { FaCss3, FaSass } from "react-icons/fa";
import TechnologyIcon from "./techIcon";

const Projects = () => {
  return (
    <div className="container p-6 mx-auto relative max-w-[1024px]">
      <div className="flex justify-center">
        <h2 className="my-4 myHeadingsSlate text-orange-500">Projects</h2>
      </div>
      <div className="my-6 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col laptop:flex-row laptop:justify-center gap-10">
          <a
            href="https://antonjanzon95.github.io/Donut-Webshop/"
            target="_blank"
            className="block max-w-[340px] laptop:max-w-sm bg-slate-100 shadow hover:bg-slate-200 hover:scale-105 transition-all duration-300"
          >
            <img
              src="/donut-shop.webp"
              alt="Donut webshop"
              className="h-[200px]"
              width={384}
              height={200}
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-700">
                Donut Webshop
              </h3>
              <p className="font-normal text-slate-700">
                Webshop with list of sortable products, cart & payment form.
              </p>
              <div className="flex gap-1 items-center justify-end my-0 mt-6">
                <TechnologyIcon
                  icon={<SiHtml5 size={28} color="#f05c2a" />}
                  iconType="bg-transparent-icon"
                />
                <TechnologyIcon
                  icon={<FaCss3 size={28} color="#1774bb" />}
                  iconType="bg-transparent-icon"
                />
                <TechnologyIcon
                  icon={<FaSass size={28} color="#c76494" />}
                  iconType="bg-transparent-icon"
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
            className="block max-w-[340px] laptop:max-w-sm bg-slate-100 shadow hover:bg-slate-200 hover:scale-105 transition-all duration-300"
          >
            <img
              src="/quiz-smaller.webp"
              alt="Quiz web application"
              className="h-[200px]"
              width={384}
              height={200}
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-700">
                Quiz Game
              </h3>
              <p className="font-normal text-slate-700">
                A quiz with different categories and difficulties. Questions are
                fetched from an API.
              </p>
              <div className="flex gap-1 items-center justify-end my-0 mt-6">
                <TechnologyIcon
                  icon={<SiHtml5 size={28} color="#f05c2a" />}
                  iconType="bg-transparent-icon"
                />
                <TechnologyIcon
                  icon={<FaCss3 size={28} color="#1774bb" />}
                  iconType="bg-transparent-icon"
                />
                <TechnologyIcon
                  icon={<FaSass size={28} color="#c76494" />}
                  iconType="bg-transparent-icon"
                />
                <TechnologyIcon
                  icon={<SiJavascript size={28} color="yellow" />}
                  iconType="javascript-icon"
                />
              </div>
            </div>
          </a>
        </div>

        <div className="flex flex-col laptop:flex-row gap-10">
          <a
            href="https://resonant-tulumba-7148cf.netlify.app/"
            target="_blank"
            className="block max-w-[340px] laptop:max-w-sm bg-slate-100 shadow hover:bg-slate-200 hover:scale-105 transition-all duration-300"
          >
            <img
              className="h-[200px]"
              src="/nothingPhone-smaller.webp"
              alt="Phone advert web app"
              width={384}
              height={200}
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900">
                Nothing Phone
              </h3>
              <p className="font-normal text-slate-700">
                Developed according to given design and graphical profile.
              </p>
              <div className="flex gap-1 items-center justify-end my-0 mt-6">
                <TechnologyIcon
                  icon={<SiHtml5 size={28} color="#f05c2a" />}
                  iconType="bg-transparent-icon"
                />
                <TechnologyIcon
                  icon={<FaCss3 size={28} color="#1774bb" />}
                  iconType="bg-transparent-icon"
                />
                <TechnologyIcon
                  icon={<FaSass size={28} color="#c76494" />}
                  iconType="bg-transparent-icon"
                />
                <TechnologyIcon
                  icon={<SiJavascript size={28} color="yellow" />}
                  iconType="javascript-icon"
                />
              </div>
            </div>
          </a>

          <a
            href="https://inspiring-fairy-7062cd.netlify.app/"
            target="_blank"
            className="block max-w-[340px] laptop:max-w-sm bg-slate-100 shadow hover:bg-slate-200 hover:scale-105 transition-all duration-300"
          >
            <img
              src="/moon-smaller.webp"
              alt="Astronaut website"
              className="h-[200px]"
              width={384}
              height={200}
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900">
                To The Moon!
              </h3>
              <p className="font-normal text-slate-700">
                Developed according to given design.
              </p>
              <div className="flex gap-1 items-center justify-end my-0 mt-6">
                <TechnologyIcon
                  icon={<SiHtml5 size={28} color="#f05c2a" />}
                  iconType="bg-transparent-icon"
                />
                <TechnologyIcon
                  icon={<FaCss3 size={28} color="#1774bb" />}
                  iconType="bg-transparent-icon"
                />
                <TechnologyIcon
                  icon={<FaSass size={28} color="#c76494" />}
                  iconType="bg-transparent-icon"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
