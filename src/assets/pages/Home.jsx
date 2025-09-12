import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import TargetCursor from "../components/TargetCursor";
import { AboutSection } from "../components/AboutSection";
import { SkillsSelection } from "../components/SkillsSection";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground">
{/* Theme Toggle */}
<ThemeToggle />
{/* Background Effects */}
<StarBackground />
{/* Navbar */}
<Navbar />
{/* Main Content */}
<main className="flex flex-col items-center justify-center min-h-screen relative">
   <TargetCursor 
    pinDuration={2}
        hideDefaultCursor={true}
   />
    <HeroSection />   
  
    <AboutSection />
    <SkillsSelection />
</main>

{/* Simple Footer */}
    </div>
};