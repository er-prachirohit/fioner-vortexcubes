import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms & Conditions" updated="September 2026">
      <p>
        These terms govern your use of the Fioner app, website, marketplace
        and public QR portal. Final legal wording is provided by
        Fioner&apos;s legal team.
      </p>
      <h2 className="font-display text-ink text-lg pt-2">Using Fioner</h2>
      <p>
        You agree to provide accurate vehicle and account information and
        to use SOS, QR and GPS features responsibly.
      </p>
      <h2 className="font-display text-ink text-lg pt-2">Hardware & marketplace</h2>
      <p>
        Purchases of QR tags, GPS devices and bundles are subject to
        availability, delivery timelines and the applicable warranty terms
        listed on each product page.
      </p>
      <h2 className="font-display text-ink text-lg pt-2">AI features</h2>
      <p>
        Fioner&apos;s AI assistant operates within approved knowledge and
        permitted tools. It will not claim an action succeeded without a
        confirmed backend result, and will escalate to a human when unable
        to confidently help.
      </p>
      <h2 className="font-display text-ink text-lg pt-2">Limitation of liability</h2>
      <p>
        Fioner provides estimates (fuel, toll, GPS accuracy) based on
        third-party data and cannot guarantee real-time accuracy under all
        conditions.
      </p>
    </LegalPage>
  );
}
