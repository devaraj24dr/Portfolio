"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, Music, Briefcase } from "lucide-react";

const exps = [
  {
    period: "2025 — Present",
    role: "AI Training Program",
    org: "Generative AI & Automation",
    type: "Training",
    icon: Bot,
    current: true,
    desc: "Learned Generative AI concepts, Prompt Engineering, AI-powered automation, and built real-world AI applications.",
    tags: ["Generative AI", "Prompt Engineering", "AI Automation", "LLMs"],
  },
  {
    period: "2026 — Present",
    role: "CNN Music Instrument Recognition System",
    org: "Infosys Springboard",
    type: "Internship",
    icon: Music,
    current: true,
    desc: "Developed a CNN-powered system that automatically identifies musical instruments from audio files, with full visualization dashboard.",
    tags: ["CNN", "Audio Processing", "Mel Spectrogram", "PyTorch", "Streamlit"],
    features: ["Audio preprocessing", "Mel Spectrogram generation", "CNN Classification", "Multi-Instrument Detection", "Visualization Dashboard"],
  },
];

const fade = (i = 0) => ({
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
});

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[rgba(255,59,48,0.04)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div variants={fade(0)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-4 mb-4">
          <span className="section-label">003 / Experience</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#ff3b30] to-transparent" />
        </motion.div>

        <motion.h2 variants={fade(1)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="font-orbitron font-black text-[clamp(2.2rem,7vw,5rem)] text-white leading-none mb-16">
          MY<br /><span className="text-[#ff3b30]">EXPERIENCE</span>
        </motion.h2>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Spine */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff3b30] via-[rgba(255,59,48,0.25)] to-transparent" />

          <div className="space-y-10">
            {exps.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div key={i} variants={fade(i + 2)} initial="hidden" animate={inView ? "visible" : "hidden"}
                  className="relative md:pl-24">
                  {/* Node */}
                  <div className="hidden md:flex absolute left-0 top-6 w-16 h-16 items-center justify-center bg-[#050505] border border-[rgba(255,59,48,0.3)] z-10">
                    <Icon size={20} className="text-[#ff3b30]" />
                    {exp.current && <div className="absolute inset-[-4px] border border-[#ff3b30] opacity-30 animate-ping" />}
                  </div>

                  <div className="glass-card clip-all p-7 group hover:border-[rgba(255,59,48,0.4)] transition-all duration-400">
                    {/* Top row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        <span className="font-orbitron text-[0.55rem] tracking-[0.25em] text-[#ff3b30] border border-[rgba(255,59,48,0.3)] px-2 py-1 uppercase">
                          {exp.type}
                        </span>
                        {exp.current && (
                          <span className="flex items-center gap-1.5 font-orbitron text-[0.55rem] text-green-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Active
                          </span>
                        )}
                      </div>
                      <span className="font-orbitron text-[0.6rem] tracking-wider text-[#ff3b30]">{exp.period}</span>
                    </div>

                    <h3 className="font-orbitron font-bold text-white text-base leading-snug mb-1 group-hover:text-[#ff3b30] transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="font-space text-xs text-white/40 mb-5">{exp.org}</p>
                    <p className="font-space text-white/60 text-sm leading-relaxed mb-5">{exp.desc}</p>

                    {/* Feature list */}
                    {exp.features && (
                      <div className="mb-5 space-y-2">
                        {exp.features.map((f) => (
                          <div key={f} className="flex items-center gap-2">
                            <span className="text-[#ff3b30] font-orbitron text-xs">›</span>
                            <span className="font-space text-xs text-white/55">{f}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(t => <span key={t} className="skill-pill text-[0.7rem]">{t}</span>)}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
