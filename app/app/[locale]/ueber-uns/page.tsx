import { Metadata } from 'next';
import { Navbar22 } from '@/components/navbar22';
import { Hero174 } from '@/components/hero174';
import { Feature60 } from '@/components/feature60';
import { Feature42 } from '@/components/feature42';
import { Feature102 } from '@/components/feature102';
import { Gallery26 } from '@/components/gallery26';
import { Stats19 } from '@/components/stats19';
import { Testimonial7 } from '@/components/testimonial7';
import { Hero123 } from '@/components/hero123';
import { Footer24 } from '@/components/footer24';

const BASE_URL = 'https://bytheway.ch';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Über uns - Grillhaus Steinmaur mit Leidenschaft für frische Burger & Balkan Küche',
    description: 'Willkommen bei BY THE WAY - mehr als nur ein Restaurant in Steinmaur. Wir sind ein Grillhaus mit Herz und Leidenschaft für erstklassige Burger und authentische Balkan Spezialitäten. Seit unserer Gründung verbinden wir amerikanische Burger-Kultur mit traditioneller Balkan Küche und schaffen einzigartige Geschmackserlebnisse. Unsere Mission: die besten Burger in Steinmaur zu servieren - mit frischen, regionalen Zutaten und kompromissloser Qualität.',
    alternates: {
      canonical: `${BASE_URL}/de/ueber-uns`,
    },
    openGraph: {
      title: 'Über uns - Grillhaus Steinmaur mit Leidenschaft für frische Burger & Balkan Küche',
      description: 'Willkommen bei BY THE WAY - mehr als nur ein Restaurant in Steinmaur. Wir sind ein Grillhaus mit Herz und Leidenschaft für erstklassige Burger und authentische Balkan Spezialitäten. Seit unserer Gründung verbinden wir amerikanische Burger-Kultur mit traditioneller Balkan Küche und schaffen einzigartige Geschmackserlebnisse. Unsere Mission: die besten Burger in Steinmaur zu servieren - mit frischen, regionalen Zutaten und kompromissloser Qualität.',
      url: `${BASE_URL}/de/ueber-uns`,
      siteName: 'BY THE WAY - BURGER & GRILLHAUS',
      locale: 'de_CH',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/og-about.jpg`,
          width: 1200,
          height: 630,
          alt: 'BY THE WAY Team - Über uns',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Über uns - Grillhaus Steinmaur mit Leidenschaft für frische Burger & Balkan Küche',
      description: 'Willkommen bei BY THE WAY - mehr als nur ein Restaurant in Steinmaur. Wir sind ein Grillhaus mit Herz und Leidenschaft für erstklassige Burger und authentische Balkan Spezialitäten. Seit unserer Gründung verbinden wir amerikanische Burger-Kultur mit traditioneller Balkan Küche und schaffen einzigartige Geschmackserlebnisse. Unsere Mission: die besten Burger in Steinmaur zu servieren - mit frischen, regionalen Zutaten und kompromissloser Qualität.',
      images: [`${BASE_URL}/og-about.jpg`],
    },
  };
}

export default function AboutPage() {
  return (
    <>
      <div className="w-full">
        <Navbar22 />
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full">
          <Hero174
            title="Über uns - BY THE WAY"
            description="Mehr als ein Restaurant. Wir sind ein Grillhaus mit Herz und Leidenschaft für erstklassige Burger und authentische Balkan Spezialitäten."
            primaryButtonText="Speisekarte ansehen"
            primaryButtonHref="/de/speisekarte"
            backgroundImage="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&q=80"
          />
        </div>
      </div>

      <div className="w-full flex justify-center bg-muted">
        <div className="w-full">
          <Feature60 />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full">
          <Feature42 />
        </div>
      </div>

      <div className="w-full flex justify-center bg-background">
        <div className="w-full">
          <Feature102 />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full">
          <Gallery26 />
        </div>
      </div>

      <div className="w-full flex justify-center bg-muted">
        <div className="w-full">
          <Stats19 />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full">
          <Testimonial7 />
        </div>
      </div>

      <div className="w-full flex justify-center bg-background">
        <div className="w-full">
          <Hero123 />
        </div>
      </div>

      <div className="w-full flex justify-center bg-foreground">
        <div className="w-full">
          <Footer24 />
        </div>
      </div>
    </>
  );
}
