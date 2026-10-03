import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { QrScannerDemo } from "@/components/qr/qr-scanner-demo";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Lock, ShieldOff, Heart, Ban } from "lucide-react";

export const metadata: Metadata = {
  title: "QR Safety",
  description: "How the Fioner QR works — activation, the public scan experience, masked calling and privacy controls.",
};

const rules = [
  { icon: Lock, title: "Masked calling", description: "Callers reach you without ever seeing your real number." },
  { icon: ShieldOff, title: "Privacy by default", description: "Public scans show only what you've chosen to make visible." },
  { icon: Heart, title: "Optional medical info", description: "Blood group or allergies can be shown to first responders — only if you opt in." },
  { icon: Ban, title: "Abuse protection", description: "Rate limiting and anti-abuse checks protect the public QR page." },
];

export default function QrSafetyPage() {
  return (
    <>
      <PageHeader
        eyebrow="QR Safety"
        title="A smarter, safer identity for your vehicle."
        description="The QR is the physical-to-digital bridge at the core of Fioner — activate it once, and it works for anyone who ever needs to reach you about your vehicle."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/marketplace/qr" size="lg">
            Get Your Fioner QR
          </Button>
          <Button href="/how-it-works" variant="outline" size="lg">
            See How It Works
          </Button>
        </div>
      </PageHeader>

      <section className="bg-background pb-28">
        <div className="container-page">
          <QrScannerDemo />
        </div>
      </section>

      <section className="bg-surface-2 py-24 md:py-32 border-y border-border">
        <div className="container-page">
          <SectionHeading
            title="Built around your privacy"
            description="Public users never receive private data unless you've explicitly configured it for emergency or public visibility."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {rules.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-card-lg border border-border bg-surface p-6">
                <Icon className="h-5 w-5 text-blue" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-[15px] font-medium text-ink">{title}</h3>
                <p className="mt-1.5 text-[13px] text-tertiary">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
