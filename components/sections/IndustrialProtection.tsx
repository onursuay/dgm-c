import React from "react";
// IndustrialProtection.tsx — Ice & Steel design — SYMMETRIC 2-col, NO decorative SVGs
import {
  IconGear,
  IconOilDrum,
  IconLightning,
  IconConstruction,
  IconBox,
  IconMicroscope,
  IconFactory,
} from "@/components/Icons";

interface Sector {
  Icon: (props: { className?: string }) => React.ReactElement;
  label: string;
}

const sectors: Sector[] = [
  { Icon: IconGear, label: "Manufacturing Plants" },
  { Icon: IconOilDrum, label: "Oil & Gas Facilities" },
  { Icon: IconLightning, label: "Energy Infrastructure" },
  { Icon: IconConstruction, label: "Construction Sites" },
  { Icon: IconBox, label: "Logistics & Warehouses" },
  { Icon: IconMicroscope, label: "Chemical Processing" },
];

interface RiskBar {
  label: string;
  status: string;
  statusColor: string;
  width: string;
  barColor: string;
}

const riskBars: RiskBar[] = [
  {
    label: "Fire Spread Risk (Untreated)",
    status: "Critical",
    statusColor: "#ef4444",
    width: "82%",
    barColor: "from-[#7f1d1d] to-[#b91c1c]",
  },
  {
    label: "Fire Spread Risk (DNF-Protected)",
    status: "Managed",
    statusColor: "#e8394d",
    width: "24%",
    barColor: "from-[#c0152a] to-[#e8394d]",
  },
  {
    label: "Business Continuity Score",
    status: "Preserved",
    statusColor: "#4ade80",
    width: "78%",
    barColor: "from-[#166534] to-[#16a34a]",
  },
];

interface RiskCard {
  title: string;
  desc: string;
}

const riskCards: RiskCard[] = [
  {
    title: "Chain Reaction Events",
    desc: "Industrial fires spread between storage units, production zones and loading docks with catastrophic acceleration. DNF interrupts propagation before chain reactions develop.",
  },
  {
    title: "Chemical Exposure Zones",
    desc: "Hazardous material areas require instant containment — DNF limits propagation to give evacuation and containment protocols time to activate without triggering secondary explosions.",
  },
  {
    title: "Business Continuity",
    desc: "A single fire event can halt operations for months. DNF-protected assets sustain less damage, enabling faster recovery and reducing insurance liability exposure.",
  },
];

export default function IndustrialProtection() {
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
            "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(192,21,42,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* ── LEFT COLUMN ── eyebrow + heading + description + sectors + CTA */}
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#e8394d] mb-5">
              Industrial Protection
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#f5f0f0] leading-tight mb-5">
              When the Stakes
              <br />
              <span className="text-ice-gradient">Are Measured in Millions.</span>
            </h2>
            <p className="text-[#8a7070] text-base leading-relaxed mb-5">
              Industrial fires are not just asset events — they are operational catastrophes. DNF provides
              manufacturers, energy companies and logistics operators with a measurable first line of
              defense against fire propagation, protecting production continuity and worker safety.
            </p>
            <p className="text-[#8a7070] text-sm leading-relaxed mb-7">
              Deployed across six key industrial sectors, DNF integrates into existing safety infrastructure
              — no complete overhaul required. Compliance documentation and site assessment included.
            </p>

            {/* 3×2 sector chip grid */}
            <div className="grid grid-cols-3 gap-3 mb-7">
              {sectors.map((s) => {
                const SIcon = s.Icon;
                return (
                  <div
                    key={s.label}
                    className="flex flex-col items-center text-center rounded-xl p-3 transition-colors"
                    style={{
                      background: "rgba(12,4,4,0.8)",
                      border: "1px solid rgba(192,21,42,0.13)",
                    }}
                  >
                    <div className="w-8 h-8 mb-2 text-[#e8394d]">
                      <SIcon className="w-8 h-8" />
                    </div>
                    <div className="text-[10px] text-[#5a4040] leading-tight font-medium">
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <a href="#contact" className="btn-ice px-6 py-3 rounded-full text-sm font-semibold">
              Industrial Partnership Inquiry
            </a>
          </div>

          {/* ── RIGHT COLUMN ── header card + risk bars + 3 risk detail cards */}
          <div className="flex flex-col gap-4">
            {/* Program header card */}
            <div
              className="rounded-2xl p-6 flex items-center gap-4"
              style={{
                background: "rgba(12,4,4,0.9)",
                border: "1px solid rgba(192,21,42,0.2)",
                borderTop: "2px solid #c0152a",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-[#e8394d] shrink-0"
                style={{
                  background: "rgba(192,21,42,0.1)",
                  border: "1px solid rgba(192,21,42,0.2)",
                }}
              >
                <IconFactory className="w-8 h-8" />
              </div>
              <div>
                <div className="text-lg font-black text-[#f5f0f0]">Industrial Shield</div>
                <div className="text-xs text-[#e8394d] font-medium mt-0.5">
                  DNF Industrial Fire Containment Protocol
                </div>
                <div className="text-xs text-[#8a7070] mt-1">
                  Designed for high-value, high-risk operational environments.
                </div>
              </div>
            </div>

            {/* Risk bar card */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(12,4,4,0.8)",
                border: "1px solid rgba(192,21,42,0.13)",
                borderTop: "2px solid rgba(192,21,42,0.4)",
              }}
            >
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#e8394d] mb-5">
                Fire Risk Comparison
              </div>
              <div className="space-y-4">
                {riskBars.map((rb, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-[#8a7070]">{rb.label}</span>
                      <span style={{ color: rb.statusColor }} className="font-semibold">
                        {rb.status}
                      </span>
                    </div>
                    <div
                      className="h-2 rounded-full overflow-hidden"
                      style={{ background: "rgba(192,21,42,0.08)" }}
                    >
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${rb.barColor}`}
                        style={{ width: rb.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 risk cards */}
            {riskCards.map((rc, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 flex gap-4"
                style={{
                  background: "rgba(12,4,4,0.8)",
                  border: "1px solid rgba(192,21,42,0.1)",
                }}
              >
                <div
                  className="shrink-0 w-1.5 rounded-full self-stretch"
                  style={{
                    background: "linear-gradient(to bottom, #c0152a, #e8394d)",
                  }}
                />
                <div>
                  <div className="text-sm font-bold text-[#f5f0f0] mb-1">{rc.title}</div>
                  <div className="text-xs text-[#8a7070] leading-relaxed">{rc.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
