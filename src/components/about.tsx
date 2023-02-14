import React, { useState, useEffect } from "react";

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <div className="container p-6 mx-auto relative text-blue-700 pt-10">
      <div className="w-full flex justify-center">
        <h2 className="myHeadingsBlue my-6">About</h2>
      </div>
      <div className="flex flex-col gap-6 laptop:flex-row laptop:items-center laptop:gap-0 w-full">
        <div className="bg-slate-50 laptop:flex laptop:w-1/3">
          <p className="mt-6 text-justify">
            I am a student of Front End Development at Medieinstitutet in
            Sweden. My passion for technology and staying up-to-date with the
            latest industry standards drives me to continuously learn and
            improve my skills. I am confident in my ability to create visually
            appealing and user-friendly web applications. I am a quick learner
            and thrive in fast-paced environments. I am excited to share my
            portfolio with you and showcase my passion for Front End
            Development.
            <span className="block text-center mt-7 font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">
              <em>
                I am actively seeking an internship opportunity from October 23
                to December 29.
              </em>
            </span>
          </p>
        </div>
        <div className="laptop:block laptop:w-1/3">
          <img
            src="about-img.png"
            className="pic w-[180px] mx-auto border-blue-700 border-[22px] rounded-[50%]"
            alt="Portrait of person wearing orange shirt"
          />
        </div>
        <div className="laptop:w-1/3">
          <p className="mb-2"></p>
          <p className="mb-2 text-justify">
            I understand the importance of hands-on experience in the field and
            am eager to apply the skills I have learned in a real-world setting.
            I am open to various work arrangements, including in-house, hybrid,
            or remote work, and am flexible to accommodate your needs. I am
            confident that I would be able to make a meaningful contribution to
            your organization and help drive your projects forward.
          </p>
          <p className="text-justify">
            If you are interested in learning more about my qualifications and
            experience, or if you have an internship opportunity that you think
            would be a good fit, I would be more than happy to hear from you.
            Please don't hesitate to reach out to me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
