import React, { useState, useEffect } from "react";

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <div className="container p-6 mx-auto relative tablet:max-w-[640px] laptop:max-w-[1024px]">
      <div className="w-full flex justify-center">
        <h2 className="myHeadingsGray my-4">About</h2>
      </div>
      <div className="my-6 flex flex-col gap-6 laptop:flex-row laptop:gap-6 w-full laptop:justify-start">
        <div className="laptop:flex laptop:w-5/12">
          <p>
            I am a student of Front End Development at Medieinstitutet in
            Sweden. My passion for technology and staying up-to-date with the
            latest industry standards drives me to continuously learn and
            improve my skills. I am confident in my ability to create visually
            appealing and user-friendly web applications. I am a quick learner
            and thrive in fast-paced environments. I am excited to share my
            portfolio with you and showcase my passion for Front End
            Development.
          </p>
        </div>
        <div className="laptop:flex items-center laptop:w-2/12">
          <img
            src="/about-pic.png"
            className="pic w-[180px] mx-auto rounded-[50%]"
            alt="Smiling man with burgundy shirt"
          />
        </div>
        <div className="laptop:w-5/12">
          <p className="mb-2">
            I understand the importance of hands-on experience in the field and
            am eager to apply the skills I have learned in a real-world setting.
            I am confident that I would be able to make a meaningful
            contribution to your organization and help drive your projects
            forward.
          </p>
          <p>
            If you are interested in learning more about my qualifications and
            experience, or if you have an internship opportunity that you think
            would be a good fit, I would be more than happy to hear from you.
          </p>
        </div>
      </div>
      {/* <span className="hidden laptop:block text-center mt-7 font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-orange-600 to-gray-900">
        <em>
          I am actively seeking an internship opportunity from October 23 to
          December 29.
        </em>
      </span> */}
    </div>
  );
};

export default About;
