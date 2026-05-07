import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Award,
  Calendar,
  ShieldCheck,
  Code2,
  Cpu,
} from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const CERTIFICATIONS = [
  {
    title: "PaloAlto NGFW Engineer",
    issuer: "Palo Alto Networks",
    year: "2025",
    icon: ShieldCheck,
    color: "sky",
    gradient: "from-sky-600 to-sky-800",
    glow: "rgba(14,165,233,0.3)",
    border: "border-sky-500/20",
    bg: "bg-sky-500/10",
    text: "text-sky-400",
  },
  {
    title: "PaloAlto PSE Cortex",
    issuer: "Palo Alto Networks",
    year: "2025",
    icon: Cpu,
    color: "indigo",
    gradient: "from-indigo-600 to-indigo-800",
    glow: "rgba(99,102,241,0.3)",
    border: "border-indigo-500/20",
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
  },
  {
    title: "CompTIA Security+",
    issuer: "CompTIA",
    year: "2025",
    icon: ShieldCheck,
    color: "violet",
    gradient: "from-violet-600 to-violet-800",
    glow: "rgba(139,92,246,0.3)",
    border: "border-violet-500/20",
    bg: "bg-violet-500/10",
    text: "text-violet-400",
  },
  {
    title: "Cyber Security — Red Team",
    issuer: "Millisec",
    year: "2024",
    icon: ShieldCheck,
    color: "rose",
    gradient: "from-rose-700 to-rose-900",
    glow: "rgba(225,29,72,0.25)",
    border: "border-rose-500/20",
    bg: "bg-rose-500/10",
    text: "text-rose-400",
  },
  {
    title: "Front-end Developer",
    issuer: "Code Academy",
    year: "2023–2024",
    icon: Code2,
    color: "emerald",
    gradient: "from-emerald-600 to-emerald-800",
    glow: "rgba(16,185,129,0.25)",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="relative py-32 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-sky-500/40 to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          custom={0}
          className="flex items-center gap-4 mb-16"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
              <GraduationCap size={15} className="text-sky-400" />
            </div>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-sky-400">
              03 / Education & Certifications
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-sky-500/30 to-transparent" />
        </motion.div>

        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          custom={1}
          className="text-4xl sm:text-5xl font-black text-slate-100 leading-tight mb-16"
        >
          Academic &{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #38bdf8, #818cf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Credentials
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Education */}
          <div>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              custom={2}
              className="flex items-center gap-2 mb-6"
            >
              <GraduationCap size={16} className="text-sky-400" />
              <span className="text-sm font-bold tracking-widest uppercase text-slate-400">
                University
              </span>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              custom={3}
            >
              <div
                className="relative rounded-2xl border border-slate-800/60 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(15,23,42,0.5))",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <div className="h-0.5 w-full bg-gradient-to-r from-sky-500 via-indigo-500 to-transparent" />

                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-600 to-indigo-700 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.25)]">
                      <GraduationCap size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-slate-100 leading-tight">
                        Azerbaijan Technical University
                      </h3>
                      <div className="text-sky-400 font-semibold text-sm mt-1">
                        Information Technologies (IT)
                      </div>
                      <div className="text-slate-500 text-xs mt-0.5 font-medium">
                        Sabah Groups
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-xs text-slate-400">
                      <Calendar size={11} />
                      2021 — 2025
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400">
                      Bachelor's Degree
                    </div>
                  </div>

                  {/* Decorative accent */}
                  <div
                    className="absolute bottom-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)",
                      transform: "translate(30%, 30%)",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Certifications */}
          <div>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              custom={2}
              className="flex items-center gap-2 mb-6"
            >
              <Award size={16} className="text-indigo-400" />
              <span className="text-sm font-bold tracking-widest uppercase text-slate-400">
                Certifications
              </span>
            </motion.div>

            <div className="flex flex-col gap-3">
              {CERTIFICATIONS.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={cert.title}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={FADE_UP}
                    custom={3 + i}
                  >
                    <div
                      className={`group flex items-center gap-4 p-4 rounded-xl border ${cert.border} bg-slate-900/30 backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-300`}
                      style={{
                        boxShadow: `0 0 0 0 ${cert.glow}`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${cert.glow}`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 ${cert.glow}`;
                      }}
                    >
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center`}
                        style={{ boxShadow: `0 0 14px ${cert.glow}` }}
                      >
                        <Icon size={16} className="text-white" />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-slate-200 truncate">
                          {cert.title}
                        </div>
                        <div className={`text-xs font-medium ${cert.text} mt-0.5`}>
                          {cert.issuer}
                        </div>
                      </div>

                      {/* Year badge */}
                      <div
                        className={`flex-shrink-0 px-2.5 py-1 rounded-lg text-xs font-bold ${cert.text} ${cert.bg} border ${cert.border}`}
                      >
                        {cert.year}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}