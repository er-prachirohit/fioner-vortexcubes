import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="September 2026">
      <p>
        This page outlines how Fioner collects, uses and protects your
        information. The final policy wording is provided by Fioner&apos;s
        legal team and will be published here.
      </p>
      <h2 className="font-display text-ink text-lg pt-2">Information we collect</h2>
      <p>
        Account details, vehicle information, location data (with your
        consent), and support/communication history are used to provide
        Fioner&apos;s safety, tracking and trip features.
      </p>
      <h2 className="font-display text-ink text-lg pt-2">How your data is used</h2>
      <p>
        Data is used to operate the app&apos;s features — QR safety, SOS,
        GPS, trip planning and support — and is never sold to third parties.
      </p>
      <h2 className="font-display text-ink text-lg pt-2">Public QR interactions</h2>
      <p>
        Anyone scanning your vehicle&apos;s QR only sees the information you
        have explicitly chosen to make public. Your phone number is never
        shown directly; calls are routed through masked calling.
      </p>
      <h2 className="font-display text-ink text-lg pt-2">Your choices</h2>
      <p>
        You control location sharing, emergency contact visibility and
        communication preferences from within the app at any time.
      </p>
    </LegalPage>
  );
}
