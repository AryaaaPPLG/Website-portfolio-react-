import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../../lib/utils"

import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaPhp, FaLaravel, FaGithub 
} from "react-icons/fa"

const skills = [
  { name: "HTML", level: 95, category: "frontend", Icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", level: 95, category: "frontend", Icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Javascript", level: 76, category: "frontend", Icon: FaJsSquare, color: "text-yellow-400" },
  { name: "Tailwind CSS", level: 95, category: "frontend", Icon: FaCss3Alt, color: "text-sky-400" },
  { name: "React", level: 87, category: "frontend", Icon: FaReact, color: "text-cyan-400" },
  { name: "Bootstrap", level: 90, category: "frontend", Icon: FaBootstrap, color: "text-purple-500" },
  { name: "Laravel", level: 65, category: "backend", Icon: FaLaravel, color: "text-red-500" },
  { name: "PHP", level: 65, category: "backend", Icon: FaPhp, color: "text-indigo-400" },
  { name: "Github", level: 87, category: "tools", Icon: FaGithub, color: "text-white" },
  { name: "Next.js", level: 80, category: "frontend", Icon: FaReact, color: "text-cyan-400" }
]

const categories = ["all", "frontend", "backend", "tools"]

export const SkillsSelection = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [skillsState, setSkillsState] = useState(skills)

  useEffect(() => {
    import('react-icons/si')
      .then((mod) => {
        setSkillsState((prev) =>
          prev.map((s) =>
            s.name === 'Tailwind CSS' ? { ...s, Icon: mod.SiTailwindcss } : s
          )
        )
      })
      .catch(() => {})
  }, [])

  const filteredSkills = skillsState.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  )

  return (
    <section id="skills" className="py-16 md:py-32 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Keahlian <span className="text-primary">Teknis</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Kumpulan teknologi yang saya gunakan untuk membangun solusi digital yang inovatif dan efisien.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10 md:mb-16">
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-secondary/30 backdrop-blur-md rounded-2xl border border-white/5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 sm:px-6 py-2 rounded-xl text-[10px] sm:text-xs md:text-sm font-bold capitalize transition-all duration-300 cursor-target",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-5 md:p-8 bg-secondary/20 backdrop-blur-md border border-white/5 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center gap-3 md:gap-4 hover:border-primary/50 transition-all overflow-hidden h-36 sm:h-40 md:h-44">
                  
                  {/* Skill Progress Circle Background (Optional visual) */}
                  <skill.Icon className={cn("text-3xl sm:text-4xl md:text-5xl mb-1 md:mb-2 transition-all group-hover:scale-110", skill.color)} />
                  <div className="text-center w-full px-2">
                    <h3 className="font-bold text-sm sm:text-base md:text-lg truncate">{skill.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
