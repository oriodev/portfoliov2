'use client';

import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { VscGithub, VscMail } from 'react-icons/vsc';

const FullstackCard = () => {
  const email = 'oriodev@duck.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
  };

  const handleCv = () => {
    window.open('/pdfs/cv.pdf', '_blank');
  };

  const handleLinkedin = () => {
    window.open(
      'https://www.linkedin.com/in/h-orion-daniels-89676729b/',
      '_blank'
    );
  };

  const handleGithub = () => {
    window.open('https://github.com/oriodev', '_blank');
  };

  return (
    <div className="bg-off-white rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-4 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      <h3 className="text-2xl sm:text-3xl font-bold text-center">
        HIRE ME FOR DEV WORK
      </h3>
      <div className="flex flex-col gap-2 text-base sm:text-lg text-center sm:text-left">
        <p>
          I AM A <b>JAVASCRIPT/REACT/NEXT.JS</b> DEVELOPER WITH SELF-TAUGHT,
          ACADEMIC, AND PROFESSIONAL EXPERIENCE.
        </p>
        <p>
          ACTIVELY LOOKING FOR <b>FRONTEND, BACKEND OR FULLSTACK POSITIONS</b>.
        </p>
        <p>PRETTY COOL.</p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <VscGithub
          size={30}
          onClick={handleGithub}
          className="hover:cursor-pointer transition-transform duration-300 transform hover:scale-105"
        />
        <FaLinkedin
          size={30}
          onClick={handleLinkedin}
          className="hover:cursor-pointer transition-transform duration-300 transform hover:scale-105"
        />
        <VscMail
          size={30}
          onClick={handleCopy}
          className="hover:cursor-pointer transition-transform duration-300 transform hover:scale-105"
        />
      </div>

      <button
        className="bg-dark-blue text-off-white font-semibold text-base sm:text-lg p-2 sm:p-3 pr-4 sm:pr-5 pl-4 sm:pl-5 flex items-center gap-3 sm:gap-5 justify-center rounded-lg transition-transform duration-300 transform hover:scale-105"
        onClick={handleCv}
      >
        CHECK OUT MY CV
      </button>
    </div>
  );
};

export default FullstackCard;
