export default function FireShieldVisual() {
  return (
    <section
      className="relative py-0 overflow-hidden min-h-[80vh] flex items-center"
      style={{ background: "#0a0808" }}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left: Fire Threat Side */}
        <div
          className="relative flex flex-col justify-center items-center p-16 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0a0010 0%, #12001a 30%, #08000f 100%)",
          }}
        >
          {/* Threat glow background */}
          <div className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 70% at 50% 80%, rgba(180,0,60,0.25) 0%, transparent 65%)",
            }} />

          {/* Abstract flame shapes */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-80 pointer-events-none">
            <svg viewBox="0 0 600 320" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="flame1" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#8a0f20" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#c0152a" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#e8394d" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="flame2" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#c0152a" stopOpacity="0.6" />
                  <stop offset="70%" stopColor="#e8394d" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#c0152a" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,320 C50,280 80,200 120,160 C160,120 140,60 180,20 C220,-20 240,80 280,60 C320,40 300,140 340,100 C380,60 400,160 440,120 C480,80 500,200 550,160 L600,320 Z"
                fill="url(#flame1)" className="animate-fire-pulse" />
              <path d="M0,320 C80,290 100,220 150,180 C200,140 180,80 220,40 C260,0 270,100 310,80 C350,60 340,160 380,130 C420,100 450,200 490,170 L600,320 Z"
                fill="url(#flame2)" className="animate-fire-pulse" style={{ animationDelay: "0.7s" }} />

              {/* Ember dots */}
              {[...Array(12)].map((_, i) => (
                <circle
                  key={i}
                  cx={50 + i * 50}
                  cy={280 - (i % 4) * 60}
                  r={2 + (i % 3)}
                  fill={i % 2 === 0 ? "#e8394d" : "#c0152a"}
                  opacity={0.6 + (i % 3) * 0.1}
                  className="animate-ember-float"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-sm">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(180,0,60,0.12)", border: "1px solid rgba(180,0,60,0.3)" }}>
              <svg className="w-10 h-10" fill="none" stroke="#f87171" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-[#f5f0f0] mb-4 leading-tight">
              Unprotected.<br />
              <span className="text-red-400">Exposed.</span>
            </h3>
            <p className="text-[#8a7070] text-base leading-relaxed">
              Without intervention, fire spreads at its natural rate — consuming surface after surface, building heat, denying escape, and overwhelming response teams.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="border border-red-900/30 rounded-xl p-4 bg-red-950/20">
                <div className="text-2xl font-black text-red-500">~3m²/s</div>
                <div className="text-xs text-[#5a4040] mt-1">Spread speed (untreated)</div>
              </div>
              <div className="border border-red-900/30 rounded-xl p-4 bg-red-950/20">
                <div className="text-2xl font-black text-red-500">72 sec</div>
                <div className="text-xs text-[#5a4040] mt-1">To flashover</div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal divider */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-16 -translate-x-1/2 z-20 pointer-events-none">
          <div className="relative h-full flex items-center justify-center">
            <div className="absolute inset-y-0 w-px left-1/2 bg-gradient-to-b from-transparent via-blue-600/60 to-transparent" />
            <div className="relative z-10 bg-[#0a0808] border border-red-600/40 rounded-full w-14 h-14 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#c0152a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right: Protected Side */}
        <div
          className="relative flex flex-col justify-center items-center p-16 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0a0808 0%, #0f0f0f 50%, #0a0808 100%)",
          }}
        >
          {/* Shield glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(192,21,42,0.06) 0%, transparent 70%)",
            }} />

          {/* Abstract shield visual */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <svg className="w-96 h-96 animate-shield-pulse" viewBox="0 0 200 200" fill="none">
              <path d="M100 10 L170 40 L170 100 Q170 160 100 190 Q30 160 30 100 L30 40 Z"
                stroke="rgba(192,21,42,0.8)" strokeWidth="1.5" fill="none" />
              <path d="M100 30 L155 55 L155 100 Q155 148 100 172 Q45 148 45 100 L45 55 Z"
                stroke="rgba(192,21,42,0.5)" strokeWidth="1" fill="none" />
              <path d="M100 50 L140 68 L140 100 Q140 135 100 155 Q60 135 60 100 L60 68 Z"
                stroke="rgba(192,21,42,0.3)" strokeWidth="0.8" fill="rgba(192,21,42,0.02)" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-sm">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(192,21,42,0.1)", border: "1px solid rgba(192,21,42,0.3)" }}>
              <svg className="w-10 h-10 text-[#e8394d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-[#f5f0f0] mb-4 leading-tight">
              DNF-Protected.<br />
              <span className="text-fire-gradient">Time Gained.</span>
            </h3>
            <p className="text-[#8a7070] text-base leading-relaxed">
              DNF-treated surfaces resist fire propagation. The thermal barrier holds. Response teams arrive with time to act. Lives and assets are preserved.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="border border-red-900/30 rounded-xl p-4 bg-red-950/10">
                <div className="text-2xl font-black text-fire-gradient">3× slower</div>
                <div className="text-xs text-[#5a4040] mt-1">Fire spread on treated surfaces</div>
              </div>
              <div className="border border-red-900/30 rounded-xl p-4 bg-red-950/10">
                <div className="text-2xl font-black text-fire-gradient">+7 min</div>
                <div className="text-xs text-[#5a4040] mt-1">Emergency response window</div>
              </div>
            </div>

            <a href="#demonstrations" className="mt-8 inline-block btn-fire px-6 py-3 rounded-full text-sm">
              See Demonstration Results
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
