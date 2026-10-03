import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section 
      className="relative overflow-hidden py-24 text-white"
      style={{
        background: "radial-gradient(60% 70% at 50% 0%, rgba(255,85,0,0.28) 0%, transparent 70%), radial-gradient(40% 40% at 50% 100%, rgba(255,122,51,0.10) 0%, transparent 100%), linear-gradient(180deg, #0E0E10 0%, #070708 100%)"
      }}
    >
      {/* Top Border */}
      <div 
        className="absolute top-0 left-0 w-full h-[1px]" 
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,85,0,0.5), transparent)" }} 
      />
      
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,77,0,0.06) 0px, rgba(255,77,0,0.06) 1px, transparent 1px, transparent 56px), repeating-linear-gradient(90deg, rgba(255,77,0,0.06) 0px, rgba(255,77,0,0.06) 1px, transparent 1px, transparent 56px)",
        }}
      />
      <div className="container-page relative text-center">
        <h2 className="mx-auto max-w-2xl font-display text-section-mobile md:text-section-desktop font-bold text-white text-balance tracking-[-0.02em]">
          Make every vehicle smarter. Make every journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A3D] to-[#FF5500]">safer.</span>
        </h2>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4 w-full px-4 sm:px-0">
          <Button 
            href="/qr-safety" 
            className="w-full sm:w-auto min-h-[52px] !bg-gradient-to-br !from-[#FF8A3D] !via-[#FF5500] !to-[#D63F00] !text-white !shadow-[0_10px_30px_rgba(255,85,0,0.45)] hover:!shadow-[0_12px_35px_rgba(255,85,0,0.55)] !rounded-xl !px-[28px] !py-[14px] !border-none !outline-none transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.98] flex items-center justify-center font-semibold"
          >
            Get Fioner
          </Button>
          <Button
            href="/download"
            className="w-full sm:w-auto min-h-[52px] !bg-[rgba(255,255,255,0.06)] !border !border-[rgba(255,255,255,0.25)] !text-white hover:!border-[#FF5500] hover:!bg-[rgba(255,85,0,0.12)] !rounded-xl !px-[28px] !py-[14px] !outline-none transition-all duration-300 active:scale-[0.98] flex items-center justify-center font-semibold"
          >
            Download App
          </Button>
          <Button
            href="/features"
            className="w-full sm:w-auto min-h-[52px] !bg-transparent !border-none !text-white hover:!underline !underline-offset-4 !px-[16px] !py-[14px] !outline-none transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 font-semibold !shadow-none"
          >
            Explore Features <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
