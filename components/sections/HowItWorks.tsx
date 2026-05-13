const steps = [
  {
    phase: "01",
    title: "Apply",
    sub: "Surface Treatment",
    desc: "DNF is applied to vulnerable surfaces — wood, vegetation, fabric, building facades — via spray, brush, or integrated sprinkler systems. Quick, scalable, compatible with standard equipment.",
  },
  {
    phase: "02",
    title: "Activate",
    sub: "Thermal Trigger",
    desc: "When heat or flame contacts DNF-treated surfaces, the formula activates. A thermal barrier layer forms instantly, interrupting the heat transfer process that enables fire to spread.",
  },
  {
    phase: "03",
    title: "Slow Spread",
    sub: "Propagation Reduction",
    desc: "Fire propagation speed is dramatically reduced on treated surfaces. The fire cannot spread at its natural rate — buying measurable minutes of protected time.",
  },
  {
    phase: "04",
    title: "Reduce Heat",
    sub: "Thermal Attenuation",
    desc: "Radiant heat reaching untreated adjacent materials drops by up to 56%, limiting secondary ignitions and structural damage from heat alone.",
  },
  {
    phase: "05",
    title: "Support Response",
    sub: "Emergency Window",
    desc: "Fire departments gain 5–10 extra minutes to arrive, establish perimeters, and begin targeted suppression under more controlled conditions.",
  },
  {
    phase: "06",
    title: "Protect Assets",
    sub: "Structural & Life Safety",
    desc: "People evacuate safely. Buildings hold. Nature survives. Cultural heritage preserved. Industrial continuity maintained. DNF buys time to act effectively.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative py-10 overflow-hidden"
      style={{ background: "#080808" }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#e8394d] mb-4">
            How DNF Works
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f0f0] leading-tight">
            Six Steps.<br />
            <span className="text-ice-gradient">One Mission.</span>
          </h2>
        </div>

        {/* Steps — large number left, text right */}
        <div className="space-y-0 divide-y divide-red-900/10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="grid grid-cols-[80px_1fr] lg:grid-cols-[120px_1fr] gap-6 lg:gap-12 py-8 group"
            >
              {/* Large phase number */}
              <div className="flex items-start pt-1">
                <span
                  className="text-5xl lg:text-7xl font-black leading-none select-none group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "linear-gradient(180deg, rgba(232,57,77,0.5) 0%, rgba(192,21,42,0.15) 100%)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}
                >
                  {step.phase}
                </span>
              </div>

              {/* Content */}
              <div className="py-1">
                <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#e8394d] mb-2 opacity-60">
                  {step.sub}
                </div>
                <h3 className="text-xl lg:text-2xl font-black text-[#f5f0f0] mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm lg:text-base text-[#7a6060] leading-relaxed max-w-2xl">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
