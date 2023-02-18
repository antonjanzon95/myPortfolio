import { HiLocationMarker } from "react-icons/hi";
import { AiTwotonePhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import SideBar from "./sidebar";

const Contact = () => {
  return (
    <div className="container mx-auto relative">
      <div className="flex flex-col  justify-center items-center gap-4 p-10">
        <a
          href=""
          className="p-3 border-solid border-2 border-gray-900 font-bold text-xl text-gray-100 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-900 hover:to-orange-800"
        >
          Reach out to me!
        </a>
        <SideBar size={32} />
      </div>
      <address className="flex justify-center items-center">
        <div className="mb-8 flex flex-col items-start justify-center gap-4">
          <div className="flex items-center justify-center gap-2">
            <HiLocationMarker color="#f97316" size={28} />
            Avesta, Sweden
          </div>
          <div className="flex items-center justify-center gap-2">
            <AiTwotonePhone color="#f97316" size={28} />
            (+46) 76 102 85 58
          </div>
          <div className="flex items-center justify-center gap-2">
            <FiMail color="#f97316" size={28} />
            anton.janzon@medieinstitutet.se
          </div>
        </div>
      </address>
      <p className="text-center pb-1 text-sm">
        <em>Made with React, TypeScript & Tailwind.</em>
      </p>
    </div>
  );
};

export default Contact;
