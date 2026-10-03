import Link from "next/link";
import { QrCode, Satellite, Package } from "lucide-react";
import type { Product } from "@/lib/data/products";
import { Badge } from "@/components/ui/badge";

const icons = { qr: QrCode, gps: Satellite, accessories: Package };

export function ProductCard({ product }: { product: Product }) {
  const Icon = icons[product.category];
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col rounded-card-lg border border-border bg-surface p-6 transition-all duration-300 hover:border-blue/40 hover:shadow-glow"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-surface-2 border border-border">
          <Icon className="h-6 w-6 text-blue" strokeWidth={1.5} />
        </span>
        {product.badge && <Badge tone="success">{product.badge}</Badge>}
      </div>

      <h3 className="mt-6 font-display text-lg font-medium text-ink">
        {product.name}
      </h3>
      <p className="mt-1.5 text-[13px] text-tertiary">{product.tagline}</p>

      <div className="mt-6 flex items-center justify-between">
        <span className="font-display text-lg text-ink">
          {product.price ? `₹${product.price.toLocaleString("en-IN")}` : "Price on request"}
        </span>
        <span className="text-[13px] text-blue group-hover:underline">
          View product
        </span>
      </div>
    </Link>
  );
}
