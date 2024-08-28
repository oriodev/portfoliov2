'use client';

import KUTE from 'kute.js';
import React, { useEffect } from 'react';

const PurpleBlob = () => {
  useEffect(() => {
    const tween = KUTE.fromTo(
      '#purpleblob1',
      { path: '#purpleblob1' },
      { path: '#purpleblob2' },
      { repeat: 999, duration: 3000, yoyo: true }
    );

    tween.start();
  }, []);
  return (
    <div className="hidden lg:block pr-10">
      <svg
        id="visual"
        viewBox="0 0 700 540"
        width="500"
        height="500"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g transform="translate(487.59243668953394 233.3979791603506)">
          <path
            id="purpleblob1"
            d="M115.9 -147.4C154.3 -131.7 192.2 -103.2 203 -66.8C213.7 -30.3 197.2 14.2 181.8 58.2C166.3 102.2 151.9 145.8 121.8 181C91.7 216.2 45.8 243.1 4.8 236.5C-36.2 229.9 -72.5 189.8 -109.3 156.7C-146 123.7 -183.3 97.7 -203.9 60.2C-224.4 22.7 -228.3 -26.4 -209.2 -62.7C-190.2 -99.1 -148.3 -122.8 -109.6 -138.3C-70.9 -153.9 -35.5 -161.3 1.7 -163.6C38.8 -165.9 77.6 -163 115.9 -147.4"
            fill="#735FEF"
          ></path>
        </g>

        <g transform="translate(450.60939445870827 302.6615225005527)">
          <path
            id="purpleblob2"
            className="hidden"
            d="M120.5 -165.6C145.5 -122.7 147.6 -74.5 161.4 -24.3C175.1 25.9 200.6 78.2 192.7 129.6C184.9 181 143.7 231.4 97.5 233.2C51.3 234.9 0 187.9 -51.2 160.6C-102.3 133.3 -153.4 125.7 -177.6 96.4C-201.9 67.1 -199.4 16.2 -181.7 -22.9C-163.9 -62 -130.8 -89.2 -98 -130.7C-65.1 -172.3 -32.6 -228.1 7.6 -237.2C47.8 -246.3 95.6 -208.6 120.5 -165.6"
            fill="#735FEF"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default PurpleBlob;
