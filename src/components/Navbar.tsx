import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-[#080c14]/70 border-b border-slate-800/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Minimalist Logo - İkon silindi */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group relative inline-block"
          >
            <span className="text-lg font-black tracking-widest text-slate-100 uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:text-white transition-colors">
              F<span className="text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">.</span>Buludlu
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
          </a>

          {/* Desktop Links - Daha maraqlı hover effektləri */}
          <ul className="hidden md:flex items-center gap-2 bg-[#080c14]/50 px-3 py-1.5 rounded-full border border-slate-800/50 backdrop-blur-sm">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-full group ${
                      isActive
                        ? "text-sky-300"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-sky-500/10 border border-sky-500/30 shadow-[inset_0_0_12px_rgba(56,189,248,0.2)]"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      />
                    )}
                    <span className="relative z-10 drop-shadow-md">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden md:inline-flex relative items-center justify-center px-5 py-2 text-xs font-black tracking-widest uppercase rounded-lg text-white overflow-hidden group border border-sky-500/50"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-sky-600 to-indigo-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-500 blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
              <span className="relative z-10 drop-shadow-lg">Hire Me</span>
            </a>
            
            <button
              className="md:hidden text-slate-300 hover:text-sky-400 transition-colors p-2 bg-[#080c14]/50 rounded-lg border border-slate-800/50"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 backdrop-blur-xl bg-[#080c14]/95 border border-slate-800/80 rounded-2xl shadow-2xl md:hidden overflow-hidden"
          >
            <ul className="flex flex-col py-2 px-2 gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block px-5 py-3.5 text-xs font-bold tracking-[0.2em] uppercase rounded-xl transition-all duration-200 ${
                        isActive
                          ? "text-sky-400 bg-sky-500/10 border border-sky-500/20 shadow-[inset_0_0_10px_rgba(56,189,248,0.1)]"
                          : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}