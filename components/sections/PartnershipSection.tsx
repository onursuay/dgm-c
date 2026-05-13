import React from "react";
// PartnershipSection.tsx — Ice & Steel design — 2×2 equal partner cards + centered CTA
import { IconBuilding, IconFireTruck, IconFactory, IconHandshake } from "@/components/Icons";

interface PartnerType {
  Icon: (props: { className?: string }) => React.ReactElement;
  title: string;
  desc: string;
  benefits: string[];
  cta: string;
}

const partnerTypes: PartnerType[] = [
  {
    Icon: IconBuilding,
    title: "Municipalities & Cities",
    desc: "City administrations integrate DNF into urban fire safety planning, public building protection and emergency preparedness programs.",
    benefits: [
      "Priority access to new deployments",
      "Dedicated technical support",
      "Co-branded safety programs",
      "Response team training",
    ],
    cta: "Municipal Partnership",
  },
  {
    Icon: IconFireTruck,
    title: "Fire Departments",
    desc: "Fire brigades use DNF as an operational tool — integrating it into pre-suppression protocols, rapid response kits and large-scale wildfire operations.",
    benefits: [
      "Operational deployment kits",
      "Tactical integration support",
      "Training & certification",
      "Field performance tracking",
    ],
    cta: "Department Partnership",
  },
  {
    Icon: IconFactory,
    title: "Industrial Operators",
    desc: "Manufacturers, energy companies and logistics operators integrate DNF into their fire safety management systems and compliance programs.",
    benefits: [
      "Site assessment & planning",
      "System integration support",
      "Compliance documentation",
      "Ongoing supply agreement",
    ],
    cta: "Industrial Partnership",
  },
  {
    Icon: IconHandshake,
    title: "Distributors & Resellers",
    desc: "Regional distributors carry DNF for local markets — serving municipalities, industry and fire departments with local expertise and supply chain.",
    benefits: [
      "Exclusive territory agreements",
      "Sales & technical training",
      "Marketing support",
      "Certified reseller status",
    ],
    cta: "Become a Distributor",
  },
];

export default function PartnershipSection() {
  return (
    <section
      id="partners"
      className="relative py-10 overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #c0152a 0, #c0152a 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Centered header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#e8394d] mb-5">
            Partnerships
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f0f0] leading-tight mb-6">
            Build the Future of
            <br />
            <span className="text-ice-gradient">Fire Safety Together.</span>
          </h2>
          <p className="text-[#8a7070] max-w-2xl mx-auto text-lg leading-relaxed">
            DNF grows through strategic partnerships with public authorities, emergency services, industry
            leaders and regional distributors. We are actively building our global network.
          </p>
        </div>

        {/* 2×2 equal partner card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {partnerTypes.map((pt, i) => {
            const PTIcon = pt.Icon;
            return (
              <div
                key={i}
                className="rounded-2xl p-8 group transition-all duration-300"
                style={{
                  background: "rgba(12,4,4,0.8)",
                  border: "1px solid rgba(192,21,42,0.13)",
                  borderTop: "2px solid #c0152a",
                }}
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-[#e8394d]"
                    style={{
                      background: "rgba(192,21,42,0.08)",
                      border: "1px solid rgba(192,21,42,0.18)",
                    }}
                  >
                    <PTIcon className="w-7 h-7" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#f5f0f0] mb-2">{pt.title}</h3>
                    <p className="text-sm text-[#8a7070] leading-relaxed mb-4">{pt.desc}</p>

                    <ul className="space-y-1.5 mb-5">
                      {pt.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs text-[#8a7070]">
                          <span className="text-[#e8394d] shrink-0 font-bold">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="inline-block text-xs font-bold text-[#e8394d] rounded-full px-4 py-1.5 transition-colors"
                      style={{
                        border: "1px solid rgba(232,57,77,0.3)",
                      }}
                    >
                      {pt.cta} →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom centered CTA section */}
        <div
          className="rounded-3xl p-12 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #050f22 0%, #08152e 50%, #050f22 100%)",
            border: "1px solid rgba(192,21,42,0.25)",
            borderTop: "2px solid #c0152a",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(192,21,42,0.12) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-5 text-[#e8394d]">
              <IconHandshake className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-black text-[#f5f0f0] mb-4">Become a DNF Partner</h3>
            <p className="text-[#8a7070] max-w-xl mx-auto mb-8 leading-relaxed">
              We are seeking forward-thinking partners in fire safety, emergency management, municipal
              planning and distribution. If you share our mission — let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-ice px-8 py-4 rounded-full text-sm font-semibold">
                Apply for Partnership
              </a>
              <a href="#contact" className="btn-outline-ice px-8 py-4 rounded-full text-sm">
                Request Partnership Pack
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
