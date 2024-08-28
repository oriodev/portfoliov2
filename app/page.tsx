// components.
import ProgressBar from '@/components/ProgressBar';

// sections
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import HireMe from '@/components/HireMe';
import { fullstackProjects, webProjects } from '@/data/projects.data';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <div className="bg-dark-blue w-full overflow-hidden">
      <ProgressBar />
      <Header />
      <Profile />

      {/* projects */}
      <div className="w-full h-screen bg-[url('/profile.svg')] bg-cover bg-center flex flex-col-reverse p-5 items-center">
        <div className="w-full overflow-hidden flex justify-center">
          <div className="flex gap-10 text-off-white p-5 overflow-x-scroll">
            {webProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <h2 className="text-off-white text-4xl font-bold text-center">
          CHECK OUT THE WEBSITES I HAVE DESIGNED.
        </h2>
      </div>

      <div className="w-full h-screen bg-[url('/hireme.svg')] bg-cover bg-center flex flex-col items-center pt-20">
        <h2 className="text-off-white text-4xl font-bold text-center">
          CHECK OUT MY FULL STACK WEB APPLICATIONS.
        </h2>

        <div className="w-full overflow-hidden flex justify-center">
          <div className="flex gap-10 text-off-white p-5 overflow-x-scroll">
            {fullstackProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* hire me */}
      <HireMe />

      {/* footer */}
      <div className="bg-dark-blue text-off-white font-bold p-5 flex justify-center">
        <p>ORIODEV © 2024</p>
      </div>
    </div>
  );
}
