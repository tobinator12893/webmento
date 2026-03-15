import type { Metadata, Viewport } from "next";
import "./globals.css";

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
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
