import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How It Works",
  description: "From unboxing your Fioner QR or GPS device to everyday use — see how the Fioner ecosystem fits together.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From box to everyday use, in four steps."
        description="Fioner is designed to get out of your way — a short setup, then daily utility."
      >
        <div className="mt-8">
          <Button href="/qr-safety" size="lg">
            Get Your Fioner QR
          </Button>
        </div>
      </PageHeader>
      <HowItWorks />
      <Ecosystem />
    </>
  );
}
