// GlobalMission.tsx — Ice & Steel design — centered header + SYMMETRIC 2-col (regions + timeline)
// No spinning globe decoration — both columns have equal meaningful content

interface Region {
  label: string;
  status: string;
  count: string;
  desc: string;
}

const regions: Region[] = [
  {
    label: "Europe",
    status: "Active",
    count: "8 countries",
    desc: "Fully operational across 8 European nations with municipal, industrial and forest deployments.",
  },
  {
    label: "Middle East",
    status: "Expanding",
    count: "3 deployments",
    desc: "Active expansion with three high-priority deployment agreements finalized in the region.",
  },
  {
    label: "Americas",
    status: "Pipeline",
    count: "2026 target",
    desc: "Partnership negotiations underway with North and South American authorities targeting 2026.",
  },
  {
    label: "Asia Pacific",
    status: "Pipeline",
    count: "2026 target",
    desc: "Regulatory groundwork and distributor identification ongoing across APAC markets.",
  },
  {
    label: "Africa",
    status: "Research",
    count: "Pilot phase",
    desc: "Feasibility research and pilot project design underway for Sub-Saharan forest protection.",
  },
];

interface Milestone {
  year: string;
  label: string;
}

const milestones: Milestone[] = [
  { year: "2018", label: "DNF formula development begins in Germany" },
  { year: "2020", label: "First independent laboratory certifications completed" },
  { year: "2021", label: "Pilot deployments with European fire authorities" },
  { year: "2022", label: "First large-scale forest demonstration — 500 hectares" },
  { year: "2023", label: "Municipal deployment programs launched in 3 countries" },
  { year: "2024", label: "Industrial sector expansion and distributor network launch" },
  { year: "2025+", label: "Global scale — Americas, Asia Pacific, Africa" },
];

function statusStyle(status: string): React.CSSProperties {
  if (status === "Active") {
    return {
      color: "#e8394d",
      background: "rgba(192,21,42,0.1)",
      border: "1px solid rgba(232,57,77,0.25)",
    };
  }
  if (status === "Expanding") {
    return {
      color: "#ff6070",
      background: "rgba(96,200,255,0.08)",
      border: "1px solid rgba(96,200,255,0.2)",
    };
  }
  return {
    color: "#8a7070",
    background: "rgba(58,90,122,0.1)",
    border: "1px solid rgba(58,90,122,0.2)",
  };
}

export default function GlobalMission() {
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
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(192,21,42,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Centered header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#e8394d] mb-5">
            Global Mission
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f0f0] leading-tight mb-6">
            A Safer World
            <br />
            <span className="text-ice-gradient">Is a Prepared One.</span>
          </h2>
          <p className="text-[#8a7070] text-lg max-w-2xl mx-auto leading-relaxed">
            DNF was born in Germany with a mission that extends far beyond national borders. Fire does not
            respect boundaries — and neither does our commitment to protecting what matters.
          </p>
        </div>

        {/* SYMMETRIC 2-col content — left: regions, right: timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* LEFT: 5 region status cards */}
          <div>
            <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#e8394d] mb-5">
              Deployment Regions
            </div>
            <div className="space-y-3">
              {regions.map((r) => (
                <div
                  key={r.label}
                  className="rounded-xl p-5 flex items-start gap-4"
                  style={{
                    background: "rgba(12,4,4,0.8)",
                    border: "1px solid rgba(192,21,42,0.13)",
                    borderLeft: "2px solid #c0152a",
                  }}
                >
                  {/* Status badge */}
                  <div className="shrink-0 pt-0.5">
                    <span
                      className="inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                      style={statusStyle(r.status)}
                    >
                      {r.status}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-sm font-bold text-[#f5f0f0]">{r.label}</span>
                      <span className="text-xs text-[#5a4040]">— {r.count}</span>
                    </div>
                    <p className="text-xs text-[#8a7070] leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: 7-item milestone timeline */}
          <div>
            <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#e8394d] mb-5">
              Our Journey
            </div>
            <div className="relative">
              {/* Vertical timeline line */}
              <div
                className="absolute left-[72px] top-2 bottom-2 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(192,21,42,0.6), rgba(192,21,42,0.1))",
                }}
              />
              <div className="space-y-5">
                {milestones.map((m, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    {/* Year */}
                    <div className="w-16 text-right shrink-0 pt-0.5">
                      <span className="text-sm font-black text-ice-gradient">{m.year}</span>
                    </div>
                    {/* Dot */}
                    <div className="relative shrink-0 mt-1.5">
                      <div
                        className="w-3 h-3 rounded-full relative z-10"
                        style={{
                          background: "#c0152a",
                          boxShadow: "0 0 8px rgba(192,21,42,0.6)",
                        }}
                      />
                    </div>
                    {/* Label */}
                    <div className="flex-1">
                      <p className="text-sm text-[#8a7070] leading-relaxed">{m.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Global mission statement paragraph */}
        <div
          className="rounded-2xl p-8 text-center"
          style={{
            background: "rgba(12,4,4,0.6)",
            border: "1px solid rgba(192,21,42,0.12)",
          }}
        >
          <p className="text-lg font-bold text-[#f5f0f0] max-w-3xl mx-auto leading-relaxed">
            We envision a world where cities, forests and industrial zones are systematically prepared —
            where fire response does not start at ignition but{" "}
            <span className="text-ice-gradient">long before it.</span>
          </p>
          <p className="text-[#8a7070] text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
            DNF is the technology that makes that vision operational. Each new partnership, each city
            enrolled, each protected hectare of forest is one step closer to a world that does not lose
            what is irreplaceable.
          </p>
        </div>
      </div>
    </section>
  );
}
