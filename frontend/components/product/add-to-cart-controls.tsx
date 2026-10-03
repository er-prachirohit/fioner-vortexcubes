"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AddToCartControls({ productName }: { productName: string }) {
  const [qty, setQty] = useState(1);
  const router = useRouter();

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center rounded-btn border border-border">
        <button
          aria-label="Decrease quantity"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="flex h-11 w-11 items-center justify-center text-secondary"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center text-sm text-ink">{qty}</span>
        <button
          aria-label="Increase quantity"
          onClick={() => setQty((q) => q + 1)}
          className="flex h-11 w-11 items-center justify-center text-secondary"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <Button variant="secondary" size="md" onClick={() => router.push("/cart")}>
        <ShoppingCart className="h-4 w-4" /> Add to Cart
      </Button>
      <Button size="md" onClick={() => router.push("/checkout")}>
        Buy Now
      </Button>
    </div>
  );
}
