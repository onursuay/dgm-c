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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(4,10,4,0.94)" : "rgba(4,10,4,0.65)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(232,92,13,0.15)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
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

          {/* Desktop right controls */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-0.5 border border-green-900/30 rounded-full px-1 py-1 bg-green-950/20">
              {languages.map((l) => (
                <button key={l} onClick={() => setLang(l)}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                    lang === l ? "bg-gradient-to-r from-orange-700 to-green-900 text-white" : "text-[#3a5040] hover:text-[#6a8060]"
                  }`}>
                  {l}
                </button>
              ))}
            </div>
            <a href="#contact" className="btn-ice px-5 py-2.5 rounded-full text-sm">Request Demo</a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu">
            <span className="block w-6 h-0.5 bg-[#f5a020]" />
            <span className="block w-4 h-0.5 bg-[#f5a020]" />
            <span className="block w-6 h-0.5 bg-[#f5a020]" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Side drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full z-[70] w-72 flex flex-col transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ background: "rgba(4,10,4,0.99)", backdropFilter: "blur(24px)", borderRight: "1px solid rgba(232,92,13,0.12)" }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-16 shrink-0" style={{ borderBottom: "1px solid rgba(232,92,13,0.12)" }}>
          <a href="#home" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #e85c0d 0%, #b04208 100%)" }}>
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <span className="text-lg font-black tracking-widest text-[#e8f0e0]">
              D<span className="text-ice-gradient">N</span>F
            </span>
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-green-900/20"
            aria-label="Close menu">
            <svg className="w-5 h-5 text-[#3a5040]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3.5 rounded-xl text-sm font-medium text-[#5a7050] hover:text-[#f5a020] hover:bg-green-900/10 transition-all duration-200"
              style={{ borderBottom: "1px solid rgba(232,92,13,0.06)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="shrink-0 px-4 py-5 space-y-3" style={{ borderTop: "1px solid rgba(232,92,13,0.12)" }}>
          <div className="flex items-center gap-1 p-1 rounded-full" style={{ background: "rgba(232,92,13,0.06)", border: "1px solid rgba(232,92,13,0.12)" }}>
            {languages.map((l) => (
              <button key={l} onClick={() => setLang(l)}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  lang === l ? "bg-gradient-to-r from-orange-700 to-green-900 text-white" : "text-[#3a5040] hover:text-[#6a8060]"
                }`}>
                {l}
              </button>
            ))}
          </div>
          <a href="#contact" onClick={() => setMenuOpen(false)}
            className="btn-ice w-full py-3 rounded-full text-sm text-center block">
            Request Demo
          </a>
        </div>
      </div>
    </>
  );
}
