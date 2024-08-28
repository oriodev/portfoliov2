'use client';

import React from 'react';
import Image from 'next/image';

const Experience = () => {
  const handleLinkedin = () => {
    window.open(
      'https://www.linkedin.com/in/h-orion-daniels-89676729b/details/experience/',
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
            className="aspect-square hover:cursor-pointer"
            onClick={handleLinkedin}
          />
        </div>

        <div>
          <Image
            src="/cma.jpg"
            alt="cma"
            height={200}
            width={200}
            className="aspect-square hover:cursor-pointer"
            onClick={handleLinkedin}
          />
        </div>

        <div>
          <Image
            src="/uob.jpg"
            alt="uob"
            className="aspect-square"
            height={200}
            width={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
