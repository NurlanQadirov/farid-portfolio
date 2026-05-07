import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Shield,
  Send,
  Github,
  ExternalLink,
} from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "Buludluferid@gmail.com",
    href: "mailto:Buludluferid@gmail.com",
    color: "sky",
    chipClass: "text-sky-400 bg-sky-500/10 border-sky-500/20 hover:bg-sky-500/20",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+994 50 462 00 28",
    href: "tel:+994504620028",
    color: "indigo",
    chipClass:
      "text-indigo-400 bg-indigo-500/10 border-indigo-500/20 hover:bg-indigo-500/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Baku, Azerbaijan",
    href: "https://maps.google.com/?q=Baku,Azerbaijan",
    color: "violet",
    chipClass:
      "text-violet-400 bg-violet-500/10 border-violet-500/20 hover:bg-violet-500/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/faridbuludlu",
    href: "https://linkedin.com/in/faridbuludlu",
    color: "emerald",
    chipClass:
      "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-500/20",
  },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── CONTACT SECTION ─────────────────────────────────── */}
      <section id="contact" className="relative py-32 px-6">
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
                <Mail size={15} className="text-sky-400" />
              </div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-sky-400">
                05 / Contact
              </span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-sky-500/30 to-transparent" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Info */}
            <div>
              <motion.h2
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={FADE_UP}
                custom={1}
                className="text-4xl sm:text-5xl font-black text-slate-100 leading-tight mb-4"
              >
                Let's{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #38bdf8, #818cf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Connect
                </span>
              </motion.h2>

              <motion.p
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={FADE_UP}
                custom={2}
                className="text-slate-400 text-base leading-relaxed mb-10 max-w-md"
              >
                Whether you have a security challenge, a collaboration idea, or
                just want to talk tech — my inbox is always open.
              </motion.p>

              {/* Contact cards */}
              <div className="flex flex-col gap-3">
                {CONTACT_ITEMS.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={FADE_UP}
                      custom={3 + i}
                      className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${item.chipClass}`}
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-slate-900/60 border border-slate-700/60 flex items-center justify-center group-hover:border-current transition-colors duration-200">
                        <Icon size={15} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-bold tracking-widest uppercase text-slate-600 mb-0.5">
                          {item.label}
                        </div>
                        <div className="text-sm font-medium text-slate-300 truncate">
                          {item.value}
                        </div>
                      </div>
                      <ExternalLink
                        size={13}
                        className="flex-shrink-0 opacity-0 group-hover:opacity-50 transition-opacity"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>

          
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="relative border-t border-slate-800/60">
        {/* Top separator glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
                  <Shield size={16} className="text-white" />
                </div>
                <span className="text-sm font-bold tracking-[0.15em] text-slate-100 uppercase">
                  F<span className="text-sky-400">.</span>Buludlu
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed max-w-[220px]">
                CyberSecurity Specialist based in Baku, Azerbaijan. Defending
                digital infrastructures with precision.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-slate-600 mb-4">
                Navigation
              </div>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-xs text-slate-500 hover:text-sky-400 transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-slate-600 mb-4">
                Connect
              </div>
              <div className="flex gap-3">
                {[
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/in/faridbuludlu",
                    label: "LinkedIn",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/faridbuludlu",
                    label: "GitHub",
                  },
                  {
                    icon: Mail,
                    href: "mailto:Buludluferid@gmail.com",
                    label: "Email",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-center text-slate-500 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all duration-200"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>

              <div className="mt-6 text-xs text-slate-600">
                <span className="text-slate-500 font-medium">
                  Buludluferid@gmail.com
                </span>
              </div>
              <div className="text-xs text-slate-600 mt-1">
                +994 50 462 00 28
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 border-t border-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-600">
              © {new Date().getFullYear()} Farid Buludlu. All rights reserved.
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/60 text-xs text-slate-600">
              <Shield size={10} className="text-sky-600" />
              Built with React + TypeScript + Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}