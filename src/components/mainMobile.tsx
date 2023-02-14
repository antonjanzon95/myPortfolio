import React from "react";

interface Props {}

const MainMobile: React.FC<Props> = () => {
  return (
    <div className="min-h-screen container mx-auto pt-16 flex flex-col justify-between">
      <div className="flex justify-center items-center pt-16">
        <h1 className="text-8xl uppercase">
          Wel<span className="block">come.</span>
        </h1>
      </div>
      <div className="relative bottom-0 flex flex-col justify-end gap-6 mt-8 text-center">
        <div>
          <h2 className="text-4xl mt-4">Anton Janzon</h2>
          <h3 className="mt-2 mb-8">
            An aspiring front end developer from Sweden.
          </h3>
        </div>

        <img src="self-portrait.png" className="w-[280px] mx-auto" alt="" />
      </div>
    </div>
  );
};

export default MainMobile;
