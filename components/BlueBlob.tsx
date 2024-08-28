'use client';

import KUTE from 'kute.js';
import React, { useEffect } from 'react';

const BlueBlob = () => {
  useEffect(() => {
    const tween = KUTE.fromTo(
      '#blueblob1',
      { path: '#blueblob1' },
      { path: '#blueblob2' },
      { repeat: 999, duration: 3000, yoyo: true }
    );

    tween.start();
  }, []);
  return (
    <div className="hidden lg:block">
      <svg
        id="visual"
        viewBox="0 0 900 540"
        width="500"
        height="500"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g transform="translate(494.1506342543168 249.55752325049875)">
          <path
            id="blueblob1"
            d="M105.7 -140C142.5 -118.8 181.6 -95.3 199.4 -60.1C217.2 -25 213.7 21.6 202.2 68.4C190.7 115.1 171.2 161.9 136.1 190.2C101.1 218.5 50.5 228.2 12 211.7C-26.5 195.1 -52.9 152.2 -95.7 126.4C-138.5 100.6 -197.6 92 -223.7 61.1C-249.8 30.1 -242.8 -23.3 -216.3 -59.6C-189.8 -95.9 -143.7 -115.1 -104.4 -135.5C-65 -155.9 -32.5 -177.4 1 -178.8C34.5 -180.1 69 -161.3 105.7 -140"
            fill="#38C2D5"
          ></path>

          <path
            id="blueblob2"
            className="hidden"
            d="M126.9 -167.3C171.9 -142 221 -114.9 236.5 -75C252 -35.1 234 17.5 215.6 68.8C197.2 120.1 178.5 170.1 142.6 198.7C106.6 227.4 53.3 234.7 0.8 233.6C-51.7 232.5 -103.5 223.1 -147.5 197C-191.6 171 -228 128.5 -249.7 77.4C-271.4 26.4 -278.3 -33.2 -252.6 -72.8C-226.9 -112.4 -168.6 -132 -121 -156.6C-73.5 -181.1 -36.7 -210.6 2.1 -213.5C40.9 -216.4 81.9 -192.7 126.9 -167.3"
            fill="#38C2D5"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default BlueBlob;
