import React, { useState, useEffect } from "react";

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <div className="container p-6 mx-auto relative  text-blue-700">
      <div className="laptop:flex">
        <div className="laptop:flex laptop:w-2/4">
          <div className="hidden laptop:block w-2/4">
            <img
              src="public/self-portrait.png"
              className="w-[180px] mx-auto"
              alt=""
            />
          </div>
          <div className="laptop:w-2/4">
            <div className="w-full flex justify-center">
              <h2 className="myHeadingsBlue">About</h2>
            </div>
            <p className="mt-6 text-sm text-justify">
              I am a student of Front End Development at Medieinstitutet in
              Sweden and I am actively seeking an internship opportunity from
              October 5th to December 29th. I am open to various options such as
              in-house, hybrid, or remote work, so please don't hesitate to
              reach out to me if you are interested. My greatest passion is to
              continuously learn about new technologies and stay up-to-date with
              the latest industry standards.
            </p>
          </div>
        </div>
        <div className="w-2/4"></div>
      </div>
    </div>
  );
};

export default About;
