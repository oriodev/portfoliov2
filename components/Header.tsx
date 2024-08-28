import React from 'react';
import Image from 'next/image';
import ChevronIcon from '@/components/ChevronIcon';

const Header = () => {
  return (
    <div className="w-full h-screen bg-[url('/header.svg')] bg-cover bg-center flex justify-center items-center">
      {/* 3 columns */}
      <div className="flex">
        {/* purple blob */}
        <div>
          <Image
            src="/purpleblob.svg"
            alt="purpleblob"
            width={700}
            height={700}
          />
        </div>

        {/* middle column */}
        <div className="flex flex-col justify-center items-center p-5 text-off-white max-sm:w-1/2 max-md:1/3">
          <h1 className="text-5xl font-extrabold">ORIODEV.</h1>
          <p className="text-3xl font-light pt-3 text-center">
            FREELANCE WEBSITE DEVELOPER & FULLSTACK ENGINEER
          </p>
          <ChevronIcon />
        </div>

        {/* blue blob */}
        <div>
          <Image
            src="/blueblob.svg"
            alt="purpleblob"
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
