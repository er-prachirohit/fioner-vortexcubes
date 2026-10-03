import { SectionHeading } from "@/components/ui/section-heading";
import { Car, QrCode, Satellite, ShieldCheck, Route, Sparkles, Headphones } from "lucide-react";

const nodes = [
  { icon: Car, label: "Vehicle" },
  { icon: QrCode, label: "QR Identity" },
  { icon: Satellite, label: "GPS" },
  { icon: ShieldCheck, label: "Safety" },
  { icon: Route, label: "Travel" },
  { icon: Sparkles, label: "AI" },
  { icon: Headphones, label: "Support" },
];

export function Ecosystem() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          title="More than a QR. An intelligent vehicle ecosystem."
          description="The QR is the physical-to-digital bridge. From there, Fioner connects your vehicle to location, safety, travel intelligence and support — as one continuous relationship, not separate tools."
        />

        <div className="mt-16 overflow-x-auto scrollbar-none">
          <div className="flex min-w-[760px] items-center justify-between gap-2 lg:min-w-0">
            {nodes.map((node, i) => (
              <div key={node.label} className="flex items-center">
                <div className="group flex flex-col items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface transition-all duration-300 group-hover:border-[#ff4d00]/40 group-hover:shadow-[0_0_0_4px_rgba(255,77,0,0.12)]">
                    <node.icon className="h-6 w-6 text-[#ff4d00]" strokeWidth={1.75} />
                  </div>
                  <span className="text-[13px] text-secondary whitespace-nowrap">
                    {node.label}
                  </span>
                </div>
                {i < nodes.length - 1 && (
                  <div className="mx-2 h-px w-8 bg-gradient-to-r from-[#ff4d00]/40 to-transparent lg:w-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
