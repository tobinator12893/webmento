import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Webmento – Faire Websites für lokale Betriebe",
  description:
    "Professionelle Websites für Handwerker, Einzelhändler und lokale Dienstleister im Raum Rhein-Neckar. Fair kalkuliert, schnell umgesetzt, alles aus einer Hand.",
  keywords: [
    "Website erstellen",
    "Webdesign Rhein-Neckar",
    "Website für Handwerker",
    "Webdesign St. Leon-Rot",
    "günstige Website",
    "Webmento",
  ],
  authors: [{ name: "Webmento" }],
  openGraph: {
    title: "Webmento – Faire Websites für lokale Betriebe",
    description:
      "Professionelle Websites für Handwerker, Einzelhändler und lokale Dienstleister. Ab 490 €, in 5–10 Tagen live.",
    type: "website",
    locale: "de_DE",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
