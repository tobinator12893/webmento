/**
 * JSON-LD Structured Data for Webmento
 * Helps Google understand the business and display rich results.
 */
export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // LocalBusiness — für lokale Suchergebnisse (Maps, "in der Nähe")
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://webmento.vercel.app/#business",
        name: "Webmento",
        alternateName: "Webmento – Faire Websites für lokale Betriebe",
        description:
          "Professionelle Websites für Handwerker, Friseure, Gastronomen und lokale Betriebe im Raum Rhein-Neckar. Faire Festpreise, schnelle Umsetzung, alles inklusive.",
        url: "https://webmento.vercel.app",
        email: "hallo@webmento.de",
        founder: {
          "@type": "Person",
          name: "Tobias Huber",
        },
        areaServed: [
          {
            "@type": "City",
            name: "St. Leon-Rot",
          },
          {
            "@type": "City",
            name: "Walldorf",
          },
          {
            "@type": "City",
            name: "Wiesloch",
          },
          {
            "@type": "City",
            name: "Rauenberg",
          },
          {
            "@type": "AdministrativeArea",
            name: "Rhein-Neckar-Kreis",
          },
          {
            "@type": "AdministrativeArea",
            name: "Baden-Württemberg",
          },
        ],
        serviceType: "Webdesign",
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Bank transfer, Invoice",
        knowsLanguage: "de",
        sameAs: [],
      },

      // WebSite — für Sitelinks-Searchbox
      {
        "@type": "WebSite",
        "@id": "https://webmento.vercel.app/#website",
        url: "https://webmento.vercel.app",
        name: "Webmento",
        description:
          "Faire Websites für lokale Betriebe im Raum Rhein-Neckar",
        inLanguage: "de-DE",
        publisher: {
          "@id": "https://webmento.vercel.app/#business",
        },
      },

      // WebPage — Hauptseite
      {
        "@type": "WebPage",
        "@id": "https://webmento.vercel.app/#webpage",
        url: "https://webmento.vercel.app",
        name: "Webmento – Faire Websites für lokale Betriebe",
        description:
          "Professionelle Websites ab 490 €. In 5–10 Tagen fertig. Domain, Hosting, DSGVO & Impressum inklusive.",
        inLanguage: "de-DE",
        isPartOf: {
          "@id": "https://webmento.vercel.app/#website",
        },
        about: {
          "@id": "https://webmento.vercel.app/#business",
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Start",
              item: "https://webmento.vercel.app",
            },
          ],
        },
      },

      // Offer / Pricing — für Rich Snippets in Suchergebnissen
      {
        "@type": "Service",
        "@id": "https://webmento.vercel.app/#service-starter",
        name: "Starter Website",
        description:
          "1-seitige Website (Landingpage) inkl. Kontaktformular, mobiloptimiert, Impressum & Datenschutz, 1 Jahr Hosting & Domain",
        provider: {
          "@id": "https://webmento.vercel.app/#business",
        },
        offers: {
          "@type": "Offer",
          price: "490",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "490",
            priceCurrency: "EUR",
            unitText: "einmalig",
          },
          availability: "https://schema.org/InStock",
          validFrom: "2026-01-01",
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Deutschland",
        },
      },
      {
        "@type": "Service",
        "@id": "https://webmento.vercel.app/#service-basis",
        name: "Basis Website",
        description:
          "Bis zu 5 Unterseiten, Galerie, SEO-Grundoptimierung, 1 Jahr Hosting, alle Pflichtseiten inklusive",
        provider: {
          "@id": "https://webmento.vercel.app/#business",
        },
        offers: {
          "@type": "Offer",
          price: "890",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        "@id": "https://webmento.vercel.app/#service-komplett",
        name: "Komplett Website",
        description:
          "Bis zu 10 Unterseiten, Chat & AI Anbindung, erweiterte SEO, Logo-Design, 6 Monate Priorität-Support",
        provider: {
          "@id": "https://webmento.vercel.app/#business",
        },
        offers: {
          "@type": "Offer",
          price: "1490",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
      },

      // FAQ — häufige Fragen für Rich Results
      {
        "@type": "FAQPage",
        "@id": "https://webmento.vercel.app/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Was kostet eine Website bei Webmento?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Websites bei Webmento beginnen ab 490 € (Starter-Paket) als einmaligen Festpreis. Das Basis-Paket kostet 890 €, das Komplett-Paket 1.490 €. Alle Preise beinhalten Domain, Hosting für das erste Jahr, Impressum und Datenschutzerklärung.",
            },
          },
          {
            "@type": "Question",
            name: "Wie lange dauert die Erstellung einer Website?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Je nach Paket dauert die Umsetzung 5–14 Werktage. Das Starter-Paket ist in 5–7 Tagen fertig, das Basis-Paket in 7–10 Tagen, das Komplett-Paket in 10–14 Tagen.",
            },
          },
          {
            "@type": "Question",
            name: "Was ist alles im Preis enthalten?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Alle Pakete beinhalten Domain, Hosting für ein Jahr, ein rechtssicheres Impressum, eine Datenschutzerklärung sowie eine mobiloptimierte, responsive Website. Es gibt keine versteckten Kosten.",
            },
          },
          {
            "@type": "Question",
            name: "In welchen Regionen arbeitet Webmento?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Webmento ist hauptsächlich im Raum Rhein-Neckar tätig – St. Leon-Rot, Walldorf, Wiesloch, Rauenberg, Malsch und Umgebung. Bundesweite Projekte sind vollständig remote möglich.",
            },
          },
          {
            "@type": "Question",
            name: "Brauche ich technische Kenntnisse?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nein. Webmento übernimmt alles – von Domain und Hosting bis zu Texten, Design und gesetzlichen Pflichtseiten. Nach der Übergabe erklären wir kurz, wie kleine Änderungen selbst gemacht werden können.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
