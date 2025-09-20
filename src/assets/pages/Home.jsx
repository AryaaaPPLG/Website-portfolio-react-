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
import Squares from "../components/Squares";


export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground">
{/* Theme Toggle */}
<Navbar />
<ThemeToggle />
{/* Background Effects */}
{/* <StarBackground /> */}

{/* Navbar */}

{/* Main Content */}
<main className="flex flex-col items-center justify-center min-h-screen relative">
    <div className="fixed top-0 bottom-0 right-0 left-0 w-full h-full ">
<Squares
direction="down"
borderColor="#00f7ffff"
squareSize={60}
hoverFillColor="#5b5b5bff"/>
</div>
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