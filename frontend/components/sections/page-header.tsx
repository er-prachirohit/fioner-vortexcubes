import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  titleClassName,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  titleClassName?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black to-charcoal pt-40 pb-20 md:pt-48 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-fade opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-orange/20 blur-[130px]"
      />
      <div className="container-page relative max-w-3xl">
        {eyebrow && (
          <span className="inline-flex items-center rounded-pill border border-orange-300 bg-orange-50 px-4 py-1.5 text-label font-semibold text-orange">
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-75 mr-1.5" />
            {eyebrow}
          </span>
        )}
        <h1 className={`mt-5 font-display text-hero-mobile md:text-[3rem] md:leading-[1.08] font-semibold text-balance ${titleClassName || "text-white"}`}>
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-[16px] md:text-[17px] leading-relaxed text-white/60">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
