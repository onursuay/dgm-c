import React from "react";
// MunicipalSafety.tsx — Ice & Steel design — SYMMETRIC 2-col layout
import {
  IconSchool,
  IconHospital,
  IconAirplane,
  IconBuilding,
  IconTrain,
  IconStadium,
  IconHeritage,
  IconCity,
} from "@/components/Icons";

interface Target {
  Icon: (props: { className?: string }) => React.ReactElement;
  label: string;
}

const targets: Target[] = [
  { Icon: IconSchool, label: "Schools" },
  { Icon: IconHospital, label: "Hospitals" },
  { Icon: IconAirplane, label: "Airports" },
  { Icon: IconBuilding, label: "Gov. Buildings" },
  { Icon: IconTrain, label: "Transit Hubs" },
  { Icon: IconStadium, label: "Public Arenas" },
  { Icon: IconHeritage, label: "Historic Districts" },
  { Icon: IconCity, label: "City Centers" },
];

interface StatCard {
  value: string;
  label: string;
  desc: string;
}

const statCards: StatCard[] = [
  {
    value: "2,400+",
    label: "Buildings Protected",
    desc: "Public facilities across active deployment cities have received DNF treatment as part of municipal fire safety programs.",
  },
  {
    value: "12 Cities",
    label: "Active Deployments",
    desc: "Municipal governments across Europe have integrated DNF into their annual fire preparedness and building protection mandates.",
  },
  {
    value: "100%",
    label: "Eco-Compliant",
    desc: "Every DNF deployment meets or exceeds environmental safety standards for urban use — no harmful residue, no soil or water contamination.",
  },
];

export default function MunicipalSafety() {
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
            "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(232,92,13,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* ── LEFT COLUMN ── header + target grid + text + CTA */}
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#f5a020] mb-5">
              Municipal Safety
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#e8f0e0] leading-tight mb-5">
              Protecting the
              <br />
              <span className="text-ice-gradient">Heart of Cities.</span>
            </h2>
            <p className="text-[#6a8060] text-base leading-relaxed mb-5">
              City administrations face a unique challenge: dense infrastructure, high-occupancy buildings,
              and irreplaceable public assets — all concentrated in zones where a single fire event can
              cascade into a district-wide catastrophe.
            </p>

            {/* 4×2 target icon grid */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              {targets.map((t) => {
                const TIcon = t.Icon;
                return (
                  <div
                    key={t.label}
                    className="text-center rounded-xl p-3 transition-colors"
                    style={{
                      background: "rgba(4,12,4,0.8)",
                      border: "1px solid rgba(232,92,13,0.13)",
                    }}
                  >
                    <div className="w-8 h-8 mx-auto mb-2 text-[#f5a020]">
                      <TIcon className="w-8 h-8" />
                    </div>
                    <div className="text-[10px] text-[#3a5040] leading-tight font-medium">
                      {t.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-[#6a8060] text-sm leading-relaxed mb-8">
              DNF provides municipalities with a proactive tool to pre-treat public buildings, evacuation
              corridors and high-density zones — significantly improving fire containment capability and
              reducing emergency response pressure on local departments. The Urban Shield program is already
              active in 12 cities across Europe.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a href="#contact" className="btn-ice px-6 py-3 rounded-full text-sm font-semibold">
                Municipal Inquiry
              </a>
              <a href="#demonstrations" className="btn-outline-ice px-6 py-3 rounded-full text-sm">
                View Case Studies
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── 3 stat cards stacked + program description */}
          <div className="flex flex-col gap-4">
            {/* Program header card */}
            <div
              className="rounded-2xl p-6 flex items-center gap-4"
              style={{
                background: "rgba(4,12,4,0.9)",
                border: "1px solid rgba(232,92,13,0.2)",
                borderTop: "2px solid #e85c0d",
              }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[#f5a020] shrink-0"
                style={{ background: "rgba(232,92,13,0.1)", border: "1px solid rgba(232,92,13,0.2)" }}>
                <IconCity className="w-8 h-8" />
              </div>
              <div>
                <div className="text-lg font-black text-[#e8f0e0]">Urban Shield Program</div>
                <div className="text-xs text-[#f5a020] font-medium mt-0.5">
                  DNF Municipal Protection Initiative
                </div>
                <div className="text-xs text-[#6a8060] mt-1 leading-relaxed">
                  A structured deployment framework designed for city-scale fire protection with full
                  technical and regulatory support.
                </div>
              </div>
            </div>

            {/* 3 vertical stat cards */}
            {statCards.map((sc, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(4,12,4,0.8)",
                  border: "1px solid rgba(232,92,13,0.13)",
                  borderTop: "2px solid rgba(232,92,13,0.4)",
                }}
              >
                <div className="text-3xl font-black text-ice-gradient mb-1">{sc.value}</div>
                <div className="text-xs font-bold tracking-widest uppercase text-[#f5a020] mb-3">
                  {sc.label}
                </div>
                <p className="text-xs text-[#6a8060] leading-relaxed">{sc.desc}</p>
              </div>
            ))}

            {/* Bottom note */}
            <div
              className="rounded-xl p-4"
              style={{
                background: "rgba(232,92,13,0.04)",
                border: "1px solid rgba(232,92,13,0.1)",
              }}
            >
              <p className="text-xs text-[#3a5040] leading-relaxed">
                All municipal deployments are supported by full technical documentation, regulatory
                compliance reports, and on-site training for city fire safety officers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
