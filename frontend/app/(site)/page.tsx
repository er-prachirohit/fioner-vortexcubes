import { Hero } from "@/components/sections/hero";
import { PillarStrip } from "@/components/sections/pillar-strip";
import { QrSafetySection } from "@/components/sections/qr-safety-section";
import { GpsSection } from "@/components/sections/gps-section";
import { SosSection } from "@/components/sections/sos-section";
import { TripIntelligenceSection } from "@/components/sections/trip-intelligence-section";
import { AiSection } from "@/components/sections/ai-section";
import { VoiceSection } from "@/components/sections/voice-section";
import { VehicleUtilitiesSection } from "@/components/sections/vehicle-utilities-section";
import { GarageSection } from "@/components/sections/garage-section";
import { MarketplaceSection } from "@/components/sections/marketplace-section";
import { MembershipSection } from "@/components/sections/membership-section";
import { AppDownloadSection } from "@/components/sections/app-download-section";
import { FaqSection } from "@/components/sections/faq-section";
import { SupportSection } from "@/components/sections/support-section";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PillarStrip />
      <QrSafetySection />
      <GpsSection />
      <SosSection />
      <TripIntelligenceSection />
      <AiSection />
      <VoiceSection />
      <VehicleUtilitiesSection />
      <GarageSection />
      <MarketplaceSection />
      <MembershipSection />
      <AppDownloadSection />
      <FaqSection />
      <SupportSection />
      <FinalCta />
    </>
  );
}
