"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const fade = (i = 0) => ({
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
});

const socials = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/devaraj24dr", sub: "devaraj24dr" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com/in/devaraj-p-bb23b7357", sub: "devaraj-p-bb23b7357" },
  { icon: Mail, label: "Email", href: "mailto:devady2409@gmail.com", sub: "devady2409@gmail.com" },
  { icon: Phone, label: "Phone", href: "tel:+919092842401", sub: "+91 90928 42401" },
];

const inputClass =
  "w-full bg-transparent border border-[rgba(255,59,48,0.14)] focus:border-[#ff3b30] px-4 py-3 font-space text-sm text-white outline-none transition-colors duration-300 placeholder-[rgba(255,255,255,0.18)]";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [sending, setSending] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setStatus("error"); return; }
    setSending(true);
    const s = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const b = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:devady2409@gmail.com?subject=${s}&body=${b}`);
    setTimeout(() => {
      setSending(false);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[rgba(255,59,48,0.05)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div variants={fade(0)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-4 mb-4">
          <span className="section-label">007 / Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#ff3b30] to-transparent" />
        </motion.div>

        <motion.h2 variants={fade(1)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="font-orbitron font-black text-[clamp(2rem,6vw,4.5rem)] text-white leading-none mb-4 max-w-3xl">
          LET&apos;S BUILD SOMETHING<br />
          <span className="text-[#ff3b30]">INTELLIGENT TOGETHER</span>
        </motion.h2>

        <motion.p variants={fade(2)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="font-space text-white/40 mb-16 max-w-xl text-base">
          Open to internships, AI projects, machine learning opportunities, software development roles, and innovative collaborations.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Form */}
          <motion.form id="contact-form" onSubmit={onSubmit}
            variants={fade(3)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="space-y-5">
            <div>
              <label className="font-orbitron text-[0.55rem] tracking-[0.25em] text-white/30 uppercase mb-2 block">
                Your Name
              </label>
              <input id="contact-name" name="name" type="text" value={form.name} onChange={onChange}
                placeholder="John Doe" className={inputClass}
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }} />
            </div>
            <div>
              <label className="font-orbitron text-[0.55rem] tracking-[0.25em] text-white/30 uppercase mb-2 block">
                Email Address
              </label>
              <input id="contact-email" name="email" type="email" value={form.email} onChange={onChange}
                placeholder="john@example.com" className={inputClass}
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }} />
            </div>
            <div>
              <label className="font-orbitron text-[0.55rem] tracking-[0.25em] text-white/30 uppercase mb-2 block">
                Message
              </label>
              <textarea id="contact-message" name="message" rows={5} value={form.message} onChange={onChange}
                placeholder="Tell me about your project or opportunity..."
                className={`${inputClass} resize-none`}
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }} />
            </div>

            {status === "success" && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-400 font-space text-sm">
                <CheckCircle size={15} /> Message sent! Your mail client should open.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-[#ff3b30] font-space text-sm">
                <AlertCircle size={15} /> Please fill in all fields.
              </motion.div>
            )}

            <motion.button id="contact-submit" type="submit" disabled={sending}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              className="btn-primary w-full py-4">
              {sending
                ? <span className="w-4 h-4 border-2 border-[#ff3b30] border-t-transparent rounded-full animate-spin" />
                : <Send size={13} />
              }
              {sending ? "Opening Mail..." : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Links */}
          <motion.div variants={fade(4)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="space-y-4">
            {socials.map(({ icon: Icon, label, href, sub }) => (
              <motion.a key={label} id={`contact-${label.toLowerCase()}`} href={href}
                target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                whileHover={{ x: 8 }}
                className="glass-card flex items-center gap-4 p-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-[rgba(255,59,48,0.2)] text-white/35 group-hover:border-[#ff3b30] group-hover:text-[#ff3b30] transition-all duration-300 flex-shrink-0">
                  <Icon size={15} />
                </div>
                <div>
                  <div className="font-orbitron text-[0.55rem] tracking-[0.2em] text-white/25 uppercase mb-0.5">{label}</div>
                  <div className="font-space text-sm text-white/65 group-hover:text-white transition-colors">{sub}</div>
                </div>
                <div className="ml-auto font-orbitron text-[#ff3b30] text-lg opacity-0 group-hover:opacity-100 transition-opacity">›</div>
              </motion.a>
            ))}

            {/* Availability */}
            <div className="glass-card p-5 border-green-500/15 mt-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-orbitron text-[0.6rem] tracking-[0.25em] text-green-400 uppercase">Available for Work</span>
              </div>
              <p className="font-space text-white/45 text-sm leading-relaxed">
                Currently open to AI engineering roles, full-stack internships, and exciting collaborations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
