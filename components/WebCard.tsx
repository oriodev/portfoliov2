'use client';

import React from 'react';
import { VscMail } from 'react-icons/vsc';

const WebCard = () => {
  const email = 'oriodev@duck.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <div className="bg-off-white rounded-2xl p-6 sm:p-10 flex flex-col gap-5 justify-between w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <h3 className="text-2xl sm:text-3xl font-bold text-center">
        NEED A NEW WEBSITE?
      </h3>
      <div className="flex flex-col gap-2 text-base sm:text-lg text-center sm:text-left">
        <p>I CAN GET A WEBSITE UP AND RUNNING FOR YOU QUICK AND EASY.</p>
        <p>CURRENTLY TAKING NEW PROJECTS.</p>
        <p>COST DEPENDS ON COMPLEXITY.</p>
        <p>
          SEND ME A MESSAGE WITH YOUR REQUIREMENTS AND I WILL GET BACK TO YOU
          ASAP
        </p>
      </div>
      <p className="text-xs sm:text-sm text-center">
        PS. CLICK TO COPY EMAIL TO CLIPBOARD.
      </p>

      <button
        className="bg-dark-blue text-off-white text-lg sm:text-xl p-2 sm:p-3 pr-4 sm:pr-6 pl-4 sm:pl-6 flex items-center gap-3 sm:gap-5 justify-center rounded-lg transition-transform duration-300 transform hover:scale-105"
        onClick={handleCopy}
      >
        <VscMail size={24} />
        <span className="truncate">{email}</span>
      </button>
    </div>
  );
};

export default WebCard;
