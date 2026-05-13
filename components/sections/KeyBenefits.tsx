import React from "react";
// KeyBenefits.tsx — Ice & Steel design — 2×3 dashboard metrics grid
import { IconClock, IconFlame, IconPeople, IconPaw, IconLeaf, IconShield } from "@/components/Icons";

interface Benefit {
  Icon: (props: { className?: string }) => React.ReactElement;
  title: string;
  desc: string;
  metric: string;
  metricLabel: string;
}

const benefits: Benefit[] = [
  {
    Icon: IconClock,
    title: "Critical Time Advantage",
    desc: "DNF extends the window between ignition and critical fire behavior — giving people, systems and responders measurable additional minutes.",
    metric: "+7 min",
    metricLabel: "average extended response window",
  },
  {
    Icon: IconFlame,
    title: "Fire Spread Reduction",
    desc: "On treated surfaces, fire propagation slows by up to 3× compared to untreated materials under equivalent conditions.",
    metric: "up to 3×",
    metricLabel: "slower spread on treated surfaces",
  },
  {
    Icon: IconPeople,
    title: "Human Safety",
    desc: "Evacuation corridors stay open longer. Stairwells and exit pathways remain more viable. The human cost of fire events is measurably reduced.",
    metric: "↑80%",
    metricLabel: "safer evacuation viability",
  },
  {
    Icon: IconPaw,
    title: "Animal Safety",
    desc: "Slower fire propagation creates escape corridors for wildlife. Livestock, farm animals and wild species gain critical time to flee fire zones.",
    metric: "Preserved",
    metricLabel: "wildlife escape corridors",
  },
  {
    Icon: IconLeaf,
    title: "Environmental Responsibility",
    desc: "DNF leaves no toxic residue. The formula is biodegradable, non-accumulative and certified safe for soil and water contact zones.",
    metric: "0",
    metricLabel: "toxic residue — eco-certified",
  },
  {
    Icon: IconShield,
    title: "Infrastructure Protection",
    desc: "Buildings, critical infrastructure, cultural heritage sites and industrial facilities maintain structural integrity for longer under fire threat.",
    metric: "60–80%",
    metricLabel: "reduction in asset exposure risk",
  },
];

export default function KeyBenefits() {
  return (
    <section
      id="sustainability"
      className="relative py-10 overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Ambient glow right side */}
      <div
        className="absolute right-0 top-0 bottom-0 w-96 pointer-events-none"
        style={{
          background:
            "linear-gradient(270deg, rgba(192,21,42,0.05) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Centered header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#e8394d] mb-5">
            Why DNF
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f0f0] leading-tight mb-6">
            Measurable Benefits.
            <br />
            <span className="text-ice-gradient">Real-World Impact.</span>
          </h2>
          <p className="text-[#8a7070] text-lg max-w-2xl mx-auto leading-relaxed">
            DNF delivers quantifiable advantages across every dimension that matters in fire safety — time,
            safety, environmental impact, and financial protection. No trade-offs.
          </p>
        </div>

        {/* 2×3 equal metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const BIcon = b.Icon;
            return (
              <div
                key={i}
                className="rounded-2xl p-7 flex flex-col group"
                style={{
                  background: "rgba(12,4,4,0.8)",
                  border: "1px solid rgba(192,21,42,0.15)",
                  borderTop: "2px solid #c0152a",
                }}
              >
                {/* Icon row */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-[#e8394d]"
                  style={{
                    background: "rgba(192,21,42,0.08)",
                    border: "1px solid rgba(192,21,42,0.2)",
                  }}
                >
                  <BIcon className="w-6 h-6" />
                </div>

                {/* Big metric */}
                <div className="text-3xl font-black text-ice-gradient mb-1">{b.metric}</div>
                <div className="text-xs text-[#5a4040] mb-5 tracking-wide">{b.metricLabel}</div>

                {/* Divider */}
                <div
                  className="h-px w-full mb-5"
                  style={{ background: "rgba(192,21,42,0.1)" }}
                />

                {/* Title & description */}
                <h3 className="text-base font-bold text-[#f5f0f0] mb-2">{b.title}</h3>
                <p className="text-sm text-[#8a7070] leading-relaxed flex-1">{b.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom summary bar */}
        <div
          className="mt-12 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "rgba(12,4,4,0.6)",
            border: "1px solid rgba(192,21,42,0.12)",
          }}
        >
          <div>
            <p className="text-lg font-bold text-[#f5f0f0]">
              Six dimensions. One technology.{" "}
              <span className="text-ice-gradient">Proven performance.</span>
            </p>
            <p className="text-sm text-[#8a7070] mt-1">
              Every benefit is backed by independent laboratory testing and field demonstration data.
            </p>
          </div>
          <a href="#demonstrations" className="btn-ice px-6 py-3 rounded-full text-sm shrink-0">
            View Test Data
          </a>
        </div>
      </div>
    </section>
  );
}
