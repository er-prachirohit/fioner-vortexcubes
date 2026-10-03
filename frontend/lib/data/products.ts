// Product catalogue — placeholder data intended to be replaced by the
// Marketplace/Products API. Prices are illustrative placeholders only.

export type Product = {
  slug: string;
  name: string;
  category: "qr" | "gps" | "accessories";
  tagline: string;
  description: string;
  price: number | null; // null = "Price on request" (no invented price)
  compatibility: string;
  whatsIncluded: string[];
  specs: { label: string; value: string }[];
  warranty: string;
  badge?: string;
};

export const products: Product[] = [
  {
    slug: "fioner-qr-safety-tag",
    name: "Fioner QR Safety Tag",
    category: "qr",
    tagline: "Your vehicle's digital safety identity",
    description:
      "A weatherproof QR identity for your vehicle. Once activated in the Fioner app, anyone who scans it can reach you through masked calling or report an issue — without installing anything.",
    price: 499,
    compatibility: "Any two-wheeler, three-wheeler or four-wheeler",
    whatsIncluded: [
      "1x weatherproof Fioner QR tag",
      "Adhesive mounting kit",
      "Activation guide",
    ],
    specs: [
      { label: "Material", value: "UV-resistant laminate" },
      { label: "Mounting", value: "Adhesive backing" },
      { label: "Durability", value: "Weatherproof, scratch-resistant" },
      { label: "Activation", value: "Via Fioner app" },
    ],
    warranty: "12-month replacement warranty against manufacturing defects",
    badge: "Most popular",
  },
  {
    slug: "fioner-gps-tracker",
    name: "Fioner GPS Tracker",
    category: "gps",
    tagline: "Live location, geofencing and trip history",
    description:
      "A compact GPS tracking device that connects your vehicle to the Fioner app for live location, geofence alerts and trip history. Installation and network availability determine live-tracking accuracy.",
    price: 2499,
    compatibility: "Cars, SUVs and commercial vehicles",
    whatsIncluded: [
      "1x Fioner GPS device",
      "Wiring harness",
      "Installation guide",
    ],
    specs: [
      { label: "Connectivity", value: "Cellular network (SIM-based)" },
      { label: "Power", value: "Vehicle-wired, backup battery" },
      { label: "Tracking", value: "Live location + trip history" },
      { label: "Alerts", value: "Geofence entry/exit, movement" },
    ],
    warranty: "12-month hardware warranty",
    badge: "New",
  },
  {
    slug: "fioner-qr-gps-combo",
    name: "Fioner QR + GPS Combo",
    category: "accessories",
    tagline: "Complete safety and tracking, together",
    description:
      "Bundle the Fioner QR Safety Tag with the GPS Tracker for complete vehicle identity, public safety interaction and live tracking in one activation flow.",
    price: 2799,
    compatibility: "Cars, SUVs and commercial vehicles",
    whatsIncluded: [
      "1x Fioner QR Safety Tag",
      "1x Fioner GPS device",
      "Wiring harness",
      "Combined activation guide",
    ],
    specs: [
      { label: "Bundle", value: "QR tag + GPS device" },
      { label: "Activation", value: "Single flow in the Fioner app" },
      { label: "Best for", value: "Owners who want both safety and tracking" },
    ],
    warranty: "12-month warranty on both components",
  },
];

export const categories = [
  { slug: "qr", label: "QR Safety" },
  { slug: "gps", label: "GPS Devices" },
  { slug: "accessories", label: "Bundles & Accessories" },
];
