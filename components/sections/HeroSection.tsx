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
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5, alpha: Math.random() * 0.4 + 0.1
      });
    }
    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.save(); ctx.globalAlpha = p.alpha; ctx.fillStyle = "#e8394d";
        ctx.shadowBlur = 8; ctx.shadowColor = "#c0152a";
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      });
      id = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#080808" }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.35 }} />

      {/* Right panel crimson glow */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none" style={{
        background: "radial-gradient(ellipse 90% 80% at 80% 50%, rgba(192,21,42,0.12) 0%, transparent 70%)"
      }} />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-10 w-full pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[80vh] items-center">

          {/* Left — Headline & CTAs */}
          <div className="lg:pr-16 lg:border-r lg:border-red-900/15">
            <h1 className="font-black leading-[1.0] tracking-tight mb-10">
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-[#f5f0f0] animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                FIRE
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-[#f5f0f0] animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                SPREADS.
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl mt-2 animate-fade-in-up" style={{
                background: "linear-gradient(135deg, #e8394d 0%, #c0152a 50%, #ff6070 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                animationDelay: "0.35s"
              }}>DNF SLOWS IT.</span>
            </h1>

            <p className="text-base text-[#8a7070] mb-10 leading-relaxed max-w-md animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              Germany-engineered proactive fire spread retardant. Eco-certified. Scalable.
              Proven across forests, cities, and critical infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: "0.65s" }}>
              <a href="#technology" className="btn-ice px-8 py-4 rounded-full text-sm font-bold">Explore Technology</a>
              <a href="#demonstrations" className="btn-outline-ice px-8 py-4 rounded-full text-sm">Watch Live Demo</a>
            </div>

            <div className="flex items-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.75s" }}>
              <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#5a4040] hover:text-[#8a7070] transition-colors">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Contact
              </a>
              <span className="text-[#3a2020]">|</span>
              <a href="#contact" className="text-xs text-[#5a4040] hover:text-[#8a7070] transition-colors">Request Demo</a>
            </div>
          </div>

          {/* Right — Shield Visual + Stats */}
          <div className="hidden lg:flex flex-col items-center justify-center lg:pl-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {/* Shield */}
            <div className="relative mb-10">
              <div className="absolute inset-0 rounded-full animate-glow-pulse"
                style={{ background: "radial-gradient(circle, rgba(192,21,42,0.2) 0%, transparent 70%)", transform: "scale(1.8)" }} />
              <div className="relative w-48 h-48 flex items-center justify-center"
                style={{ filter: "drop-shadow(0 0 40px rgba(192,21,42,0.3))" }}>
                <svg viewBox="0 0 200 220" className="w-full h-full" fill="none">
                  <defs>
                    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e8394d" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#8a0f20" stopOpacity="0.7" />
                    </linearGradient>
                  </defs>
                  <path d="M100 8 L180 40 L180 110 C180 160 100 200 100 200 C100 200 20 160 20 110 L20 40 Z"
                    fill="url(#shieldGrad)" stroke="rgba(232,57,77,0.4)" strokeWidth="1.5"/>
                  <path d="M100 28 L162 55 L162 108 C162 148 100 182 100 182 C100 182 38 148 38 108 L38 55 Z"
                    fill="none" stroke="rgba(255,96,112,0.2)" strokeWidth="1"/>
                  <path d="M72 105 L88 121 L128 82" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Compact metric grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {[
                { value: "3×", label: "Slower Spread" },
                { value: "+7 min", label: "Response Window" },
                { value: "−69%", label: "Burn Rate" },
                { value: "0 Toxins", label: "Eco Certified" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl p-4 text-center"
                  style={{ background: "rgba(14,4,4,0.8)", border: "1px solid rgba(192,21,42,0.15)" }}>
                  <div className="text-xl font-black mb-0.5" style={{
                    background: "linear-gradient(135deg, #e8394d, #c0152a)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
                  }}>{s.value}</div>
                  <div className="text-[10px] text-[#8a7070]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
