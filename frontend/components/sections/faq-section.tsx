import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/data/faqs";

export function FaqSection() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="container-page max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-black tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-secondary text-sm md:text-base">Find answers to common questions about our platform.</p>
        </div>
        <div>
          <FaqAccordion items={faqs.slice(0, 6)} />
        </div>
        <div className="mt-8 text-center">
          <Button href="/faq" variant="ghost">
            View all FAQs
          </Button>
        </div>
      </div>
    </section>
  );
}
