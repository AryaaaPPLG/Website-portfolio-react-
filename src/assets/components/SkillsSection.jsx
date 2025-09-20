import { useState } from "react"
import { cn } from "../../lib/utils"

import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaPhp, FaLaravel, FaGithub 
} from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"

const skills = [
  { name: "HTML", level: 95, category: "frontend", Icon: FaHtml5 },
  { name: "CSS", level: 95, category: "frontend", Icon: FaCss3Alt },
  { name: "Javascript", level: 76, category: "frontend", Icon: FaJsSquare },
  { name: "Tailwind CSS", level: 95, category: "frontend", Icon: SiTailwindcss },
  { name: "React", level: 87, category: "frontend", Icon: FaReact },
  { name: "Bootstrap", level: 90, category: "frontend", Icon: FaBootstrap },
  { name: "Laravel", level: 65, category: "backend", Icon: FaLaravel },
  { name: "PHP", level: 65, category: "backend", Icon: FaPhp },
  { name: "Github", level: 87, category: "tools", Icon: FaGithub },
]

const categories = ["all", "frontend", "backend", "tools"]

export const SkillsSelection = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  )
  return (
      <section id="skills" className="py-24 px-4 relative bg-secondary/30 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills <span className="text-primary"> Saya </span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="relative group [perspective:1000px] cursor-pointer"
            >
              <div className="relative w-full h-44 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-xl shadow-lg flex flex-col justify-center items-center p-6 [backface-visibility:hidden]">
                  <skill.Icon className="w-12 h-12 mb-3" />
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                  <span className="text-sm">{skill.level}%</span>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-400 text-white rounded-xl shadow-lg flex flex-col justify-center items-center p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="text-sm mb-2">Skill Level</p>
                  <span className="text-2xl font-bold">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
