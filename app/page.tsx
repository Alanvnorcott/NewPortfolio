import dynamic from 'next/dynamic';
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import DarkModeToggle from "@/components/DarkModeToggle";
import Clients from "@/components/Clients";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/Footer";
import SocialIcons from "@/components/SocialIcons";

const LazyExperience = dynamic(() => import('@/components/Experience'), { ssr: false });
const LazyRecentProjects = dynamic(() => import('@/components/RecentProjects'), { ssr: false });
const LazyClients = dynamic(() => import('@/components/Clients'), { ssr: false });
const LazyFooter = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  return (
    <main className="bg-white text-black">
      <FloatingNav navItems={navItems} />
      <div className="absolute top-4 left-4 z-50">
        <SocialIcons />
      </div>
      <div className="absolute top-4 right-4 z-50">
        <DarkModeToggle />
      </div>
      <Hero />
      <Grid />
      <ExperienceTimeline />
      <LazyRecentProjects />
      <LazyClients />
      <LazyFooter />
    </main>
  );
}