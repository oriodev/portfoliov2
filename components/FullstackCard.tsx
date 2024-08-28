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
    window.open('/cv.pdf', '_blank');
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
    <div className="bg-off-white rounded-2xl p-10 flex flex-col justify-between gap-4 lg:w-1/4">
      <h3 className="text-3xl font-bold text-center">
        WANT TO HIRE ME AS A DEVELOPER?
      </h3>
      <div className="flex flex-col gap-2 text-lg">
        <p>
          I AM A JAVASCRIPT/REACT/NEXT.JS DEVELOPER WITH SELF-TAUGHT, ACADEMIC,
          AND PROFESSIONAL EXPERIENCE.
        </p>
        <p>ACTIVELY LOOKING FOR FRONTEND, BACKEND OR FULLSTACK POSITIONS.</p>
        <p>PRETTY COOL.</p>
      </div>

      <div className="flex w-full justify-around">
        <VscGithub
          size={50}
          onClick={handleGithub}
          className="hover:cursor-pointer"
        />
        <FaLinkedin
          size={50}
          onClick={handleLinkedin}
          className="hover:cursor-pointer"
        />
        <VscMail
          size={50}
          onClick={handleCopy}
          className="hover:cursor-pointer"
        />
      </div>

      <button
        className="bg-dark-blue text-off-white text-xl p-2 pr-5 pl-5 flex gap-5 justify-center"
        onClick={handleCv}
      >
        CHECK OUT MY CV
      </button>
    </div>
  );
};

export default FullstackCard;
