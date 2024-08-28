'use client';

import React from 'react';
import { VscMail } from 'react-icons/vsc';

const WebCard = () => {
  const email = 'oriodev@duck.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <div className="bg-off-white rounded-2xl p-10 flex flex-col gap-5 justify-between lg:w-1/4">
      <h3 className="text-3xl font-bold text-center">NEED A NEW WEBSITE?</h3>
      <div className="flex flex-col gap-2 text-lg">
        <p>I CAN GET A WEBSITE UP AND RUNNING FOR YOU QUICK AND EASY.</p>
        <p>CURRENTLY TAKING NEW PROJECTS.</p>
        <p>COST DEPENDS ON COMPLEXITY.</p>
        <p>
          SEND ME A MESSAGE WITH YOUR REQUIREMENTS AND I WILL GET BACK TO YOU
          ASAP
        </p>
      </div>

      <button
        className="bg-dark-blue text-off-white text-xl p-2 pr-5 pl-5 flex gap-5 justify-center"
        onClick={handleCopy}
      >
        <VscMail size={30} />
        {email}
      </button>
    </div>
  );
};

export default WebCard;
