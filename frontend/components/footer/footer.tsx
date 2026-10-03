import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { footerColumns } from "@/lib/data/nav";

export function Footer() {
  return (
    <footer 
      className="relative overflow-hidden border-t border-[rgba(255,85,0,0.14)] bg-white mt-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[rgba(255,85,0,0.04)] blur-[100px]"
      />
      <div className="container-page py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-4 xl:grid-cols-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-[#111113]">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF7F1] border border-[rgba(255,85,0,0.14)]">
                <ShieldCheck className="h-5 w-5 text-[#FF5500]" />
              </span>
              <span className="font-display text-lg font-semibold">Fioner</span>
            </Link>
            <p className="mt-4 text-[15px] text-[#5B5B63] leading-[1.5] max-w-[240px]">
              One connected ecosystem for your vehicle&apos;s safety, tracking and everyday journeys.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title} className="xl:col-span-2">
              <h3 className="text-[14px] font-[600] text-[#111113] tracking-[0.02em]">{col.title}</h3>
              <div className="mt-2 h-[2px] w-[24px] bg-[#FF5500] rounded-full" />
              <ul className="mt-4 flex flex-col gap-[12px]">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block text-[15px] text-[#5B5B63] hover:text-[#FF5500] leading-[1.5] transition-all duration-200 hover:translate-x-[4px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[rgba(255,85,0,0.14)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#5B5B63]">
            © {new Date().getFullYear()} Fioner. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold text-[#5B5B63] hover:text-[#FF5500] cursor-pointer transition-colors">App Store</span>
            <span className="text-sm font-semibold text-[#5B5B63] hover:text-[#FF5500] cursor-pointer transition-colors">Google Play</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
