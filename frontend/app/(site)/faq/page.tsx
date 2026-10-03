import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { faqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Fioner's QR safety, GPS tracking, SOS, trip intelligence and membership.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Frequently asked questions" />
      <section className="bg-background pb-28">
        <div className="container-page max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
