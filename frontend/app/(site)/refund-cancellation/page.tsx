import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";

export const metadata: Metadata = { title: "Refund & Cancellation Policy" };

export default function RefundPage() {
  return (
    <LegalPage eyebrow="Legal" title="Refund & Cancellation Policy" updated="September 2026">
      <p>
        This page describes how order cancellations, returns and refunds
        are handled for Fioner hardware purchases. Final rules are
        confirmed by Fioner&apos;s operations and legal teams.
      </p>
      <h2 className="font-display text-ink text-lg pt-2">Cancellations</h2>
      <p>
        Orders can typically be cancelled before they are dispatched from
        the warehouse. Once shipped, cancellation options may be limited.
      </p>
      <h2 className="font-display text-ink text-lg pt-2">Returns</h2>
      <p>
        Devices found to be defective on arrival are eligible for
        replacement per the warranty terms shown on the product page.
      </p>
      <h2 className="font-display text-ink text-lg pt-2">Refunds</h2>
      <p>
        Approved refunds are issued to the original payment method after
        the returned item is received and inspected.
      </p>
    </LegalPage>
  );
}
