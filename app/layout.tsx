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

const BASE_URL = "https://www.webmento.de";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Webmento – Faire Websites für lokale Betriebe",
    template: "%s – Webmento",
  },
  description:
    "Professionelle Websites für Handwerker, Friseure, Gastronomen und lokale Betriebe im Raum Rhein-Neckar. Ab 490 €, fertig in 5–10 Tagen. Inkl. Hosting, DSGVO und Impressum.",
  keywords: [
    "Website erstellen lassen",
    "Webdesign Rhein-Neckar",
    "Website für Handwerker",
    "Webdesign St. Leon-Rot",
    "Webdesign Walldorf",
    "Webdesign Wiesloch",
    "günstige Website erstellen",
    "Webdesign Einzelunternehmen",
    "Website für Friseur",
    "Website für Gastronomen",
    "Website für Kleinunternehmen",
    "Webmento",
    "faire Websites",
    "KI-gestützte Website",
    "Webdesign Baden-Württemberg",
  ],
  authors: [{ name: "Tobias Huber", url: BASE_URL }],
  creator: "Webmento",
  publisher: "Webmento",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: BASE_URL,
    siteName: "Webmento",
    title: "Webmento – Faire Websites für lokale Betriebe",
    description:
      "Professionelle Websites für Handwerker, Friseure, Gastronomen und lokale Betriebe. Ab 490 €, fertig in 5–10 Tagen. Domain, Hosting & DSGVO inklusive.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Webmento – Faire Websites für lokale Betriebe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webmento – Faire Websites für lokale Betriebe",
    description:
      "Professionelle Websites für Handwerker & lokale Betriebe. Ab 490 €, in 5–10 Tagen live.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "DEIN_GOOGLE_VERIFICATION_CODE", // nach Search Console Einrichtung eintragen
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f2ec",
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
