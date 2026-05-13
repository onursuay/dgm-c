import React from "react";
// HowItWorks.tsx — Ice & Steel design — 6 steps in 2 rows of 3

interface Step {
  phase: string;
  title: string;
  sub: string;
  desc: string;
  detail: string;
  icon: React.ReactElement;
}

const steps: Step[] = [
  {
    phase: "01",
    title: "Apply",
    sub: "Surface Treatment",
    desc: "DNF is applied to vulnerable surfaces — wood, vegetation, fabric, building facades — via spray, brush, or integrated into sprinkler systems. Application is quick, scalable, and compatible with standard equipment.",
    detail: "Compatible with aerial, ground, and integrated sprinkler deployment",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h3M3 6h3M3 18h3" />
        <rect x="6" y="8" width="6" height="12" rx="1" />
        <path d="M12 10h4l2-3h-4l-2 3ZM16 7V4h2" />
        <line x1="18" y1="14" x2="20" y2="14" />
        <line x1="18" y1="17" x2="20" y2="17" />
      </svg>
    ),
  },
  {
    phase: "02",
    title: "Activate",
    sub: "Thermal Trigger",
    desc: "When heat or flame contacts DNF-treated surfaces, the formula activates. A thermal barrier layer is formed, interrupting the heat transfer process that enables fire to spread from material to material.",
    detail: "Activated by radiant heat — no electronic trigger needed",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    phase: "03",
    title: "Slow Spread",
    sub: "Propagation Reduction",
    desc: "With the thermal barrier active, fire propagation speed is dramatically reduced. The fire does not spread to DNF-treated areas at its natural rate — buying measurable minutes of protected time.",
    detail: "Tested propagation reduction: up to 3× slower on treated surfaces",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <path d="M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24" />
      </svg>
    ),
  },
  {
    phase: "04",
    title: "Reduce Heat Impact",
    sub: "Thermal Attenuation",
    desc: "Beyond slowing spread, DNF reduces the radiant heat reaching untreated adjacent materials, people, and structures — limiting secondary ignitions and structural damage from heat alone.",
    detail: "Reduces radiant heat transfer to adjacent structures by up to 56%",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
  {
    phase: "05",
    title: "Support Response",
    sub: "Emergency Window",
    desc: "The extra minutes secured by DNF allow fire departments to arrive, establish perimeters, begin targeted suppression, and coordinate evacuation — all under more controlled conditions.",
    detail: "Fire department coordination window extended by 5–10 minutes",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    phase: "06",
    title: "Protect Assets",
    sub: "Structural & Life Safety",
    desc: "People evacuate safely. Buildings sustain less structural damage. Natural areas preserve larger buffer zones. Cultural heritage survives. Industrial continuity is maintained. DNF buys time to act effectively.",
    detail: "Lives, infrastructure, nature and culture preserved",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
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
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(192,21,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(192,21,42,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Centered header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#e8394d] mb-5">
            How DNF Works
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f0f0] leading-tight mb-6">
            Six Steps.
            <br />
            <span className="text-ice-gradient">One Life-Saving Mission.</span>
          </h2>
          <p className="text-[#8a7070] max-w-xl mx-auto text-lg leading-relaxed">
            From application to protection — here is how DNF transforms the fire safety equation.
          </p>
        </div>

        {/* 2 rows × 3 cols step grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 relative overflow-hidden group"
              style={{
                background: "rgba(12,4,4,0.8)",
                border: "1px solid rgba(192,21,42,0.15)",
                borderTop: "2px solid #c0152a",
              }}
            >
              {/* Faded phase number watermark in top-right */}
              <div
                className="absolute top-3 right-5 text-6xl font-black leading-none select-none pointer-events-none"
                style={{ color: "rgba(192,21,42,0.08)" }}
              >
                {step.phase}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-[#e8394d]"
                  style={{
                    background: "rgba(192,21,42,0.08)",
                    border: "1px solid rgba(192,21,42,0.18)",
                  }}
                >
                  {step.icon}
                </div>

                {/* Sub-label */}
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#e8394d] mb-2 opacity-80">
                  {step.sub}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#f5f0f0] mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-[#8a7070] leading-relaxed mb-4">{step.desc}</p>

                {/* Detail footer */}
                <div
                  className="pt-4 border-t"
                  style={{ borderColor: "rgba(192,21,42,0.1)" }}
                >
                  <p className="text-xs text-[#5a4040] italic">{step.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
