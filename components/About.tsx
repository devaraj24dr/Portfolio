"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Zap, Star } from "lucide-react";
import Image from "next/image";

const fade = (i = 0) => ({
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
});

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 bg-[rgba(255,59,48,0.03)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <motion.div variants={fade(0)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-4 mb-4">
          <span className="section-label">001 / About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#ff3b30] to-transparent" />
        </motion.div>

        {/* Heading */}
        <motion.h2 variants={fade(1)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="font-orbitron font-black text-[clamp(2.2rem,7vw,5rem)] text-white leading-none mb-16">
          ABOUT<br /><span className="text-[#ff3b30]">ME</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — 3 cols */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div variants={fade(2)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Profile Image Card */}
              <div className="md:col-span-1">
                <div className="relative glass-card clip-tr p-1 aspect-[3/4.2] overflow-hidden group border border-[rgba(255,59,48,0.25)] hover:border-[#ff3b30] transition-colors duration-500">
                  {/* Corner Brackets */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ff3b30] z-20" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#ff3b30] z-20" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ff3b30] z-20" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ff3b30] z-20" />
                  
                  {/* Scanline overlay */}
                  <div className="absolute inset-0 bg-scanline pointer-events-none opacity-25 z-10" />
                  
                  <Image 
                    src="/profile.png" 
                    alt="Devaraj P" 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                    className="object-cover filter grayscale contrast-110 brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out scale-105 group-hover:scale-100" 
                  />
                  
                  {/* Glowing Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500 z-0" />
                </div>
              </div>
              
              {/* Profile Bio */}
              <div className="md:col-span-2">
                <div className="glass-card clip-tl p-6 h-full flex flex-col justify-center">
                  <div className="font-orbitron text-[0.6rem] tracking-[0.3em] text-[#ff3b30] mb-4 uppercase">
                    › OPERATIVE PROFILE
                  </div>
                  <p className="font-space text-white/80 text-sm leading-relaxed mb-3">
                    I am a{" "}
                    <span className="text-white font-semibold">B.Tech student</span> at{" "}
                    <span className="text-[#ff3b30] font-semibold">Velammal Institute of Technology</span>{" "}
                    with a CGPA of <span className="text-white font-bold">8.81</span>.
                  </p>
                  <p className="font-space text-white/55 text-xs leading-relaxed mb-3">
                    I am passionate about Artificial Intelligence, Generative AI, Machine Learning,
                    Deep Learning, and Full Stack Development.
                  </p>
                  <p className="font-space text-white/55 text-xs leading-relaxed">
                    My goal is to develop impactful AI solutions and software products that solve
                    real-world challenges while continuously improving my technical expertise.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Info pills */}
            <motion.div variants={fade(3)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="flex flex-wrap gap-3">
              {[
                { icon: MapPin, text: "Chennai, Tamil Nadu" },
                { icon: GraduationCap, text: "B.Tech 2024–Present" },
                { icon: Star, text: "CGPA 8.81" },
                { icon: Zap, text: "Open to Opportunities" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="glass-card flex items-center gap-2 px-3 py-2">
                  <Icon size={11} className="text-[#ff3b30] flex-shrink-0" />
                  <span className="font-space text-xs text-white/70">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* Education timeline */}
            <motion.div variants={fade(4)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <div className="font-orbitron text-[0.6rem] tracking-[0.3em] text-[#ff3b30] mb-6 uppercase">
                › Education Timeline
              </div>
              <div className="space-y-4">
                {[
                  {
                    year: "2024–Present", degree: "B.Tech",
                    org: "Velammal Institute of Technology", score: "CGPA: 8.81", current: true,
                  },
                  {
                    year: "2024", degree: "Higher Secondary",
                    org: "GBHSS NPT", score: "78.16%", current: false,
                  },
                  {
                    year: "2022", degree: "SSLC",
                    org: "V.S.A Govt High School", score: "77%", current: false,
                  },
                ].map((edu, i) => (
                  <div key={i} className="relative pl-9">
                    {i < 2 && (
                      <div className="absolute left-[7px] top-5 h-[calc(100%+16px)] w-px bg-gradient-to-b from-[#ff3b30] to-transparent" />
                    )}
                    <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#ff3b30] ${edu.current ? "bg-[#ff3b30]" : "bg-transparent"}`}>
                      {edu.current && <div className="absolute inset-[-5px] rounded-full border border-[#ff3b30] opacity-40 animate-ping" />}
                    </div>
                    <div className="glass-card p-4">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-orbitron font-bold text-white text-xs">{edu.degree}</h4>
                        <span className="font-orbitron text-[0.55rem] text-[#ff3b30] tracking-wider flex-shrink-0">{edu.year}</span>
                      </div>
                      <p className="font-space text-xs text-white/50 mb-1">{edu.org}</p>
                      <p className="font-orbitron text-xs text-[#ff3b30]">{edu.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — 2 cols */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 content-start">
            {[
              { v: "8.81", l: "Current CGPA", s: "VIT" },
              { v: "4+", l: "AI Projects", s: "Built" },
              { v: "4+", l: "Certs", s: "Completed" },
              { v: "1", l: "Internship", s: "Infosys" },
            ].map(({ v, l, s }, i) => (
              <motion.div key={l} variants={fade(i + 4)} initial="hidden" animate={inView ? "visible" : "hidden"}
                className="glass-card clip-all p-5 flex flex-col gap-3 min-h-[120px]">
                <div className="font-orbitron font-black text-[2.5rem] leading-none text-[#ff3b30]"
                  style={{ textShadow: "0 0 25px rgba(255,59,48,0.45)" }}>
                  {v}
                </div>
                <div>
                  <div className="font-space font-semibold text-white text-xs">{l}</div>
                  <div className="font-space text-[0.65rem] text-white/35">{s}</div>
                </div>
              </motion.div>
            ))}

            {/* Interests wide */}
            <motion.div variants={fade(8)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="col-span-2 glass-card p-5">
              <div className="font-orbitron text-[0.55rem] tracking-[0.3em] text-[#ff3b30] mb-3 uppercase">Interests</div>
              <div className="flex flex-wrap gap-2">
                {["Generative AI", "Deep Learning", "LLMs", "Full Stack", "Prompt Eng."].map(t => (
                  <span key={t} className="skill-pill">{t}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
