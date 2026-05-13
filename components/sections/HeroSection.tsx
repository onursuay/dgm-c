"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const pts: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      pts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }
    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = "#e8394d";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#c0152a";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      id = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const stats = [
    { value: "3×", label: "Slower Spread" },
    { value: "+7 min", label: "Response Window" },
    { value: "−69%", label: "Burn Rate" },
    { value: "0", label: "Toxic Residue" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Layer 1: red particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.3, zIndex: 1 }}
      />

      {/* Layer 2: giant FIRE watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      >
        <span
          className="font-black leading-none"
          style={{
            fontSize: "clamp(8rem,22vw,20rem)",
            color: "#c0152a",
            opacity: 0.05,
            letterSpacing: "-0.02em",
          }}
        >
          FIRE
        </span>
      </div>

      {/* Layer 3: centered narrow content */}
      <div
        className="relative w-full max-w-4xl mx-auto px-6 text-center pt-24 pb-16"
        style={{ zIndex: 3 }}
      >
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border animate-fade-in-up"
          style={{
            borderColor: "rgba(192,21,42,0.25)",
            background: "rgba(192,21,42,0.06)",
            animationDelay: "0s",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#c0152a" }}
          />
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: "#e8394d" }}
          >
            Germany · Fire Safety Technology
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-black leading-[1.05] tracking-tight mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          <span
            className="block text-4xl sm:text-5xl lg:text-7xl whitespace-nowrap"
            style={{ color: "#f5f0f0" }}
          >
            FIRE SPREADS IN SECONDS.
          </span>
          <span
            className="block text-2xl sm:text-3xl lg:text-5xl mt-2 text-ice-gradient"
          >
            DNF SLOWS IT.
          </span>
        </h1>

        {/* Sub */}
        <p
          className="text-base max-w-md mx-auto mb-8 leading-relaxed animate-fade-in-up"
          style={{ color: "#8a7070", animationDelay: "0.3s" }}
        >
          Germany-engineered proactive fire spread retardant — eco-certified,
          scalable, proven across forests, cities and critical infrastructure.
        </p>

        {/* CTAs centered */}
        <div
          className="flex gap-3 justify-center flex-wrap mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#technology"
            className="btn-ice px-8 py-4 rounded-full text-sm font-bold"
          >
            Explore Technology
          </a>
          <a
            href="#demonstrations"
            className="btn-outline-ice px-8 py-4 rounded-full text-sm"
          >
            Watch Live Demo
          </a>
        </div>

        {/* WhatsApp */}
        <div
          className="flex justify-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.55s" }}
        >
          <a
            href="https://wa.me/491234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs transition-colors"
            style={{ color: "#5a4040" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#8a7070")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#5a4040")}
          >
            <svg
              className="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp Contact
          </a>
        </div>

        {/* Stats — narrow 4-col grid */}
        <div
          className="grid grid-cols-4 gap-0 max-w-lg mx-auto border rounded-xl overflow-hidden animate-fade-in-up"
          style={{
            borderColor: "rgba(192,21,42,0.18)",
            background: "rgba(10,2,2,0.7)",
            animationDelay: "0.65s",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-5 px-2"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(192,21,42,0.12)"
                    : "none",
              }}
            >
              <div
                className="text-xl sm:text-2xl font-black leading-none mb-1"
                style={{
                  background: "linear-gradient(135deg, #e8394d, #c0152a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </div>
              <div
                className="text-[9px] text-center leading-tight"
                style={{ color: "#8a7070" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
