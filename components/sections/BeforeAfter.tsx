"use client";
import { useState } from "react";

const scenarios = [
  {
    label: "Forest Zone",
    before: {
      title: "Without DNF",
      points: ["Fire spreads at natural rate", "100+ hectares affected in hours", "Wildlife evacuation impossible", "Firefighter access blocked by heat", "Ecosystem recovery: 40+ years"],
      stat: "100 ha/hr",
      statLabel: "average burn rate",
    },
    after: {
      title: "With DNF Treatment",
      points: ["Spread reduced by up to 70%", "Containment lines hold longer", "Wildlife escape corridors preserved", "Aerial drop zones remain viable", "Targeted suppression possible"],
      stat: "30 ha/hr",
      statLabel: "reduced burn progression",
    },
  },
  {
    label: "Urban Building",
    before: {
      title: "Without DNF",
      points: ["Floor-to-floor propagation in minutes", "Structural integrity compromised fast", "Evacuation window: <3 minutes", "Adjacent buildings at risk", "Total loss scenario likely"],
      stat: "72 sec",
      statLabel: "to flashover",
    },
    after: {
      title: "With DNF Treatment",
      points: ["Surface propagation dramatically slowed", "Fire confined to origin zone longer", "Evacuation window extended to 10+ min", "Adjacent structures protected", "Structural preservation more likely"],
      stat: "8–12 min",
      statLabel: "extended safe evacuation window",
    },
  },
  {
    label: "Industrial Site",
    before: {
      title: "Without DNF",
      points: ["Chain reaction between storage units", "Chemical exposure risk immediate", "Personnel evacuation chaotic", "Equipment total loss", "Business continuity disrupted months"],
      stat: "$2.1B",
      statLabel: "average major incident loss",
    },
    after: {
      title: "With DNF Treatment",
      points: ["Fire compartmentalized longer", "Buffer zones maintained", "Structured personnel evacuation", "Critical equipment protected", "Operational continuity preserved"],
      stat: "60–80%",
      statLabel: "reduction in asset exposure",
    },
  },
];

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const scenario = scenarios[active];

  return (
    <section className="relative py-10 overflow-hidden" style={{ background: "linear-gradient(180deg, #0a0808 0%, #030a12 50%, #0a0808 100%)" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#c0152a] mb-6">
            Before & After
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f0f0] leading-tight mb-4">
            The DNF Difference<br />
            <span className="text-fire-gradient">in Real Scenarios.</span>
          </h2>
          <p className="text-[#8a7070] max-w-xl mx-auto">
            Explore how DNF changes outcomes across different environments.
          </p>
        </div>

        {/* Scenario selector */}
        <div className="flex gap-3 justify-center mb-6 flex-wrap">
          {scenarios.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === i
                  ? "bg-gradient-to-r from-red-700 to-blue-700 text-white shadow-lg shadow-blue-900/30"
                  : "border border-red-900/20 text-[#8a7070] hover:border-red-700/40 hover:text-[#f5f0f0]"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Before */}
          <div className="rounded-2xl overflow-hidden border border-red-900/30">
            {/* Visual bar */}
            <div className="h-3 bg-gradient-to-r from-red-900 via-red-600 to-blue-600 animate-fire-pulse" />
            <div className="p-8 bg-[#130500]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-900/30 border border-red-700/40 flex items-center justify-center">
                  <span className="text-red-500 text-lg">✕</span>
                </div>
                <h3 className="text-xl font-bold text-red-400">{scenario.before.title}</h3>
              </div>

              <div className="text-center mb-6 p-4 border border-red-900/20 rounded-xl bg-red-950/20">
                <div className="text-3xl font-black text-red-500">{scenario.before.stat}</div>
                <div className="text-xs text-[#5a4040] mt-1">{scenario.before.statLabel}</div>
              </div>

              <ul className="space-y-3">
                {scenario.before.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#8a7070]">
                    <span className="text-red-600 mt-0.5 shrink-0">●</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* After */}
          <div className="rounded-2xl overflow-hidden border border-red-900/30">
            {/* Visual bar */}
            <div className="h-3 bg-gradient-to-r from-red-700 via-red-500 to-red-400 animate-glow-pulse" />
            <div className="p-8 bg-[#0d0800]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-900/30 border border-red-700/40 flex items-center justify-center">
                  <span className="text-[#e8394d] text-lg">✓</span>
                </div>
                <h3 className="text-xl font-bold text-[#e8394d]">{scenario.after.title}</h3>
              </div>

              <div className="text-center mb-6 p-4 border border-red-900/20 rounded-xl bg-red-950/10">
                <div className="text-3xl font-black text-fire-gradient">{scenario.after.stat}</div>
                <div className="text-xs text-[#5a4040] mt-1">{scenario.after.statLabel}</div>
              </div>

              <ul className="space-y-3">
                {scenario.after.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#8a7070]">
                    <span className="text-[#e8394d] mt-0.5 shrink-0">●</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Central note */}
        <div className="mt-8 text-center text-sm text-[#5a4040]">
          Data based on laboratory testing and field trials. Results vary by surface type, application coverage and environmental conditions.
        </div>
      </div>
    </section>
  );
}
