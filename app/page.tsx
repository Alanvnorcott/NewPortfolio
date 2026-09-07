import dynamic from 'next/dynamic';
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import DarkModeToggle from "@/components/DarkModeToggle";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SocialIcons from "@/components/SocialIcons";
import LanguageToggle from "@/components/LanguageToggle";

const LazyRecentProjects = dynamic(() => import('@/components/RecentProjects'), { ssr: false });
const LazyClients = dynamic(() => import('@/components/Clients'), { ssr: false });
const LazyFooter = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  return (
    <main className="site-shell min-h-screen overflow-hidden">
      <FloatingNav navItems={navItems} />
      <div className="fixed top-4 left-4 z-50 hidden sm:block">
        <SocialIcons />
      </div>
      <div className="fixed right-4 top-4 z-50 flex items-start gap-3">
        <LanguageToggle />
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
