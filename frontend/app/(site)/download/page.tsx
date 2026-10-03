import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { AppDownloadSection } from "@/components/sections/app-download-section";

export const metadata: Metadata = {
  title: "Download the App",
  description: "Get the Fioner app on iOS or Android for the full vehicle safety, GPS, trip intelligence and AI experience.",
};

export default function DownloadPage() {
  return (
    <>
      <PageHeader
        eyebrow="Download"
        title="Your vehicle's intelligence belongs in your pocket."
        description="QR safety, GPS tracking, trip planning, marketplace and AI — the full Fioner experience lives in the app."
      />
      <AppDownloadSection />
    </>
  );
}
