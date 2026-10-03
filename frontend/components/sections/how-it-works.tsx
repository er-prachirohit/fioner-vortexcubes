import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    n: "01",
    title: "Get your Fioner",
    description: "Purchase or receive your Fioner QR tag or GPS device.",
  },
  {
    n: "02",
    title: "Connect your vehicle",
    description: "Add your vehicle in the app and link the QR or GPS device to it.",
  },
  {
    n: "03",
    title: "Stay protected",
    description: "Use QR safety, SOS, GPS tracking and emergency alerts whenever you need them.",
  },
  {
    n: "04",
    title: "Drive smarter",
    description: "Plan trips, calculate fuel and tolls, and use AI and vehicle utilities every day.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-surface-2 py-24 md:py-32 border-y border-border">
      <div className="container-page">
        <SectionHeading
          title="Four steps from box to everyday use"
          description="Getting started with Fioner is a short, guided path — not a setup project."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.n} className="relative">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl font-semibold text-[#ff4d00]/70">
                  {step.n}
                </span>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
                )}
              </div>
              <h3 className="mt-4 font-display text-lg font-medium text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
