import Navbar from "../components/Navbar"
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import TargetCursor from "../components/TargetCursor";
import { AboutSection } from "../components/AboutSection";
import { SkillsSelection } from "../components/SkillsSection";
import ClickSpark from "../components/ClickSpark";
import { ProjectSection } from "../components/ProjectSection";
import CertificateList from "../components/CertificateList";


export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground">
{/* Theme Toggle */}
<Navbar />
<ThemeToggle />
{/* Background Effects */}
<StarBackground />
{/* Navbar */}

{/* <NavbarPolygon/> */}
{/* Main Content */}
<main className="flex flex-col items-center justify-center min-h-screen relative">
   <TargetCursor 
    pinDuration={2}
        hideDefaultCursor={true}
   />
    <ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
    <HeroSection />   
    <AboutSection />
    <SkillsSelection />
    <ProjectSection />
    <CertificateList />
    </ClickSpark>
</main>

{/* Simple Footer */}
    </div>
    
};