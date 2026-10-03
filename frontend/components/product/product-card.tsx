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
      className="group flex flex-col rounded-[24px] border border-[rgba(255,85,0,0.14)] bg-white p-6 transition-all duration-300 hover:border-[#FF5500] hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(255,85,0,0.20)]"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFF7F1] border border-[rgba(255,85,0,0.14)]">
          <Icon className="h-6 w-6 text-[#FF5500]" strokeWidth={1.5} />
        </span>
        {product.badge && <Badge tone="success">{product.badge}</Badge>}
      </div>

      <h3 className="mt-6 font-display text-lg font-medium text-[#111113]">
        {product.name}
      </h3>
      <p className="mt-1.5 text-[13px] text-[#5B5B63]">{product.tagline}</p>

      <div className="mt-6 flex items-center justify-between">
        <span className="font-display text-lg text-[#111113]">
          {product.price ? `₹${product.price.toLocaleString("en-IN")}` : "Price on request"}
        </span>
        <span className="text-[13px] text-[#FF5500] group-hover:underline">
          View product
        </span>
      </div>
    </Link>
  );
}
