const benefits = [
  {
    metric: "+7 min",
    title: "Critical Time Advantage",
    desc: "DNF extends the window between ignition and critical fire behavior — giving people, systems and responders measurable additional minutes to act effectively.",
  },
  {
    metric: "up to 3×",
    title: "Fire Spread Reduction",
    desc: "On treated surfaces, fire propagation slows up to 3× compared to untreated materials under equivalent conditions — independently verified.",
  },
  {
    metric: "↑80%",
    title: "Safer Evacuation",
    desc: "Evacuation corridors stay open longer. Stairwells and exit pathways remain viable. The human cost of fire events is measurably reduced.",
  },
  {
    metric: "−56%",
    title: "Radiant Heat Reduction",
    desc: "Radiant heat reaching adjacent untreated structures is reduced by up to 56%, limiting secondary ignitions and collateral structural damage.",
  },
  {
    metric: "0",
    title: "Toxic Residue",
    desc: "DNF leaves zero toxic residue. The formula is biodegradable, non-accumulative and certified safe for soil, water and ecological contact zones.",
  },
  {
    metric: "60–80%",
    title: "Asset Exposure Risk",
    desc: "Buildings, critical infrastructure, cultural heritage sites and industrial facilities maintain structural integrity significantly longer under fire threat.",
  },
];

export default function KeyBenefits() {
  return (
    <section
      id="sustainability"
      className="relative py-10 overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Subtle left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: "linear-gradient(180deg, transparent, rgba(192,21,42,0.3) 30%, rgba(192,21,42,0.3) 70%, transparent)" }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#e8394d] mb-4">
            Why DNF
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f0f0] leading-tight mb-4">
            Measurable Impact.<br />
            <span className="text-ice-gradient">No Trade-Offs.</span>
          </h2>
          <p className="text-[#7a6060] text-lg max-w-lg leading-relaxed">
            Every metric is backed by independent laboratory testing and field demonstration data.
          </p>
        </div>

        {/* Text-heavy benefit list — two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y divide-red-900/10 lg:divide-y-0">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="py-8 lg:py-10 flex gap-8 items-start"
              style={{
                borderBottom: i < benefits.length - 2 ? "1px solid rgba(192,21,42,0.08)" : "none",
                paddingLeft: i % 2 === 1 ? "2rem" : "0",
                borderLeft: i % 2 === 1 ? "1px solid rgba(192,21,42,0.08)" : "none",
              }}
            >
              {/* Metric accent */}
              <div className="shrink-0 pt-1">
                <div className="text-3xl font-black leading-none" style={{
                  background: "linear-gradient(135deg, #e8394d, #c0152a)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
                }}>{b.metric}</div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-bold text-[#f5f0f0] mb-2">{b.title}</h3>
                <p className="text-sm text-[#7a6060] leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 py-6 border-t"
          style={{ borderColor: "rgba(192,21,42,0.12)" }}
        >
          <p className="text-sm text-[#7a6060]">
            Independent laboratory data available on request. Field demonstrations scheduled monthly.
          </p>
          <a href="#demonstrations" className="btn-ice px-6 py-3 rounded-full text-sm shrink-0">
            View Test Reports
          </a>
        </div>
      </div>
    </section>
  );
}
