import React from "react";

interface Props {}

const Main: React.FC<Props> = () => {
  return (
    <div className="min-h-screen laptop:h-screen container px-6 mx-auto text-slate-100">
      <div className="laptop:flex h-full">
        <div className="pt-20 laptop:mt-0 flex justify-center items-center laptop:w-2/4">
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

          <img
            src="public/self-portrait.png"
            className="w-[280px] mx-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
