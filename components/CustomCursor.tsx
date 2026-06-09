"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };
    window.addEventListener("mousemove", onMove);

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;
    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.1);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.1);
      ringEl.style.transform = `translate(${ring.current.x - 18}px, ${ring.current.y - 18}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const grow = () => {
      ringEl.style.width = "56px";
      ringEl.style.height = "56px";
      ringEl.style.borderColor = "rgba(255,59,48,0.7)";
      ringEl.style.marginLeft = "-10px";
      ringEl.style.marginTop = "-10px";
    };
    const shrink = () => {
      ringEl.style.width = "36px";
      ringEl.style.height = "36px";
      ringEl.style.borderColor = "rgba(255,59,48,0.4)";
      ringEl.style.marginLeft = "0px";
      ringEl.style.marginTop = "0px";
    };

    const interactables = document.querySelectorAll<HTMLElement>(
      "a, button, [data-cursor]"
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#ff3b30] rounded-full pointer-events-none z-[99999] mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[99998]"
        style={{
          border: "1px solid rgba(255,59,48,0.4)",
          willChange: "transform",
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, margin 0.3s ease",
        }}
      />
    </>
  );
}
