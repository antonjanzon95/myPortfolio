import SideBar from "./sidebar";

const Contact = () => {
  return (
    <div className="container  mx-auto relative">
      <div className="flex justify-center items-center gap-4 p-10">
        <button className="p-3 border-solid border-2 border-gray-900 font-bold text-xl text-gray-100 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-900 hover:to-orange-800">
          Reach out to me!
        </button>
        <SideBar size={32} />
      </div>
      <p className="text-center pb-1 font-medium">
        Made with React, TypeScript & Tailwind.
      </p>
    </div>
  );
};

export default Contact;
