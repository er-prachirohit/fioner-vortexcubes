import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "Checkout" };

export default function CheckoutPage() {
  return (
    <>
      <PageHeader eyebrow="Checkout" title="Delivery & payment" />
      <section className="bg-background pb-28">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            <div className="rounded-card-lg border border-border bg-surface p-6">
              <h2 className="font-display text-ink">Delivery address</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input placeholder="Full name" className="field-input sm:col-span-2" />
                <input placeholder="Phone number" className="field-input sm:col-span-2" />
                <input placeholder="Address line" className="field-input sm:col-span-2" />
                <input placeholder="City" className="field-input" />
                <input placeholder="PIN code" className="field-input" />
              </div>
            </div>

            <div className="rounded-card-lg border border-border bg-surface p-6">
              <h2 className="font-display text-ink">Payment</h2>
              <p className="mt-2 text-[13px] text-tertiary">
                Payment is processed securely and confirmed server-side before your order is placed.
              </p>
              <div className="mt-4 flex items-center gap-2 rounded-btn border border-border bg-surface-2 px-4 py-3 text-sm text-secondary">
                <ShieldCheck className="h-4 w-4 text-success" />
                Secure payment gateway
              </div>
            </div>
          </div>

          <div className="h-fit rounded-card-lg border border-border bg-surface p-6">
            <h2 className="font-display text-lg text-ink">Order total</h2>
            <div className="mt-5 space-y-3 text-[14px]">
              <div className="flex justify-between text-secondary">
                <span>Subtotal</span>
                <span>₹499</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>Shipping</span>
                <span>₹0</span>
              </div>
            </div>
            <div className="mt-5 border-t border-border pt-5 flex justify-between font-display text-kpi text-ink">
              <span>Total</span>
              <span>₹499</span>
            </div>
            <Button href="/order/confirmation" className="mt-6 w-full">
              Place Order
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
