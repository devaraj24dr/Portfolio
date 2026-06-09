"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, ChevronRight, Folder } from "lucide-react";

const cases = [
  {
    id: "CASE FILE 001",
    title: "AI Adaptive Onboarding Engine",
    problem: "Corporate onboarding follows a one-size-fits-all model.",
    desc: "An AI-driven onboarding platform that parses resumes, analyzes job descriptions, identifies skill gaps, generates personalized learning paths, and tracks mastery progress.",
    tech: ["FastAPI", "Streamlit", "Mistral LLM", "Embeddings"],
    highlight: "Personalized AI Learning Paths",
  },
  {
    id: "CASE FILE 002",
    title: "CNN Music Instrument Recognition",
    problem: "Identifying instruments from raw audio is complex for humans and machines alike.",
    desc: "Deep learning system that detects musical instruments from audio tracks using mel spectrograms and CNN models with a full analysis dashboard.",
    tech: ["Python", "TensorFlow", "CNN", "Audio Processing"],
    highlight: "Deep Learning Audio Classification",
  },
  {
    id: "CASE FILE 003",
    title: "AI Healthcare Assistant",
    problem: "Users lack instant, reliable medical guidance during emergencies.",
    desc: "AI-powered healthcare recommendation system designed to assist users during emergency situations through intelligent triage logic.",
    tech: ["Python", "AI", "Streamlit"],
    highlight: "Emergency Triage Intelligence",
  },
  {
    id: "CASE FILE 004",
    title: "Generative AI Exploration",
    problem: "Limited practical understanding of LLM capabilities in production.",
    desc: "Research and experimentation using Gemini AI, prompt engineering, and LLMs for content generation, automation, and problem solving.",
    tech: ["Gemini AI", "Prompt Engineering", "LLMs", "Python"],
    highlight: "LLM Research & Experiments",
  },
];

const fade = (i = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
});

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="projects" ref={ref} className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[rgba(255,59,48,0.04)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div variants={fade(0)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-4 mb-4">
          <span className="section-label">004 / Projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#ff3b30] to-transparent" />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.h2 variants={fade(1)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-orbitron font-black text-[clamp(2.2rem,7vw,5rem)] text-white leading-none">
            MY<br /><span className="text-[#ff3b30]">PROJECTS</span>
          </motion.h2>
          <motion.p variants={fade(2)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-space text-white/40 max-w-xs text-sm">
            AI-powered case files — each solving a distinct real-world problem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              variants={fade(i + 3)}
              initial="hidden" animate={inView ? "visible" : "hidden"}
              onHoverStart={() => setHovered(c.id)}
              onHoverEnd={() => setHovered(null)}
              data-cursor
              className="relative glass-card clip-all p-7 group overflow-hidden"
            >
              {/* Hover sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[rgba(255,59,48,0.07)] to-transparent pointer-events-none"
                animate={{ opacity: hovered === c.id ? 1 : 0 }}
                transition={{ duration: 0.35 }}
              />

              {/* Corner glows */}
              <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-[#ff3b30] opacity-60" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-[#ff3b30] opacity-60" />

              {/* ID badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Folder size={12} className="text-[#ff3b30]" />
                  <span className="font-orbitron font-bold text-[0.55rem] tracking-[0.3em] text-[#ff3b30] uppercase">
                    {c.id}
                  </span>
                </div>
                <motion.div
                  animate={{ x: hovered === c.id ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#ff3b30]"
                >
                  <ChevronRight size={14} />
                </motion.div>
              </div>

              {/* Ghost number */}
              <div className="font-orbitron font-black text-[5rem] leading-none text-[rgba(255,59,48,0.06)] select-none mb-2 -mt-2">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Highlight */}
              <div className="font-orbitron text-[0.55rem] tracking-[0.25em] text-[#ff3b30] uppercase mb-3">
                {c.highlight}
              </div>

              {/* Title */}
              <h3 className="font-orbitron font-bold text-white text-base leading-snug mb-3 group-hover:text-[#ff3b30] transition-colors duration-300">
                {c.title}
              </h3>

              {/* Problem */}
              <div className="flex items-start gap-2 mb-4">
                <span className="font-orbitron text-[0.55rem] text-[#ff3b30] mt-0.5 flex-shrink-0">PROBLEM:</span>
                <p className="font-space text-xs text-white/40 leading-relaxed">{c.problem}</p>
              </div>

              {/* Description */}
              <p className="font-space text-white/60 text-sm leading-relaxed mb-6">{c.desc}</p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {c.tech.map(t => <span key={t} className="skill-pill text-[0.68rem]">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fade(7)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-10 text-center">
          <a id="github-link" href="https://github.com/devaraj24dr" target="_blank" rel="noreferrer"
            className="btn-primary inline-flex">
            <ExternalLink size={13} />
            View on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
