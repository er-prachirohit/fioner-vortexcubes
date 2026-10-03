import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Fioner team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch" />
      <section className="bg-background pb-28">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_400px]">
          <form className="space-y-4 rounded-card-lg border border-border bg-surface p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input placeholder="Full name" className="field-input" />
              <input placeholder="Phone or email" className="field-input" />
            </div>
            <input placeholder="Subject" className="field-input" />
            <textarea
              placeholder="How can we help?"
              rows={5}
              className="field-input"
            />
            <button
              type="submit"
              className="rounded-btn bg-blue px-6 text-btn-text text-white min-h-[48px]"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-4">
            <div className="rounded-card-lg border border-border bg-surface p-6">
              <Mail className="h-4 w-4 text-blue" />
              <p className="mt-3 text-sm text-ink">Email</p>
              <p className="mt-1 text-[13px] text-tertiary">support@fioner.com</p>
            </div>
            <div className="rounded-card-lg border border-border bg-surface p-6">
              <Phone className="h-4 w-4 text-blue" />
              <p className="mt-3 text-sm text-ink">Phone</p>
              <p className="mt-1 text-[13px] text-tertiary">Available via in-app support</p>
            </div>
            <div className="rounded-card-lg border border-border bg-surface p-6">
              <MapPin className="h-4 w-4 text-blue" />
              <p className="mt-3 text-sm text-ink">Office</p>
              <p className="mt-1 text-[13px] text-tertiary">Indore, Madhya Pradesh, India</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
