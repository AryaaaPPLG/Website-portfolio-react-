import ProfileCard from "./ProfileCard";
import img from "../images/aryaProfile.jpeg"
import { Download } from "lucide-react";


export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-32 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-foreground mb-10 md:mb-12 tracking-tight">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Text Content - Left on Desktop */}
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Backend Developer & Software Engineer
            </h3>

            <div className="space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                "Halo, saya Arya. Perjalanan saya di dunia teknologi dimulai dari rasa penasaran bagaimana sebuah sistem bekerja. Sebagai siswa Rekayasa Perangkat Lunak, saya tidak hanya menulis baris kode, tetapi saya membangun solusi."
              </p>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                "Aktif sebagai Lead Backend di kolektif ThreeDevs, saya terbiasa mengelola alur data yang kompleks dan memastikan setiap sistem berjalan efisien. Saya percaya bahwa teknologi terbaik adalah teknologi yang bisa mempermudah hidup orang lain."
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed hidden sm:block">
                Kenapa Pilih Saya?, Karena Saya Sangat Tertarik Dengan Teknologi, Saya Sering Melakukan Prompt Untuk Mengetahui Sesuatu Mau itu Code Atau Pun Pengetahuan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button cursor-target bg-sky-600 text-white hover:bg-white hover:text-sky-600 w-full sm:w-auto text-center py-3 px-8">
                Hubungi Saya
              </a>
              <a
                href="../CV/CV_GenZ_Freelance.docx" download="CV_GenZ_Freelance.docx"
                className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300 cursor-target flex gap-2 items-center justify-center hover:shadow-lg hover:shadow-sky-600/20 w-full sm:w-auto"
              >
                Download CV <Download size={16}/>
              </a>
            </div>
          </div>

          {/* Profile Card - Right on Desktop */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-full max-w-[320px] sm:max-w-md duration-500 ease-in-out card-hover">
              <ProfileCard
                name="Arya Prana Jaya"
                title="Software Engineer"
                handle="Arya"
                status="Write A Code"
                contactText="Contact Me"
                avatarUrl={img}
                grainUrl="https://i.pinimg.com/736x/cc/7c/d0/cc7cd03e7b05a678a307601d4a1e3024.jpg"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={true}
                onContactClick={() => window.location.href="https://wa.me/+62895368757054"}
                className="cursor-target"
              /> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
