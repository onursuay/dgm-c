"use client";
import { useState } from "react";
import { IconPin, IconEmail, IconBadge, IconCheck, IconDoc, IconLeaf, IconFireTruck } from "@/components/Icons";

const footerLinks = {
  Company: [
    { label: "About DNF", href: "#" },
    { label: "Global Mission", href: "#" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Certifications", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Technology: [
    { label: "How DNF Works", href: "#technology" },
    { label: "Fire Spread Science", href: "#" },
    { label: "Formula Overview", href: "#" },
    { label: "Application Methods", href: "#" },
    { label: "Integration Guide", href: "#" },
    { label: "Technical Documentation", href: "#" },
  ],
  "Use Cases": [
    { label: "Forest & Wildfire", href: "#use-cases" },
    { label: "Urban Protection", href: "#use-cases" },
    { label: "Municipal Safety", href: "#use-cases" },
    { label: "Industrial Facilities", href: "#use-cases" },
    { label: "Cultural Heritage", href: "#use-cases" },
    { label: "Airports & Transit", href: "#use-cases" },
  ],
  Demonstrations: [
    { label: "Lab Test Results", href: "#demonstrations" },
    { label: "Field Demonstrations", href: "#demonstrations" },
    { label: "Book a Demo", href: "#demonstrations" },
    { label: "Case Studies", href: "#demonstrations" },
    { label: "Video Library", href: "#" },
    { label: "Request Data Package", href: "#demonstrations" },
  ],
  Partners: [
    { label: "Municipality Program", href: "#partners" },
    { label: "Fire Department Program", href: "#partners" },
    { label: "Industrial Partners", href: "#partners" },
    { label: "Distributors", href: "#partners" },
    { label: "Become a Partner", href: "#partners" },
    { label: "Partner Portal", href: "#" },
  ],
  Contact: [
    { label: "General Inquiry", href: "#contact" },
    { label: "Technical Support", href: "#contact" },
    { label: "Sales & Partnerships", href: "#contact" },
    { label: "Press Inquiries", href: "#contact" },
    { label: "Emergency Contacts", href: "#contact" },
    { label: "Offices", href: "#contact" },
  ],
};

const languages = ["DE", "EN", "TR"];

export default function Footer() {
  const [lang, setLang] = useState("EN");

  return (
    <footer className="relative overflow-hidden" style={{ background: "#060606" }}>
      {/* Top divider */}
      <div className="section-divider" />

      {/* Main footer content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-12 pb-8">
        {/* Top row: Brand + newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 pb-10 border-b border-green-900/15">
          {/* Brand */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #e85c0d 0%, #b04208 100%)" }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C12 2 7 7.5 7 12a5 5 0 0010 0c0-4.5-5-10-5-10zm0 4c0 0 3 3.5 3 6a3 3 0 01-6 0c0-2.5 3-6 3-6z" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-widest text-white">
                D<span className="text-fire-gradient">N</span>F
              </span>
            </div>

            <p className="text-sm text-[#3a5040] leading-relaxed mb-4 max-w-xs">
              Germany-based next-generation fire safety technology. Slowing fire spread. Protecting lives, environments and assets. Eco-conscious by design.
            </p>

            <div className="text-xs text-[#3a5040] space-y-1">
              <div className="flex items-center gap-1.5"><IconPin className="w-3 h-3 shrink-0" /> Germany</div>
              <div className="flex items-center gap-1.5"><IconEmail className="w-3 h-3 shrink-0" /> info@dnf-technology.de</div>
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp: +49 123 456 7890
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:flex lg:flex-col lg:justify-center">
            <h4 className="text-base font-bold text-[#e8f0e0] mb-2">Stay Informed</h4>
            <p className="text-xs text-[#3a5040] mb-4">
              Receive DNF updates, demonstration schedules and fire safety insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-[#111] border border-green-900/20 rounded-full px-5 py-3 text-sm text-[#e8f0e0] placeholder-[#3a5040] focus:outline-none focus:border-orange-700/50 transition-colors"
              />
              <button className="btn-fire px-5 py-3 rounded-full text-sm shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#f5a020] mb-4">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-[#3a5040] hover:text-[#6a8060] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications row */}
        <div className="flex flex-wrap gap-4 justify-center mb-12 pb-8 border-b border-green-900/10">
          {[
            { label: "CE Certified", Icon: IconBadge },
            { label: "TÜV Tested", Icon: IconCheck },
            { label: "ISO 9001", Icon: IconDoc },
            { label: "Eco Certified", Icon: IconLeaf },
            { label: "Fire Authority Approved", Icon: IconFireTruck },
          ].map((cert) => (
            <div key={cert.label} className="flex items-center gap-2 border border-green-900/15 rounded-full px-4 py-2 text-xs text-[#3a5040]">
              <cert.Icon className="w-3.5 h-3.5 shrink-0" />
              <span>{cert.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left: Legal */}
          <div className="flex flex-wrap gap-4 text-xs text-[#1e3020]">
            <span>© 2025 DNF Technology. All rights reserved.</span>
            <a href="#" className="hover:text-[#3a5040] transition-colors">Impressum</a>
            <a href="#" className="hover:text-[#3a5040] transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-[#3a5040] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#3a5040] transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-[#3a5040] transition-colors">Cookie Policy</a>
          </div>

          {/* Center: Social */}
          <div className="flex items-center gap-3">
            <a href="#" aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-green-900/20 flex items-center justify-center text-[#3a5040] hover:text-[#f5a020] hover:border-orange-700/40 transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" aria-label="X (Twitter)"
              className="w-8 h-8 rounded-full border border-green-900/20 flex items-center justify-center text-[#3a5040] hover:text-[#f5a020] hover:border-orange-700/40 transition-all">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.26 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube"
              className="w-8 h-8 rounded-full border border-green-900/20 flex items-center justify-center text-[#3a5040] hover:text-[#f5a020] hover:border-orange-700/40 transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2-.9C17 5 12 5 12 5s-5 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.8C6.6 19 12 19 12 19s5 0 7-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 14.5v-5l5.5 2.5-5.5 2.5z"/>
              </svg>
            </a>
          </div>

          {/* Right: Language */}
          <div className="flex items-center gap-1 border border-green-900/15 rounded-full px-1 py-1">
            {languages.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                  lang === l
                    ? "bg-gradient-to-r from-orange-700 to-blue-700 text-white"
                    : "text-[#3a5040] hover:text-[#6a8060]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
