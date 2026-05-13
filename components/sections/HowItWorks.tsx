import React from "react";

const steps = [
  {
    phase: "01",
    title: "Apply",
    sub: "Surface Treatment",
    desc: "DNF is applied to vulnerable surfaces — wood, vegetation, fabric, building facades — via spray, brush, or integrated sprinkler systems. Quick, scalable, compatible with standard equipment.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h3M3 6h3M3 18h3" />
        <rect x="6" y="8" width="6" height="12" rx="1" />
        <path d="M12 10h4l2-3h-4l-2 3ZM16 7V4h2" />
      </svg>
    ),
  },
  {
    phase: "02",
    title: "Activate",
    sub: "Thermal Trigger",
    desc: "When heat or flame contacts DNF-treated surfaces, the formula activates instantly. A thermal barrier layer forms, interrupting the heat transfer that enables fire to spread.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    phase: "03",
    title: "Slow Spread",
    sub: "Propagation Reduction",
    desc: "Fire propagation speed is dramatically reduced on treated surfaces — up to 3× slower. Critical minutes are preserved and the treated zone becomes a controlled buffer.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <path d="M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24" />
      </svg>
    ),
  },
  {
    phase: "04",
    title: "Reduce Heat",
    sub: "Thermal Attenuation",
    desc: "Radiant heat reaching adjacent untreated structures drops by up to 56%, limiting secondary ignitions and structural damage beyond the treated area.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
  {
    phase: "05",
    title: "Support Response",
    sub: "Emergency Window",
    desc: "Fire departments gain 5–10 extra minutes to arrive, establish perimeters, suppress fire, and coordinate evacuation under controlled conditions.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    phase: "06",
    title: "Protect Assets",
    sub: "Structural & Life Safety",
    desc: "People evacuate safely. Buildings hold. Nature survives. Cultural heritage is preserved. Industrial continuity maintained. DNF buys time to act effectively.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative py-10 overflow-hidden"
      style={{ background: "#080808" }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Section header — single line */}
        <div className="mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#e8394d] mb-4">
            How DNF Works
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f0f0] leading-tight">
            Six Steps. <span className="text-ice-gradient">One Mission.</span>
          </h2>
        </div>

        {/* 2×3 card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 relative overflow-hidden group transition-all duration-300"
              style={{
                background: "rgba(14,4,4,0.8)",
                border: "1px solid rgba(192,21,42,0.15)",
                borderTop: "2px solid rgba(192,21,42,0.5)",
              }}
            >
              {/* Phase watermark */}
              <div
                className="absolute top-3 right-4 text-6xl font-black leading-none select-none pointer-events-none"
                style={{ color: "rgba(192,21,42,0.07)" }}
              >
                {step.phase}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-[#e8394d]"
                  style={{
                    background: "rgba(192,21,42,0.08)",
                    border: "1px solid rgba(192,21,42,0.2)",
                  }}
                >
                  {step.icon}
                </div>

                {/* Sub label */}
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#e8394d] mb-2 opacity-70">
                  {step.sub}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#f5f0f0] mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-[#7a6060] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
