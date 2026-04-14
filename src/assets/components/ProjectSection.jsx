import { color, motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Code, Layers, Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Website MLS - SMKS Muhammadiyah 1 Genteng",
    description: "Sebuah platform informasi sekolah yang modern, responsif, dan fungsional untuk memudahkan akses data siswa.",
    image: "/projects/project2.png",
    tags: ["HTML", "TailwindCSS", "JavaScript"],
    demoUrl: "https://aryaaarpl.github.io/Website-MLS-SMEMSA/",
    githubUrl: "https://github.com/AryaaaRpl/Website-MLS-SMEMSA",
    color: "from-blue-600/20 to-cyan-600/20",
    featured: true
  },
  {
    id: 2,
    title: "Website Jasa Penyewaan Mobil",
    description: "Sistem booking mobil online yang dinamis dengan katalog lengkap dan antarmuka pengguna yang intuitif.",
    image: "/projects/project1.png",
    tags: ["HTML", "Bootstrap", "PHP"],
    demoUrl: "https://aryaaarpl.github.io/UKK-Hummatech/",
    githubUrl: "https://github.com/AryaaaRpl/UKK-Hummatech",
    color: "from-purple-600/20 to-pink-600/20",
    featured: false
  },
  {
    id: 3,
    title: "Website Sekolah SMPN 4 Genteng",
    description: "Website Sekolah Digital Dengan Fitur Yang Mempermudah Pendaftaran Siswa Dan Informasi Untuk Sekolah",
    image: "/projects/project3.png",
    tags: ["Laravel", "Tailwind"],
    demoUrl: "#",
    githubUrl: "https://github.com/Jasa-Pembuatan-Website-ThreeDevs/Website-SMPN-4-Genteng.git",
    color: "from-purple-600/20 to-pink-600/20",
    featured: false
  }
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-16 md:py-32 px-4 relative overflow-hidden bg-background">
      {/* Enhanced Background Decor */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/5 rounded-full blur-[80px] md:blur-[120px] -z-10 animate-pulse delay-700" />

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-20 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
              <Sparkles size={14} />
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight leading-tight">
              Karya <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Terpilih</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Eksplorasi proyek pengembangan web terbaru saya, menggabungkan desain kreatif dengan performa teknis yang solid.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="pb-2 flex justify-center md:justify-end"
          >
             <a 
              href="https://github.com/aryaaarpl" 
              target="_blank" 
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-secondary/50 backdrop-blur-sm border border-white/10 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all duration-500 overflow-hidden text-sm sm:text-base"
             >
                <span className="relative z-10">Lihat Semua Project</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden bg-[#0A0A0A] border border-white/5 shadow-2xl transition-all duration-500 hover:border-primary/30 flex flex-col">
                
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                {/* Badge Featured */}
                {project.featured && (
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/90 backdrop-blur-md text-white text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                    Featured Project
                  </div>
                )}

                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden m-3 sm:m-4 rounded-[1.2rem] sm:rounded-[1.8rem] z-10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 sm:gap-6 backdrop-blur-[2px]">
                     <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      className="w-10 h-10 sm:w-14 sm:h-14 bg-white text-black rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:scale-110 shadow-2xl"
                      title="Live Demo"
                     >
                        <ExternalLink size={20} sm:size={24} />
                     </a>
                     <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      className="w-10 h-10 sm:w-14 sm:h-14 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black border border-white/20 transition-all transform hover:scale-110 backdrop-blur-md shadow-2xl"
                      title="View Code"
                     >
                        <Github size={20} sm:size={24} />
                     </a>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-8 pt-2 sm:pt-4 relative z-10 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 sm:px-3 py-1 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider rounded-lg bg-white/5 text-white/70 border border-white/10 group-hover:border-primary/30 group-hover:text-primary transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 group-hover:translate-x-1 transition-transform duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-white/5 mt-auto">
                    <div className="flex items-center gap-2 text-[9px] sm:text-[11px] font-bold text-white/40 uppercase tracking-widest">
                      <Code size={12} sm:size={14} className="text-primary" /> Frontend
                    </div>
                    <div className="flex items-center gap-2 text-[9px] sm:text-[11px] font-bold text-white/40 uppercase tracking-widest">
                      <Layers size={12} sm:size={14} className="text-primary" /> Backend
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
