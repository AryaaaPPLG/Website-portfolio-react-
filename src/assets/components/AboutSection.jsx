import ProfileCard from "./ProfileCard";
import img from "../images/aryaa.png"
import Lanyard from "./Lanyard";
import { Download } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl font-extrabold text-center text-foreground mb-4 tracking-tight mb-12 text-center">
          About <span className="text-5xl font-extrabold text-center text-foreground mb-4 tracking-tight text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Front-End Developer & Software Engineer
            </h3>

            <p className="text-muted-foreground ">
              Saya Adalah Junior Front-end Developer Yang Sebentar Lagi Akan Lulus Dari Jenjang SMK Dan Akan Langsung Bekerja
            </p>

            <p className="text-muted-foreground">
              Kenapa Pilih Saya Karena Saya Sangat Tertarik Dengan Teknologi, Saya Sering Melakukan Prompt Untuk Mengetahui Sesuatu Mau itu Code Atau Pun Pengetahuan, Dengan ini Saya Sangat Yakin Dengan Kebolehan Saya Untuk Membuat Sebuah Mega Project Disebuah Perusahaan Atau Pun UMKM, Atau Berkontribusi Ataupun Kolaborasi Dengan Siapapun
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button cursor-target bg-sky-600 text-white hover:bg-white hover:text-sky-600">
                Hubungi Saya
              </a>
              <a
                href=""
                className="px-8 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 cursor-target flex gap-2 items-center hover:bg-sky-150  hover:shadow-xs hover:shadow-sky-600"
              >
                Download CV <Download size={16}/>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border border-sky-600 shadow-xs shadow-sky-600 backdrop-blur-xs  p-2 pb-0  duration-500 ease-in-out card-hover ">
              {/* <ProfileCard
                name="Arya Prana Jaya"
                title="Software Engineer"
                handle="Arya"
                status="Write A Code"
                contactText="Contact Me"
                avatarUrl={img}
                grainUrl="https://i.pinimg.com/474x/ef/b1/57/efb157823fb1249f8381a2a0b608e95b.jpg"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log("Contact clicked")}
                className="cursor-target"
              />  */}
             <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
