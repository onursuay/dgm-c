import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import FireProblem from "@/components/sections/FireProblem";
import ResponseTime from "@/components/sections/ResponseTime";
import SolutionOverview from "@/components/sections/SolutionOverview";
import HowItWorks from "@/components/sections/HowItWorks";
import FireShieldVisual from "@/components/sections/FireShieldVisual";
import BeforeAfter from "@/components/sections/BeforeAfter";
import KeyBenefits from "@/components/sections/KeyBenefits";
import UseCasesPreview from "@/components/sections/UseCasesPreview";
import MunicipalSafety from "@/components/sections/MunicipalSafety";
import IndustrialProtection from "@/components/sections/IndustrialProtection";
import ForestProtection from "@/components/sections/ForestProtection";
import DemonstrationPreview from "@/components/sections/DemonstrationPreview";
import PartnershipSection from "@/components/sections/PartnershipSection";
import GlobalMission from "@/components/sections/GlobalMission";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      {/* S01 — Sticky Header */}
      <Header />

      <main>
        {/* S01 — Cinematic Hero */}
        <HeroSection />

        {/* S02 — Trust Bar */}
        <TrustBar />

        {/* S03 — Fire Problem */}
        <FireProblem />

        {/* S04 — Response Time */}
        <ResponseTime />

        {/* S05 — Solution Overview */}
        <SolutionOverview />

        {/* S06 — How It Works */}
        <HowItWorks />

        {/* S07 — Fire Shield Visual */}
        <FireShieldVisual />

        {/* S08 — Before / After */}
        <BeforeAfter />

        {/* S09 — Key Benefits */}
        <KeyBenefits />

        {/* S10 — Use Cases Preview */}
        <UseCasesPreview />

        {/* S11 — Municipal Safety */}
        <MunicipalSafety />

        {/* S12 — Industrial Protection */}
        <IndustrialProtection />

        {/* S13 — Forest & Nature Protection */}
        <ForestProtection />

        {/* S14 — Demonstration Preview */}
        <DemonstrationPreview />

        {/* S15 — Partnership */}
        <PartnershipSection />

        {/* S16 — Global Mission */}
        <GlobalMission />

        {/* S17 — Final CTA */}
        <FinalCTA />
      </main>

      {/* S18 — Detailed Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </>
  );
}
