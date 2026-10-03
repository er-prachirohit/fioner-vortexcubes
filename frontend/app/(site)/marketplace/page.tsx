import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { ProductCard } from "@/components/product/product-card";
import { products, categories } from "@/lib/data/products";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Browse Fioner QR safety tags, GPS trackers and bundles — buy online and activate in the app once delivered.",
};

export default function MarketplacePage() {
  return (
    <>
      <PageHeader
        eyebrow="Marketplace"
        title="Upgrade your vehicle with Fioner."
        description="QR safety tags, GPS trackers and bundles — delivered to you, then activated in the app."
      />

      <section className="bg-background pt-16 pb-28">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/marketplace"
              className="rounded-full border border-[#FF5500]/40 bg-[#FF5500]/10 px-4 py-2 text-[13px] text-[#FF5500] font-medium"
            >
              All products
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/marketplace/${c.slug}`}
                className={cn(
                  "rounded-full border border-[rgba(255,85,0,0.14)] px-4 py-2 text-[13px] text-[#5B5B63] hover:border-[#FF5500]/40 hover:text-[#FF5500]"
                )}
              >
                {c.label}
              </Link>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
