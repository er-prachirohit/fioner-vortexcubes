import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Package, Truck, Home, QrCode } from "lucide-react";

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  return { title: `Order ${params.id}` };
}

const steps = [
  { icon: Package, label: "Order confirmed", done: true },
  { icon: Truck, label: "Shipped", done: true },
  { icon: Home, label: "Out for delivery", done: false },
  { icon: QrCode, label: "Delivered & ready to activate", done: false },
];

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  return (
    <>
      <PageHeader eyebrow="Order tracking" title={`Order ${params.id}`} />
      <section className="bg-background pb-28">
        <div className="container-page max-w-2xl">
          <div className="rounded-card-lg border border-border bg-surface p-8">
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={step.label} className="flex items-start gap-4">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                      step.done
                        ? "border-success/30 bg-success/10 text-success"
                        : "border-border bg-surface-2 text-tertiary"
                    }`}
                  >
                    <step.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className={step.done ? "text-ink" : "text-tertiary"}>
                      {step.label}
                    </p>
                    {i === 1 && step.done && (
                      <p className="mt-1 text-[12px] text-disabled">
                        Expected delivery in 2–3 days
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
