import React from "react";
// SolutionOverview.tsx — Ice & Steel design — 3 equal pillar cards

interface Pillar {
  number: string;
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
  icon: React.ReactElement;
}

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Slows Fire Spread",
    desc: "DNF's active formula significantly reduces flame propagation speed on treated surfaces — creating time and space for safe, structured response by emergency teams.",
    stat: "up to 3×",
    statLabel: "slower spread on treated surfaces",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="12" x2="15" y2="15" />
        <path d="M2 12h3M19 12h3M12 2v3M12 19v3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Supports Emergency Response",
    desc: "By slowing propagation, DNF gives fire departments structured time to deploy resources, establish perimeters, and protect assets — turning reactive response into controlled action.",
    stat: "+7 min",
    statLabel: "average extended response window",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Protects Critical Assets",
    desc: "From hospital archives to industrial equipment to cultural heritage — DNF forms a thermal barrier on treated materials, preserving value, continuity, and the lives that depend on them.",
    stat: "60–80%",
    statLabel: "reduction in structural exposure risk",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function SolutionOverview() {
  return (
    <section
      className="relative py-10 overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(192,21,42,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Centered header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#e8394d] mb-5">
            The DNF Solution
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f0f0] leading-tight mb-6">
            Fire Safety
            <br />
            <span className="text-ice-gradient">Reimagined.</span>
          </h2>
          <p className="text-[#8a7070] text-lg max-w-2xl mx-auto leading-relaxed">
            DNF is not a conventional fire extinguisher. It is a proactive, surface-level fire protection
            system that fundamentally changes the dynamics of fire propagation — giving people time, systems
            breathing room, and environments a chance.
          </p>
        </div>

        {/* 3 equal pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 flex flex-col relative overflow-hidden group"
              style={{
                background: "rgba(12,4,4,0.8)",
                border: "1px solid rgba(192,21,42,0.15)",
                borderTop: "2px solid #c0152a",
                minHeight: "400px",
              }}
            >
              {/* Faded watermark number */}
              <div
                className="absolute top-4 right-5 text-7xl font-black leading-none select-none pointer-events-none"
                style={{ color: "rgba(192,21,42,0.07)" }}
              >
                {pillar.number}
              </div>

              {/* Number badge */}
              <div
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-xs font-black text-[#e8394d] mb-6 shrink-0"
                style={{
                  background: "rgba(192,21,42,0.12)",
                  border: "1px solid rgba(232,57,77,0.25)",
                }}
              >
                {pillar.number}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-[#e8394d] shrink-0"
                style={{
                  background: "rgba(192,21,42,0.08)",
                  border: "1px solid rgba(192,21,42,0.18)",
                }}
              >
                {pillar.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#f5f0f0] mb-3">{pillar.title}</h3>
                <p className="text-sm text-[#8a7070] leading-relaxed">{pillar.desc}</p>
              </div>

              {/* Bottom stat */}
              <div
                className="mt-6 pt-5 border-t"
                style={{ borderColor: "rgba(192,21,42,0.12)" }}
              >
                <div className="text-2xl font-black text-ice-gradient">{pillar.stat}</div>
                <div className="text-xs text-[#5a4040] mt-1">{pillar.statLabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Section divider hint */}
        <div className="mt-14 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: "rgba(192,21,42,0.1)" }} />
          <div className="text-xs text-[#5a4040] tracking-widest uppercase font-medium">
            How it works
          </div>
          <div className="flex-1 h-px" style={{ background: "rgba(192,21,42,0.1)" }} />
        </div>
      </div>
    </section>
  );
}
