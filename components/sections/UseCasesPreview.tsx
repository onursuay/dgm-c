import React from "react";
// UseCasesPreview.tsx — Ice & Steel design — 5×2 grid of 10 application cards
import {
  IconForest,
  IconCity,
  IconBuilding,
  IconFireTruck,
  IconAirplane,
  IconHospital,
  IconSchool,
  IconFactory,
  IconHeritage,
  IconWater,
} from "@/components/Icons";

interface UseCase {
  Icon: (props: { className?: string }) => React.ReactElement;
  title: string;
  desc: string;
  tag: string;
}

const useCases: UseCase[] = [
  {
    Icon: IconForest,
    title: "Forests & Wildlands",
    desc: "Pre-treat firebreaks, perimeter corridors and defensible spaces in high-risk forest zones before fire season.",
    tag: "Wildfire Prevention",
  },
  {
    Icon: IconCity,
    title: "Urban Districts",
    desc: "Protect residential neighborhoods, historic quarters and dense commercial zones from rapid fire spread.",
    tag: "Urban Safety",
  },
  {
    Icon: IconBuilding,
    title: "Municipalities",
    desc: "Equip city administrations with proactive fire protection capability for public buildings and spaces.",
    tag: "Public Sector",
  },
  {
    Icon: IconFireTruck,
    title: "Fire Departments",
    desc: "Supply fire departments with DNF as an operational tool for targeted pre-suppression and perimeter treatment.",
    tag: "First Response",
  },
  {
    Icon: IconAirplane,
    title: "Airports",
    desc: "Protect hangars, terminals, fuel zones and runway-adjacent structures with high-stakes fire containment.",
    tag: "Critical Infrastructure",
  },
  {
    Icon: IconHospital,
    title: "Hospitals",
    desc: "Secure patient areas, medical records, pharmaceutical storage and evacuation routes against fire threat.",
    tag: "Healthcare",
  },
  {
    Icon: IconSchool,
    title: "Schools & Universities",
    desc: "Protect students, staff and irreplaceable educational environments with proven fire spread reduction.",
    tag: "Education",
  },
  {
    Icon: IconFactory,
    title: "Industrial Facilities",
    desc: "Contain fire risk in factories, warehouses, energy plants and chemical processing facilities.",
    tag: "Industry",
  },
  {
    Icon: IconHeritage,
    title: "Cultural Heritage",
    desc: "Preserve museums, archives, historic buildings and UNESCO sites against irreversible fire damage.",
    tag: "Heritage Protection",
  },
  {
    Icon: IconWater,
    title: "Sprinkler Integration",
    desc: "Compatible with existing sprinkler networks — DNF can be delivered through standard water suppression systems.",
    tag: "System Integration",
  },
];

export default function UseCasesPreview() {
  return (
    <section
      id="use-cases"
      className="relative py-10 overflow-hidden"
      style={{ background: "#040a05" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(232,92,13,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Centered header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#f5a020] mb-5">
            Applications
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#e8f0e0] leading-tight mb-6">
            One Technology.
            <br />
            <span className="text-ice-gradient">Infinite Applications.</span>
          </h2>
          <p className="text-[#6a8060] max-w-2xl mx-auto text-lg leading-relaxed">
            DNF was designed for scalability. From a single building to a national forest network — the same
            core technology adapts to every environment and scale.
          </p>
        </div>

        {/* 5×2 symmetric grid of 10 cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {useCases.map((uc, i) => {
            const UCIcon = uc.Icon;
            return (
              <div
                key={i}
                className="rounded-2xl p-5 group cursor-pointer transition-all duration-300"
                style={{
                  background: "rgba(4,12,4,0.8)",
                  border: "1px solid rgba(232,92,13,0.13)",
                  borderTop: "2px solid #e85c0d",
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-[#f5a020]"
                  style={{
                    background: "rgba(232,92,13,0.08)",
                    border: "1px solid rgba(232,92,13,0.15)",
                  }}
                >
                  <UCIcon className="w-5 h-5" />
                </div>

                {/* Tag pill */}
                <div
                  className="inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full mb-2"
                  style={{
                    color: "#f5a020",
                    background: "rgba(232,92,13,0.08)",
                    border: "1px solid rgba(232,92,13,0.18)",
                  }}
                >
                  {uc.tag}
                </div>

                <h3 className="text-sm font-bold text-[#e8f0e0] mb-2 leading-tight">{uc.title}</h3>
                <p className="text-xs text-[#3a5040] leading-relaxed">{uc.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA row */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="btn-ice px-8 py-4 rounded-full text-sm font-semibold">
            Explore Your Use Case
          </a>
          <a href="#demonstrations" className="btn-outline-ice px-8 py-4 rounded-full text-sm">
            View Demonstrations
          </a>
        </div>
      </div>
    </section>
  );
}
