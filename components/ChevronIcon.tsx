'use client';

import React from 'react';
import { VscChevronDown } from 'react-icons/vsc';

const ChevronIcon = () => {
  const scrollToSection = (id: string, offset = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <VscChevronDown
        size={100}
        className="pt-5 hover:cursor-pointer hover:text-light-blue hover:animate-pulse"
        onClick={() => {
          scrollToSection('profile', 220);
        }}
      />
    </div>
  );
};

export default ChevronIcon;
