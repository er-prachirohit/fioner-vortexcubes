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
          className="lg:hidden flex flex-col gap-1" 
          type="button" 
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
        </button>

        <nav className={`fixed inset-0 bg-white z-40 p-6 flex flex-col gap-6 lg:static lg:bg-transparent lg:p-0 lg:flex-row lg:gap-2 ${isMenuOpen ? "flex" : "hidden lg:flex"}`} aria-label="Main">
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

      <div className="flex items-center gap-4 text-[13px] font-medium uppercase">
        <Link className="text-[#111113] hover:text-[#FF5500] transition-colors" href="/login">
          LOG IN
        </Link>
        <Link 
          className="px-[20px] py-[10px] text-white rounded-xl bg-[#FF5500] hover:bg-[#E64A00] transition-colors duration-200" 
          href="/signup"
        >
          SIGN UP
        </Link>
      </div>
    </header>
  );
}

export default Navbar;