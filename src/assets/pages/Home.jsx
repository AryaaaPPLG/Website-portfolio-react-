import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import TargetCursor from "../components/TargetCursor";
import ProfileCard from "../components/ProfileCard";


export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
{/* Theme Toggle */}
<ThemeToggle />
{/* Background Effects */}
<StarBackground />
{/* Navbar */}
<Navbar />
{/* Main Content */}
<main className="flex items-center justify-center min-h-screen relative">
   <TargetCursor 
    pinDuration={2}
        hideDefaultCursor={true}
   />
   <ProfileCard 
   name="Andry Hakim"
  title="Financial Advisor"
  handle="Arya"
  status="Online"
  contactText="Contact Me"
  avatarUrl="../images/andryHakim.png"
  showBehindGradient={true}
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}/>
    <HeroSection />

</main>

{/* Simple Footer */}
    </div>
};