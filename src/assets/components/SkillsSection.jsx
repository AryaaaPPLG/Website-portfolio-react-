import { useState } from "react"
import { cn } from "../../lib/utils"
import { 
  Code2, 
  FileCode, 
  Github, 
  Boxes, 
  Braces, 
  Palette, 
  Hammer, 
  Monitor, 
  Terminal 
} from "lucide-react"

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", Icon: Palette },
  { name: "Javascript", level: 76, category: "frontend", Icon: Code2 },
  { name: "Tailwind CSS", level: 95, category: "frontend", Icon: Boxes },
  { name: "React", level: 87, category: "frontend", Icon: Monitor },
  { name: "Bootstrap", level: 90, category: "frontend", Icon: Hammer },

  // Backend
  { name: "Laravel", level: 65, category: "backend", Icon: Braces },
  { name: "PHP", level: 65, category: "backend", Icon: FileCode },

  // Tools
  { name: "Github", level: 87, category: "tools", Icon: Github },
  { name: "Vs Code", level: 90, category: "tools", Icon: Terminal },
]

const categories = ["all", "frontend", "backend", "tools"]

export const SkillsSelection = () => {
  const [activeCagetory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCagetory === "all" || skill.category === activeCagetory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills <span className="text-primary"> Saya </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-target",
                activeCagetory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover cursor-target"
            >
              <div className="flex items-center gap-2 mb-4">
                {skill.Icon && <skill.Icon className="w-6 h-6 text-primary" />}
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-foreground h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
