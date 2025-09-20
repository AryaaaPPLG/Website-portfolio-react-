import { useState } from "react"
import { ArrowDown } from "lucide-react"
import OrbitingCircles from "./ui/OrbitingCircles"
import { FaReact, FaHtml5, FaLaravel, FaGithub, FaPhp } from "react-icons/fa"
import { SiTailwindcss, SiTypescript,  } from "react-icons/si"
import AuroraText from "./ui/AuroraText"
import Lanyard from "./Lanyard"
import "@dimforge/rapier3d-compat";
import SparklesText from "./ui/SparklesText"


export const HeroSection = () => {

  return (
    <section
  id="hero"
  className="relative min-h-screen flex items-center justify-between px-20"
>
  {/* Orbiting Circles di kiri (setengah lingkaran aja kelihatan) */}
  <div className="absolute translate-x-30 top-5 -translate-y-55 w-[50%] flex justify-end z-15">
    <OrbitingCircles
      radius={200}
      iconSize={400}
      speed={2}
      className="text-sky-600 drop-shadow-2xl drop-shadow-sky-600"
    >
      <FaReact className="w-20 h-20"/>
      <FaHtml5 className="w-20 h-20"/>
      <SiTailwindcss className="w-20 h-20"/>
      <FaLaravel className="w-20 h-20"/>
      <FaGithub className="w-20 h-20"/>
      <SiTypescript className="w-20 h-20"/>
      <FaPhp className="w-20 h-20"/>
    </OrbitingCircles>
  </div>

  {/* Konten teks di kiri */}
  <div className="relative z-10 max-w-2xl text-left">
    <SparklesText> 
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-sky-50/80">
        <span className="opacity-0 animate-fade-in text-5xl font-extrabold mb-4">
          Hai, Saya <span> </span> 
        </span>
        <AuroraText
          speed={5}
          colors={["#4300FF", "#0065F8", "#00CAFF", "#00FFDE"]}
          className="text-5xl font-extrabold mb-4 text-primary animate-fade-in drop-shadow-xl"
        >
           Arya
        </AuroraText> 
        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 text-5xl font-extrabold mb-4">
          Prana Jaya
        </span>
      </h1>
    </SparklesText>

    <p className="text-lg md:text-xl text-muted-foreground mt-6 opacity-0 animate-fade-in-delay-3">
      Saya Adalah Seorang Front-End Developer Yang Ingin Menjadi Fullstack Developer
      Dan Ini Adalah Salah Satu Project Terbaik Saya
    </p>

    <div className="flex gap-4 pt-4 opacity-0 animate-fade-in-delay-4 ">
      <a
        href="#projects"
        className="cosmic-button cursor-target bg-sky-600 text-white hover:text-sky-600 hover:bg-white "
      >
        Lihat Projek Saya
      </a>
    </div>
  </div>
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-white cursor-target">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-foreground" />
      </div>
  {/* Lanyard selalu di kanan */}
  <div className="relative z-10">
    <Lanyard 
    position={[0, 0, 20]}
    gravity={	
[0, -40, 0]}
    fov={15}/>
  </div>
  
</section>
  )
}
