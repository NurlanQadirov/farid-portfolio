import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Globe, Code2, Languages, ShieldCheck } from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const SKILL_CATEGORIES = [
  {
    icon: ShieldCheck,
    label: "Cybersecurity / InfoSec",
    accent: "sky",
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/10 border-sky-500/20",
    chipColor: "text-sky-300 bg-sky-500/10 border-sky-500/25 hover:bg-sky-500/20 hover:border-sky-400/50",
    skills: [
      "Firewall",
      "IDS / IPS",
      "Penetration Testing",
      "Vulnerability Scanning",
      "EDR",
      "Network Security",
      "Windows OS",
      "Linux OS",
    ],
  },
  {
    icon: Cpu,
    label: "Methodologies / Standards / Tools",
    accent: "indigo",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    chipColor:
      "text-indigo-300 bg-indigo-500/10 border-indigo-500/25 hover:bg-indigo-500/20 hover:border-indigo-400/50",
    skills: ["OWASP", "NIST", "ISO 27001", "Nmap", "Wireshark"],
  },
  {
    icon: Globe,
    label: "Networking",
    accent: "violet",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    chipColor:
      "text-violet-300 bg-violet-500/10 border-violet-500/25 hover:bg-violet-500/20 hover:border-violet-400/50",
    skills: ["TCP / IP", "Subnetting", "OSI Model", "Routing & Switching"],
  },
  {
    icon: Code2,
    label: "Development",
    accent: "emerald",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    chipColor:
      "text-emerald-300 bg-emerald-500/10 border-emerald-500/25 hover:bg-emerald-500/20 hover:border-emerald-400/50",
    skills: ["C++", "Python", "HTML", "CSS", "JavaScript", "React"],
  },
  {
    icon: Languages,
    label: "Languages",
    accent: "amber",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    chipColor:
      "text-amber-300 bg-amber-500/10 border-amber-500/25 hover:bg-amber-500/20 hover:border-amber-400/50",
    skills: [
      "Azerbaijani — Native",
      "English — B2",
      "Russian — A2",
      "Turkish — C2",
    ],
  },
];

interface SkillCategoryCardProps {
  category: (typeof SKILL_CATEGORIES)[0];
  index: number;
  inView: boolean;
}

function SkillCategoryCard({ category, index, inView }: SkillCategoryCardProps) {
  const Icon = category.icon;

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={FADE_UP}
      custom={index + 2}
    >
      <div
        className="h-full rounded-2xl border border-slate-800/60 backdrop-blur-sm overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.5) 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Top gradient accent */}
        <div
          className={`h-0.5 w-full`}
          style={{
            background: `linear-gradient(90deg, var(--accent-from), var(--accent-to), transparent)`,
          }}
        />

        <div className="p-5 sm:p-6">
          {/* Card header */}
          <div className="flex items-center gap-3 mb-5">
            <div
              className={`w-8 h-8 rounded-lg border flex items-center justify-center ${category.iconBg}`}
            >
              <Icon size={15} className={category.iconColor} />
            </div>
            <span className="text-xs font-bold tracking-wider uppercase text-slate-400">
              {category.label}
            </span>
          </div>

          {/* Skill chips */}
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border cursor-default transition-all duration-200 ${category.chipColor}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-violet-500/40 to-transparent" />

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
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <Cpu size={15} className="text-violet-400" />
            </div>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-violet-400">
              04 / Skills
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
        </motion.div>

        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          custom={1}
          className="text-4xl sm:text-5xl font-black text-slate-100 leading-tight mb-14"
        >
          Technical{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Arsenal
          </span>
        </motion.h2>

        {/* Skill grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {SKILL_CATEGORIES.map((category, i) => (
            <SkillCategoryCard
              key={category.label}
              category={category}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}