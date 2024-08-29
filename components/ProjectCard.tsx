'use client';

import React from 'react';
import { Project } from '@/types/types';

const ProjectCard = ({ project }: { project: Project }) => {
  const handleLink = () => {
    window.open(project.link, '_blank');
  };

  return (
    <div
      className={
        'w-96 h-96 bg-cover bg-center flex flex-col-reverse flex-shrink-0 hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 rounded-xl'
      }
      style={{ backgroundImage: `url(${project.image})` }}
      onClick={handleLink}
    >
      <div className="text-dark-blue text-2xl font-semibold bg-off-white p-6 flex justify-between rounded-b-xl">
        {project.title}

        {project.wip && (
          <div className="text-dark-blue pr-5 pl-5 font-semibold">WIP</div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
