import { motion } from "framer-motion";
import { MessageSquare, Mail, MapPin, Send, Phone } from "lucide-react";
import { useMediaQuery } from "../../lib/useMediaQuery";

export const ContactSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const whatsappNumber = "62895368757054"; // Format internasional tanpa '+'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Halo%20Arya,%20saya%20tertarik%20dengan%20projek%20Anda.`;

  return (
    <section id="contact" className="py-16 md:py-24 px-4 relative bg-background/50 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Mari <span className="text-primary">Berkolaborasi</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau sekadar ingin bertanya? Silakan hubungi saya kapan saja!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center cursor-target">
          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-8"
          >
            <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-secondary/20 rounded-2xl border border-white/5 backdrop-blur-sm group hover:border-primary/50 transition-all">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Phone size={isMobile ? 20 : 28} />
              </div>
              <div>
                <h3 className="text-base md:text-xl font-bold">WhatsApp</h3>
                <p className="text-xs md:text-base text-muted-foreground">+62 895-3687-57054</p>
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-secondary/20 rounded-2xl border border-white/5 backdrop-blur-sm group hover:border-primary/50 transition-all">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Mail size={isMobile ? 20 : 28} />
              </div>
              <div>
                <h3 className="text-base md:text-xl font-bold">Email</h3>
                <p className="text-xs md:text-base text-muted-foreground truncate max-w-[180px] sm:max-w-none">aryapranajaya02@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-secondary/20 rounded-2xl border border-white/5 backdrop-blur-sm group hover:border-primary/50 transition-all">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <MapPin size={isMobile ? 20 : 28} />
              </div>
              <div>
                <h3 className="text-base md:text-xl font-bold">Lokasi</h3>
                <p className="text-xs md:text-base text-muted-foreground">Banyuwangi, Jawa Timur</p>
              </div>
            </div>
          </motion.div>

          {/* Action Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 md:p-8 bg-gradient-to-br from-primary/20 via-background to-secondary/10 rounded-3xl border border-primary/20 relative shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 cursor-target hidden sm:block">
                <Send size={120} className="rotate-12" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ayo <span className="text-primary">Mulai</span> Sesuatu!</h3>
            <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-lg">
              Saya selalu terbuka untuk project baru atau sekadar diskusi teknologi. Klik tombol di bawah untuk langsung terhubung ke WhatsApp saya.
            </p>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 cursor-target"
            >
              <MessageSquare size={isMobile ? 20 : 24} />
              Ayo Bangun Sesuatu yang Hebat 
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
