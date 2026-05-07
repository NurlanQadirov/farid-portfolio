import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, MapPin, Briefcase, GraduationCap, Code2 } from "lucide-react";

const QUICK_FACTS = [
  { icon: MapPin, label: "Location", value: "Baku, Azerbaijan" },
  { icon: Briefcase, label: "Current Role", value: "CyberSecurity Specialist @ UPGRADE SOLUTIONS" },
  { icon: GraduationCap, label: "University", value: "Azerbaijan Technical University" },
  { icon: Code2, label: "Also builds", value: "Front-end apps with React & TypeScript" },
];

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-32 px-6">
      {/* Section separator line */}
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
              <User size={15} className="text-sky-400" />
            </div>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-sky-400">
              01 / About Me
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-sky-500/30 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio text */}
          <div>
            <motion.h2
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              custom={1}
              className="text-4xl sm:text-5xl font-black text-slate-100 leading-tight mb-6"
            >
              Securing the{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #38bdf8, #818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Digital
              </span>{" "}
              <br />
              Frontier.
            </motion.h2>

            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              custom={2}
              className="relative"
            >
              {/* Glassmorphism bio card */}
              <div
                className="rounded-2xl p-6 border border-slate-800/60 backdrop-blur-sm"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.4) 100%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                {/* Decorative top-left corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden rounded-tl-2xl pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-sky-500/30 rounded-tl-2xl" />
                </div>

                <p className="text-slate-300 text-base leading-relaxed">
                  I am a young person who shows great interest in the field of
                  technology and is constantly eager to learn. By gaining
                  experience in{" "}
                  <span className="text-sky-300 font-medium">
                    programming and design
                  </span>
                  , I am enthusiastic about creating creative and functional
                  projects.
                </p>
                <p className="text-slate-300 text-base leading-relaxed mt-4">
                  My ability to{" "}
                  <span className="text-indigo-300 font-medium">
                    work in a team
                  </span>{" "}
                  and quickly adapt to new environments sets me apart. My goal
                  is to constantly improve myself and achieve success in the
                  field I have chosen.
                </p>

                {/* Decorative bottom-right corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden rounded-br-2xl pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-indigo-500/30 rounded-br-2xl" />
                </div>
              </div>
            </motion.div>

            {/* Horizontal divider with icon */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              custom={3}
              className="flex items-center gap-3 mt-8"
            >
              <div className="flex-1 h-px bg-slate-800/80" />
              <span className="text-xs text-slate-600 font-mono tracking-widest uppercase">
                core values
              </span>
              <div className="flex-1 h-px bg-slate-800/80" />
            </motion.div>

            {/* Value chips */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              custom={4}
              className="flex flex-wrap gap-2 mt-6"
            >
              {[
                "Curiosity-driven",
                "Team player",
                "Fast adapter",
                "Detail-oriented",
                "Growth mindset",
              ].map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-400 border border-slate-800/80 bg-slate-900/50 hover:border-sky-500/40 hover:text-sky-300 transition-all duration-200 cursor-default"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Quick facts cards */}
          <div className="grid gap-4">
            {QUICK_FACTS.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={FADE_UP}
                custom={2 + i}
              >
                <div
                  className="group flex items-start gap-4 p-4 rounded-xl border border-slate-800/60 bg-slate-900/30 backdrop-blur-sm hover:border-sky-500/30 hover:bg-sky-500/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:border-sky-500/30 group-hover:bg-sky-500/10 transition-all duration-300">
                    <Icon size={15} className="text-slate-400 group-hover:text-sky-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-slate-600 mb-0.5">
                      {label}
                    </div>
                    <div className="text-sm font-medium text-slate-300">
                      {value}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative security-themed stat card */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              custom={6}
            >
              <div
                className="relative overflow-hidden rounded-xl p-5 border border-sky-500/20"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(14,165,233,0.07) 0%, rgba(99,102,241,0.07) 100%)",
                }}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)",
                    transform: "translate(30%, -30%)",
                  }}
                />
                <div className="text-xs font-bold tracking-widest uppercase text-sky-400 mb-3">
                  Security Philosophy
                </div>
                <p className="text-sm text-slate-400 leading-relaxed italic">
                  "Security is not a product, but a process — and every layer of
                  defense matters."
                </p>
                <div className="mt-3 text-xs text-slate-600">
                  — Bruce Schneier
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}