import React, { useState } from "react";

interface Props {}

const Main: React.FC<Props> = () => {
  return (
    <div className="container px-6 mx-auto text-slate-100">
      <div className="laptop:flex">
        <div className="flex justify-center laptop:block laptop:w-2/4">
          <h1 className="text-8xl uppercase">
            Wel<span className="block">come.</span>
          </h1>
        </div>
        <div className="mt-12 laptop:mt-0 laptop:w-2/4 text-center">
          <h2 className="text-4xl mt-4">Anton Janzon</h2>
          <h3 className="mt-2 mb-8">
            An aspiring front end developer from Sweden.
          </h3>
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
