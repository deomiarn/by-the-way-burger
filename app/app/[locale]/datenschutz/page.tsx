import { Metadata } from 'next';
import { Navbar22 } from '@/components/navbar22';
import { Footer24 } from '@/components/footer24';

const BASE_URL = 'https://bytheway.ch';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Datenschutzerklärung - BY THE WAY Burger & Grillhaus',
    description: 'Diese Datenschutzerklärung klärt Nutzer über die Art, den Umfang und Zwecke der Erhebung und Verwendung personenbezogener Daten durch den verantwortlichen Anbieter BY THE WAY - BURGER & GRILLHAUS, Wehntalerstrasse 1, 8162 Steinmaur, Schweiz, auf dieser Website auf.',
    alternates: {
      canonical: `${BASE_URL}/de/datenschutz`,
    },
    openGraph: {
      title: 'Datenschutzerklärung - BY THE WAY Burger & Grillhaus',
      description: 'Diese Datenschutzerklärung klärt Nutzer über die Art, den Umfang und Zwecke der Erhebung und Verwendung personenbezogener Daten durch den verantwortlichen Anbieter BY THE WAY - BURGER & GRILLHAUS, Wehntalerstrasse 1, 8162 Steinmaur, Schweiz, auf dieser Website auf.',
      url: `${BASE_URL}/de/datenschutz`,
      siteName: 'BY THE WAY - BURGER & GRILLHAUS',
      locale: 'de_CH',
      type: 'website',
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function DatenschutzPage() {
  return (
    <>
      <div className="w-full">
        <Navbar22 />
      </div>

      <main className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight mb-12">Datenschutzerklärung</h1>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Verantwortliche Stelle</h2>
              <div className="space-y-1 text-muted-foreground">
                <p className="font-medium text-foreground">BY THE WAY - BURGER & GRILLHAUS</p>
                <p>Wehntalerstrasse 1</p>
                <p>8162 Steinmaur</p>
                <p>Schweiz</p>
                <p className="mt-2">E-Mail: <a href="mailto:info@bytheway.ch" className="hover:text-primary">info@bytheway.ch</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Allgemeine Hinweise</h2>
              <p className="text-muted-foreground leading-relaxed">
                Gestützt auf Artikel 13 der Schweizerischen Bundesverfassung und die
                datenschutzrechtlichen Bestimmungen des Bundes hat jede Person Anspruch
                auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer
                persönlichen Daten. Wir halten diese Bestimmungen ein. Persönliche Daten
                werden streng vertraulich behandelt und weder an Dritte verkauft noch
                weitergegeben.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Erfassung von Daten</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wenn Sie unsere Website besuchen, speichern unsere Server temporär jeden
                Zugriff in einer Protokolldatei. Folgende Daten werden dabei ohne Ihr
                Zutun erfasst und bis zur automatisierten Löschung gespeichert: IP-Adresse
                des anfragenden Rechners, Datum und Uhrzeit des Zugriffs, Name und URL der
                abgerufenen Datei, Website, von der aus der Zugriff erfolgt, verwendeter
                Browser und Betriebssystem.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Diese Website kann Cookies verwenden. Cookies sind kleine Textdateien,
                die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung
                der Website ermöglichen. Sie können die Installation von Cookies durch
                entsprechende Einstellungen in Ihrem Browser verhindern.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kontaktformular</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden Ihre
                Angaben zur Bearbeitung der Anfrage sowie für mögliche Anschlussfragen
                gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Ihre Rechte</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
                und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung,
                Sperrung oder Löschung dieser Daten.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können
                Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Änderungen</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir behalten uns vor, diese Datenschutzerklärung jederzeit zu ändern.
                Es gilt die jeweils auf unserer Website publizierte aktuelle Version.
              </p>
            </section>
          </div>
        </div>
      </main>

      <div className="w-full flex justify-center">
        <div className="w-full">
          <Footer24 />
        </div>
      </div>
    </>
  );
}
