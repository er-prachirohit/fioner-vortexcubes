"use client";

import { useState } from "react";
import { QrCode, Phone, MessageSquare, Flag, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

const actions = [
  { icon: Phone, label: "Call Owner" },
  { icon: MessageSquare, label: "Send Message" },
  { icon: Flag, label: "Report Issue" },
  { icon: ShieldAlert, label: "Emergency" },
];

export function QrScannerDemo() {
  const [scanned, setScanned] = useState(false);

  return (
    <div className="grid gap-6 sm:grid-cols-2 items-center">
      {/* Vehicle with QR — light card */}
      <div className="relative rounded-3xl border border-black/10 bg-white/80 p-8 shadow-sm backdrop-blur-xl">
        <div className="flex h-40 items-center justify-center">
          <div
            className={cn(
              "relative flex h-24 w-24 items-center justify-center rounded-2xl border-2 transition-colors",
              scanned ? "border-[#ff4d00]" : "border-black/15"
            )}
          >
            <QrCode className="h-14 w-14 text-neutral-700" strokeWidth={1.25} />
            {scanned && (
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-0.5 bg-[#ff4d00]"
                style={{ animation: "scan 1.8s ease-in-out infinite" }}
              />
            )}
          </div>
        </div>
        <p className="mt-4 text-center text-sm font-medium text-neutral-600">
          Fioner QR tag on a vehicle
        </p>
        <button
          onClick={() => setScanned((v) => !v)}
          className="mx-auto mt-4 flex min-h-[44px] items-center justify-center rounded-xl border border-[#ff4d00]/30 bg-[#ff4d00]/10 px-5 text-sm font-semibold text-[#ff4d00] transition-colors hover:bg-[#ff4d00]/20"
        >
          {scanned ? "Reset" : "Simulate scan"}
        </button>
        <style>{`
          @keyframes scan {
            0% { top: 0%; opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}</style>
      </div>

      {/* Public browser card — dark gray */}
      <div
        className={cn(
          "rounded-3xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl transition-all duration-500",
          scanned ? "opacity-100 translate-y-0" : "opacity-75 translate-y-1"
        )}
      >
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-2 truncate text-xs text-white/50 font-mono">
            fioner.com/qr/8F2K91
          </span>
        </div>

        <div className="mt-5 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ff4d00]/30 bg-[#ff4d00]/10 px-3 py-1 text-xs font-semibold text-[#ff4d00]">
            Vehicle Protected
          </span>
          <p className="mt-3 font-display text-lg font-bold text-white tracking-tight">MP09 XX 1234</p>
          <p className="text-xs text-white/50">Safety status: Active</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {actions.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-4 text-white/90 hover:border-[#ff4d00]/40 transition-colors"
            >
              <Icon className="h-4 w-4 text-[#ff4d00]" />
              <span className="text-[12px] font-medium">{label}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-[11px] text-white/40">
          Your privacy matters. Owner contact information is protected.
        </p>
      </div>
    </div>
  );
}
