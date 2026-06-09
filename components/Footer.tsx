"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 bg-[#050505] border-t border-[rgba(255,59,48,0.08)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-orbitron font-black text-xl text-white tracking-widest">
            DEV<span className="text-[#ff3b30]">.</span>
          </div>
          <p className="font-space text-[0.7rem] text-white/25 mt-1">
            DEVARAJ P — AI Engineer & Full Stack Developer
          </p>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: GithubIcon, href: "https://github.com/devaraj24dr", label: "GitHub" },
            { icon: LinkedinIcon, href: "https://linkedin.com/in/devaraj-p-bb23b7357", label: "LinkedIn" },
            { icon: Mail, href: "mailto:devady2409@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a key={label} id={`footer-${label.toLowerCase()}`} href={href}
              target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label}
              whileHover={{ scale: 1.15, y: -2 }}
              className="w-8 h-8 flex items-center justify-center border border-[rgba(255,59,48,0.15)] text-white/30 hover:text-[#ff3b30] hover:border-[#ff3b30] transition-all duration-300">
              <Icon size={13} />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <p className="font-space text-[0.65rem] text-white/20">
            © 2025 DEVARAJ P. All rights reserved.
          </p>
          <motion.button id="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}
            className="w-8 h-8 flex items-center justify-center border border-[rgba(255,59,48,0.25)] text-[#ff3b30] hover:bg-[#ff3b30] hover:text-white transition-all duration-300"
            aria-label="Back to top">
            <ArrowUp size={13} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
