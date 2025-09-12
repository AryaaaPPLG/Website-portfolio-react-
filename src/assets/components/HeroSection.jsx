import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return <section 
    id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bolt tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hai Saya </span>
                    <span className="text-primary opacity-0 animate-fade-in cursor-target">Arya </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Prana Jaya</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Saya Adalah Seorang Front-End Developer Yang Ingin Menjadi Fullstack Developer
                    Dan Ini Adalah Salah Satu Project Terbaik Saya
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button cursor-target bg-sky-600 text-white hover:text-sky-600 hover:bg-white">Lihat Projek Saya</a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-white cursor-target">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-foreground"/>
        </div>
    </section>
}