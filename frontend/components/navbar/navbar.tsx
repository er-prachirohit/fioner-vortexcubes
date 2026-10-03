"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FionerMark from "./FionerMark";

const links = [
  { label: "HOME", href: "/" },
  { label: "FEATURES", href: "/features" },
  { label: "QR SAFETY", href: "/qr-safety" },
  { label: "STORE", href: "/marketplace" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 border-b border-[rgba(255,85,0,0.14)]" style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(14px)" }}>
      <div className="flex items-center gap-6">
        <button 
          className="lg:hidden flex flex-col gap-[5px] z-50 relative w-6 h-[18px] items-center justify-center" 
          type="button" 
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 absolute ${isMenuOpen ? "rotate-45" : "-translate-y-[6px]"}`} />
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 absolute ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 absolute ${isMenuOpen ? "-rotate-45" : "translate-y-[6px]"}`} />
        </button>

        <nav className={`absolute top-full left-0 w-full bg-white z-40 p-6 flex-col gap-4 border-b border-[rgba(255,85,0,0.14)] lg:border-none lg:static lg:bg-transparent lg:p-0 lg:flex-row lg:gap-2 ${isMenuOpen ? "flex" : "hidden lg:flex"}`} aria-label="Main">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.label} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)} 
                aria-current={isActive ? "page" : undefined}
                className={`relative px-2 py-2 text-[13px] uppercase tracking-wider ${isActive ? "text-[#FF5500] font-[600]" : "text-[#111113] font-medium"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <Link className="flex items-center gap-2 font-bold text-xl uppercase tracking-widest absolute left-1/2 -translate-x-1/2" href="/">
        <FionerMark />
        <span className="text-[#111113]">fioner</span>
      </Link>

      <div className="flex items-center gap-2 sm:gap-4 text-[12px] sm:text-[13px] font-medium uppercase">
        <Link className="hidden sm:block text-[#111113] hover:text-[#FF5500] transition-colors" href="/login">
          LOG IN
        </Link>
        <Link 
          className="px-3 py-2 sm:px-[20px] sm:py-[10px] text-white rounded-xl bg-[#FF5500] hover:bg-[#E64A00] transition-colors duration-200 whitespace-nowrap text-[11px] sm:text-[13px]" 
          href="/signup"
        >
          SIGN UP
        </Link>
      </div>
    </header>
  );
}

export default Navbar;