import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import RecentProjects from "@/components/RecentProjects";
import Writing from "@/components/Writing";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import SocialIcons from "@/components/SocialIcons"; 


export default function Home() {
  return (
    <main className="relative dark:bg-black-100 bg-white-200 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <div className="absolute top-4 left-4 z-50">
          <SocialIcons />
        </div>
        <Hero />
        <Grid />
        <Skills />
        <RecentProjects />
        <Writing />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}