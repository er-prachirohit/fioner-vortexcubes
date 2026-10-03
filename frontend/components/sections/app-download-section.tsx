import { Smartphone, Apple, QrCode } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function AppDownloadSection() {
  return (
    <section className="bg-[#f4f4f5] py-24 md:py-32 border-b border-black/10">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            title="Your vehicle's intelligence belongs in your pocket."
            description="The full Fioner experience — safety, GPS, trips, marketplace and AI — lives in the app."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="flex min-h-[44px] items-center gap-2.5 rounded-2xl border border-black/10 bg-white/80 px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition-all hover:border-[#ff4d00]/50 hover:bg-white"
            >
              <Apple className="h-5 w-5 text-[#ff4d00]" /> Download on the App Store
            </a>
            <a
              href="#"
              className="flex min-h-[44px] items-center gap-2.5 rounded-2xl border border-black/10 bg-white/80 px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition-all hover:border-[#ff4d00]/50 hover:bg-white"
            >
              <Smartphone className="h-5 w-5 text-[#ff4d00]" /> Get it on Google Play
            </a>
          </div>
        </div>

        <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-3xl border border-black/10 bg-white/80 backdrop-blur-xl shadow-md">
          <QrCode className="h-24 w-24 text-neutral-800" strokeWidth={1} />
        </div>
      </div>
    </section>
  );
}
