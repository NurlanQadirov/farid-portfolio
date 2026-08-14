import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 font-sans overflow-x-hidden">
      {/* Ambient background grid */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14,165,233,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,165,233,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow top-left */}
      <div
        className="fixed top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Radial glow bottom-right */}
      <div
        className="fixed bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)",
        }}
      />


      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
}