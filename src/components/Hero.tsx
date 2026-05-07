import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Shield, Download, Mail, Lock, Wifi, Terminal, Eye } from "lucide-react";
import FloatingLines from "./FloatingLines";

const ENABLED_WAVES = ["top", "middle", "bottom"];
const LINES_GRADIENT = ["#0ea5e9", "#6366f1", "#a855f7"];

const MY_ROLES = [
  "CyberSecurity Specialist",
  "Penetration Tester",
  "Network Security Engineer",
  "Security Analyst",
];

function SecurityBadge({
  icon: Icon,
  label,
  style,
}: {
  icon: React.ElementType;
  label: string;
  style: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.5 }}
      className="absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md bg-[#080c14]/60 border border-slate-700/40 shadow-[0_0_15px_rgba(0,0,0,0.5)] text-xs text-slate-300 font-medium z-10"
      style={style}
    >
      <Icon size={13} className="text-sky-400 drop-shadow-[0_0_5px_rgba(56,189,248,0.5)]" />
      {label}
    </motion.div>
  );
}

export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      // pt-24 əlavə edildi ki, kontent Navbar-ın altından qurtulub aşağı düşsün
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080c14] pt-24 pb-4"
    >
      {/* 3D Arxa plan */}
      <div className="absolute inset-0 z-0 opacity-60">
        <FloatingLines 
          enabledWaves={ENABLED_WAVES}
          lineCount={10}
          lineDistance={10}
          bendRadius={8}
          bendStrength={-2.5}
          interactive={true}
          parallax={true}
          animationSpeed={1.2}
          linesGradient={LINES_GRADIENT} 
        />
      </div>

      {/* Daha Yumşaq Qaranlıq Aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-5xl h-[80vh] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(8,12,20,0.95) 0%, rgba(8,12,20,0.4) 45%, transparent 70%)",
        }}
      />

      {/* Floating Badges */}
      <SecurityBadge icon={Lock} label="ISO 27001" style={{ top: "22%", left: "5%" }} />
      <SecurityBadge icon={Wifi} label="Network Security" style={{ top: "32%", right: "4%" }} />
      <SecurityBadge icon={Eye} label="Threat Detection" style={{ bottom: "25%", left: "8%" }} />
      <SecurityBadge icon={Terminal} label="Pen Testing" style={{ bottom: "20%", right: "7%" }} />

      {/* Əsas Kontent */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center flex-1 px-6 pointer-events-none">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-[#080c14]/80 border border-slate-700/50 backdrop-blur-md shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold text-slate-300 tracking-widest uppercase">
            Available for opportunities
          </span>
        </motion.div>

        {/* Ad (Name) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-4 drop-shadow-2xl">
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">FARID</span>
            <br />
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #38bdf8 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 4s linear infinite",
                filter: "drop-shadow(0 0 20px rgba(56,189,248,0.25))"
              }}
            >
              BULUDLU
            </span>
          </h1>
        </motion.div>

        {/* Rollar (Roles) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-3 mt-4 mb-6 bg-[#080c14]/40 px-5 py-2.5 rounded-xl backdrop-blur-sm border border-slate-700/40 w-fit mx-auto"
        >
          <Shield size={16} className="text-sky-400" />
          <span className="text-base sm:text-xl font-semibold tracking-wider text-sky-300 font-mono text-left drop-shadow-md">
            <Typewriter
              words={MY_ROLES}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </span>
        </motion.div>

        {/* Açıqlama (Tagline) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-2 mb-10 text-slate-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed drop-shadow-lg text-center"
        >
          Defending digital infrastructures with precision.{" "}
          <span className="text-white font-medium">Threat hunter.</span> Security engineer. Baku, Azerbaijan.
        </motion.p>

        {/* Düymələr (CTA Buttons) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 pointer-events-auto w-full"
        >
          <a
            href="#"
            className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm tracking-wider text-white overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)] w-[200px]"
            style={{
              background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 40px rgba(14,165,233,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 20px rgba(14,165,233,0.3)";
            }}
          >
            <Download size={16} />
            Download CV
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#contact");
            }}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm tracking-wider text-white border border-slate-600/60 backdrop-blur-md bg-[#080c14]/50 hover:border-sky-500/80 hover:text-sky-300 hover:bg-sky-500/10 transition-all duration-300 shadow-xl w-[200px]"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </motion.div>

        {/* Daha Zərif Statistikalar (Kapsul dizaynı) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 bg-[#080c14]/50 backdrop-blur-md px-8 py-4 rounded-full border border-slate-700/50 shadow-[0_10px_30px_rgba(0,0,0,0.3)] pointer-events-auto"
        >
          {[
            { value: "5+", label: "Certifications" },
            { value: "1+", label: "Years Active" },
            { value: "10+", label: "Technologies" },
          ].map(({ value, label }, index) => (
            <React.Fragment key={label}>
              <div className="text-center flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-black text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.4)] leading-none">{value}</span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 mt-2 tracking-[0.15em] uppercase font-semibold">{label}</span>
              </div>
              {/* Ayırıcı xətlər (Divider) */}
              {index < 2 && <div className="w-px h-8 bg-slate-700/50 hidden sm:block" />}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}