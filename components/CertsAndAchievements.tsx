"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";

const certs = [
  { title: "Python Programming Certification", emoji: "🐍" },
  { title: "Agile Scrum Certification", emoji: "⚡" },
  { title: "Software Engineering Certification", emoji: "🔧" },
  { title: "Ethical AI Certification", emoji: "🤖" },
];

const achievements = [
  { title: "Perunthalaivar Kamaraj Award", year: "2022", desc: "Prestigious state-level recognition", emoji: "🏆" },
  { title: "District Level Basketball Player", year: "2022", desc: "Represented district in competitive basketball", emoji: "🏀" },
  { title: "Science Exhibition Runner-Up", year: "2022", desc: "Runner-up at school science exhibition", emoji: "🔬" },
  { title: "School Pupil Leader", year: "2022", desc: "Elected school pupil leader", emoji: "⭐" },
];

const fade = (i = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.72, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
});

export default function CertsAndAchievements() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" ref={ref} className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[rgba(255,59,48,0.025)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* ─── Certifications ─── */}
        <motion.div variants={fade(0)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-4 mb-4">
          <span className="section-label">005 / Certifications</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#ff3b30] to-transparent" />
        </motion.div>

        <motion.h2 variants={fade(1)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="font-orbitron font-black text-[clamp(2.2rem,7vw,5rem)] text-white leading-none mb-12">
          CERTIFIED<br /><span className="text-[#ff3b30]">SKILLS</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {certs.map((c, i) => (
            <motion.div key={c.title} variants={fade(i + 2)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="glass-card clip-tl p-6 group hover:border-[rgba(255,59,48,0.4)] transition-all duration-300">
              <div className="text-3xl mb-5">{c.emoji}</div>
              <div className="w-6 h-px bg-[#ff3b30] mb-4" />
              <h3 className="font-orbitron font-bold text-white text-xs leading-snug mb-4 group-hover:text-[#ff3b30] transition-colors">
                {c.title}
              </h3>
              <div className="flex items-center gap-1.5 mt-auto">
                <CheckCircle size={10} className="text-[#ff3b30]" />
                <span className="font-orbitron text-[0.55rem] text-white/30 tracking-widest uppercase">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Achievements ─── */}
        <motion.div variants={fade(6)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-4 mb-4">
          <span className="section-label">006 / Achievements</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#ff3b30] to-transparent" />
        </motion.div>

        <motion.h2 variants={fade(7)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="font-orbitron font-black text-[clamp(2.2rem,7vw,5rem)] text-white leading-none mb-12">
          BEYOND<br /><span className="text-[#ff3b30]">CODE</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((a, i) => (
            <motion.div key={a.title} variants={fade(i + 8)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="glass-card flex items-start gap-5 p-6 group hover:border-[rgba(255,59,48,0.35)] transition-all duration-300">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-2xl border border-[rgba(255,59,48,0.18)] group-hover:border-[#ff3b30] transition-colors duration-300">
                {a.emoji}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-orbitron font-bold text-white text-xs group-hover:text-[#ff3b30] transition-colors">
                    {a.title}
                  </h3>
                  <span className="font-orbitron text-[0.55rem] text-[#ff3b30] tracking-wider">{a.year}</span>
                </div>
                <p className="font-space text-xs text-white/40 leading-relaxed">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
