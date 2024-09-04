'use client';

import React, { useEffect, useState } from 'react';
import ChevronIcon from '@/components/ChevronIcon';
import PurpleBlob from './PurpleBlob';
import BlueBlob from './BlueBlob';
import LoadingSpinner from './LoadingSpinner';

const Header = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/header.svg';
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
  }, []);

  return (
    <>
      {!imageLoaded && <LoadingSpinner />}

      {imageLoaded && (
        <div className="w-full h-screen bg-[url('/header.svg')] bg-cover bg-center flex justify-center items-center">
          {/* 3 columns */}
          <div className="flex">
            {/* purple blob */}
            <PurpleBlob />

            {/* middle column */}
            <div className="flex flex-col justify-center items-center p-5 text-off-white max-md:1/3">
              <h1 className="text-5xl font-extrabold">ORIODEV.</h1>
              <p className="text-3xl font-light pt-3 text-center">
                FREELANCE WEBSITE DEVELOPER & FULLSTACK ENGINEER
              </p>
              <ChevronIcon />
            </div>

            {/* blue blob */}
            <BlueBlob />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
