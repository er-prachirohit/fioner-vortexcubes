import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { AiChatDemo } from "@/components/product/ai-chat-demo";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Bot, Headset, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help from Fioner's AI assistant, with human escalation when you need it.",
};

const options = [
  { icon: Bot, title: "Ask the AI assistant", description: "Fastest for FAQs, order status and basic troubleshooting." },
  { icon: Headset, title: "Talk to a human", description: "Escalate anytime — your context carries over automatically." },
  { icon: BookOpen, title: "Browse help guides", description: "Step-by-step guides for setup, activation and common issues." },
];

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Need help? Fioner is here."
        description="Start with the AI assistant. If it can't resolve things, you're handed to a human without repeating yourself."
      />

      <section className="bg-background pb-28">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading title="How support works" />
            <div className="mt-8 space-y-5">
              {options.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                  <div>
                    <p className="text-sm font-medium text-ink">{title}</p>
                    <p className="mt-1 text-[13px] text-tertiary">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button href="/contact" className="mt-8">
              Contact Us
            </Button>
          </div>
          <AiChatDemo />
        </div>
      </section>
    </>
  );
}
