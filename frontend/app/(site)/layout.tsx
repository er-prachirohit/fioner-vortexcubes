import type { Metadata } from "next";
import { Archivo, Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { AuthProvider } from "@/lib/auth/context";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fioner.com"),
  title: {
    default: "Fioner — Vehicle Safety, GPS Tracking & Smart Trips",
    template: "%s | Fioner",
  },
  description:
    "Fioner connects your vehicle to QR-based safety, GPS tracking, SOS and emergency protection, AI-assisted trip planning and everyday vehicle utilities — all in one ecosystem.",
  keywords: [
    "vehicle safety",
    "vehicle GPS tracking",
    "QR vehicle safety",
    "car safety QR",
    "trip planner",
    "fuel calculator",
    "toll calculator",
    "FASTag utilities",
  ],
  openGraph: {
    title: "Fioner — Vehicle Safety, GPS Tracking & Smart Trips",
    description:
      "One connected ecosystem for your vehicle's safety, tracking and everyday journeys.",
    url: "https://www.fioner.com",
    siteName: "Fioner",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
