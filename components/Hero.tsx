"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ArrowDown, Download, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), { ssr: false });

gsap.registerPlugin(TextPlugin);

const roles = [
  "AI Engineer",
  "Machine Learning Enthusiast",
  "Full Stack Developer",
  "Generative AI Builder",
  "Problem Solver",
];

export default function Hero() {
  const subtitleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Letter reveal
    gsap.from(".hero-char", {
      y: "110%",
      opacity: 0,
      skewY: 8,
      stagger: 0.04,
      duration: 0.9,
      ease: "power4.out",
      delay: 0.3,
    });

    // Typewriter roles
    let idx = 0;
    const typeNext = () => {
      if (!subtitleRef.current) return;
      gsap.to(subtitleRef.current, {
        duration: 1.4,
        text: roles[idx % roles.length],
        ease: "none",
        onComplete: () => {
          gsap.delayedCall(1.8, () => {
            gsap.to(subtitleRef.current, {
              duration: 0.5,
              text: "",
              ease: "none",
              onComplete: () => { idx++; typeNext(); },
            });
          });
        },
      });
    };
    gsap.delayedCall(1.2, typeNext);

    return () => gsap.killTweensOf(subtitleRef.current);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Three.js particles */}
      <ParticleBackground />

      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Center radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(255,59,48,0.07)_0%,transparent_70%)]" />

      {/* Scanline sweep */}
      <div
        className="absolute left-0 right-0 h-[1px] opacity-[0.04] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, #ff3b30, transparent)",
          animation: "scanline 8s linear infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto w-full">
        {/* Pre-label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="h-px w-14 bg-[#ff3b30]" />
          <span className="section-label">AI Engineer & Full Stack Developer</span>
          <div className="h-px w-14 bg-[#ff3b30]" />
        </motion.div>

        {/* Huge name */}
        <div className="overflow-hidden mb-8">
          <h1 className="font-orbitron font-black text-[clamp(2.4rem,8.5vw,7.5rem)] leading-none tracking-tighter">
            <span className="text-white">
              {"DEVARAJ".split("").map((ch, i) => (
                <span key={i} className="hero-char inline-block" style={{ display: "inline-block" }}>
                  {ch}
                </span>
              ))}
            </span>
            <span className="text-white/95">&nbsp;</span>
            <span className="text-[#ff3b30]" style={{ textShadow: "0 0 60px rgba(255,59,48,0.55)" }}>
              {"P".split("").map((ch, i) => (
                <span key={i} className="hero-char inline-block" style={{ display: "inline-block" }}>
                  {ch}
                </span>
              ))}
            </span>
          </h1>
        </div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-2 mb-6 h-10"
        >
          <span className="font-orbitron text-sm text-[rgba(255,59,48,0.5)]">{">"}_</span>
          <span
            ref={subtitleRef}
            className="font-space text-[clamp(1rem,2.5vw,1.4rem)] text-white/90 font-light min-w-[220px] text-left"
          />
          <span
            className="w-[2px] h-7 bg-[#ff3b30] inline-block"
            style={{ animation: "blink 1s step-end infinite" }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="font-space text-white/50 text-[clamp(0.9rem,1.8vw,1.05rem)] max-w-xl mx-auto mb-12 leading-relaxed"
        >
          I build intelligent systems, AI applications, and modern digital experiences.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            id="hero-projects-cta"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
          >
            View Projects
          </button>
          <a
            id="hero-resume-download"
            href="/Devaraj_P_Resume.docx"
            download="Devaraj_P_Resume.docx"
            className="btn-ghost flex items-center gap-2"
          >
            <Download size={13} />
            Download Resume
          </a>
          <a
            id="hero-contact-cta"
            href="mailto:devady2409@gmail.com"
            className="btn-ghost"
          >
            <Mail size={13} />
            Contact Me
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex items-center justify-center gap-5 mb-16"
        >
          {[
            { icon: GithubIcon, href: "https://github.com/devaraj24dr", label: "GitHub" },
            { icon: LinkedinIcon, href: "https://linkedin.com/in/devaraj-p-bb23b7357", label: "LinkedIn" },
            { icon: Mail, href: "mailto:devady2409@gmail.com", label: "Email" },
            { icon: Phone, href: "tel:+919092842401", label: "Phone" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              id={`hero-social-${label.toLowerCase()}`}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.25, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center border border-[rgba(255,59,48,0.18)] text-white/40 hover:text-[#ff3b30] hover:border-[#ff3b30] transition-all duration-300"
            >
              <Icon size={15} />
            </motion.a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="flex flex-wrap justify-center gap-10 md:gap-20"
        >
          {[
            { v: "8.81", l: "CGPA" },
            { v: "4+", l: "Projects" },
            { v: "4+", l: "Certifications" },
            { v: "1", l: "Internship" },
          ].map(({ v, l }) => (
            <div key={l} className="text-center">
              <div
                className="font-orbitron font-black text-4xl text-[#ff3b30]"
                style={{ textShadow: "0 0 30px rgba(255,59,48,0.5)" }}
              >
                {v}
              </div>
              <div className="font-orbitron text-[0.55rem] tracking-[0.3em] text-white/30 uppercase mt-1">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        id="hero-scroll-down"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-[#ff3b30] transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="font-orbitron text-[0.55rem] tracking-[0.35em] uppercase">Scroll</span>
        <ArrowDown size={14} />
      </motion.button>

      {/* Corner brackets */}
      {["top-8 left-8 border-t border-l", "top-8 right-8 border-t border-r",
        "bottom-8 left-8 border-b border-l", "bottom-8 right-8 border-b border-r"].map((cls, i) => (
        <div key={i} className={`absolute w-8 h-8 border-[#ff3b30] opacity-30 ${cls}`} />
      ))}
    </section>
  );
}
