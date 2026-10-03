import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import {
  QrCode,
  Satellite,
  ShieldAlert,
  Route,
  Sparkles,
  Wrench,
  ShoppingBag,
  Crown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore every part of the Fioner ecosystem — QR safety, GPS tracking, SOS, trip intelligence, AI assistance, vehicle utilities, marketplace and membership.",
};

const features = [
  { icon: QrCode, title: "QR Safety", description: "A physical-to-digital safety identity for your vehicle, with masked public contact.", href: "/qr-safety" },
  { icon: Satellite, title: "GPS Tracking", description: "Live location, trip history, geofencing and movement alerts.", href: "/gps" },
  { icon: ShieldAlert, title: "SOS & Emergency Safety", description: "Press-and-hold SOS with family notification and emergency support.", href: "/safety" },
  { icon: Route, title: "Trip Intelligence", description: "Route, fuel and toll estimation with stop recommendations.", href: "/trip-intelligence" },
  { icon: Sparkles, title: "AI Assistant", description: "A conversational layer over trips, tracking, orders and support.", href: "/trip-intelligence" },
  { icon: Wrench, title: "Vehicle Utilities", description: "FASTag, RTO info, documents and service reminders.", href: "/vehicle-utilities" },
  { icon: ShoppingBag, title: "Hardware Marketplace", description: "QR tags, GPS devices and bundles, delivered and activated.", href: "/marketplace" },
  { icon: Crown, title: "Membership", description: "Entitlement-based plans that unlock deeper ecosystem benefits.", href: "/membership" },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Product"
        title="Everything Fioner brings to your vehicle."
        description="One connected ecosystem — not eight separate apps. Explore each part below."
      />
      <section className="bg-background pt-16 pb-28">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-[24px] border border-[rgba(255,85,0,0.14)] border-t-[3px] border-t-[#FF5500] bg-white p-6 transition-all duration-300 hover:border-[#FF5500] hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(255,85,0,0.20)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF7F1] border border-[rgba(255,85,0,0.14)]">
                <Icon className="h-5 w-5 text-[#FF5500]" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-[16px] font-medium text-[#111113]">
                {title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#5B5B63]">
                {description}
              </p>
              <span className="mt-4 inline-block text-[13px] text-[#FF5500] group-hover:underline">
                Learn more
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
