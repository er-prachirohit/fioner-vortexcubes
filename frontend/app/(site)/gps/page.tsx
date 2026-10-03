import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { GpsMapCard } from "@/components/product/gps-map-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Satellite, Clock, MapPinned, BellRing, Activity, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "GPS Tracking",
  description: "Live location, trip history, geofencing and movement alerts for your vehicle, powered by compatible Fioner GPS hardware.",
};

const features = [
  { icon: Satellite, title: "Live location", description: "See where your vehicle is right now, subject to device and network conditions." },
  { icon: Clock, title: "Trip history", description: "Review past trips, routes and distances." },
  { icon: MapPinned, title: "Geofencing", description: "Set safe zones and get notified on entry or exit." },
  { icon: BellRing, title: "Movement alerts", description: "Know if your vehicle moves when it shouldn't." },
  { icon: Activity, title: "Device status", description: "Health, last-seen timestamp and connectivity at a glance." },
  { icon: Share2, title: "Share trip", description: "Share a live location with someone you trust, when you choose to." },
];

export default function GpsPage() {
  return (
    <>
      <PageHeader
        eyebrow="GPS Tracking"
        title="Know where your vehicle is. Wherever it goes."
        description="Connect a Fioner GPS device to your vehicle for live tracking, trip history and geofence alerts."
      >
        <div className="mt-8">
          <Button href="/marketplace/gps" size="lg">
            Get a GPS Device
          </Button>
        </div>
      </PageHeader>

      <section className="bg-background pb-28">
        <div className="container-page">
          <GpsMapCard />
        </div>
      </section>

      <section className="bg-surface-2 py-24 md:py-32 border-y border-border">
        <div className="container-page">
          <SectionHeading title="What GPS tracking gives you" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
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
