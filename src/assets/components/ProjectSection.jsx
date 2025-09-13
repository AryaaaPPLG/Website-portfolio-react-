import { Description } from "@radix-ui/react-toast"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { div } from "three/tsl"


const projects = [
    {
        id: 1,
        title: "Website MLS - SMKS Muhammadiyah 1 Genteng",
        description: "Sebuah website sederhana dan fungsional menggunakan html dan tailwindcss",
        image: "/projects/project2.png",
        tags: ["Html", "TailwindCSS", "WebsiteMLS"],
        demoUrl: "https://aryaaarpl.github.io/Website-MLS-SMEMSA/",
        githubUrl: "https://github.com/AryaaaRpl/Website-MLS-SMEMSA",
    },
    {
        id: 2,
        title: "Website Jasa Penyewaan Mobil",
        description: "Sebuah website dinamis dan fungsional menggunakan html dan bootstrap",
        image: "/projects/project1.png",
        tags: ["Html", "Bootstrap", "sewa-mobil"],
        demoUrl: "https://aryaaarpl.github.io/UKK-Hummatech/",
        githubUrl: "https://github.com/AryaaaRpl/UKK-Hummatech",
    },

]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-5xl font-extrabold text-center text-foreground mb-4 tracking-tight ">Project <span className="text-primary"> Saya</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Berikut adalah project project saya, project ini dibuat untuk sebatas latihan untuk meningkatkan pemahaman di setiap library ataupun bahasa pemrograman.
                </p>

                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group-bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-target"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-foreground text-primary ">{tag}</span>
                                    ))}
                                
                            </div>
                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a
                                        href={project.demoUrl}
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        target="_blank"
                                        >
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a 
                                    href={project.githubUrl} 
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    target="_blank"
                                    >
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/aryaaarpl" target="_blank" className="cosmic-button hover:bg-white hover:text-foreground w-fit flex items-center bg-foreground text-white cursor-target mx-auto gap-2">
                        Akun GitHub Saya <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}