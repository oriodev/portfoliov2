import React from 'react';
import WebCard from '@/components/WebCard';
import FullstackCard from '@/components/FullstackCard';

const HireMe = () => {
  return (
    <div className="bg-light-blue p-20 flex flex-col justify-center gap-20 lg:flex-row">
      <WebCard />
      <FullstackCard />
    </div>
  );
};

export default HireMe;
