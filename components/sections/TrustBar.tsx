const trustItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21l1.9-5.7A8.5 8.5 0 1 1 16 16.1L21 18M12 11v.01M12 7v4" />
      </svg>
    ),
    label: "Germany-Based Innovation",
    sub: "Engineered to European standards",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m8.66-13l-.87.5M4.21 17.5l-.87.5M20.66 17.5l-.87-.5M4.21 6.5l-.87-.5M21 12h-1M4 12H3" />
        <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
      </svg>
    ),
    label: "Eco-Conscious Formula",
    sub: "Zero toxic residue, biodegradable",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Public Safety Focused",
    sub: "Protecting lives and communities",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: "Industrial & Municipal",
    sub: "Scalable for any environment",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "Emergency Response Support",
    sub: "Works with fire departments",
  },
];

export default function TrustBar() {
  return (
    <section className="relative py-6 overflow-hidden" style={{ background: "#050c18", borderTop: "1px solid rgba(192,21,42,0.1)", borderBottom: "1px solid rgba(192,21,42,0.1)" }}>
      {/* Ticker */}
      <div className="flex overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap" style={{ gap: 0 }}>
          {[...trustItems, ...trustItems].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-12 py-4 shrink-0"
            >
              <div className="text-[#c0152a] opacity-70">{item.icon}</div>
              <div>
                <div className="text-sm font-bold text-[#f5f0f0] tracking-wide">{item.label}</div>
                <div className="text-xs text-[#5a4040]">{item.sub}</div>
              </div>
              <div className="ml-12 w-px h-8 bg-red-900/40 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
