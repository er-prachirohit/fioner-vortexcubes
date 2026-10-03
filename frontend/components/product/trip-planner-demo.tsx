import { Gauge, Fuel, TicketPercent, Wallet, Milestone } from "lucide-react";

const outputs = [
  { icon: Milestone, label: "Distance", value: "612 km" },
  { icon: Gauge, label: "Travel time", value: "~9h 40m" },
  { icon: Fuel, label: "Fuel needed", value: "~41 L (est.)" },
  { icon: TicketPercent, label: "Toll estimate", value: "₹680 (est.)" },
  { icon: Wallet, label: "Total trip cost", value: "₹4,950 (est.)" },
];

export function TripPlannerDemo() {
  return (
    <div className="rounded-[24px] border border-[rgba(255,85,0,0.14)] border-t-[3px] border-t-[#FF5500] bg-white p-6 md:p-8 shadow-[0_10px_30px_rgba(255,85,0,0.10)]">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[16px] border border-[rgba(255,85,0,0.14)] bg-[#FFF7F1] p-4">
          <p className="text-[11px] text-[#5B5B63]">From</p>
          <p className="mt-1 text-sm text-[#111113] font-medium">Indore, MP</p>
        </div>
        <div className="rounded-[16px] border border-[rgba(255,85,0,0.14)] bg-[#FFF7F1] p-4">
          <p className="text-[11px] text-[#5B5B63]">To</p>
          <p className="mt-1 text-sm text-[#111113] font-medium">Udaipur, RJ</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {["Fastest", "Economical", "Lower toll"].map((pref, i) => (
          <span
            key={pref}
            className={`rounded-full border px-3 py-1.5 text-[12px] font-medium ${
              i === 1
                ? "border-[#FF5500]/40 bg-[#FF5500]/10 text-[#FF5500]"
                : "border-[rgba(255,85,0,0.14)] text-[#5B5B63]"
            }`}
          >
            {pref}
          </span>
        ))}
      </div>

      <div className="mt-6 h-px w-full bg-[rgba(255,85,0,0.14)]" />

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {outputs.map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-[16px] border border-[rgba(255,85,0,0.14)] bg-white p-4">
            <Icon className="h-4 w-4 text-[#FF5500]" />
            <p className="mt-2 text-[11px] text-[#5B5B63]">{label}</p>
            <p className="mt-1 text-sm text-[#111113] font-medium">{value}</p>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[12px] text-[#A1A1AA]">
        Fuel and toll figures are estimates based on route and provider data, and may change with live conditions.
      </p>
    </div>
  );
}
