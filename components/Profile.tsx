import React from 'react';
import Image from 'next/image';
import Experience from './Experience';

const Profile = () => {
  return (
    <div
      id="profile"
      className="w-full h-full bg-purple flex flex-col items-center text-off-white pb-20 pt-5"
    >
      <h2 className="text-4xl font-extrabold">HI! I&apos;M ORI.</h2>
      <div className="mt-20 w-1/2 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 gap-5">
        <div>
          <Image
            src="/profilepic.jpg"
            alt="profile pic"
            height={500}
            width={500}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-3xl font-light text-center md:text-left">
            I’m a fullstack engineer and freelance website developer. I love
            building cool things for awesome people.
          </p>
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default Profile;
