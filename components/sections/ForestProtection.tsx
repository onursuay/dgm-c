import React from "react";
// ForestProtection.tsx — Ice & Steel design — centered header + 4-col stats + 3-col card grid
import { IconForest, IconPaw, IconSeedling, IconWind, IconLeaf } from "@/components/Icons";

interface ForestFact {
  Icon: (props: { className?: string }) => React.ReactElement;
  value: string;
  label: string;
}

const forestFacts: ForestFact[] = [
  { Icon: IconForest, value: "4.3M", label: "hectares burned globally per year" },
  { Icon: IconPaw, value: "1B+", label: "animals displaced or lost in fire events" },
  { Icon: IconSeedling, value: "40 yrs", label: "average ecosystem recovery time" },
  { Icon: IconWind, value: "15%", label: "of global carbon emissions from wildfires" },
];

const wildlifePoints = [
  "Firebreak pre-treatment",
  "Buffer zone protection",
  "Escape corridor preservation",
  "Livestock shelter protection",
];

const ecosystemPoints = [
  "Protected area pre-treatment",
  "Carbon sink preservation",
  "Soil microbiome protection",
  "Watershed buffer zones",
];

const ecoItems = [
  { label: "Biodegradable formula" },
  { label: "Non-toxic to wildlife" },
  { label: "Safe for soil contact" },
  { label: "Water zone certified" },
];

export default function ForestProtection() {
  return (
    <section
      className="relative py-10 overflow-hidden"
      style={{ background: "#040a05" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(232,92,13,0.04) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 80% 50%, rgba(245,160,32,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Centered header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#f5a020] mb-5">
            Forest & Nature Protection
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#e8f0e0] leading-tight mb-6">
            The Forest Cannot
            <br />
            <span className="text-ice-gradient">Fight Back Alone.</span>
          </h2>
          <p className="text-[#6a8060] max-w-2xl mx-auto text-lg leading-relaxed">
            Wildfires are accelerating in frequency, intensity and scale. The combination of climate
            stress, drought and wind creates conditions where conventional fire response is perpetually
            overwhelmed.
          </p>
        </div>

        {/* 4-col symmetric stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {forestFacts.map((f) => {
            const FIcon = f.Icon;
            return (
              <div
                key={f.label}
                className="text-center rounded-2xl p-6"
                style={{
                  background: "rgba(4,12,4,0.8)",
                  border: "1px solid rgba(232,92,13,0.15)",
                  borderTop: "2px solid #e85c0d",
                }}
              >
                <div className="w-8 h-8 mx-auto mb-3 text-[#f5a020]">
                  <FIcon className="w-8 h-8" />
                </div>
                <div className="text-2xl font-black text-ice-gradient mb-1">{f.value}</div>
                <div className="text-xs text-[#3a5040] leading-tight">{f.label}</div>
              </div>
            );
          })}
        </div>

        {/* 3-col symmetric card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Wildlife Corridors */}
          <div
            className="rounded-2xl p-7 relative overflow-hidden"
            style={{
              background: "rgba(4,12,4,0.8)",
              border: "1px solid rgba(232,92,13,0.15)",
              borderTop: "2px solid #e85c0d",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-[#f5a020]"
              style={{
                background: "rgba(232,92,13,0.08)",
                border: "1px solid rgba(232,92,13,0.15)",
              }}
            >
              <IconPaw className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#e8f0e0] mb-3">Wildlife Corridors</h3>
            <p className="text-sm text-[#6a8060] leading-relaxed mb-5">
              Animals cannot outrun modern wildfires. DNF-treated buffer zones and firebreaks create
              escape corridors, slowing fire propagation and preserving routes for wildlife to reach safety.
            </p>
            <ul className="space-y-2">
              {wildlifePoints.map((p) => (
                <li key={p} className="flex items-center gap-2 text-xs text-[#6a8060]">
                  <span className="text-[#f5a020] text-xs font-bold">▸</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Ecosystem Preservation */}
          <div
            className="rounded-2xl p-7"
            style={{
              background: "rgba(4,12,4,0.8)",
              border: "1px solid rgba(232,92,13,0.15)",
              borderTop: "2px solid #e85c0d",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-[#f5a020]"
              style={{
                background: "rgba(232,92,13,0.08)",
                border: "1px solid rgba(232,92,13,0.15)",
              }}
            >
              <IconLeaf className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#e8f0e0] mb-3">Ecosystem Preservation</h3>
            <p className="text-sm text-[#6a8060] leading-relaxed mb-5">
              Old-growth forests, biodiversity hotspots and protected nature reserves represent centuries
              of ecological development. DNF provides defensible protection for the zones that matter most.
            </p>
            <ul className="space-y-2">
              {ecosystemPoints.map((p) => (
                <li key={p} className="flex items-center gap-2 text-xs text-[#6a8060]">
                  <span className="text-[#f5a020] text-xs font-bold">▸</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Zero Environmental Impact */}
          <div
            className="rounded-2xl p-7"
            style={{
              background: "rgba(4,12,4,0.8)",
              border: "1px solid rgba(245,160,32,0.2)",
              borderTop: "2px solid #f5a020",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-[#f5a020]"
              style={{
                background: "rgba(245,160,32,0.08)",
                border: "1px solid rgba(245,160,32,0.2)",
              }}
            >
              <IconSeedling className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#e8f0e0] mb-3">Zero Environmental Impact</h3>
            <p className="text-sm text-[#6a8060] leading-relaxed mb-5">
              DNF was designed from the beginning for forest and nature deployment. The formula leaves no
              toxic residue, is biodegradable and certified for use in protected natural environments.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {ecoItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-xs">
                  <span className="text-[#f5a020] font-bold">✓</span>
                  <span className="text-[#6a8060]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom callout */}
        <div
          className="mt-10 p-7 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "rgba(4,12,4,0.6)",
            border: "1px solid rgba(232,92,13,0.12)",
          }}
        >
          <div>
            <div className="text-lg font-black text-[#e8f0e0]">
              DNF is the first fire safety technology designed{" "}
              <span className="text-ice-gradient">for both humans and nature.</span>
            </div>
            <p className="text-[#6a8060] text-sm mt-2">
              Protection without environmental compromise — a core principle of DNF engineering.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-ice px-6 py-3 rounded-full text-sm font-semibold shrink-0"
          >
            Forest Authority Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}
