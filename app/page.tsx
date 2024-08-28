// components.
import ProgressBar from '@/components/ProgressBar';

// sections
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import HireMe from '@/components/HireMe';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-dark-blue w-full overflow-hidden">
      <ProgressBar />
      <Header />

      <Profile />

      <Projects />

      <HireMe />

      <Footer />
    </div>
  );
}
