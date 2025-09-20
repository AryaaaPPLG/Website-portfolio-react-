import { useState } from "react"
import { ArrowDown } from "lucide-react"
import OrbitingCircles from "./ui/OrbitingCircles"
import { FaReact, FaHtml5, FaLaravel, FaGithub } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import AuroraText from "./ui/AuroraText"
import Lanyard from "./Lanyard"
import "@dimforge/rapier3d-compat";
import SparklesText from "./ui/SparklesText"

export const HeroSection = () => {
  const [showLanyard, setShowLanyard] = useState(false)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <OrbitingCircles radius={200} iconSize={200} speed={2} className="text-sky-600 drop-shadow-2xl drop-shadow-sky-600" >
                <FaReact className="w-20 h-20"/>
                <FaHtml5 className="w-20 h-20"/>
                <SiTailwindcss className="w-20 h-20"/>
                <FaLaravel className="w-20 h-20"/>
                <FaGithub className="w-20 h-20"/>
              </OrbitingCircles>
      <div className="container max-w-4xl mx-auto text-center z-10">
        
        <div className="space-y-6">
          <SparklesText> 
            <h1 className="text-4xl md:text-6xl font-bolt tracking-tight text-sky-50/80">
            <span className="opacity-0 animate-fade-in text-5xl font-extrabold text-center mb-4 tracking-tight">Hai, Saya </span>
            
            <AuroraText speed={5} colors={["#4300FF", "#0065F8", "#00CAFF", "#00FFDE"]} className="text-5xl font-extrabold text-center mb-4  text-primary opacity-1 animate-fade-in cursor-target">Arya</AuroraText> 
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 text-5xl font-extrabold text-center mb-4 tracking-tight">Prana Jaya</span>
          </h1>
          </SparklesText>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Saya Adalah Seorang Front-End Developer Yang Ingin Menjadi Fullstack Developer
            Dan Ini Adalah Salah Satu Project Terbaik Saya
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="cosmic-button cursor-target bg-sky-600 text-white hover:text-sky-600 hover:bg-white"
            >
              Lihat Projek Saya
            </a>

            <button
              onClick={() => setShowLanyard(!showLanyard)}
              className="cosmic-button cursor-target bg-purple-600 text-white hover:text-purple-600 hover:bg-white"
            >
              {showLanyard ? "✖" : "📇"}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-white cursor-target">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-foreground" />
      </div>

      {/* Render Lanyard */}
      {showLanyard && (
        <div className="absolute inset-0 mt-17 z-20 bg-black/80 bg-cover flex items-center justify-center w-full">
          <div className="relative w-full h-full ">
            <button
              onClick={() => setShowLanyard(false)}
              className="absolute top-26 right-4 z-30 px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
            >
              ✕
            </button>
            <Lanyard fov={9}/>
          </div>
        </div>
      )}
    </section>
  )
}
