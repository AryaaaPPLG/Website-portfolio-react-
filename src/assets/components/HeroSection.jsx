import { useState, useEffect } from "react"
import { ArrowDown } from "lucide-react"
import OrbitingCircles from "./ui/OrbitingCircles"
import { FaReact, FaHtml5, FaLaravel, FaGithub, FaPhp, FaCss3Alt, FaJsSquare } from "react-icons/fa"
import AuroraText from "./ui/AuroraText"
import Lanyard from "./Lanyard"
import SparklesText from "./ui/SparklesText"
import { useMediaQuery } from "../../lib/useMediaQuery"


export const HeroSection = () => {
  const [siIcons, setSiIcons] = useState({})
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    import('react-icons/si')
      .then((mod) => {
        setSiIcons({ SiTailwindcss: mod.SiTailwindcss, SiTypescript: mod.SiTypescript })
      })
      .catch(() => {})
  }, [])

  return (
    <section
  id="hero"
  className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-20 py-20 md:py-0 overflow-hidden"
>
  {/* Orbiting Circles di kiri (setengah lingkaran aja kelihatan di desktop, full di mobile) */}
  <div className="absolute left-0 md:left-0 translate-x-0 md:translate-x-30 top-[-5%] md:top-5 -translate-y-0 md:-translate-y-55 w-full md:w-[50%] flex justify-center md:justify-end z-0 opacity-80 md:opacity-100 pointer-events-none">
    <OrbitingCircles
      radius={isMobile ? 140 : 200}
      iconSize={isMobile ? 28 : 40}
      speed={2}
      className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
    >
      <FaReact className="w-8 h-8 md:w-20 md:h-20 text-cyan-400"/>
      <FaHtml5 className="w-8 h-8 md:w-20 md:h-20 text-orange-500"/>
      {siIcons.SiTailwindcss ? (
        <siIcons.SiTailwindcss className="w-8 h-8 md:w-20 md:h-20 text-sky-400" />
      ) : (
        <FaCss3Alt className="w-8 h-8 md:w-20 md:h-20 text-blue-500" />
      )}
      <FaLaravel className="w-8 h-8 md:w-20 md:h-20 text-red-500"/>
      <FaGithub className="w-8 h-8 md:w-20 md:h-20 text-white"/>
      {siIcons.SiTypescript ? (
        <siIcons.SiTypescript className="w-8 h-8 md:w-20 md:h-20 text-blue-600" />
      ) : (
        <FaJsSquare className="w-8 h-8 md:w-20 md:h-20 text-yellow-400" />
      )}
      <FaPhp className="w-8 h-8 md:w-20 md:h-20 text-indigo-400"/>
    </OrbitingCircles>
  </div>

  {/* Konten teks di kiri */}
  <div className="relative z-10 max-w-2xl text-center md:text-left mt-10 md:mt-0 px-2">
    <SparklesText> 
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-foreground dark:text-sky-50/80 leading-tight">
        <span className="opacity-0 animate-fade-in block md:inline text-4xl sm:text-5xl font-extrabold mb-2 md:mb-4">
          Hai, Saya <span> </span> 
        </span>
        <div className="flex flex-wrap justify-center md:justify-start gap-x-2 gap-y-1">
          <AuroraText
            speed={5}
            colors={["#4300FF", "#0065F8", "#00CAFF", "#00FFDE"]}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary animate-fade-in drop-shadow-xl"
          >
             Arya
          </AuroraText> 
          <span className="text-gradient opacity-0 animate-fade-in-delay-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground dark:text-sky-50/90">
            Prana Jaya
          </span>
        </div>
      </h1>
    </SparklesText>

    <p className="text-sm sm:text-base md:text-xl text-muted-foreground mt-6 opacity-0 animate-fade-in-delay-3 max-w-lg mx-auto md:mx-0">
      "Menggabungkan kreativitas Frontend dengan ketangguhan Backend untuk menciptakan pengalaman digital terbaik."
    </p>

    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-8 opacity-0 animate-fade-in-delay-4 ">
      <a
        href="#projects"
        className="cosmic-button cursor-target bg-sky-600 text-white hover:text-sky-700 hover:bg-white dark:hover:text-sky-600 w-full sm:w-auto text-center py-3 px-8"
      >
        Lihat Projek Saya
      </a>
    </div>
  </div>

  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce cursor-target">
    <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
    <ArrowDown className="h-5 w-5 text-muted-foreground" />
  </div>

  {/* Lanyard selalu di kanan */}
  <div className="relative z-10 cursor-target mt-12 md:mt-0 w-full md:w-auto flex justify-center overflow-visible">
    <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-none">
      <Lanyard 
        position={[0, 0, 20]}
        gravity={[0, -40, 0]}
        fov={isMobile ? 25 : 15}
      />
    </div>
  </div>
  
</section>
  )
}
