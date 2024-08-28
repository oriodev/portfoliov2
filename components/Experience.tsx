'use client';

import React from 'react';
import Image from 'next/image';

const Experience = () => {
  const handleLinkedinEmployment = () => {
    window.open(
      'https://www.linkedin.com/in/h-orion-daniels-89676729b/details/experience/',
      '_blank'
    );
  };

  const handleLinkedinEducation = () => {
    window.open(
      'https://www.linkedin.com/in/h-orion-daniels-89676729b/details/education/',
      '_blank'
    );
  };

  return (
    <div>
      <div className="flex gap-5 w-full mt-10 md:mt-0 md:w-1/2">
        <div>
          <Image
            src="/ttg.jpg"
            alt="ttg"
            height={200}
            width={200}
            className="aspect-square hover:cursor-pointer rounded-lg transition-transform duration-300 transform hover:scale-105"
            onClick={handleLinkedinEmployment}
          />
        </div>

        <div>
          <Image
            src="/cma.jpg"
            alt="cma"
            height={200}
            width={200}
            className="aspect-square hover:cursor-pointer rounded-lg transition-transform duration-300 transform hover:scale-105"
            onClick={handleLinkedinEmployment}
          />
        </div>

        <div>
          <Image
            src="/uob.jpg"
            alt="uob"
            className="aspect-square hover:cursor-pointer rounded-lg transition-transform duration-300 transform hover:scale-105"
            height={200}
            width={200}
            onClick={handleLinkedinEducation}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
