import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

// Variants follow the QR Rakshak Button System:
// Primary (solid royal blue), Secondary (soft blue-tinted), Outline
// (bordered), Destructive/SOS (red), Disabled handled via the `disabled`
// attribute on native buttons.
const variants: Record<string, string> = {
  primary:
    "bg-gradient-to-br from-[#FF8A3D] via-[#FF5500] to-[#D63F00] text-white shadow-[0_10px_30px_rgba(255,85,0,0.40)] transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.98] outline-none focus-visible:ring-[2px] focus-visible:ring-[#FF5500] focus-visible:ring-offset-3 border-none",
  secondary:
    "bg-transparent border border-[rgba(255,85,0,0.14)] text-[#111113] hover:border-[#FF5500] hover:text-[#FF5500] transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.98] outline-none focus-visible:ring-[2px] focus-visible:ring-[#FF5500] focus-visible:ring-offset-3",
  outline:
    "bg-transparent border border-[#FF5500] text-[#FF5500] hover:bg-[rgba(255,85,0,0.12)] transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.98] outline-none focus-visible:ring-[2px] focus-visible:ring-[#FF5500] focus-visible:ring-offset-3",
  ghost: "bg-transparent border-transparent text-[#111113] hover:text-[#FF5500] transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.98] outline-none focus-visible:ring-[2px] focus-visible:ring-[#FF5500] focus-visible:ring-offset-3",
  danger: "bg-danger text-white hover:bg-danger-dark shadow-[0_10px_30px_rgba(255,85,0,0.10)] transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.98] outline-none focus-visible:ring-[2px] focus-visible:ring-[#FF5500] focus-visible:ring-offset-3 border-none",
};

const sizes: Record<string, string> = {
  sm: "text-[13px] px-4 py-2 min-h-[40px]",
  md: "text-btn-text px-5 py-3 min-h-[48px]",
  lg: "text-[15px] font-semibold px-7 py-4 min-h-[52px]",
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", size = "md", className } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-btn font-medium tracking-[-0.01em] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#ff4d00] disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={"type" in props ? props.type ?? "button" : "button"}
      onClick={"onClick" in props ? props.onClick : undefined}
      className={classes}
    >
      {children}
    </button>
  );
}
