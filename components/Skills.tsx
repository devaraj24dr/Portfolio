"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Brain, Globe, Wrench, Users } from "lucide-react";

const groups = [
  {
    cat: "Programming", icon: Code2,
    skills: ["Python", "Java", "SQL"],
  },
  {
    cat: "AI & Machine Learning", icon: Brain,
    skills: ["Generative AI", "CNN", "Deep Learning", "Prompt Engineering", "LLM Applications"],
  },
  {
    cat: "Development", icon: Globe,
    skills: ["FastAPI", "Streamlit", "Git", "GitHub", "REST APIs"],
  },
  {
    cat: "Tools & Platforms", icon: Wrench,
    skills: ["ChatGPT", "Gemini AI", "VS Code", "Excel", "PowerPoint"],
  },
  {
    cat: "Soft Skills", icon: Users,
    skills: ["Problem Solving", "Teamwork", "Communication"],
  },
];

const fade = (i = 0) => ({
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
});

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 bg-[rgba(255,59,48,0.04)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div variants={fade(0)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-4 mb-4">
          <span className="section-label">002 / Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#ff3b30] to-transparent" />
        </motion.div>

        <motion.h2 variants={fade(1)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="font-orbitron font-black text-[clamp(2.2rem,7vw,5rem)] text-white leading-none mb-4">
          MY<br /><span className="text-[#ff3b30]">SKILLS</span>
        </motion.h2>

        <motion.p variants={fade(2)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="font-space text-white/40 mb-16 max-w-lg">
          A curated set of tools, languages, and frameworks powering my AI and software systems.
        </motion.p>

        {/* Main grid: 2 cols on md, wrap 3rd */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {groups.map(({ cat, icon: Icon, skills }, gi) => (
            <motion.div key={cat} variants={fade(gi + 3)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className={`glass-card clip-tr p-7 ${gi === groups.length - 1 ? "md:col-span-2" : ""}`}>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 flex items-center justify-center border border-[rgba(255,59,48,0.25)]">
                  <Icon size={15} className="text-[#ff3b30]" />
                </div>
                <h3 className="font-orbitron font-bold text-xs tracking-[0.2em] text-white uppercase">{cat}</h3>
                <div className="flex-1 h-px bg-[rgba(255,59,48,0.1)]" />
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {skills.map((sk, si) => (
                  <motion.span key={sk} className="skill-pill"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                    transition={{ delay: (gi + 3) * 0.12 + si * 0.07, duration: 0.4 }}>
                    <span className="w-1 h-1 rounded-full bg-[#ff3b30]" />
                    {sk}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently exploring */}
        <motion.div variants={fade(8)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-5 glass-card p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b30] animate-pulse" />
            <span className="font-orbitron text-[0.55rem] tracking-[0.3em] text-white/40 uppercase">Currently Exploring</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Agentic AI", "RAG Systems", "LangChain", "Vector DBs"].map(t => (
              <span key={t} className="skill-pill border-[rgba(255,59,48,0.35)] text-[#ff3b30]">
                <span className="w-1 h-1 rounded-full bg-[#ff3b30] animate-pulse" />
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
