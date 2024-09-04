import React from 'react';

import {
  figmaDesigns,
  fullstackProjects,
  webProjects,
} from '@/data/projects.data';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  return (
    <div>
      {/* WEBSITES */}

      <div className="w-full h-screen bg-[url('/profile.svg')] bg-cover bg-center flex flex-col-reverse p-5 items-center">
        <div className="w-full overflow-hidden flex justify-center">
          <div className="flex gap-10 text-off-white p-5 overflow-x-scroll no-scrollbar">
            {webProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <h2 className="text-off-white text-4xl font-bold text-center p-1">
          CHECK OUT THE WEBSITES I HAVE DESIGNED.
        </h2>
      </div>

      {/* FIGMA DESIGNS */}

      <div className="w-full h-full bg-dark-blue flex flex-col items-center pt-20">
        <h2 className="text-off-white text-4xl font-bold text-center p-1">
          CHECK OUT MY FIGMA MOCKUPS.
        </h2>

        <div className="w-full overflow-hidden flex justify-center">
          <div className="flex gap-10 text-off-white p-5 overflow-x-scroll no-scrollbar">
            {figmaDesigns.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* FULL STACK APPS */}

      <div className="w-full h-screen bg-[url('/hireme.svg')] bg-cover bg-center flex flex-col items-center pt-20">
        <h2 className="text-off-white text-4xl font-bold text-center p-1">
          CHECK OUT MY FULL STACK WEB APPLICATIONS.
        </h2>

        <div className="w-full overflow-hidden flex justify-center">
          <div className="flex gap-10 text-off-white p-5 overflow-x-scroll no-scrollbar">
            {fullstackProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
