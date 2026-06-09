"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = navItems.map((n) => n.href.slice(1));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[rgba(5,5,5,0.92)] backdrop-blur-xl border-b border-[rgba(255,59,48,0.08)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.05 }}
          className="font-orbitron font-black text-xl tracking-widest text-white"
        >
          DEV<span className="text-[#ff3b30]">.</span>
        </motion.button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {navItems.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => scrollTo(href)}
              className={`nav-link ${active === href.slice(1) ? "active" : ""}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Hire me CTA */}
        <div className="hidden md:block">
          <a href="mailto:devady2409@gmail.com" className="btn-primary py-2 px-5 text-[0.6rem]">
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          id="mobile-nav-toggle"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[rgba(5,5,5,0.97)] backdrop-blur-xl border-b border-[rgba(255,59,48,0.12)]"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navItems.map(({ label, href }) => (
                <button
                  key={label}
                  onClick={() => scrollTo(href)}
                  className={`nav-link text-left text-sm ${active === href.slice(1) ? "active" : ""}`}
                >
                  {label}
                </button>
              ))}
              <a href="mailto:devady2409@gmail.com" className="btn-primary justify-center mt-2">
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
