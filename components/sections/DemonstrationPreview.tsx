import React from "react";
// DemonstrationPreview.tsx — Ice & Steel design — table + 2×2 demo type cards
import { IconMicroscope, IconForest, IconBuilding, IconBarChart } from "@/components/Icons";

interface TestResult {
  label: string;
  before: string;
  after: string;
  improvement: string;
  positive: boolean;
}

const testResults: TestResult[] = [
  { label: "Burn Rate", before: "100%", after: "31%", improvement: "−69%", positive: true },
  { label: "Flashover Time", before: "72 sec", after: "340 sec", improvement: "+4.7×", positive: true },
  { label: "Radiant Heat", before: "100%", after: "44%", improvement: "−56%", positive: true },
  { label: "Structural Damage", before: "Total", after: "Contained", improvement: "Preserved", positive: true },
];

interface DemoType {
  Icon: (props: { className?: string }) => React.ReactElement;
  title: string;
  desc: string;
  tag: string;
}

const demoTypes: DemoType[] = [
  {
    Icon: IconMicroscope,
    title: "Laboratory Tests",
    desc: "Controlled burn tests comparing DNF-treated vs untreated panels under standardized conditions, with independent verification by certified testing institutions.",
    tag: "Lab-Certified",
  },
  {
    Icon: IconForest,
    title: "Field Demonstrations",
    desc: "Live outdoor demonstrations in forest and agricultural settings with official fire authority presence, thermal imaging and real-time data collection.",
    tag: "Live Demo Available",
  },
  {
    Icon: IconBuilding,
    title: "Structural Tests",
    desc: "Full-scale building facade and interior material testing in certified test facilities, evaluating fire containment performance under extreme conditions.",
    tag: "Full-Scale",
  },
  {
    Icon: IconBarChart,
    title: "Data Sessions",
    desc: "Technical briefings with complete test data packages, thermal imaging results and independent verification reports for qualified decision-makers.",
    tag: "Data Package",
  },
];

export default function DemonstrationPreview() {
  return (
    <section
      id="demonstrations"
      className="relative py-10 overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(192,21,42,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Centered header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#e8394d] mb-5">
            Demonstrations
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f0f0] leading-tight mb-6">
            Don&apos;t Trust Claims.
            <br />
            <span className="text-ice-gradient">Witness the Evidence.</span>
          </h2>
          <p className="text-[#8a7070] max-w-xl mx-auto text-lg leading-relaxed">
            DNF performance is verifiable. We provide live demonstrations, laboratory test data and
            independent certification for decision-makers who need proof, not promises.
          </p>
        </div>

        {/* Test results table */}
        <div
          className="rounded-2xl overflow-hidden mb-8"
          style={{
            background: "rgba(12,4,4,0.8)",
            border: "1px solid rgba(192,21,42,0.15)",
            borderTop: "2px solid #c0152a",
          }}
        >
          {/* Table header */}
          <div
            className="grid grid-cols-4 gap-0 px-6 py-3"
            style={{ borderBottom: "1px solid rgba(192,21,42,0.12)" }}
          >
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#e8394d]">
              Metric
            </div>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#e8394d] text-center">
              Before DNF
            </div>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#e8394d] text-center">
              After DNF
            </div>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#e8394d] text-center">
              Improvement
            </div>
          </div>

          {/* Table rows */}
          {testResults.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-4 gap-0 px-6 py-4"
              style={{
                borderBottom:
                  i < testResults.length - 1
                    ? "1px solid rgba(192,21,42,0.07)"
                    : "none",
              }}
            >
              <div className="text-sm font-semibold text-[#f5f0f0]">{r.label}</div>
              <div className="text-sm text-center font-mono" style={{ color: "#ef4444" }}>
                {r.before}
              </div>
              <div className="text-sm text-center font-mono text-[#e8394d]">
                {r.after}
              </div>
              <div className="text-sm font-black text-ice-gradient text-center">
                {r.improvement}
              </div>
            </div>
          ))}
        </div>

        {/* 2×2 demo type cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {demoTypes.map((d, i) => {
            const DIcon = d.Icon;
            return (
              <div
                key={i}
                className="rounded-2xl p-6 flex gap-5"
                style={{
                  background: "rgba(12,4,4,0.8)",
                  border: "1px solid rgba(192,21,42,0.13)",
                  borderTop: "2px solid rgba(192,21,42,0.4)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-[#e8394d]"
                  style={{
                    background: "rgba(192,21,42,0.08)",
                    border: "1px solid rgba(192,21,42,0.18)",
                  }}
                >
                  <DIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h4 className="text-sm font-bold text-[#f5f0f0]">{d.title}</h4>
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                      style={{
                        color: "#e8394d",
                        background: "rgba(192,21,42,0.1)",
                        border: "1px solid rgba(192,21,42,0.2)",
                      }}
                    >
                      {d.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#5a4040] leading-relaxed">{d.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 mb-4">
            <a href="#contact" className="btn-ice px-8 py-4 rounded-full text-sm font-semibold">
              Book a Live Demonstration
            </a>
            <a href="#contact" className="btn-outline-ice px-8 py-4 rounded-full text-sm">
              Request Test Data Package
            </a>
          </div>
          <p className="text-xs text-[#5a4040] mt-3">
            Demonstrations available for qualified municipalities, industrial operators and fire
            authorities.
          </p>
        </div>
      </div>
    </section>
  );
}
