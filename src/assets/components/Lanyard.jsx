import { motion } from 'framer-motion';
import profileImage from '../images/aryaaa.jpeg'; // Mengambil gambar profile Anda

export default function Lanyard() {
  // Kita abaikan props 3D seperti position, gravity, fov yang dikirim dari HeroSection
  
  return (
    <div className="relative z-0 w-[300px] md:w-[400px] h-[500px] flex justify-center items-start pt-16">
      
      {/* Tali Lanyard (String) */}
      <div className="absolute top-[-50px] left-1/2 w-[4px] h-[150px] bg-gradient-to-b from-gray-400 to-gray-700 transform -translate-x-1/2 origin-top shadow-lg" />
      
      {/* Wrapper Kartu yang bisa berayun dan di-drag */}
      <motion.div 
        className="relative w-64 md:w-72 h-[400px] bg-gradient-to-b from-gray-200 to-white rounded-2xl border-2 border-gray-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-start p-2 origin-[50%_-100px] cursor-grab active:cursor-grabbing"
        // Animasi ayunan seperti gravitasi
        initial={{ rotate: -8 }}
        animate={{ rotate: 8 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 3,
          ease: "easeInOut"
        }}
        // Interaksi saat dihover
        whileHover={{
          scale: 1.02,
          boxShadow: "0 25px 60px rgba(0,200,255,0.3)",
          transition: { duration: 0.3 }
        }}
        // Interaksi saat ditarik
        drag
        dragConstraints={{ left: -50, right: 50, top: -20, bottom: 50 }}
        dragElastic={0.1}
        whileDrag={{ scale: 1.05, rotate: 0 }}
      >
        {/* Penjepit Atas (Clip) */}
        <div className="absolute top-[-20px] left-1/2 w-14 h-8 bg-gradient-to-b from-gray-300 to-gray-500 rounded-t-lg transform -translate-x-1/2 shadow-md border border-gray-400 z-10 flex justify-center items-center">
            <div className="w-8 h-2 bg-gray-800 rounded-full shadow-inner opacity-80" />
        </div>
        
        {/* Lubang Penjepit di Kartu */}
        <div className="absolute top-[-5px] left-1/2 w-6 h-3 bg-gray-900 rounded-full transform -translate-x-1/2 shadow-inner z-0" />
        
        {/* Konten Kartu */}
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-xl flex flex-col items-center justify-between p-6 overflow-hidden relative border border-white/20">
          
          {/* Efek Cahaya Latar */}
          <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          
          {/* Info Profil */}
          <div className="z-10 w-full flex flex-col items-center mt-4">
            <div className="w-32 h-32 rounded-full border-[4px] border-white/20 overflow-hidden mb-6 shadow-[0_0_20px_rgba(0,0,0,0.8)] relative group">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                onError={(e) => e.target.src = '/public/assets/lanyard/lanyard11.jpeg'}
              />
              <div className="absolute inset-0 border-[2px] border-blue-400/50 rounded-full animate-pulse" />
            </div>
            
            <h2 className="text-2xl font-extrabold text-white tracking-wide text-center drop-shadow-lg">
              Arya Prana
            </h2>
            <p className="text-sky-400 text-sm font-bold tracking-[0.2em] uppercase mt-2 drop-shadow-md">
              Fullstack-Dev
            </p>
          </div>
          
          {/* Barcode / ID Section */}
          <div className="z-10 w-full bg-black/40 rounded-xl p-4 backdrop-blur-md border border-white/10 text-center shadow-inner mt-4">
            <p className="text-xs text-gray-400 mb-2 font-mono">ACC: 2026-DEV-001</p>
            <div className="w-full h-12 bg-white rounded-md flex items-center justify-center overflow-hidden px-3 shadow-sm">
               {/* Simulasi Barcode Klasik */}
               <div className="w-full h-full flex justify-between items-center opacity-90 py-2">
                  <div className="w-1 h-full bg-black"></div>
                  <div className="w-2 h-full bg-black"></div>
                  <div className="w-[2px] h-full bg-black"></div>
                  <div className="w-3 h-full bg-black"></div>
                  <div className="w-1 h-full bg-black"></div>
                  <div className="w-[3px] h-full bg-black"></div>
                  <div className="w-2 h-full bg-black"></div>
                  <div className="w-1 h-full bg-black"></div>
                  <div className="w-[2px] h-full bg-black"></div>
                  <div className="w-2 h-full bg-black"></div>
                  <div className="w-1 h-full bg-black"></div>
                  <div className="w-3 h-full bg-black"></div>
                  <div className="w-[2px] h-full bg-black"></div>
                  <div className="w-1 h-full bg-black"></div>
               </div>
            </div>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
}
