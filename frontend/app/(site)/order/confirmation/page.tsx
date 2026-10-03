import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Order Confirmed" };

export default function OrderConfirmationPage() {
  return (
    <section className="bg-background pt-44 pb-28 md:pt-52">
      <div className="container-page max-w-lg text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-success" strokeWidth={1.25} />
        <h1 className="mt-6 font-display text-2xl md:text-3xl font-medium text-ink">
          Order confirmed
        </h1>
        <p className="mt-3 text-[14px] text-secondary">
          Your Fioner order has been placed. You&apos;ll get updates as it&apos;s
          packed, shipped and delivered — then you can activate it in the app.
        </p>
        <p className="mt-1 text-[13px] text-disabled">Order #FIO-20482</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/order/FIO-20482">Track Order</Button>
          <Button href="/marketplace" variant="secondary">
            Continue Shopping
          </Button>
        </div>
      </div>
    </section>
  );
}
