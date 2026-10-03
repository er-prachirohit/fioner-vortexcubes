import { SectionHeading } from "@/components/ui/section-heading";
import { Car, Bike, Truck } from "lucide-react";

const vehicles = [
  {
    icon: Car,
    name: "Family SUV",
    reg: "MP09 XX 1234",
    fuel: "Petrol",
    mileage: "13.2 km/l",
    qr: "Active",
    gps: "Connected",
  },
  {
    icon: Truck,
    name: "Daily Sedan",
    reg: "MP09 XX 5678",
    fuel: "Diesel",
    mileage: "17.8 km/l",
    qr: "Active",
    gps: "Not linked",
  },
  {
    icon: Bike,
    name: "City Bike",
    reg: "MP09 XX 9012",
    fuel: "Petrol",
    mileage: "45 km/l",
    qr: "Not activated",
    gps: "Not linked",
  },
];

export function GarageSection() {
  return (
    <section className="relative overflow-hidden bg-bg py-24 md:py-32 border-y border-border">
      <div className="container-page relative z-10">
        <SectionHeading
          title="Everything about your vehicles, in one place."
          description="Documents, service reminders, trip history and fuel logs — organized by vehicle in your Digital Garage."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {vehicles.map((v) => (
            <div key={v.reg} className="relative bg-white rounded-[24px] border border-[rgba(255,85,0,0.14)] border-t-[3px] border-t-[#FF5500] shadow-[0_10px_30px_rgba(255,85,0,0.10)] hover:border-[#FF5500] hover:shadow-[0_18px_44px_rgba(255,85,0,0.20)] hover:-translate-y-[4px] p-6 md:p-8 transition-all duration-300">
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF7F1] border border-[rgba(255,85,0,0.14)]">
                    <v.icon className="h-6 w-6 text-[#FF5500]" />
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold tracking-wide ${
                      v.qr === "Active"
                        ? "border-[#FF5500]/30 bg-[#FF5500]/10 text-[#FF5500]"
                        : "border-[rgba(255,85,0,0.14)] bg-white text-[#5B5B63]"
                    }`}
                  >
                    QR {v.qr}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-ink tracking-tight">
                  {v.name}
                </h3>
                <p className="mt-1 text-[13px] font-medium text-secondary">{v.reg}</p>

                <div className="mt-6 grid grid-cols-2 gap-4 text-[12px] border-t border-border pt-5">
                  <div>
                    <p className="text-secondary font-medium">Fuel type</p>
                    <p className="mt-1 font-bold text-ink">{v.fuel}</p>
                  </div>
                  <div>
                    <p className="text-secondary font-medium">Mileage</p>
                    <p className="mt-1 font-bold text-ink">{v.mileage}</p>
                  </div>
                  <div>
                    <p className="text-secondary font-medium">GPS</p>
                    <p className="mt-1 font-bold text-ink">{v.gps}</p>
                  </div>
                  <div>
                    <p className="text-secondary font-medium">Documents</p>
                    <p className="mt-1 font-bold text-ink">Up to date</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
