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
    for (let i = 0; i < 80; i++) {
      pts.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5, alpha: Math.random() * 0.5 + 0.1 });
    }
    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.save(); ctx.globalAlpha = p.alpha; ctx.fillStyle = "#e85c0d";
        ctx.shadowBlur = 6; ctx.shadowColor = "#e85c0d";
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
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
      style={{ background: "#040a05" }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.4 }} />

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(232,92,13,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(232,92,13,0.05) 1px, transparent 1px)",
        backgroundSize: "64px 64px"
      }} />

      {/* Center glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(232,92,13,0.1) 0%, transparent 70%)"
      }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center w-full">

        {/* Headline */}
        <h1 className="font-black leading-[1.05] tracking-tight mb-8">
          <span className="block text-4xl sm:text-5xl lg:text-6xl text-[#e8f0e0] animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            FIRE SPREADS IN SECONDS.
          </span>
          <span className="block text-3xl sm:text-4xl lg:text-5xl mt-3 animate-fade-in-up" style={{
            background: "linear-gradient(90deg, #f5a020 0%, #e85c0d 50%, #ff9040 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            animationDelay: "0.3s"
          }}>DNF BUYS TIME.</span>
        </h1>

        <p className="text-lg text-[#6a8060] max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.55s" }}>
          The world's first proactive fire spread retardant — eco-certified, deployable at scale,
          proven across forests, cities, industrial zones and critical infrastructure.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.75s" }}>
          <a href="#technology" className="btn-ice px-10 py-4 rounded-full text-base font-bold">Explore Technology</a>
          <a href="#demonstrations" className="btn-outline-ice px-10 py-4 rounded-full text-base">Watch Live Demo</a>
          <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold border border-green-800/40 text-green-400 hover:bg-green-950/20 transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            WhatsApp
          </a>
        </div>

        {/* Metrics bar — 4 equal columns, no empty space */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-green-900/20 border border-green-900/30 rounded-2xl overflow-hidden">
          {[
            { value: "3×", label: "Slower Fire Spread", sub: "on treated surfaces" },
            { value: "+7 min", label: "Response Window", sub: "average gain" },
            { value: "−69%", label: "Burn Rate", sub: "lab certified" },
            { value: "0", label: "Toxic Residue", sub: "eco-safe formula" },
          ].map((s) => (
            <div key={s.label} className="py-6 px-4 text-center" style={{ background: "rgba(4,12,4,0.8)" }}>
              <div className="text-3xl font-black mb-1" style={{
                background: "linear-gradient(135deg, #f5a020 0%, #e85c0d 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
              }}>{s.value}</div>
              <div className="text-xs font-bold text-[#c8e0c0] mb-0.5">{s.label}</div>
              <div className="text-[10px] text-[#3a5040]">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
