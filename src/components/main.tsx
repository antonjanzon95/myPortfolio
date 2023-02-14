import React from "react";

interface Props {}

const Main: React.FC<Props> = () => {
  return (
    <div className="min-h-screen laptop:h-screen container mx-auto pt-16 laptop:pt-24 flex flex-col justify-end laptop:block relative">
      <div className="laptop:flex laptop:flex-row h-full">
        <div className="flex justify-center items-center laptop:w-2/4">
          <h1 className="text-8xl uppercase">
            Wel<span className="block">come.</span>
          </h1>
        </div>
        <div className="flex flex-col justify-end gap-6 mt-8 laptop:mt-0 laptop:w-2/4 text-center">
          <div>
            <h2 className="text-4xl mt-4">Anton Janzon</h2>
            <h3 className="mt-2 mb-8">
              An aspiring front end developer from Sweden.
            </h3>
          </div>

          <img src="self-portrait.png" className="w-[280px] mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
