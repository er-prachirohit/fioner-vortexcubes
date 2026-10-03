import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Check, Minus } from "lucide-react";
import { plans } from "@/lib/data/plans";

export const metadata: Metadata = { title: "Compare Plans" };

const allBenefits = Array.from(new Set(plans.flatMap((p) => p.benefits)));

export default function ComparePlansPage() {
  return (
    <>
      <PageHeader eyebrow="Membership" title="Compare plans" />
      <section className="bg-background pb-28">
        <div className="container-page overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0 rounded-card-lg border border-border">
            <thead>
              <tr>
                <th className="p-5 text-left text-[13px] font-normal text-tertiary">Benefit</th>
                {plans.map((p) => (
                  <th key={p.slug} className="p-5 text-left font-display text-ink">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allBenefits.map((benefit, i) => (
                <tr key={benefit} className={i % 2 === 0 ? "bg-surface-2" : ""}>
                  <td className="p-5 text-[13px] text-secondary border-t border-border">
                    {benefit}
                  </td>
                  {plans.map((p) => (
                    <td key={p.slug} className="p-5 border-t border-border">
                      {p.benefits.includes(benefit) ? (
                        <Check className="h-4 w-4 text-success" />
                      ) : (
                        <Minus className="h-4 w-4 text-disabled" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
