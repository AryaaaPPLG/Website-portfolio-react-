import { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import LazyMount from "../components/LazyMount";
import { useMediaQuery } from "@/lib/useMediaQuery";

const StarBackground = lazy(() =>
  import("../components/StarBackground").then((m) => ({ default: m.StarBackground }))
);
const TargetCursor = lazy(() => import("../components/TargetCursor"));
const ClickSpark = lazy(() => import("../components/ClickSpark"));
const AboutSection = lazy(() =>
  import("../components/AboutSection").then((m) => ({ default: m.AboutSection }))
);
const SkillsSelection = lazy(() =>
  import("../components/SkillsSection").then((m) => ({ default: m.SkillsSelection }))
);
const ProjectSection = lazy(() =>
  import("../components/ProjectSection").then((m) => ({ default: m.ProjectSection }))
);
const CertificateList = lazy(() => import("../components/CertificateList"));
const ContactSection = lazy(() =>
  import("../components/ContactSection").then((m) => ({ default: m.ContactSection }))
);


export const Home = () => {
  const isDesktopLike = useMediaQuery("(min-width: 768px)", false);
  const isPointerFine = useMediaQuery("(pointer: fine)", false);
  const enableEffects = isDesktopLike && isPointerFine;

  const content = (
    <>
      <HeroSection />

      <LazyMount fallback={<div className="h-10" />}>
        <Suspense fallback={<div className="h-10" />}>
          <AboutSection />
        </Suspense>
      </LazyMount>

      <LazyMount fallback={<div className="h-10" />}>
        <Suspense fallback={<div className="h-10" />}>
          <SkillsSelection />
        </Suspense>
      </LazyMount>

      <LazyMount fallback={<div className="h-10" />}>
        <Suspense fallback={<div className="h-10" />}>
          <ProjectSection />
        </Suspense>
      </LazyMount>

      <LazyMount fallback={<div className="h-10" />}>
        <Suspense fallback={<div className="h-10" />}>
          <CertificateList />
        </Suspense>
      </LazyMount>

      <LazyMount fallback={<div className="h-10" />}>
        <Suspense fallback={<div className="h-10" />}>
          <ContactSection />
        </Suspense>
      </LazyMount>
    </>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
{/* Theme Toggle */}
<Navbar />
<ThemeToggle />
{/* Background Effects */}
<Suspense fallback={null}>
  <StarBackground />
</Suspense>

{/* Main Content */}
<main className="flex flex-col items-center justify-center min-h-screen relative">
  {enableEffects && (
    <Suspense fallback={null}>
      <TargetCursor pinDuration={2} hideDefaultCursor={true} />
    </Suspense>
  )}

  {enableEffects ? (
    <Suspense fallback={content}>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {content}
      </ClickSpark>
    </Suspense>
  ) : (
    content
  )}
</main>
    </div>
  );
};