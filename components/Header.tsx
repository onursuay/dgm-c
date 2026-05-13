"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Technology", href: "#technology" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Demonstrations", href: "#demonstrations" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

const languages = ["DE", "EN", "TR"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(4,10,4,0.92)"
          : "rgba(4,10,4,0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(232,92,13,0.15)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #e85c0d 0%, #b04208 100%)", boxShadow: "0 0 20px rgba(232,92,13,0.4)" }}>
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <span className="text-xl font-black tracking-widest text-[#e8f0e0]">
            D<span className="text-ice-gradient">N</span>F
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              className="text-sm font-medium text-[#5a7050] hover:text-[#f5a020] transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language selector */}
          <div className="flex items-center gap-0.5 border border-green-900/30 rounded-full px-1 py-1 bg-green-950/20">
            {languages.map((l) => (
              <button key={l} onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                  lang === l
                    ? "bg-gradient-to-r from-orange-700 to-green-900 text-white"
                    : "text-[#3a5040] hover:text-[#6a8060]"
                }`}>
                {l}
              </button>
            ))}
          </div>

          <a href="#contact" className="btn-ice px-5 py-2.5 rounded-full text-sm">
            Request Demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu">
          {[0, 1, 2].map((i) => (
            <span key={i} className="block w-6 h-0.5 bg-[#f5a020] transition-all duration-300" />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[600px]" : "max-h-0"}`}
        style={{ borderTop: menuOpen ? "1px solid rgba(232,92,13,0.1)" : "none" }}>
        <div className="px-6 py-4 space-y-3" style={{ background: "rgba(4,10,4,0.98)" }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
              className="block text-sm text-[#5a7050] hover:text-[#f5a020] py-2 transition-colors">
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex items-center gap-2 flex-wrap">
            {languages.map((l) => (
              <button key={l} onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-semibold rounded-full border transition-all ${
                  lang === l ? "bg-orange-700 text-white border-orange-600" : "border-green-900/30 text-[#3a5040]"
                }`}>
                {l}
              </button>
            ))}
          </div>
          <a href="#contact" className="btn-ice px-5 py-2.5 rounded-full text-sm block text-center mt-2">
            Request Demo
          </a>
        </div>
      </div>
    </header>
  );
}
