import React from "react";
// FireProblem.tsx — Ice & Steel design — symmetric 3×2 threat cards

const ForestIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L7 9H10L5 16H19L14 9H17L12 2Z" />
    <line x1="12" y1="16" x2="12" y2="22" />
    <line x1="9" y1="22" x2="15" y2="22" />
  </svg>
);

const CityIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="10" width="6" height="12" />
    <rect x="7" y="6" width="10" height="16" />
    <rect x="17" y="12" width="6" height="10" />
    <line x1="0" y1="22" x2="24" y2="22" />
    <line x1="9" y1="10" x2="9" y2="10.5" strokeWidth="2" />
    <line x1="13" y1="10" x2="13" y2="10.5" strokeWidth="2" />
    <line x1="9" y1="14" x2="9" y2="14.5" strokeWidth="2" />
    <line x1="13" y1="14" x2="13" y2="14.5" strokeWidth="2" />
  </svg>
);

const IndustrialIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22V10l5-4v4l5-4v4l5-4V22H2Z" />
    <path d="M17 8V2h5v6" />
    <line x1="2" y1="16" x2="22" y2="16" />
    <line x1="6" y1="16" x2="6" y2="22" />
    <line x1="11" y1="16" x2="11" y2="22" />
    <line x1="16" y1="16" x2="16" y2="22" />
  </svg>
);

const WildlifeIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <ellipse cx="8.5" cy="5" rx="2" ry="2.5" />
    <ellipse cx="15.5" cy="5" rx="2" ry="2.5" />
    <ellipse cx="5" cy="9.5" rx="1.5" ry="2" />
    <ellipse cx="19" cy="9.5" rx="1.5" ry="2" />
    <path d="M12 9c-3.5 0-6.5 2.2-6.5 5.5 0 2 1.2 3.8 3 4.5.5.2 1 .5 1.8 1 .7.4 1.1.5 1.7.5s1-.1 1.7-.5c.8-.5 1.3-.8 1.8-1 1.8-.7 3-2.5 3-4.5C18.5 11.2 15.5 9 12 9Z" />
  </svg>
);

const HeritageIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="22" x2="21" y2="22" />
    <line x1="6" y1="18" x2="6" y2="11" />
    <line x1="10" y1="18" x2="10" y2="11" />
    <line x1="14" y1="18" x2="14" y2="11" />
    <line x1="18" y1="18" x2="18" y2="11" />
    <polygon points="12 2 20 7 4 7" />
  </svg>
);

const HumanIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="5" r="2" />
    <circle cx="15" cy="5" r="2" />
    <path d="M6 22v-5l-1-5 4-3 1 4 1-4 4 3-1 5v5" />
    <path d="M9 9l-3 2M15 9l3 2" />
  </svg>
);

interface ThreatCard {
  Icon: () => React.ReactElement;
  title: string;
  stat: string;
  statLabel: string;
  desc: string;
}

const threats: ThreatCard[] = [
  {
    Icon: ForestIcon,
    title: "Forest Ecosystems",
    stat: "4.3M ha",
    statLabel: "burned globally per year",
    desc: "Forest fires obliterate ecosystems, habitats, and biodiversity in hours. Wildlife perishes, carbon sinks collapse, and recovery takes decades.",
  },
  {
    Icon: CityIcon,
    title: "Urban Areas",
    stat: "72 sec",
    statLabel: "to flashover in a room",
    desc: "Once fire reaches flashover, escape becomes nearly impossible. Urban density turns local fires into neighborhood-scale catastrophes.",
  },
  {
    Icon: IndustrialIcon,
    title: "Industrial Facilities",
    stat: "$2.1B",
    statLabel: "in losses per major incident",
    desc: "Chemical plants, energy facilities and warehouses face catastrophic chain reactions when fire spreads unchecked through critical zones.",
  },
  {
    Icon: WildlifeIcon,
    title: "Wildlife & Animals",
    stat: "1B+",
    statLabel: "animals lost in single events",
    desc: "Animals cannot outrun modern wildfires. Entire species face regional extinction when fire corridors outpace natural escape routes.",
  },
  {
    Icon: HeritageIcon,
    title: "Cultural Heritage",
    stat: "Irreplaceable",
    statLabel: "loss is permanent",
    desc: "Historic buildings, archives, art collections, and cultural landmarks — once gone, they are gone forever. Fire does not discriminate.",
  },
  {
    Icon: HumanIcon,
    title: "Human Lives",
    stat: "350K",
    statLabel: "deaths from fire annually",
    desc: "Fire kills faster than most emergencies. Insufficient response time is the primary cause. Every second of delay is a second that can cost lives.",
  },
];

export default function FireProblem() {
  return (
    <section
      id="technology"
      className="relative py-10 overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(192,21,42,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Centered header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#e8394d] mb-5">
            The Scale of the Problem
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f0f0] leading-tight mb-6">
            Fire Does Not Wait.
            <br />
            <span className="text-ice-gradient">Neither Should We.</span>
          </h2>
          <p className="text-[#8a7070] text-lg max-w-2xl mx-auto leading-relaxed">
            Every year, fire consumes lives, environments, economies, and heritage. The challenge is not just
            extinguishing fire — it is slowing its advance long enough for humans to respond.
          </p>
        </div>

        {/* 3×2 symmetric threat grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {threats.map((threat, i) => {
            const ThreatIcon = threat.Icon;
            return (
              <div
                key={i}
                className="rounded-2xl p-7 relative overflow-hidden group"
                style={{
                  background: "rgba(12,4,4,0.8)",
                  border: "1px solid rgba(192,21,42,0.15)",
                  borderTop: "2px solid #c0152a",
                }}
              >
                {/* Corner glow on hover */}
                <div
                  className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(232,57,77,0.12) 0%, transparent 70%)",
                    transform: "translate(30%, -30%)",
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-[#e8394d]"
                    style={{
                      background: "rgba(192,21,42,0.1)",
                      border: "1px solid rgba(192,21,42,0.2)",
                    }}
                  >
                    <ThreatIcon />
                  </div>

                  {/* Stat */}
                  <div className="text-3xl font-black text-ice-gradient mb-1">{threat.stat}</div>
                  <div className="text-xs text-[#8a7070] mb-4 tracking-wide uppercase font-medium">
                    {threat.statLabel}
                  </div>

                  {/* Title & description */}
                  <h3 className="text-base font-bold text-[#f5f0f0] mb-3">{threat.title}</h3>
                  <p className="text-sm text-[#8a7070] leading-relaxed">{threat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom callout bar */}
        <div
          className="mt-12 p-8 rounded-2xl text-center"
          style={{
            background: "rgba(12,4,4,0.6)",
            border: "1px solid rgba(192,21,42,0.12)",
          }}
        >
          <p className="text-xl md:text-2xl font-bold text-[#f5f0f0]">
            The window between ignition and catastrophe is{" "}
            <span className="text-ice-gradient">measured in minutes.</span>
          </p>
          <p className="text-[#8a7070] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            DNF was engineered to widen that window. Not to replace firefighters, but to give them the time
            they need to save what matters.
          </p>
        </div>
      </div>
    </section>
  );
}
