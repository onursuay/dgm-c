const timeline = [
  { time: "0:00", label: "Ignition", desc: "Fire starts. Invisible in first seconds.", color: "#e85c0d", active: true },
  { time: "0:30", label: "Initial Spread", desc: "Fire finds fuel. Spread accelerates rapidly.", color: "#b04208", active: false },
  { time: "1:30", label: "Alarm Triggered", desc: "Detection systems activate. Emergency call placed.", color: "#f5a020", active: false },
  { time: "3:00", label: "Units Dispatched", desc: "Firefighters mobilize. First vehicles en route.", color: "#e85c0d", active: false },
  { time: "5:00", label: "Critical Zone", desc: "Without intervention, fire reaches critical mass.", color: "#b04208", active: false },
  { time: "+7 min", label: "With DNF", desc: "DNF-treated surfaces hold. Response window extended.", color: "#22c55e", active: false },
];

export default function ResponseTime() {
  return (
    <section className="relative py-10 overflow-hidden" style={{ background: "#060e07" }}>
      {/* Side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-600/40 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#e85c0d] mb-6">
              The Response Time Problem
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#e8f0e0] leading-tight mb-6">
              Every Minute<br />
              <span className="text-fire-gradient">Matters.</span>
            </h2>
            <p className="text-[#6a8060] text-lg leading-relaxed mb-8">
              The average fire department response time is 7–10 minutes. In that window, an untreated fire can consume an entire floor, a hectare of forest, or a warehouse of materials.
            </p>
            <p className="text-[#6a8060] text-base leading-relaxed mb-8">
              DNF technology slows fire propagation at the surface level — buying those critical minutes, enabling structured evacuation, preserving assets, and giving response teams the time they need to operate effectively.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { num: "7–10", unit: "min", label: "Avg. Response Time" },
                { num: "3×", unit: "", label: "Slower Spread with DNF" },
                { num: "+7", unit: "min", label: "Extended Safety Window" },
              ].map((s) => (
                <div key={s.label} className="border border-green-900/20 rounded-xl p-4 bg-green-950/5 text-center">
                  <div className="text-2xl font-black text-fire-gradient">
                    {s.num}<span className="text-lg">{s.unit}</span>
                  </div>
                  <div className="text-xs text-[#3a5040] mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Timeline visualization */}
          <div className="relative">
            {/* Heat spread bar */}
            <div className="mb-8">
              <div className="flex justify-between text-xs text-[#3a5040] mb-2">
                <span>Fire Spread (Untreated)</span>
                <span className="text-red-500">Critical</span>
              </div>
              <div className="relative h-3 rounded-full overflow-hidden bg-[#1a1a1a] border border-green-900/20">
                <div
                  className="absolute left-0 top-0 h-full rounded-full animate-heat-wave"
                  style={{
                    width: "85%",
                    background: "linear-gradient(90deg, #f5a020 0%, #e85c0d 40%, #b04208 70%, #8b0000 100%)",
                    boxShadow: "0 0 20px rgba(232,92,13,0.4)",
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-[#3a5040] mt-2">
                <span>Fire Spread (DNF-Treated)</span>
                <span className="text-green-500">Controlled</span>
              </div>
              <div className="relative h-3 rounded-full overflow-hidden bg-[#1a1a1a] border border-green-900/20">
                <div
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{
                    width: "30%",
                    background: "linear-gradient(90deg, #f5a020 0%, #e85c0d 100%)",
                    boxShadow: "0 0 10px rgba(232,92,13,0.2)",
                  }}
                />
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-orange-700/60 via-blue-600/20 to-green-600/40" />

              <div className="flex flex-col gap-6">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    {/* Dot */}
                    <div className="shrink-0 relative z-10">
                      <div
                        className="w-14 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                        style={{
                          background: `rgba(${item.color === "#22c55e" ? "34,197,94" : "255,107,0"}, 0.15)`,
                          border: `1px solid ${item.color}40`,
                          color: item.color,
                        }}
                      >
                        {item.time}
                      </div>
                    </div>
                    <div className={`flex-1 pb-2 ${i === timeline.length - 1 ? "border border-green-900/30 bg-green-950/10 rounded-xl p-3" : ""}`}>
                      <div className="text-sm font-bold text-[#e8f0e0] mb-0.5">{item.label}</div>
                      <div className="text-xs text-[#6a8060]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
