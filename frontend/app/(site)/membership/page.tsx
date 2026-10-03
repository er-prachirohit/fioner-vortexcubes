import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { MembershipCard } from "@/components/product/membership-card";
import { Button } from "@/components/ui/button";
import { plans } from "@/lib/data/plans";

export const metadata: Metadata = {
  title: "Membership",
  description: "Membership plans unlock deeper entitlements across Fioner's safety, GPS and trip intelligence features.",
};

export default function MembershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Membership"
        title="More protection. More possibilities."
        description="Membership is an ecosystem benefit — entitlements apply across QR safety, GPS, trip intelligence and support."
      />
      <section className="bg-background pb-28">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <MembershipCard key={plan.slug} plan={plan} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/membership/plans" variant="ghost">
              Compare all plans in detail
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
