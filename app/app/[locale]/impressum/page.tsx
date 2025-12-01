import { Metadata } from 'next';
import { Navbar22 } from '@/components/navbar22';
import { Footer24 } from '@/components/footer24';

const BASE_URL = 'https://bytheway.ch';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Impressum - BY THE WAY Burger & Grillhaus',
    description: 'Hier finden Sie die gesetzlich erforderlichen Angaben zu unserer Website und unserem Unternehmen.',
    alternates: {
      canonical: `${BASE_URL}/de/impressum`,
    },
    openGraph: {
      title: 'Impressum - BY THE WAY Burger & Grillhaus',
      description: 'Hier finden Sie die gesetzlich erforderlichen Angaben zu unserer Website und unserem Unternehmen.',
      url: `${BASE_URL}/de/impressum`,
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

export default function ImpressumPage() {
  return (
    <>
      <div className="w-full">
        <Navbar22 />
      </div>

      <main className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight mb-12">Impressum</h1>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Angaben gemäss Schweizer Recht</h2>
              <div className="space-y-1 text-muted-foreground">
                <p className="font-medium text-foreground">BY THE WAY - BURGER & GRILLHAUS</p>
                <p>Wehntalerstrasse 1</p>
                <p>8162 Steinmaur</p>
                <p>Schweiz</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
              <div className="space-y-1 text-muted-foreground">
                <p>Telefon: <a href="tel:+41772905231" className="hover:text-primary">077 290 52 31</a></p>
                <p>E-Mail: <a href="mailto:info@bytheway.ch" className="hover:text-primary">info@bytheway.ch</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Vertretungsberechtigte Person</h2>
              <p className="text-muted-foreground">Amir Beganovic, Inhaber</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Handelsregistereintrag</h2>
              <div className="space-y-1 text-muted-foreground">
                <p>Eingetragener Firmenname: BY THE WAY - BURGER & GRILLHAUS</p>
                <p>Handelsregisteramt: Kanton Zürich</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Haftungsausschluss</h2>
              <p className="text-muted-foreground leading-relaxed">
                Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität,
                Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen
                den Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff
                oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch
                Missbrauch der Verbindung oder durch technische Störungen entstanden sind,
                werden ausgeschlossen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Urheberrechte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen
                Dateien auf dieser Website, gehören ausschliesslich BY THE WAY - BURGER & GRILLHAUS
                oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher
                Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
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
