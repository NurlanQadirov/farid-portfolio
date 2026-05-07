import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Shield, Calendar, MapPin, ChevronRight } from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const RESPONSIBILITIES = [
  "Monitoring and analyzing network traffic for potential security threats and intrusions",
  "Configuring and managing PaloAlto Next-Generation Firewalls (NGFW) and security policies",
  "Conducting vulnerability assessments and penetration testing on internal systems",
  "Implementing EDR solutions and responding to endpoint security incidents",
  "Maintaining and improving security infrastructure aligned with ISO 27001 standards",
  "Collaborating with IT teams to enforce OWASP and NIST security frameworks",
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent" />

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
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <Briefcase size={15} className="text-indigo-400" />
            </div>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-indigo-400">
              02 / Experience
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
        </motion.div>

        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          custom={1}
          className="text-4xl sm:text-5xl font-black text-slate-100 leading-tight mb-12"
        >
          Professional{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #818cf8, #38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Journey
          </span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-sky-500/30 to-transparent" />

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={FADE_UP}
            custom={2}
            className="relative pl-8 md:pl-24"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-5px] md:left-[27px] top-6 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />

            {/* Experience Card */}
            <div
              className="relative rounded-2xl border border-slate-800/60 backdrop-blur-sm overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.6) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {/* Top accent bar */}
              <div className="h-0.5 w-full bg-gradient-to-r from-indigo-500 via-sky-500 to-transparent" />

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    {/* Company logo placeholder */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-sky-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                      <Shield size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-100">
                        CyberSecurity Specialist
                      </h3>
                      <div className="text-indigo-400 font-bold text-sm mt-0.5">
                        UPGRADE SOLUTIONS
                      </div>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-col gap-2 sm:items-end">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                      Currently Active
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-xs text-slate-400">
                      <Calendar size={11} />
                      Feb 2025 — Present
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-xs text-slate-400">
                      <MapPin size={11} />
                      Baku, Azerbaijan
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-800/80 mb-6" />

                {/* Responsibilities */}
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-4">
                    Key Responsibilities
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {RESPONSIBILITIES.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 group">
                        <ChevronRight
                          size={13}
                          className="text-indigo-400 mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
                        />
                        <span className="text-sm text-slate-400 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div className="mt-6 pt-6 border-t border-slate-800/60">
                  <div className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">
                    Technologies Used
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "PaloAlto NGFW",
                      "EDR",
                      "Nmap",
                      "Wireshark",
                      "ISO 27001",
                      "NIST",
                      "OWASP",
                      "IDS/IPS",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}