"use client";

import { useEffect, useState } from "react";
import { Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


// Clip-path zigzag bawah (dipakai untuk nav background)
const CLIP_PATH =
  "polygon(0 0, 100% 0, 100% 80%, 68% 80%, 64% 100%, 36% 100%, 32% 80%, 0 80%)";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NavLink = ({ href, children }) => (
    <li>
      <a
        href={href}
        className="relative block font-bold text-base tracking-wide py-2 text-white transition duration-300 hover:text-cyan-300 hover:drop-shadow-[0_0_6px_#00fff7] group cursor-target"
      >
        {children}
        <span className="absolute bottom-1 left-0 block h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>
      </a>
    </li>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* background zigzag (gradient shadow) - still inside header */}
      {!isScrolled && (
        <div
          className="absolute left-0 right-0"
          style={{
            top: "0",
            height: "81px",
            WebkitClipPath: CLIP_PATH,
            clipPath: CLIP_PATH,
            background: "linear-gradient(90deg, #00f7e8, #00d1b8, #00f7e8)",
            backgroundSize: "300% 100%",
            animation: "gradientShadowMove 6s linear infinite",
            filter: "drop-shadow(0 16px 24px rgba(64,255,170,0.18))",
            opacity: 1,
            pointerEvents: "none",
          }}
        />
      )}

      {/* NAVBAR (clip-path applied to nav so background is zigzag) */}
      <motion.nav
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative z-20 transition-all duration-300 pointer-events-auto backdrop-blur-xl`}
        style={{
          WebkitClipPath: CLIP_PATH,
          clipPath: CLIP_PATH,
          backgroundColor: isScrolled ? "rgba(12,15,38,0.75)" : "#0c0f26",
          border: isScrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* left */}
          <ul className="hidden md:flex items-center gap-4 pointer-events-auto">
            <NavLink  href="#">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#certificate">Certificate</NavLink>
          </ul>

          {/* center */}
          <a href="#home" className="flex items-center gap-3 text-center mx-auto pointer-events-auto pr-7">
            <img src="./react.svg" alt="Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-cyan-400 font-moderniz  font-extrabold text-lg">ARYA PRANA JAYA</h1>
              <p
                className="text-[13px] text-cyan-400/80 font-semibold tracking-wider"
                style={{
                  textShadow:
                    "0.5px 0.5px 0 #00ffdc, -0.5px -0.5px 0 #00ffdc, 0.5px -0.5px 0 #00ffdc, -0.5px 0.5px 0 #00ffdc",
                }}
              >
                Try To Be Better
              </p>
            </div>
          </a>

          {/* right */}
          <ul className="hidden md:flex items-center gap-2 pointer-events-auto ">
            <NavLink href="#projects">Project</NavLink>
            <li>
              <a
                href="#contact"
                className="flex items-center gap-0 font-bold text-white hover:text-cyan-300 hover:drop-shadow-[0_0_6px_#00fff7] transition duration-300 mx-9"
              >
                Contact 
              </a>
            </li>
          </ul>

          {/* mobile toggle */}
          <button
            onClick={() => setIsMenuOpen((p) => !p)}
            className="md:hidden text-cyan-400 text-3xl pointer-events-auto"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden px-6 pb-4 pointer-events-auto"
            >
              <ul className="flex flex-col gap-4 text-center text-white">
                <NavLink  href="#home">Home</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#projects">Project</NavLink>
                <NavLink href="#certificate">certificate</NavLink>
                <li>
                  <a
                    href="#contact"
                    className="flex justify-center items-center gap-1 font-bold text-white hover:text-cyan-300 hover:drop-shadow-[0_0_6px_#00fff7] transition duration-300"
                  >
                    Contact <Shield size={14} />
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* =========================
          SVG NEON STROKE — OUTSIDE NAV (NOT CLIPPED)
          ========================= */}
 <svg
  className="absolute bottom-0 left-0 w-full h-3 pointer-events-none"
  preserveAspectRatio="none"
  viewBox="0 0 100 100"
>
  <polyline
    points="0,80 32,80 36,100 64,100 68,80 100,80"
    stroke="#00fff7"
    strokeWidth="0.3"   // super tipis
    strokeLinecap="round"
    strokeLinejoin="round"
    vectorEffect="non-scaling-stroke"
    fill="none"
    style={{
      opacity: 0.2,
    }}
  />
</svg>

      {/* keyframes for moving gradient (if used for background) */}
      <style>
        {`
          @keyframes gradientShadowMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}
      </style>
    </header>
  );
};

export default Navbar;
