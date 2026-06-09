"use client";

import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CertsAndAchievements from "@/components/CertsAndAchievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* Noise overlay */}
      <div className="noise fixed inset-0 pointer-events-none z-[99998]" />

      {/* Loading screen */}
      <LoadingScreen onComplete={handleLoadComplete} />

      {/* Main site — fades in after loading */}
      <div
        className="transition-opacity duration-700"
        style={{ opacity: loaded ? 1 : 0, pointerEvents: loaded ? "auto" : "none" }}
      >
        <SmoothScrollProvider>
          {/* Utilities */}
          <CustomCursor />
          <ScrollProgress />

          {/* Navigation */}
          <Navbar />

          {/* Sections */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <CertsAndAchievements />
            <Contact />
          </main>

          <Footer />
        </SmoothScrollProvider>
      </div>
    </>
  );
}
