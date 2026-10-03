import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data/products";
import { QrCode } from "lucide-react";

export const metadata: Metadata = { title: "Your Cart" };

const item = products[0];

export default function CartPage() {
  return (
    <>
      <PageHeader eyebrow="Cart" title="Your cart" />
      <section className="bg-background pb-28">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            <div className="flex items-center gap-5 rounded-card-lg border border-border bg-surface p-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-surface-2 border border-border">
                <QrCode className="h-7 w-7 text-blue" />
              </span>
              <div className="flex-1">
                <p className="font-display text-ink">{item.name}</p>
                <p className="text-[13px] text-tertiary">Qty: 1</p>
              </div>
              <p className="font-display text-ink">
                ₹{item.price?.toLocaleString("en-IN")}
              </p>
            </div>
          </div>

          <div className="h-fit rounded-card-lg border border-border bg-surface p-6">
            <h2 className="font-display text-lg text-ink">Order summary</h2>
            <div className="mt-5 space-y-3 text-[14px]">
              <div className="flex justify-between text-secondary">
                <span>Subtotal</span>
                <span>₹{item.price?.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            <div className="mt-5 border-t border-border pt-5 flex justify-between font-display text-kpi text-ink">
              <span>Total</span>
              <span>₹{item.price?.toLocaleString("en-IN")}</span>
            </div>
            <Button href="/checkout" className="mt-6 w-full">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
