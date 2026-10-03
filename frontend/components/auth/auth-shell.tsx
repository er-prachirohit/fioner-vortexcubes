import Link from "next/link";
import type { ReactNode } from "react";
import { ShieldCheck, Satellite, Route, CheckCircle2 } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, text: "QR safety identity for every vehicle" },
  { icon: Satellite, text: "Live GPS tracking & geofence alerts" },
  { icon: Route, text: "AI-planned trips with fuel & toll estimates" },
];

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <section className="min-h-screen bg-background pt-[72px]">
      <div className="grid min-h-[calc(100vh-72px)] lg:grid-cols-2">
        {/* Brand panel */}
        <div className="relative hidden overflow-hidden bg-navy lg:flex lg:flex-col lg:justify-between p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-fade opacity-70"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-20 h-[360px] w-[360px] rounded-full bg-blue/20 blur-[120px]"
          />

          <Link href="/" className="relative flex items-center gap-2 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue/15 border border-blue/30">
              <ShieldCheck className="h-5 w-5 text-blue" />
            </span>
            <span className="font-display text-lg font-semibold">Fioner</span>
          </Link>

          <div className="relative">
            <h2 className="font-display text-3xl font-semibold leading-tight text-white text-balance max-w-sm">
              One connected ecosystem for your vehicle&apos;s safety and journeys.
            </h2>
            <ul className="mt-8 space-y-4">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-white/70 text-[14px]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 border border-white/10">
                    <Icon className="h-4 w-4 text-cyan" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex items-center gap-2 text-white/40 text-[13px]">
            <CheckCircle2 className="h-4 w-4 text-success" />
            Trusted by vehicle owners across India
          </div>
        </div>

        {/* Form panel */}
        <div className="flex items-center justify-center px-5 py-14 sm:px-10">
          <div className="w-full max-w-sm">
            <Link href="/" className="mb-8 flex items-center gap-2 text-ink lg:hidden">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-light border border-blue/20">
                <ShieldCheck className="h-5 w-5 text-blue" />
              </span>
              <span className="font-display text-lg font-semibold">Fioner</span>
            </Link>

            <h1 className="font-display text-2xl font-semibold text-ink">{title}</h1>
            <p className="mt-2 text-[14px] text-secondary">{subtitle}</p>

            <div className="mt-8">{children}</div>

            <p className="mt-8 text-center text-[13px] text-secondary">{footer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
