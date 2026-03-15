import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Webmento",
  description:
    "Datenschutzerklärung der Webmento Website gemäß DSGVO und BDSG.",
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-paper">
      {/* Nav */}
      <div className="border-b border-black/6 bg-paper/90 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center relative overflow-hidden flex-shrink-0">
              <div className="w-[15px] h-[15px] border-[2px] border-white rounded-full absolute" />
              <div className="w-[6px] h-[6px] bg-white rounded-full absolute" />
            </div>
            <span
              className="font-serif text-[18px] text-ink tracking-tight"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              web<span className="text-accent">mento</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-[13px] text-mid hover:text-ink transition-colors cursor-pointer font-[300]"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        {/* Header */}
        <div className="mb-14">
          <span className="text-[11px] uppercase tracking-[0.18em] text-accent font-[500]">
            Rechtliches
          </span>
          <h1
            className="font-serif text-[clamp(36px,5vw,60px)] leading-[1.05] tracking-[-0.03em] text-ink mt-4"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Datenschutz&shy;erklärung
          </h1>
          <p className="text-[14px] text-mid font-[300] mt-3">
            Stand: März 2026
          </p>
        </div>

        <div className="prose-webmento space-y-12">
          {/* 1 */}
          <Section num="1" title="Verantwortlicher">
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO)
              und des Bundesdatenschutzgesetzes (BDSG) ist:
            </p>
            <address className="not-italic mt-4 bg-card rounded-xl p-5 text-[14px] leading-[1.8] text-ink border border-black/5">
              <strong>Tobias Huber</strong>
              <br />
              Webmento – Einzelunternehmen
              <br />
              Raum Rhein-Neckar
              <br />
              Deutschland
              <br />
              <br />
              E-Mail:{" "}
              <a
                href="mailto:hallo@webmento.de"
                className="text-accent hover:underline"
              >
                hallo@webmento.de
              </a>
            </address>
          </Section>

          {/* 2 */}
          <Section num="2" title="Allgemeines zur Datenverarbeitung">
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer
              grundsätzlich nur, soweit dies zur Bereitstellung einer
              funktionsfähigen Website sowie unserer Inhalte und Leistungen
              erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt
              regelmäßig nur nach Einwilligung des Nutzers oder wenn die
              Verarbeitung durch gesetzliche Vorschriften erlaubt ist.
            </p>
            <p className="mt-3">
              Als Rechtsgrundlagen dienen insbesondere:
            </p>
            <ul>
              <li>
                <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> – Einwilligung der
                betroffenen Person
              </li>
              <li>
                <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> – Erfüllung eines
                Vertrages oder vorvertraglicher Maßnahmen
              </li>
              <li>
                <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> – Wahrung
                berechtigter Interessen des Verantwortlichen
              </li>
            </ul>
          </Section>

          {/* 3 */}
          <Section num="3" title="Hosting & Infrastruktur">
            <p>
              Diese Website wird gehostet von:
            </p>
            <address className="not-italic mt-3 bg-card rounded-xl p-5 text-[14px] leading-[1.8] text-ink border border-black/5">
              <strong>Vercel Inc.</strong>
              <br />
              440 N Barranca Ave #4133
              <br />
              Covina, CA 91723
              <br />
              USA
              <br />
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline text-[13px]"
              >
                Datenschutzerklärung von Vercel
              </a>
            </address>
            <p className="mt-4">
              Beim Aufruf unserer Website werden durch den Hosting-Anbieter
              automatisch Informationen in sogenannten Server-Log-Dateien
              gespeichert, die Ihr Browser automatisch übermittelt. Dies sind:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (anonymisiert)</li>
            </ul>
            <p className="mt-3">
              Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
              Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
              vorgenommen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an einem sicheren und stabilen Betrieb der
              Website). Vercel verarbeitet Daten ggf. in den USA. Die Daten­
              übertragung erfolgt auf Basis der EU-Standardvertragsklauseln
              gemäß Art. 46 Abs. 2 lit. c DSGVO.
            </p>
          </Section>

          {/* 4 */}
          <Section num="4" title="Kontaktaufnahme per E-Mail oder Formular">
            <p>
              Wenn Sie uns per E-Mail oder über das Kontaktformular auf dieser
              Website kontaktieren, werden die von Ihnen angegebenen Daten
              (Name, E-Mail-Adresse, Telefonnummer, Betriebsbezeichnung und
              Nachrichteninhalt) zwecks Bearbeitung der Anfrage und für den Fall
              von Anschlussfragen bei uns gespeichert.
            </p>
            <p className="mt-3">
              Das Kontaktformular auf dieser Website sendet Ihre Angaben direkt
              an Ihr E-Mail-Programm (mailto-Protokoll). Es findet{" "}
              <strong>
                keine serverseitige Speicherung oder Verarbeitung durch uns
              </strong>{" "}
              statt. Die übermittelten Daten werden ausschließlich im Rahmen der
              Kommunikation mit Ihnen verwendet.
            </p>
            <p className="mt-3">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an der Beantwortung von Anfragen). Die Daten werden
              gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine
              gesetzliche Aufbewahrungspflicht besteht.
            </p>
          </Section>

          {/* 5 */}
          <Section num="5" title="Schriftarten (Lokales Hosting)">
            <p>
              Diese Website verwendet die Schriftarten{" "}
              <em>DM Serif Display</em> und <em>DM Sans</em>. Die Schriftarten
              werden{" "}
              <strong>lokal auf unserem Server gespeichert und ausgeliefert</strong>.
              Es findet <strong>keine Verbindung zu Google-Servern</strong> statt.
              Beim Laden der Schriftarten werden daher keine personenbezogenen
              Daten an Dritte übertragen.
            </p>
          </Section>

          {/* 6 */}
          <Section num="6" title="Cookies">
            <p>
              Diese Website verwendet{" "}
              <strong>keine Cookies</strong> zu Tracking- oder
              Analysezwecken. Es werden ausschließlich technisch notwendige
              Mechanismen des Browsers verwendet, die keine personenbezogenen
              Daten speichern.
            </p>
          </Section>

          {/* 7 */}
          <Section num="7" title="Analyse- und Tracking-Tools">
            <p>
              Wir setzen auf dieser Website{" "}
              <strong>keine Analyse- oder Tracking-Tools</strong> (z. B. Google
              Analytics, Matomo o. ä.) ein. Es werden keine Nutzungsprofile
              erstellt und keine Daten zu Werbezwecken verarbeitet.
            </p>
          </Section>

          {/* 8 */}
          <Section num="8" title="Soziale Netzwerke">
            <p>
              Diese Website enthält{" "}
              <strong>
                keine direkten Einbindungen oder Plug-ins sozialer Netzwerke
              </strong>{" "}
              (z. B. Facebook, Instagram). Verweise auf Social-Media-Profile
              erfolgen ausschließlich als einfache Hyperlinks, bei deren
              Anklicken Sie die jeweilige Plattform verlassen und deren
              Datenschutzbestimmungen gelten.
            </p>
          </Section>

          {/* 9 */}
          <Section num="9" title="SSL-/TLS-Verschlüsselung">
            <p>
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von „http://" auf
              „https://" wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile.
            </p>
          </Section>

          {/* 10 */}
          <Section num="10" title="Ihre Rechte als betroffene Person">
            <p>
              Ihnen stehen nach der DSGVO folgende Rechte gegenüber dem
              Verantwortlichen zu:
            </p>
            <ul>
              <li>
                <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das
                Recht, Auskunft über die zu Ihrer Person gespeicherten Daten zu
                verlangen.
              </li>
              <li>
                <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie
                haben das Recht, unverzüglich die Berichtigung unrichtiger Daten
                zu verlangen.
              </li>
              <li>
                <strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben
                das Recht, die Löschung Ihrer personenbezogenen Daten zu
                verlangen, sofern keine gesetzlichen Aufbewahrungspflichten
                entgegenstehen.
              </li>
              <li>
                <strong>
                  Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):
                </strong>{" "}
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
              </li>
              <li>
                <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong>{" "}
                Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen
                und maschinenlesbaren Format zu erhalten.
              </li>
              <li>
                <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben
                das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
                ergeben, jederzeit gegen die Verarbeitung Ihrer
                personenbezogenen Daten Widerspruch einzulegen.
              </li>
              <li>
                <strong>
                  Recht auf Widerruf der Einwilligungserklärung (Art. 7 Abs. 3
                  DSGVO):
                </strong>{" "}
                Sie haben das Recht, Ihre einmal erteilte Einwilligung jederzeit
                gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir die
                Datenverarbeitung, die auf dieser Einwilligung beruhte, für die
                Zukunft nicht mehr fortführen dürfen.
              </li>
              <li>
                <strong>
                  Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO):
                </strong>{" "}
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
                zu beschweren. Zuständig ist die Aufsichtsbehörde des
                Bundeslandes, in dem Sie wohnen oder arbeiten, oder die
                Aufsichtsbehörde des Bundeslandes, in dem der Verstoß begangen
                wurde.
                <br />
                <span className="text-[13px] text-mid">
                  Für Baden-Württemberg:{" "}
                  <a
                    href="https://www.baden-wuerttemberg.datenschutz.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Landesbeauftragter für Datenschutz und
                    Informationsfreiheit Baden-Württemberg (LfDI)
                  </a>
                </span>
              </li>
            </ul>
            <p className="mt-4">
              Zur Wahrnehmung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a
                href="mailto:hallo@webmento.de"
                className="text-accent hover:underline"
              >
                hallo@webmento.de
              </a>
            </p>
          </Section>

          {/* 11 */}
          <Section num="11" title="Aktualität und Änderung dieser Datenschutzerklärung">
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
              März 2026. Durch die Weiterentwicklung unserer Website und
              Angebote oder aufgrund geänderter gesetzlicher beziehungsweise
              behördlicher Vorgaben kann es notwendig werden, diese
              Datenschutzerklärung zu ändern. Die jeweils aktuelle
              Datenschutzerklärung kann jederzeit auf dieser Seite abgerufen
              werden.
            </p>
          </Section>
        </div>

        {/* Back button */}
        <div className="mt-16 pt-10 border-t border-black/8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] text-mid hover:text-ink transition-colors cursor-pointer font-[300]"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-ink mt-0 py-8">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span
            className="font-serif text-[18px] text-white tracking-tight"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            web<span className="text-accent">mento</span>
          </span>
          <div className="flex gap-6 text-[12px] text-white/35">
            <Link href="/" className="hover:text-white/70 transition-colors cursor-pointer">
              Startseite
            </Link>
            <Link
              href="/impressum"
              className="hover:text-white/70 transition-colors cursor-pointer"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-white/60 hover:text-white/80 transition-colors cursor-pointer"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2
        className="font-serif text-[clamp(20px,2.5vw,28px)] leading-[1.1] tracking-[-0.02em] text-ink mb-5 flex items-baseline gap-3"
        style={{ fontFamily: "var(--font-dm-serif)" }}
      >
        <span className="text-[13px] text-accent font-sans font-[500] tracking-[0.12em] flex-shrink-0">
          §{num}
        </span>
        {title}
      </h2>
      <div className="text-[15px] leading-[1.8] text-mid font-[300] space-y-3 [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:list-disc [&_strong]:text-ink [&_strong]:font-[500] [&_a]:text-accent [&_a:hover]:underline">
        {children}
      </div>
    </section>
  );
}
